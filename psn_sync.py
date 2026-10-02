"""Weekly server job. No credentials, profile IDs or auth responses in public data."""
import hashlib
import json
import os
import re
import threading
import time
from datetime import datetime, timedelta, timezone
import storage

LOCK=threading.Lock()
CLIENT=None
CLIENT_TOKEN=None


def now(): return datetime.now(timezone.utc)
def stamp(value): return value.isoformat()
def get_token(): return storage.setting('PSN_NPSSO') or os.environ.get('PSN_NPSSO','')


def normalized(title):
    value=title.lower().replace('®','').replace('™','')
    value=value.replace('grand theft auto','gta')
    value=re.sub(r'\s*(?:\[|\()?\s*(?:playstation\s*[45]|ps4\s*&\s*ps5|ps[45])\s*(?:\]|\))?','',value)
    value=re.sub(r'\s+(?:enhanced|complete edition|definitive edition|special edition|director.s cut|remastered|stay human|ru)$','',value)
    return re.sub(r'[^\w]+','',value)


def ignored(title):
    return normalized(title) in {'appletv','callofduty','dyinglight','marathonserverslam'}


def fetch_stats():
    global CLIENT,CLIENT_TOKEN
    from psnawp_api import PSNAWP
    token=get_token()
    if not token: raise ValueError('missing token')
    if CLIENT is None or CLIENT_TOKEN!=token:
        CLIENT=PSNAWP(token);CLIENT_TOKEN=token
    # Fully consume the iterator BEFORE changing the database: partial fetches are never saved.
    return [{'title':g.name,'hours':round(g.play_duration.total_seconds()/3600,1),
        'date':g.last_played_date_time.strftime('%d.%m.%Y') if g.last_played_date_time else '',
        'image':g.image_url or ''} for g in CLIENT.me().title_stats() if not ignored(g.name)]


def backup():
    import sqlite3
    folder=storage.DATA_DIR/'backups';folder.mkdir(exist_ok=True)
    file=folder/(now().strftime('%Y%m%d-%H%M%S-%f')+'.sqlite3')
    with storage.connect() as source, sqlite3.connect(file, factory=storage.ClosingConnection) as target:
        source.backup(target)
    file.chmod(0o600)
    for old in sorted(folder.glob('*.sqlite3'))[:-7]: old.unlink()


def apply_stats(stats):
    groups={}
    for game in stats:
        groups.setdefault(normalized(game['title']),[]).append(game)
    updated=added=0
    with storage.connect() as db:
        db.execute('BEGIN IMMEDIATE')
        items=[json.loads(r['payload']) for r in db.execute('SELECT payload FROM items')]
        baseline={r['title']:r['hours'] for r in db.execute('SELECT title,hours FROM psn_baseline')}
        for key,games in groups.items():
            candidates=[i for i in items if i['category']=='games' and normalized(i['title'])==key]
            # Ambiguous matches are left alone; never guess by substring.
            if len(candidates)>1: continue
            if candidates:
                item=candidates[0]
                if item.get('status')=='wishlist': continue
                delta=sum(max(0,g['hours']-baseline.get(g['title'],g['hours'])) for g in games)
                old=json.dumps(item,sort_keys=True)
                hours=float(str(item.get('hours','0')).replace(' ч.','') or 0)
                item['hours']=f'{round(hours+delta,1):g} ч.'
                if not re.search(r'PS[45]|PlayStation',item.get('platform',''),re.I):
                    item['platform']=(item.get('platform','')+' + PlayStation').lstrip(' +')
                dates=[g['date'] for g in games if g['date']]+([item['date']] if item.get('date') else [])
                if dates: item['date']=max(dates,key=lambda d:datetime.strptime(d,'%d.%m.%Y'))
                if not item.get('image'): item['image']=games[0]['image']
                item['psn_linked']=True
                if json.dumps(item,sort_keys=True)!=old:
                    item['version']+=1;updated+=1
            else:
                game=games[0]
                dates=[g['date'] for g in games if g['date']]
                item={'id':'psn-'+hashlib.sha256(key.encode()).hexdigest()[:24],'title':re.sub('[®™]','',game['title']),
                    'category':'games','status':'completed','rating':'','year':'','platform':'PlayStation',
                    'hours':f"{sum(g['hours'] for g in games):g} ч.",'date':max(dates,key=lambda d:datetime.strptime(d,'%d.%m.%Y')) if dates else '',
                    'image':game['image'],'version':1,'psn_linked':True}
                items.append(item);added+=1
            db.execute('INSERT INTO items VALUES (?,?) ON CONFLICT(id) DO UPDATE SET payload=excluded.payload',(item['id'],json.dumps(item,ensure_ascii=False)))
            for game in games:
                db.execute('INSERT OR REPLACE INTO psn_baseline VALUES (?,?)',(game['title'],max(game['hours'],baseline.get(game['title'],0))))
    return {'updated':updated,'added':added}


def run_sync():
    try:
        storage.put_setting('psn_last_attempt',stamp(now()))
        stats=fetch_stats()
        backup()
        result=apply_stats(stats)
        storage.put_setting('psn_last_success',stamp(now()))
        storage.put_setting('psn_error','')
        storage.put_setting('psn_next_run',stamp(now()+timedelta(days=7)))
        return result
    except Exception as exc:
        # Never print exception messages: third-party HTTP exceptions can contain tokens.
        storage.put_setting('psn_error','Не удалось обновить PlayStation. Проверь токен и доступность PSN. Данные коллекции сохранены.')
        storage.put_setting('psn_next_run',stamp(now()+timedelta(hours=1)))
        return {'error':type(exc).__name__}
    finally:
        LOCK.release()


def start_sync():
    if not LOCK.acquire(blocking=False): return False
    threading.Thread(target=run_sync,daemon=True,name='psn-sync').start()
    return True


def scheduler():
    while True:
        due=storage.setting('psn_next_run')
        try: ready=not due or now()>=datetime.fromisoformat(due)
        except ValueError: ready=True
        if ready and get_token(): start_sync()
        time.sleep(60)


def start_scheduler():
    threading.Thread(target=scheduler,daemon=True,name='psn-scheduler').start()

if __name__=='__main__':
    # Import app for env loading and database initialization, with scheduler disabled.
    os.environ['DISABLE_SCHEDULER']='1'
    import app
    if LOCK.acquire(blocking=False):
        result=run_sync()
        print(json.dumps(result,ensure_ascii=False))
        raise SystemExit(1 if 'error' in result else 0)
