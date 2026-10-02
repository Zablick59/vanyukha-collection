"""Server-side search; provider credentials never reach the browser."""
import json
import os
import ssl
import certifi
from urllib.parse import urlencode
from urllib.request import Request, urlopen
import storage


def fetch(url, headers=None):
    request=Request(url,headers={'User-Agent':'VanyukhaCollection/2.0',**(headers or {})})
    with urlopen(request,timeout=12,context=ssl.create_default_context(cafile=certifi.where())) as response:
        return json.load(response)


def search(query):
    token=storage.setting('TMDB_ACCESS_TOKEN') or os.environ.get('TMDB_ACCESS_TOKEN','')
    if token:
        data=fetch('https://api.themoviedb.org/3/search/multi?'+urlencode({'query':query,'language':'ru-RU','include_adult':'false'}),{'Authorization':'Bearer '+token})
        return [{'title':r.get('title') or r.get('name'),'year':(r.get('release_date') or r.get('first_air_date') or '')[:4],
            'image':'https://image.tmdb.org/t/p/w500'+r['poster_path'],'source':'TMDB',
            'url':f"https://www.themoviedb.org/{r['media_type']}/{r['id']}"}
            for r in data.get('results',[]) if r.get('poster_path') and r.get('media_type') in ('movie','tv')][:8]
    # Wikimedia is available without an API key. Results are chosen by the owner.
    data=fetch('https://ru.wikipedia.org/w/api.php?'+urlencode({'action':'query','format':'json','formatversion':2,
        'generator':'search','gsrsearch':'intitle:"'+query.replace('"','')+'"','gsrlimit':8,'prop':'pageimages|info','piprop':'thumbnail',
        'pithumbsize':600,'pilicense':'any','inprop':'url'}))
    return [{'title':p['title'],'year':'','image':p['thumbnail']['source'],'source':'Wikipedia',
        'url':p.get('fullurl','https://ru.wikipedia.org')} for p in data.get('query',{}).get('pages',[]) if p.get('thumbnail')]
