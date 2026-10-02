import io
import json
import os
import sys
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from werkzeug.security import generate_password_hash
TEMP=tempfile.TemporaryDirectory()
os.environ.update(DATA_DIR=TEMP.name, LOCAL_DEV='1', DISABLE_SCHEDULER='1', SECRET_KEY='test-'+('x'*60), ADMIN_PASSWORD_HASH=generate_password_hash('a-test-owner-password'))
sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
import app
import storage
import psn_sync
from PIL import Image


class WebsiteTests(unittest.TestCase):
    def setUp(self):
        self.client=app.app.test_client()
        with storage.connect() as db: db.execute('DELETE FROM login_attempts')
        self.origin={'Origin':'http://localhost'}
        self.payload={'title':'Тестовый фильм','category':'movies','rating':'8,5','year':'2014','date':'01.10.2026','image':'https://example.com/poster.jpg','comment':'Впечатления','status':'completed'}

    def login(self):
        r=self.client.post('/api/login',json={'password':'a-test-owner-password'},headers=self.origin)
        self.assertEqual(r.status_code,200)
        return {**self.origin,'X-CSRF-Token':r.json['csrf']}

    def test_import_and_public_assets(self):
        self.assertEqual(len(storage.collection()),531)
        for url in ['/','/admin','/assets/collection.js','/assets/admin.js','/assets/style.css']:
            r=self.client.get(url);self.assertEqual(r.status_code,200);self.assertIn('Content-Security-Policy',r.headers);r.close()

    def test_private_files_are_not_served(self):
        for url in ['/.env','/.git/config','/app.py','/storage.py','/.local/owner-access.txt','/assets/../.env','/assets/app.py','/psn_cache.json']:
            self.assertEqual(self.client.get(url).status_code,404,url)
        data=json.dumps(self.client.get('/api/collection').json)
        self.assertNotIn('NPSSO',data);self.assertNotIn('ADMIN_PASSWORD_HASH',data)

    def test_unauthorized_writes_and_services(self):
        for method,url in [('post','/api/items'),('put','/api/items/movies-1'),('delete','/api/items/movies-1'),('post','/api/settings'),('post','/api/upload'),('post','/api/psn/sync')]:
            self.assertEqual(getattr(self.client,method)(url,json=self.payload,headers=self.origin).status_code,401)
        for url in ['/api/session','/api/psn','/api/export','/api/posters?q=film']:
            self.assertEqual(self.client.get(url).status_code,401)

    def test_csrf_and_cross_origin(self):
        h=self.login()
        self.assertEqual(self.client.post('/api/items',json=self.payload,headers=self.origin).status_code,403)
        self.assertEqual(self.client.post('/api/items',json=self.payload,headers={**h,'Origin':'https://attacker.example'}).status_code,403)
        self.assertEqual(self.client.post('/api/login',json={'password':'a-test-owner-password'}).status_code,403)

    def test_crud_versions_and_logout(self):
        h=self.login();r=self.client.post('/api/items',json=self.payload,headers=h)
        self.assertEqual(r.status_code,201);item=r.json['item'];self.assertEqual(item['rating'],'8.5/10')
        self.assertTrue(any(x['id']==item['id'] for x in self.client.get('/api/collection').json['items']))
        updated={**self.payload,'title':'Изменённый фильм','version':1}
        r=self.client.put('/api/items/'+item['id'],json=updated,headers=h);self.assertEqual(r.status_code,200)
        self.assertEqual(self.client.put('/api/items/'+item['id'],json=updated,headers=h).status_code,409)
        self.assertEqual(self.client.delete('/api/items/'+item['id'],json={'version':1},headers=h).status_code,409)
        self.assertEqual(self.client.delete('/api/items/'+item['id'],json={'version':2},headers=h).status_code,200)
        self.assertEqual(self.client.post('/api/logout',json={},headers=h).status_code,200)
        self.assertEqual(self.client.post('/api/items',json=self.payload,headers=h).status_code,401)

    def test_validation(self):
        h=self.login()
        for change in [{'rating':'11'},{'rating':'NaN'},{'rating':'Infinity'},{'image':'javascript:alert(1)'},{'image':'http://example.com/x.jpg'},{'title':''},{'date':'31.02.2026'},{'category':'private'},{'year':'9999'},{'image':'https://user:secret@example.com/image'}]:
            self.assertEqual(self.client.post('/api/items',json={**self.payload,**change},headers=h).status_code,400,change)

    def test_login_rate_limit(self):
        for i in range(10): self.assertEqual(self.client.post('/api/login',json={'password':'wrong'},headers=self.origin).status_code,401)
        self.assertEqual(self.client.post('/api/login',json={'password':'wrong'},headers=self.origin).status_code,429)

    def test_real_image_upload_and_reject_html(self):
        h=self.login();stream=io.BytesIO();Image.new('RGB',(40,60),'red').save(stream,'PNG');stream.seek(0)
        r=self.client.post('/api/upload',data={'poster':(stream,'poster.png')},headers=h)
        self.assertEqual(r.status_code,200)
        downloaded=self.client.get(r.json['image']);self.assertEqual(downloaded.mimetype,'image/jpeg');downloaded.close()
        r=self.client.post('/api/upload',data={'poster':(io.BytesIO(b'<script>alert(1)</script>'),'poster.jpg')},headers=h)
        self.assertEqual(r.status_code,400)

    def test_settings_stay_private(self):
        h=self.login();r=self.client.post('/api/settings',json={'key':'TMDB_ACCESS_TOKEN','value':'test-private-key'},headers=h)
        self.assertEqual(r.status_code,200)
        self.assertNotIn('test-private-key',self.client.get('/api/collection').get_data(as_text=True))
        self.assertNotIn('test-private-key',self.client.get('/api/psn').get_data(as_text=True))

    def test_posters_mock_provider(self):
        self.login()
        with patch('posters.search',return_value=[{'title':'Интерстеллар','image':'https://example.com/a.jpg','year':'2014'}]):
            self.assertEqual(len(self.client.get('/api/posters?q=Интерстеллар').json['results']),1)


