import {sha,randomToken,equal,verifyPassword,encrypt,decrypt} from './security.js';
import {HttpError,requireCondition,text,validate,planStats,imageURL,dateValue} from './validation.js';

const cookieName='vanyukha_owner';
const now=()=>Math.floor(Date.now()/1000);
const json=(value,status=200,headers={})=>new Response(JSON.stringify(value),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store',...headers}});
async function setting(env,key,fallback=''){const row=await env.DB.prepare('SELECT value FROM settings WHERE key=?').bind(key).first();return row?.value??fallback;}
function setStatement(env,key,value){return env.DB.prepare('INSERT INTO settings VALUES (?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value').bind(key,String(value));}
async function set(env,key,value){await setStatement(env,key,value).run();}
async function providerSecret(env,key){const stored=await setting(env,key);return stored?decrypt(stored,env.APP_SECRET):(env[key]||'');}
async function collection(env){const {results}=await env.DB.prepare('SELECT payload,version FROM items ORDER BY rowid').all();return results.map(r=>({...JSON.parse(r.payload),version:r.version}));}
async function body(request){const raw=await request.text();requireCondition(raw.length<=1024*1024,413,'Запрос слишком большой.');try{const data=JSON.parse(raw);requireCondition(data&&typeof data==='object'&&!Array.isArray(data));return data;}catch(e){if(e instanceof HttpError)throw e;throw new HttpError(400,'Проверь заполнение полей.');}}
function secureCookie(request,token,maxAge=43200){const local=['127.0.0.1','localhost'].includes(new URL(request.url).hostname);return `${cookieName}=${token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${local?'':'; Secure'}`;}
async function owner(request,env){const token=request.headers.get('Cookie')?.split(';').map(v=>v.trim()).find(v=>v.startsWith(cookieName+'='))?.slice(cookieName.length+1)||'';requireCondition(/^[a-f0-9]{64}$/.test(token),401,'Войди в панель управления.');const session=await env.DB.prepare('SELECT * FROM sessions WHERE token_hash=? AND expires>?').bind(await sha(token),now()).first();requireCondition(session&&session.epoch===await sha(env.OWNER_PASSWORD_HASH),401,'Войди в панель управления.');if(request.method!=='GET')requireCondition(equal(session.csrf,request.headers.get('X-CSRF-Token')),403,'Обнови страницу и войди снова.');return session;}
async function syncOwner(request,env){requireCondition(env.PSN_SYNC_SECRET&&equal(request.headers.get('Authorization'),'Bearer '+env.PSN_SYNC_SECRET),401,'Доступ запрещён.');}
function protectOrigin(request){if(['GET','HEAD','OPTIONS'].includes(request.method))return;const origin=request.headers.get('Origin');requireCondition(origin===new URL(request.url).origin&&request.headers.get('Sec-Fetch-Site')!=='cross-site',403,'Запрос отклонён.');}

async function posters(request,env){const q=text(new URL(request.url).searchParams.get('q')||'',200);requireCondition(q.length>=2);const token=await providerSecret(env,'TMDB_ACCESS_TOKEN');let url,headers={};if(token){url='https://api.themoviedb.org/3/search/multi?'+new URLSearchParams({query:q,language:'ru-RU',include_adult:'false'});headers.Authorization='Bearer '+token;}else{url='https://ru.wikipedia.org/w/api.php?'+new URLSearchParams({action:'query',format:'json',formatversion:'2',generator:'search',gsrsearch:'intitle:"'+q.replaceAll('"','')+'"',gsrlimit:'8',prop:'pageimages|info',piprop:'thumbnail',pithumbsize:'600',pilicense:'any',inprop:'url'});}
 const response=await fetch(url,{headers:{'User-Agent':'VanyukhaCollection/2.0',...headers},signal:AbortSignal.timeout(12000)});requireCondition(response.ok,502,'Сервис постеров временно недоступен.');const data=await response.json();const results=token?(data.results||[]).filter(r=>r.poster_path&&['movie','tv'].includes(r.media_type)).slice(0,8).map(r=>({title:r.title||r.name,year:(r.release_date||r.first_air_date||'').slice(0,4),image:'https://image.tmdb.org/t/p/w500'+r.poster_path,source:'TMDB',url:`https://www.themoviedb.org/${r.media_type}/${r.id}`})):Object.values(data.query?.pages||[]).filter(p=>p.thumbnail&&imageURL(p.thumbnail.source)).map(p=>({title:p.title,year:'',image:p.thumbnail.source,source:'Wikipedia',url:p.fullurl}));return json({results});}

async function applyPSN(env,stats){requireCondition(Array.isArray(stats)&&stats.length<=10);const items=await collection(env);const {results}=await env.DB.prepare('SELECT title,hours FROM psn_baseline').all();const baseline=Object.fromEntries(results.map(r=>[r.title,r.hours]));const plans=planStats(items,stats,baseline);let updated=0,added=0;
 // One atomic batch: compute deltas from the CURRENT baseline inside SQL, preserve owner edits.
 const statements=[];
 for(const plan of plans){const {item,games,date}=plan;let id=item?.id;
  if(item){
   const expressions=games.map(()=>"max(0, ? - coalesce((SELECT hours FROM psn_baseline WHERE title=?), ?))").join('+');
   const hoursArgs=games.flatMap(g=>[g.hours,g.title,g.hours]);
   const dateISO=dateValue(date);
   const expression=`json_set(payload,'$.hours',printf('%g ч.',round(CAST(replace(coalesce(json_extract(payload,'$.hours'),'0'),' ч.','') AS REAL)+(${expressions}),1)),'$.platform',CASE WHEN lower(coalesce(json_extract(payload,'$.platform'),'')) LIKE '%ps4%' OR lower(coalesce(json_extract(payload,'$.platform'),'')) LIKE '%ps5%' OR lower(coalesce(json_extract(payload,'$.platform'),'')) LIKE '%playstation%' THEN json_extract(payload,'$.platform') ELSE trim(coalesce(json_extract(payload,'$.platform'),'') || ' + PlayStation',' +') END,'$.date',CASE WHEN ? >= substr(coalesce(json_extract(payload,'$.date'),''),7,4)||'-'||substr(coalesce(json_extract(payload,'$.date'),''),4,2)||'-'||substr(coalesce(json_extract(payload,'$.date'),''),1,2) THEN ? ELSE coalesce(json_extract(payload,'$.date'),'') END,'$.psn_linked',json('true'))`;
   const args=[...hoursArgs,dateISO,date];
   statements.push(env.DB.prepare(`UPDATE items SET payload=${expression}, version=version+1 WHERE id=? AND payload!=${expression}`).bind(...args,id,...args));updated++;
  }else{
   id='psn-'+(await sha(plan.key)).slice(0,24);
   const first=games[0];const payload={id,title:first.title.replace(/[®™]/g,''),category:'games',status:'completed',rating:'',year:'',platform:'PlayStation',hours:games.reduce((n,g)=>n+g.hours,0)+' ч.',date,image:first.image,psn_linked:true};
   statements.push(env.DB.prepare('INSERT INTO items VALUES (?,?,1) ON CONFLICT(id) DO NOTHING').bind(id,JSON.stringify(payload)));added++;
  }
  for(const g of games)statements.push(env.DB.prepare('INSERT INTO psn_baseline VALUES (?,?) ON CONFLICT(title) DO UPDATE SET hours=max(hours,excluded.hours)').bind(g.title,g.hours));
 }

 // D1 batch is transactional; an incomplete/failed batch cannot advance baselines.
 await env.DB.batch(statements);return {updated,added};
}

async function route(request,env){const url=new URL(request.url),path=url.pathname,method=request.method;
 if(path.startsWith('/api/internal/')){
  await syncOwner(request,env);
  if(path==='/api/internal/psn'&&method==='GET'){const token=await providerSecret(env,'PSN_NPSSO');const due=await setting(env,'psn_next_run');return json({token,due:!due||Date.now()>=Date.parse(due)||await setting(env,'psn_requested')==='1',running:Number(await setting(env,'psn_running_until','0'))>now()});}
  if(path==='/api/internal/psn'&&method==='POST'){const payload=await body(request);if(payload.state==='started'){const until=now()+900;const result=await env.DB.prepare("INSERT INTO settings VALUES ('psn_running_until',?) ON CONFLICT(key) DO UPDATE SET value=excluded.value WHERE CAST(value AS INTEGER)<=?").bind(String(until),now()).run();requireCondition(result.meta.changes>0,409,'Обновление уже выполняется.');await set(env,'psn_last_attempt',new Date().toISOString());return json({ok:true});}
   if(payload.state==='failed'){await env.DB.batch([setStatement(env,'psn_error','Не удалось обновить PlayStation. Проверь токен в настройках и журнал GitHub Actions.'),setStatement(env,'psn_running_until','0')]);return json({ok:true});}
   if(payload.state==='completed'){const timestamp=new Date().toISOString();await env.DB.batch([setStatement(env,'psn_last_success',timestamp),setStatement(env,'psn_next_run',new Date(Date.now()+7*86400000).toISOString()),setStatement(env,'psn_error',''),setStatement(env,'psn_requested','0'),setStatement(env,'psn_running_until','0')]);return json({ok:true});}
   requireCondition(Number(await setting(env,'psn_running_until','0'))>now(),409,'Сначала запусти обновление.');return json(await applyPSN(env,payload.stats));}
  throw new HttpError(404,'Не найдено.');
 }
 protectOrigin(request);
 if(path==='/api/health')return json({ok:true});
 if(path==='/api/collection'&&method==='GET')return json({items:await collection(env)});
 if(path==='/api/login'&&method==='POST'){
  requireCondition(env.OWNER_PASSWORD_HASH&&env.APP_SECRET,503,'Вход владельца ещё не настроен.');const ip=request.headers.get('CF-Connecting-IP')||'local';const bucket=await sha(env.APP_SECRET+ip+Math.floor(now()/900));const attempts=await env.DB.prepare('INSERT INTO login_limits VALUES (?,1,?) ON CONFLICT(bucket) DO UPDATE SET attempts=attempts+1 RETURNING attempts').bind(bucket,now()+900).first();requireCondition(attempts.attempts<=10,429,'Слишком много попыток. Подожди 15 минут.');
  const payload=await body(request);requireCondition(await verifyPassword(payload.password,env.OWNER_PASSWORD_HASH),401,'Неверный пароль.');const token=randomToken(),csrf=randomToken();await env.DB.batch([env.DB.prepare('DELETE FROM sessions WHERE expires<=?').bind(now()),env.DB.prepare('DELETE FROM login_limits WHERE expires<=?').bind(now()),env.DB.prepare('INSERT INTO sessions VALUES (?,?,?,?)').bind(await sha(token),csrf,now()+43200,await sha(env.OWNER_PASSWORD_HASH))]);return json({csrf},200,{'Set-Cookie':secureCookie(request,token)});
 }
 if(path==='/api/session'&&method==='GET'){const session=await owner(request,env);return json({csrf:session.csrf});}
 if(path==='/api/logout'&&method==='POST'){const session=await owner(request,env);await env.DB.prepare('DELETE FROM sessions WHERE token_hash=?').bind(session.token_hash).run();return json({ok:true},200,{'Set-Cookie':secureCookie(request,'',0)});}
 if(path==='/api/items'&&method==='POST'){await owner(request,env);const item=validate(await body(request));item.id=randomToken().slice(0,32);await env.DB.prepare('INSERT INTO items VALUES (?,?,1)').bind(item.id,JSON.stringify(item)).run();return json({item:{...item,version:1}},201);}
 if(/^\/api\/items\/[a-zA-Z0-9-]+$/.test(path)&&['PUT','DELETE'].includes(method)){await owner(request,env);const id=path.split('/').at(-1),payload=await body(request);requireCondition(Number.isInteger(payload.version)&&payload.version>0);const old=await env.DB.prepare('SELECT payload,version FROM items WHERE id=?').bind(id).first();requireCondition(old,404,'Не найдено.');requireCondition(old.version===payload.version,409,'Запись изменена с другого устройства. Открой её заново.');
  if(method==='DELETE'){const r=await env.DB.prepare('DELETE FROM items WHERE id=? AND version=?').bind(id,payload.version).run();requireCondition(r.meta.changes===1,409,'Запись уже изменена.');return json({ok:true});}
  const item=validate(payload);const prior=JSON.parse(old.payload);if(prior.psn_linked)item.psn_linked=true;item.id=id;const r=await env.DB.prepare('UPDATE items SET payload=?,version=version+1 WHERE id=? AND version=?').bind(JSON.stringify(item),id,payload.version).run();requireCondition(r.meta.changes===1,409,'Запись уже изменена.');return json({item:{...item,version:payload.version+1}});
 }
 if(path==='/api/upload'&&method==='POST'){await owner(request,env);requireCondition(Number(request.headers.get('Content-Length')||0)<=600000,413,'Постер слишком большой.');const form=await request.formData(),file=form.get('poster');requireCondition(file&&file.size>0&&file.size<=512000,413,'Постер должен быть меньше 500 КБ.');const data=await file.arrayBuffer(),bytes=new Uint8Array(data);requireCondition(bytes[0]===255&&bytes[1]===216&&bytes[2]===255,400,'Нужна картинка JPEG.');const id=randomToken().slice(0,32)+'.jpg';await env.DB.prepare('INSERT INTO posters VALUES (?,?,?)').bind(id,data,'image/jpeg').run();return json({image:'/media/'+id});}
 if(/^\/media\/[a-f0-9]+\.jpg$/.test(path)&&method==='GET'){const image=await env.DB.prepare('SELECT data,mime FROM posters WHERE id=?').bind(path.split('/').at(-1)).first();requireCondition(image,404,'Не найдено.');return new Response(Array.isArray(image.data)?new Uint8Array(image.data):image.data,{headers:{'Content-Type':image.mime,'Cache-Control':'public, max-age=31536000, immutable'}});}
 if(path==='/api/posters'&&method==='GET'){await owner(request,env);return posters(request,env);}
 if(path==='/api/settings'&&method==='POST'){await owner(request,env);const payload=await body(request);requireCondition(['PSN_NPSSO','TMDB_ACCESS_TOKEN'].includes(payload.key));const value=text(payload.value,2000);if(payload.key==='PSN_NPSSO')requireCondition(/^[a-zA-Z0-9]{64}$/.test(value));await set(env,payload.key,await encrypt(value,env.APP_SECRET));return json({ok:true});}
 if(path==='/api/psn'&&method==='GET'){await owner(request,env);const keys=['psn_last_success','psn_last_attempt','psn_next_run','psn_error','psn_running_until'];const values=await Promise.all(keys.map(k=>setting(env,k)));return json({last_success:values[0],last_attempt:values[1],next_run:values[2],error:values[3],running:Number(values[4])>now(),configured:!!(await providerSecret(env,'PSN_NPSSO')),mode:'cloud',actions_url:'https://github.com/Zablick59/vanyukha-collection/actions/workflows/psn-sync.yml'});}
 if(path==='/api/psn/sync'&&method==='POST'){await owner(request,env);requireCondition(await providerSecret(env,'PSN_NPSSO'),400,'Сначала сохрани токен PlayStation.');await set(env,'psn_requested','1');return json({ok:true,message:'Обновление запрошено. Проверка очереди — ежедневно. Для немедленного запуска нажми Run workflow в GitHub Actions.'},202);}
 if(path==='/api/export'&&method==='GET'){await owner(request,env);return json({items:await collection(env)},200,{'Content-Disposition':'attachment; filename=collection.json'});}
 if(path.startsWith('/api/'))throw new HttpError(404,'Не найдено.');
 if(path==='/'||path==='/admin'||path==='/admin.html'){const assetURL=new URL(request.url);assetURL.pathname=path==='/'?'/index.html':'/admin.html';return env.ASSETS.fetch(new Request(assetURL,request));}
 return env.ASSETS.fetch(request);
}

export default {async fetch(request,env){let response;try{response=await route(request,env);}catch(e){response=json({error:e instanceof HttpError?e.message:'Ошибка сервера. Попробуй ещё раз.'},e.status||500);}
 const out=new Response(response.body,response);out.headers.set('X-Content-Type-Options','nosniff');out.headers.set('Referrer-Policy','no-referrer');out.headers.set('X-Frame-Options','DENY');out.headers.set('Content-Security-Policy',"default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https: blob:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'");if(new URL(request.url).protocol==='https:')out.headers.set('Strict-Transport-Security','max-age=31536000');return out;}};
