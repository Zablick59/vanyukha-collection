import functools
import hashlib
import io
import json
import os
import secrets
import threading
import time
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.parse import urlsplit

ROOT = Path(__file__).resolve().parent
# Minimal env loader: values are data, never shell commands. Host variables win.
if (ROOT / '.env').exists():
    for line in (ROOT / '.env').read_text().splitlines():
        if '=' in line and not line.lstrip().startswith('#'):
            key, value = line.split('=', 1)
            os.environ.setdefault(key.strip(), value.strip())

from flask import Flask, abort, jsonify, request, send_from_directory, session
from werkzeug.security import check_password_hash
from werkzeug.exceptions import HTTPException
import storage

LOCAL = os.environ.get('LOCAL_DEV') == '1'
ORIGIN = os.environ.get('PUBLIC_ORIGIN', '').rstrip('/')
SECRET = os.environ.get('SECRET_KEY', '')
PASSWORD_HASH = os.environ.get('ADMIN_PASSWORD_HASH', '')
if len(SECRET) < 32:
    raise RuntimeError('Set a random SECRET_KEY (at least 32 characters).')
if not LOCAL and (not ORIGIN.startswith('https://') or not PASSWORD_HASH):
    raise RuntimeError('Production requires HTTPS PUBLIC_ORIGIN and ADMIN_PASSWORD_HASH.')

app = Flask(__name__, static_folder=None)
app.config.update(SECRET_KEY=SECRET, MAX_CONTENT_LENGTH=8 * 1024 * 1024,
    SESSION_COOKIE_NAME='vanyukha_owner', SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SECURE=not LOCAL, SESSION_COOKIE_SAMESITE='Strict',
    PERMANENT_SESSION_LIFETIME=timedelta(hours=12))
storage.initialize()


