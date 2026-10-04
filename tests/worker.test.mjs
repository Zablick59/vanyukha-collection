import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {DatabaseSync} from 'node:sqlite';
import worker from '../cloudflare/worker.js';
import {passwordHash,encrypt,decrypt,sha} from '../cloudflare/security.js';
import {normalized,validate,planStats} from '../cloudflare/validation.js';

class D1 {
 constructor(){this.db=new DatabaseSync(':memory:');this.db.exec(fs.readFileSync(new URL('../cloudflare/schema.sql',import.meta.url),'utf8'));this.count=0;}
 prepare(sql){const db=this;return {args:[],bind(...args){this.args=args.map(v=>v instanceof ArrayBuffer?new Uint8Array(v):v);return this;},async first(){db.count++;return db.db.prepare(sql).get(...this.args)||null;},async all(){db.count++;return {results:db.db.prepare(sql).all(...this.args)};},async run(){db.count++;const r=db.db.prepare(sql).run(...this.args);return {meta:{changes:Number(r.changes)}};}};}
 async batch(statements){this.db.exec('BEGIN');try{const r=[];for(const s of statements)r.push(await s.run());this.db.exec('COMMIT');return r;}catch(e){this.db.exec('ROLLBACK');throw e;}}
}
const password='a-strong-test-password-2026';
const hash=await passwordHash(password);
async function fixture(){const DB=new D1();const env={DB,APP_SECRET:'test-secret-'+('a'.repeat(64)),OWNER_PASSWORD_HASH:hash,PSN_SYNC_SECRET:'runner-private-secret',ASSETS:{fetch:async request=>new Response('asset:'+new URL(request.url).pathname)}};let cookie='',csrf='';return {env,async call(path,method='GET',data,extra={}){const headers={...extra};if(cookie)headers.Cookie=cookie;if(method!=='GET'){headers.Origin='https://test.example';if(csrf)headers['X-CSRF-Token']=csrf;headers['Content-Type']='application/json';}const response=await worker.fetch(new Request('https://test.example'+path,{method,headers,body:data===undefined?undefined:JSON.stringify(data)}),env);const set=response.headers.get('Set-Cookie');if(set)cookie=set.split(';')[0];let json;try{json=await response.clone().json();}catch{}if(path==='/api/login'&&response.ok)csrf=json.csrf;return {status:response.status,json,response};},async login(){const r=await this.call('/api/login','POST',{password});assert.equal(r.status,200);return r;}};}
const item={title:'Интерстеллар',category:'movies',rating:'8,5',year:'2014',date:'01.10.2026',image:'https://example.com/poster.jpg',status:'completed',comment:'Хороший фильм'};

