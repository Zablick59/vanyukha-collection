export class HttpError extends Error {constructor(status,message){super(message);this.status=status;}}
export function requireCondition(value,status=400,message='Проверь заполнение полей.'){if(!value)throw new HttpError(status,message);}
export function text(value,max){requireCondition(typeof value==='string'&&value.length<=max);return value.trim();}
export function dateValue(value){const p=value.split('.');return p.length===3?p[2]+'-'+p[1]+'-'+p[0]:'';}
export function validDate(value){if(!/^\d{2}\.\d{2}\.\d{4}$/.test(value))return false;const iso=dateValue(value),d=new Date(iso+'T00:00:00Z');return Number.isFinite(+d)&&d.toISOString().slice(0,10)===iso;}
export function imageURL(value){if(/^\/media\/[a-f0-9]+\.jpg$/.test(value))return true;try{const u=new URL(value);return u.protocol==='https:'&&!u.username&&!u.password;}catch{return false;}}
export function validate(payload){requireCondition(payload&&typeof payload==='object'&&!Array.isArray(payload));const r={};for(const [k,n]of Object.entries({title:200,year:4,date:10,comment:2000,platform:100,image:2000}))r[k]=text(payload[k]??'',n);
 requireCondition(r.title);requireCondition(!r.year||/^\d{4}$/.test(r.year)&&+r.year>=1800&&+r.year<=2200);requireCondition(!r.date||validDate(r.date));requireCondition(!r.image||imageURL(r.image));
 r.category=payload.category;r.status=payload.status||'completed';requireCondition(['movies','games'].includes(r.category)&&['completed','wishlist'].includes(r.status));
 for(const [field,max]of [['rating',10],['hours',1000000]]){const raw=String(payload[field]??'').replace(',','.').replace('/10','').replace(' ч.','').trim();const n=raw===''?null:Number(raw);requireCondition(n===null||Number.isFinite(n)&&n>=0&&n<=max);r[field]=n===null?'':`${n}${field==='rating'?'/10':' ч.'}`;}
 if(r.category==='movies'){delete r.platform;delete r.hours;}return r;
}
export function normalized(title){return title.toLowerCase().replace(/[®™]/g,'').replaceAll('grand theft auto','gta').replace(/\s*(?:\[|\()?\s*(?:playstation\s*[45]|ps4\s*&\s*ps5|ps[45])\s*(?:\]|\))?/g,'').replace(/\s+(?:enhanced|complete edition|definitive edition|special edition|director.s cut|remastered|stay human|ru)$/,'').replace(/[^\p{L}\p{N}_]+/gu,'');}
export function ignored(title){return ['appletv','callofduty','dyinglight','marathonserverslam'].includes(normalized(title));}
// Pure plan: database applies the deltas atomically against its current values.
export function planStats(items,stats,baseline){const groups=new Map();for(const g of stats){requireCondition(typeof g.title==='string'&&g.title.length<=200&&Number.isFinite(g.hours)&&g.hours>=0&&g.hours<=1000000&&(!g.date||validDate(g.date))&&(!g.image||imageURL(g.image)));if(ignored(g.title))continue;const key=normalized(g.title);if(!groups.has(key))groups.set(key,[]);groups.get(key).push(g);}
 const plans=[];for(const [key,games]of groups){const candidates=items.filter(i=>i.category==='games'&&normalized(i.title)===key);if(candidates.length>1||candidates[0]?.status==='wishlist')continue;const item=candidates[0];const delta=games.reduce((sum,g)=>sum+Math.max(0,g.hours-(baseline[g.title]??g.hours)),0);const dates=games.map(g=>g.date).filter(Boolean);if(item?.date)dates.push(item.date);dates.sort((a,b)=>dateValue(a).localeCompare(dateValue(b)));plans.push({key,item,games,delta:Math.round(delta*10)/10,date:dates.at(-1)||''});}return plans;
}
