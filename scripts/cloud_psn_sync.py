"""GitHub Actions runner. Only talks to the configured HTTPS site and Sony."""
import json
import os
import sys
from urllib.parse import urlsplit
import requests
from psnawp_api import PSNAWP

site=os.environ.get('SITE_URL','').rstrip('/')
secret=os.environ.get('PSN_SYNC_SECRET','')
url=urlsplit(site)
if url.scheme!='https' or not url.netloc or url.username or url.password or url.query or url.fragment or not secret:
    raise SystemExit('Configure HTTPS SITE_URL and PSN_SYNC_SECRET in GitHub Actions secrets.')
headers={'Authorization':'Bearer '+secret}
endpoint=site+'/api/internal/psn'
started=False
try:
    response=requests.get(endpoint,headers=headers,timeout=30);response.raise_for_status();config=response.json()
    if config.get('running'):
        print('Sync already running.');sys.exit(0)
    if not config.get('due') and os.environ.get('FORCE_SYNC')!='1':
        print('Weekly sync is not due.');sys.exit(0)
    if not config.get('token'): raise ValueError('missing PSN token')
    response=requests.post(endpoint,headers=headers,json={'state':'started'},timeout=30);response.raise_for_status();started=True
    client=PSNAWP(config['token'])
    stats=[{'title':g.name,'hours':round(g.play_duration.total_seconds()/3600,1),
        'date':g.last_played_date_time.strftime('%d.%m.%Y') if g.last_played_date_time else '',
        'image':g.image_url or ''} for g in client.me().title_stats()]
    # Keep editions together, and each Worker invocation below Free D1 query limits.
    import sys
    from pathlib import Path
    sys.path.insert(0,str(Path(__file__).resolve().parents[1]))
    from psn_sync import normalized, ignored
    groups={}
    for game in stats:
        if not ignored(game['title']): groups.setdefault(normalized(game['title']),[]).append(game)
    batches=[]; batch=[]
    for games in groups.values():
        if len(games)>10: raise ValueError('Too many editions for one title')
        if len(batch)+len(games)>10: batches.append(batch);batch=[]
        batch.extend(games)
    if batch: batches.append(batch)
    updated=added=0
    for batch in batches:
        response=requests.post(endpoint,headers=headers,json={'stats':batch},timeout=60);response.raise_for_status()
        result=response.json();updated+=result.get('updated',0);added+=result.get('added',0)
    response=requests.post(endpoint,headers=headers,json={'state':'completed'},timeout=30);response.raise_for_status()
    print('Sync completed. Matched:',updated,'Added:',added)
except Exception as exc:
    # Do not print HTTP bodies, tokens, profile details or exception messages.
    if started:
        try: requests.post(endpoint,headers=headers,json={'state':'failed'},timeout=30)
        except Exception: pass
    print('Sync failed:',type(exc).__name__,'. Check the owner panel and service configuration.')
    raise SystemExit(1)