class PSNTests(unittest.TestCase):
    def setUp(self):
        self.saved=storage.collection()
        with storage.connect() as db:
            db.execute('DELETE FROM items');db.execute('DELETE FROM psn_baseline')
            db.execute('INSERT INTO items VALUES (?,?)',('g1',json.dumps({'id':'g1','category':'games','status':'completed','title':'Cyberpunk 2077','platform':'PC (Steam) + PS5 Pro','rating':'9/10','hours':'50 ч.','date':'25.09.2026','image':'https://example.com/a.jpg','version':1})))
            db.execute('INSERT INTO psn_baseline VALUES (?,?)',('Cyberpunk 2077',10))

    def tearDown(self):
        with storage.connect() as db:
            db.execute('DELETE FROM items')
            db.executemany('INSERT INTO items VALUES (?,?)',[(i['id'],json.dumps(i)) for i in self.saved])

    def test_delta_and_idempotence(self):
        stats=[{'title':'Cyberpunk 2077','hours':12,'date':'01.10.2026','image':''}]
        psn_sync.apply_stats(stats);first=storage.collection()[0]
        self.assertEqual(first['hours'],'52 ч.');self.assertEqual(first['rating'],'9/10')
        self.assertEqual(first['platform'],'PC (Steam) + PS5 Pro')
        psn_sync.apply_stats(stats);self.assertEqual(storage.collection()[0],first)

    def test_editions_match_without_substring_guessing(self):
        self.assertEqual(psn_sync.normalized("Marvel's Spider-Man Remastered"),psn_sync.normalized("Marvel's Spider-Man"))
        self.assertEqual(psn_sync.normalized("Dying Light 2: Stay Human"),psn_sync.normalized("Dying Light 2"))
        self.assertNotEqual(psn_sync.normalized("Red Dead Redemption 2"),psn_sync.normalized("Red Dead Redemption"))

    def test_similar_titles_do_not_merge(self):
        psn_sync.apply_stats([{'title':'Cyberpunk 2077 Phantom Liberty','hours':4,'date':'01.10.2026','image':''}])
        self.assertEqual(len(storage.collection()),2)
        self.assertEqual(next(i for i in storage.collection() if i['id']=='g1')['hours'],'50 ч.')

    def test_date_never_regresses_and_hours_reset(self):
        psn_sync.apply_stats([{'title':'Cyberpunk 2077','hours':8,'date':'01.09.2026','image':''}])
        item=storage.collection()[0];self.assertEqual(item['hours'],'50 ч.');self.assertEqual(item['date'],'25.09.2026')
        psn_sync.apply_stats([{'title':'Cyberpunk 2077','hours':12,'date':'01.10.2026','image':''}])
        self.assertEqual(storage.collection()[0]['hours'],'52 ч.')

    def test_failure_preserves_data_and_schedules_retry(self):
        before=storage.collection()
        with patch('psn_sync.fetch_stats',side_effect=RuntimeError('a secret that must not be logged')):
            psn_sync.LOCK.acquire();result=psn_sync.run_sync()
        self.assertIn('error',result);self.assertEqual(storage.collection(),before)
        self.assertNotIn('secret',storage.setting('psn_error'))
        self.assertTrue(storage.setting('psn_next_run'));self.assertFalse(psn_sync.LOCK.locked())

    def test_success_sets_weekly_schedule(self):
        with patch('psn_sync.fetch_stats',return_value=[]):
            psn_sync.LOCK.acquire();psn_sync.run_sync()
        from datetime import datetime
        last=datetime.fromisoformat(storage.setting('psn_last_success'));due=datetime.fromisoformat(storage.setting('psn_next_run'))
        self.assertAlmostEqual((due-last).total_seconds(),7*24*3600,delta=1)

if __name__=='__main__': unittest.main(verbosity=2)