@app.after_request
def headers(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['Referrer-Policy'] = 'no-referrer'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['Content-Security-Policy'] = "default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https: blob:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'"
    if not LOCAL:
        response.headers['Strict-Transport-Security'] = 'max-age=31536000'
    if request.path.startswith('/api/') or request.path.startswith('/admin'):
        response.headers['Cache-Control'] = 'no-store'
    return response


@app.errorhandler(Exception)
def error(exc):
    code = exc.code if isinstance(exc, HTTPException) else 500
    if code == 500:
        app.logger.error('Request failed: %s', type(exc).__name__)
    message = {400:'Проверь заполнение полей.',401:'Войди в панель управления.',
        403:'Запрос отклонён. Обнови страницу и войди снова.',404:'Не найдено.',
        409:'Запись уже изменена с другого устройства. Открой её заново.',
        413:'Файл слишком большой. Максимум 8 МБ.',429:'Слишком много попыток. Подожди 15 минут.',
        500:'Ошибка сервера. Попробуй ещё раз.',502:'Сервис временно недоступен.'}.get(code,'Запрос не выполнен.')
    return jsonify(error=message), code


@app.before_request
def protect_writes():
    if request.method in ('POST','PUT','DELETE','PATCH'):
        origin = request.headers.get('Origin', '')
        allowed = ORIGIN if not LOCAL else request.host_url.rstrip('/')
        if origin != allowed or request.headers.get('Sec-Fetch-Site') == 'cross-site':
            abort(403)


def owner(fn):
    @functools.wraps(fn)
    def wrapped(*args, **kwargs):
        if not session.get('owner') or session.get('auth_epoch') != hashlib.sha256(PASSWORD_HASH.encode()).hexdigest():
            abort(401)
        if request.method != 'GET':
            token = request.headers.get('X-CSRF-Token', '')
            if not token or not secrets.compare_digest(token, session.get('csrf','')):
                abort(403)
        return fn(*args, **kwargs)
    return wrapped


@app.get('/')
def home(): return send_from_directory(ROOT / 'public','index.html')


@app.get('/admin')
@app.get('/admin.html')
def admin(): return send_from_directory(ROOT / 'public','admin.html')


@app.get('/assets/<path:name>')
def assets(name): return send_from_directory(ROOT / 'public',name)


@app.get('/media/<name>')
def media(name): return send_from_directory(storage.DATA_DIR / 'uploads',name)


@app.get('/api/health')
def health(): return jsonify(ok=True)


@app.get('/api/collection')
def get_collection(): return jsonify(items=storage.collection())


@app.post('/api/login')
def login():
    now = time.time()
    ip = request.remote_addr or 'unknown'
    with storage.connect() as db:
        db.execute('BEGIN IMMEDIATE')
        db.execute('DELETE FROM login_attempts WHERE attempted < ?', (now-900,))
        if db.execute('SELECT COUNT(*) FROM login_attempts WHERE ip=?', (ip,)).fetchone()[0] >= 10:
            abort(429)
        db.execute('INSERT INTO login_attempts VALUES (?,?)', (ip, now))
    payload = request.get_json(silent=True) or {}
    password = payload.get('password','')
    if not isinstance(password,str) or len(password)>256 or not PASSWORD_HASH or not check_password_hash(PASSWORD_HASH, password):
        return jsonify(error='Неверный пароль.'),401
    with storage.connect() as db:
        db.execute('DELETE FROM login_attempts WHERE ip=?', (ip,))
    session.clear()
    session.update(owner=True,csrf=secrets.token_urlsafe(32),auth_epoch=hashlib.sha256(PASSWORD_HASH.encode()).hexdigest())
    session.permanent = True
    return jsonify(csrf=session['csrf'])


@app.get('/api/session')
@owner
def current_session(): return jsonify(csrf=session['csrf'])


@app.post('/api/logout')
@owner
def logout():
    session.clear()
    return jsonify(ok=True)


def text(value, limit):
    if not isinstance(value,str) or len(value)>limit: abort(400)
    return value.strip()


def validate(payload):
    if not isinstance(payload,dict): abort(400)
    result = {k:text(payload.get(k,''),n) for k,n in [('title',200),('year',4),('date',10),('comment',2000),('platform',100),('image',2000)]}
    if not result['title']: abort(400)
    if result['year'] and (not result['year'].isdigit() or not 1800 <= int(result['year']) <= 2200): abort(400)
    if result['date']:
        try: datetime.strptime(result['date'],'%d.%m.%Y')
        except ValueError: abort(400)
    image=result['image']
    if image:
        url=urlsplit(image)
        if not (url.scheme=='https' and url.netloc and not url.username and not url.password) and not (image.startswith('/media/') and '/' not in image[7:]): abort(400)
    result['category']=payload.get('category')
    result['status']=payload.get('status','completed')
    if result['category'] not in ('movies','games') or result['status'] not in ('completed','wishlist'): abort(400)
    for field,limit in [('rating',10),('hours',1000000)]:
        raw=str(payload.get(field,'')).replace(',','.').replace('/10','').replace(' ч.','').strip()
        try:
            number=float(raw) if raw else None
            if number is not None and not 0<=number<=limit: abort(400)
        except ValueError: abort(400)
        result[field]=(f'{number:g}/10' if field=='rating' else f'{number:g} ч.') if number is not None else ''
    if result['category']=='movies':
        result.pop('hours');result.pop('platform')
    return result


@app.post('/api/items')
@owner
def add():
    item=validate(request.get_json(silent=True))
    item.update(id=secrets.token_hex(16),version=1)
    with storage.connect() as db:
        db.execute('INSERT INTO items VALUES (?,?)',(item['id'],json.dumps(item,ensure_ascii=False)))
    return jsonify(item=item),201


@app.put('/api/items/<item_id>')
@owner
def edit(item_id):
    payload=request.get_json(silent=True)
    item=validate(payload)
    with storage.connect() as db:
        db.execute('BEGIN IMMEDIATE')
        row=db.execute('SELECT payload FROM items WHERE id=?',(item_id,)).fetchone()
        if not row: abort(404)
        old=json.loads(row['payload'])
        if payload.get('version')!=old['version']: abort(409)
        # Keep the PSN identity and split hours when an owner changes their rating.
        item.update({k:v for k,v in old.items() if k.startswith('psn_')})
        item.update(id=item_id,version=old['version']+1)
        db.execute('UPDATE items SET payload=? WHERE id=?',(json.dumps(item,ensure_ascii=False),item_id))
    return jsonify(item=item)


@app.delete('/api/items/<item_id>')
@owner
def delete(item_id):
    payload=request.get_json(silent=True) or {}
    with storage.connect() as db:
        db.execute('BEGIN IMMEDIATE')
        row=db.execute('SELECT payload FROM items WHERE id=?',(item_id,)).fetchone()
        if not row: abort(404)
        if payload.get('version')!=json.loads(row['payload'])['version']: abort(409)
        db.execute('DELETE FROM items WHERE id=?',(item_id,))
    return jsonify(ok=True)


@app.post('/api/upload')
@owner
def upload():
    from PIL import Image, ImageOps
    incoming=request.files.get('poster')
    if not incoming: abort(400)
    try:
        image=Image.open(incoming.stream)
        if image.format not in ('JPEG','PNG','WEBP') or image.width*image.height>20000000: abort(400)
        image=ImageOps.exif_transpose(image).convert('RGB')
        image.thumbnail((1200,1800))
        buffer=io.BytesIO();image.save(buffer,'JPEG',quality=88)
    except HTTPException: raise
    except Exception: abort(400)
    folder=storage.DATA_DIR/'uploads';folder.mkdir(exist_ok=True)
    name=secrets.token_hex(16)+'.jpg'
    (folder/name).write_bytes(buffer.getvalue())
    return jsonify(image='/media/'+name)


@app.get('/api/posters')
@owner
def posters():
    from posters import search
    query=text(request.args.get('q',''),200)
    if len(query)<2: abort(400)
    try: return jsonify(results=search(query))
    except Exception: abort(502)


@app.get('/api/psn')
@owner
def psn_status():
    import psn_sync
    return jsonify(last_success=storage.setting('psn_last_success'),last_attempt=storage.setting('psn_last_attempt'),
        error=storage.setting('psn_error'),next_run=storage.setting('psn_next_run'),
        configured=bool(psn_sync.get_token()),running=psn_sync.LOCK.locked())


@app.post('/api/psn/sync')
@owner
def sync_now():
    import psn_sync
    if not psn_sync.get_token(): return jsonify(error='Сначала сохрани токен PlayStation.'),400
    if not psn_sync.start_sync(): return jsonify(error='Обновление уже выполняется.'),409
    return jsonify(ok=True),202


@app.post('/api/settings')
@owner
def settings():
    data=request.get_json(silent=True) or {}
    key=data.get('key')
    if key not in ('PSN_NPSSO','TMDB_ACCESS_TOKEN'): abort(400)
    value=text(data.get('value',''),2000)
    if key=='PSN_NPSSO' and (len(value)!=64 or not value.isalnum()): abort(400)
    storage.put_setting(key,value)
    return jsonify(ok=True)


@app.get('/api/export')
@owner
def export():
    response=jsonify(items=storage.collection())
    response.headers['Content-Disposition']='attachment; filename=collection.json'
    return response


# Exactly one Gunicorn worker; the scheduler sleeps without blocking requests.
if os.environ.get('DISABLE_SCHEDULER')!='1':
    import psn_sync
    psn_sync.start_scheduler()

if __name__=='__main__':
    app.run(host='127.0.0.1',port=int(os.environ.get('PORT','8000')),debug=False)