test('public collection, private routes, and protected static mapping',async()=>{const f=await fixture();assert.equal((await f.call('/api/collection')).status,200);assert.equal((await f.call('/api/session')).status,401);assert.equal((await f.call('/api/psn')).status,401);assert.equal((await f.call('/api/items','POST',item)).status,401);assert.equal((await f.call('/api/internal/psn')).status,401);assert.equal(await (await f.call('/admin')).response.text(),'asset:/admin.html');assert.equal(await (await f.call('/')).response.text(),'asset:/index.html');});
test('cookie login, CRUD, concurrent version conflict, server logout',async()=>{const f=await fixture();const login=await f.login();assert.match(login.response.headers.get('Set-Cookie'),/Secure/);assert.match(login.response.headers.get('Set-Cookie'),/HttpOnly/);const created=await f.call('/api/items','POST',item);assert.equal(created.status,201);assert.equal(created.json.item.rating,'8.5/10');const id=created.json.item.id;assert.equal((await f.call('/api/collection')).json.items.length,1);assert.equal((await f.call('/api/items/'+id,'PUT',{...item,rating:'9',version:1})).status,200);assert.equal((await f.call('/api/items/'+id,'PUT',{...item,version:1})).status,409);assert.equal((await f.call('/api/items/'+id,'DELETE',{version:1})).status,409);assert.equal((await f.call('/api/items/'+id,'DELETE',{version:2})).status,200);await f.call('/api/logout','POST',{});assert.equal((await f.call('/api/session')).status,401);});
test('cross-origin and CSRF blocks',async()=>{const f=await fixture();const login=await f.login();const cookie=login.response.headers.get('Set-Cookie').split(';')[0];let r=await worker.fetch(new Request('https://test.example/api/items',{method:'POST',headers:{Cookie:cookie,Origin:'https://attacker.example','X-CSRF-Token':login.json.csrf},body:JSON.stringify(item)}),f.env);assert.equal(r.status,403);r=await worker.fetch(new Request('https://test.example/api/items',{method:'POST',headers:{Cookie:cookie,Origin:'https://test.example'},body:JSON.stringify(item)}),f.env);assert.equal(r.status,403);});
test('login brute-force limit persists in database',async()=>{const f=await fixture();for(let i=0;i<10;i++)assert.equal((await f.call('/api/login','POST',{password:'wrong'})).status,401);assert.equal((await f.call('/api/login','POST',{password:'wrong'})).status,429);});
test('remembered login survives reopening, renews for 90 days, and logout revokes it',async()=>{
 const f=await fixture();const login=await f.login();const setCookie=login.response.headers.get('Set-Cookie');
 assert.match(setCookie,/Max-Age=7776000/);assert.match(setCookie,/Expires=/);assert.match(setCookie,/SameSite=Strict/);
 const cookie=setCookie.split(';')[0],token=cookie.split('=')[1];const tokenHash=await sha(token);
 const time=Math.floor(Date.now()/1000);const stored=f.env.DB.db.prepare('SELECT * FROM sessions WHERE token_hash=?').get(tokenHash);
 assert.ok(stored.expires>=time+7775999);assert.notEqual(stored.token_hash,token);
 // An existing short session also gets extended when the admin is reopened.
 f.env.DB.db.prepare('UPDATE sessions SET expires=? WHERE token_hash=?').run(time+60,tokenHash);
 const reopened=await worker.fetch(new Request('https://test.example/api/session',{headers:{Cookie:cookie}}),f.env);
 assert.equal(reopened.status,200);assert.equal((await reopened.json()).csrf,login.json.csrf);
 assert.match(reopened.headers.get('Set-Cookie'),/Max-Age=7776000/);assert.equal(reopened.headers.get('Cache-Control'),'no-store');
 assert.ok(f.env.DB.db.prepare('SELECT expires FROM sessions WHERE token_hash=?').get(tokenHash).expires>=time+7775999);
 await f.call('/api/logout','POST',{});
 assert.equal((await worker.fetch(new Request('https://test.example/api/session',{headers:{Cookie:cookie}}),f.env)).status,401);
});
test('expired and password-revoked sessions cannot be renewed',async()=>{
 const f=await fixture();const login=await f.login();const cookie=login.response.headers.get('Set-Cookie').split(';')[0];
 const time=Math.floor(Date.now()/1000);f.env.DB.db.prepare('UPDATE sessions SET expires=?').run(time-1);
 const expired=await f.call('/api/session');assert.equal(expired.status,401);assert.equal(expired.response.headers.get('Set-Cookie'),null);
 assert.equal(f.env.DB.db.prepare('SELECT expires FROM sessions').get().expires,time-1);
 f.env.DB.db.prepare('UPDATE sessions SET expires=?').run(time+7776000);f.env.OWNER_PASSWORD_HASH=await passwordHash(password+'-changed');
 const revoked=await worker.fetch(new Request('https://test.example/api/session',{headers:{Cookie:cookie}}),f.env);
 assert.equal(revoked.status,401);assert.equal(revoked.headers.get('Set-Cookie'),null);
});
test('credentials encrypted, never in public data or status',async()=>{const f=await fixture();await f.login();const token='n'.repeat(64);assert.equal((await f.call('/api/settings','POST',{key:'PSN_NPSSO',value:token})).status,200);const stored=f.env.DB.db.prepare("SELECT value FROM settings WHERE key='PSN_NPSSO'").get().value;assert.notEqual(stored,token);assert.equal(await decrypt(stored,f.env.APP_SECRET),token);assert.equal((await f.call('/api/psn')).json.configured,true);assert.ok(!JSON.stringify((await f.call('/api/psn')).json).includes(token));assert.ok(!JSON.stringify((await f.call('/api/collection')).json).includes(token));});
test('validation rejects bad URLs, NaN, ratings and dates',()=>{for(const change of [{rating:11},{rating:'NaN'},{rating:'Infinity'},{image:'javascript:alert(1)'},{image:'https://user:secret@example.com/image'},{date:'31.02.2026'},{year:'9999'}])assert.throws(()=>validate({...item,...change}));assert.equal(validate(item).rating,'8.5/10');});
test('PSN job lock, exact editions, hours deltas, idempotence and weekly completion',async()=>{const f=await fixture();const game={id:'g1',title:'Cyberpunk 2077',category:'games',status:'completed',rating:'9/10',platform:'PC (Steam) + PS5 Pro',hours:'50 ч.',date:'25.09.2026',image:'https://example.com/x.jpg'};await f.env.DB.prepare('INSERT INTO items VALUES (?,?,1)').bind('g1',JSON.stringify(game)).run();await f.env.DB.prepare('INSERT INTO psn_baseline VALUES (?,?)').bind('Cyberpunk 2077',10).run();const auth={Authorization:'Bearer '+f.env.PSN_SYNC_SECRET};assert.equal((await f.call('/api/internal/psn','POST',{state:'started'},auth)).status,200);assert.equal((await f.call('/api/internal/psn','POST',{state:'started'},auth)).status,409);const stats=[{title:'Cyberpunk 2077',hours:12,date:'01.10.2026',image:''}];const r=await f.call('/api/internal/psn','POST',{stats},auth);assert.equal(r.status,200,JSON.stringify(r.json));const first=(await f.call('/api/collection')).json.items[0];assert.equal(first.hours,'52 ч.');assert.equal(first.rating,'9/10');assert.equal(first.platform,game.platform);assert.equal(first.version,2);assert.equal((await f.call('/api/internal/psn','POST',{stats},auth)).status,200);assert.deepEqual((await f.call('/api/collection')).json.items[0],first);assert.equal((await f.call('/api/internal/psn','POST',{state:'completed'},auth)).status,200);await f.login();const state=(await f.call('/api/psn')).json;assert.equal(Math.round((Date.parse(state.next_run)-Date.parse(state.last_success))/86400000),7);assert.equal(state.running,false);assert.equal(normalized("Marvel's Spider-Man Remastered"),normalized("Marvel's Spider-Man"));assert.notEqual(normalized('Red Dead Redemption'),normalized('Red Dead Redemption 2'));});
test('PSN preserves newer dates, handles reset, and updates actual current owner rating',async()=>{const f=await fixture();const g={id:'g1',title:'Cyberpunk 2077',category:'games',status:'completed',rating:'10/10',platform:'PC',hours:'100 ч.',date:'01.10.2026',image:''};await f.env.DB.prepare('INSERT INTO items VALUES (?,?,1)').bind(g.id,JSON.stringify(g)).run();await f.env.DB.prepare('INSERT INTO psn_baseline VALUES (?,?)').bind(g.title,10).run();const auth={Authorization:'Bearer '+f.env.PSN_SYNC_SECRET};await f.call('/api/internal/psn','POST',{state:'started'},auth);const r=await f.call('/api/internal/psn','POST',{stats:[{title:g.title,hours:8,date:'01.09.2026',image:''}]},auth);assert.equal(r.status,200,JSON.stringify(r.json));const result=(await f.call('/api/collection')).json.items[0];assert.equal(result.hours,'100 ч.');assert.equal(result.date,g.date);assert.equal(result.rating,'10/10');});
test('PSN Free plan batch stays below 50 D1 queries',async()=>{const f=await fixture();const auth={Authorization:'Bearer '+f.env.PSN_SYNC_SECRET};await f.call('/api/internal/psn','POST',{state:'started'},auth);f.env.DB.count=0;const stats=Array.from({length:10},(_,n)=>({title:'A unique test game '+n,hours:1,date:'01.10.2026',image:''}));const r=await f.call('/api/internal/psn','POST',{stats},auth);assert.equal(r.status,200,JSON.stringify(r.json));assert.ok(f.env.DB.count<50,'Queries: '+f.env.DB.count);assert.equal((await f.call('/api/collection')).json.items.length,10);});
test('malformed sync cannot change collection',async()=>{const f=await fixture();const auth={Authorization:'Bearer '+f.env.PSN_SYNC_SECRET};await f.call('/api/internal/psn','POST',{state:'started'},auth);assert.equal((await f.call('/api/internal/psn','POST',{stats:[{title:'x',hours:-10,date:'',image:''}]},auth)).status,400);assert.equal((await f.call('/api/collection')).json.items.length,0);});

test('review and comment persist separately, editing does not change insertion order',async()=>{
 const f=await fixture();await f.login();
 const first=await f.call('/api/items','POST',{...item,date:'01.01.2099',comment:'Короткий комментарий',review:'Первая часть рецензии.\n\n<script>literal text</script>'});
 assert.equal(first.status,201);assert.equal(first.json.item.comment,'Короткий комментарий');assert.match(first.json.item.review,/literal text/);
 const second=await f.call('/api/items','POST',{...item,title:'Добавлен позже',date:'01.01.2000'});
 assert.equal(second.status,201);assert.equal(second.json.item.review,'');
 const edited=await f.call('/api/items/'+first.json.item.id,'PUT',{...first.json.item,review:'Новая рецензия'});
 assert.equal(edited.status,200);assert.equal(edited.json.item.review,'Новая рецензия');assert.equal(edited.json.item.comment,'Короткий комментарий');
 const rows=(await f.call('/api/collection')).json.items;
 assert.deepEqual(rows.map(i=>i.id),[first.json.item.id,second.json.item.id]);
 assert.equal(rows[0].review,'Новая рецензия');
 assert.throws(()=>validate({...item,review:'x'.repeat(30001)}));
});
