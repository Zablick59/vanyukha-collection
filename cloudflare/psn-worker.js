import {equal} from './security.js';
import {fetchStats} from './psn.js';
import {HttpError,requireCondition,normalized,ignored} from './validation.js';

const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store'}});
async function collection(env,payload){const response=await env.COLLECTION.fetch('https://collection.internal/api/internal/psn',{method:payload?'POST':'GET',headers:{Authorization:'Bearer '+env.PSN_SYNC_SECRET,...(payload?{'Content-Type':'application/json'}:{})},...(payload?{body:JSON.stringify(payload)}:{})});const data=await response.json();if(!response.ok)throw new HttpError(response.status,data.error||'Сервис коллекции временно недоступен.');return data;}
export async function runSync(env,force=false){
 const config=await collection(env);
 if(!force&&(!config.due||config.running))return {ok:true,skipped:true};
 requireCondition(!config.running,409,'Обновление PlayStation уже выполняется.');
 requireCondition(config.token,400,'Сначала сохрани токен PlayStation в настройках.');
 let started=false;
 try{
  await collection(env,{state:'started'});started=true;
  // Read ALL pages before applying any collection or baseline changes.
  const stats=await fetchStats(config.token);const groups=new Map();
  for(const game of stats){if(ignored(game.title))continue;const key=normalized(game.title);if(!groups.has(key))groups.set(key,[]);groups.get(key).push(game);}
  const batches=[];let batch=[];
  for(const games of groups.values()){
   requireCondition(games.length<=10,502,'Слишком много изданий одной игры.');
   if(batch.length+games.length>10){batches.push(batch);batch=[];}batch.push(...games);
  }
  if(batch.length)batches.push(batch);
  requireCondition(batches.length<=25,502,'Слишком много игр для одного обновления.');
  let updated=0,added=0;
  for(const stats of batches){const result=await collection(env,{stats});updated+=result.updated;added+=result.added;}
  await collection(env,{state:'completed'});
  return {ok:true,updated,added};
 }catch(error){
  if(started){try{await collection(env,{state:'failed',reason:error.reason||'service'});}catch{}}
  throw error;
 }
}
export default {async fetch(request,env){
 if(!env.PSN_SYNC_SECRET||!equal(request.headers.get('Authorization'),'Bearer '+env.PSN_SYNC_SECRET))return json({error:'Доступ запрещён.'},401);
 if(new URL(request.url).pathname!=='/sync'||request.method!=='POST')return json({error:'Не найдено.'},404);
 try{const data=await request.json();return json(await runSync(env,data.force===true));}catch(error){return json({error:error instanceof HttpError?error.message:'Обновление PlayStation не завершилось. Попробуй позже.'},error.status||502);}
},async scheduled(controller,env){await runSync(env);}};
