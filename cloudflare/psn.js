import {HttpError,requireCondition,validDate,imageURL} from './validation.js';

// Same read-only PSN endpoints and OAuth parameters used by PSNAWP 2.1.0.
// https://github.com/isFakeAccount/psnawp
const clientId='09515159-7237-4370-9b40-3806e67c0891';
const redirectURI='com.scee.psxandroid.scecompcall://redirect';
const scope='psn:mobile.v2.core psn:clientapp';
const oauth='https://ca.account.sony.com/api/authz/v3/oauth/';
const commonHeaders={'User-Agent':'Mozilla/5.0 (Linux; Android 11; sdk_gphone_x86 Build/RSR1.201013.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.106 Mobile Safari/537.36','Accept-Language':'en-US,en;q=0.9','Country':'US'};

export class PSNError extends HttpError {constructor(reason){super(502,reason==='auth'?'Токен PlayStation истёк. Обнови его в настройках.':'Sony временно не отвечает. Попробуй обновить позже.');this.reason=reason;}}
async function sonyFetch(fetcher,url,options={}){
 try{return await fetcher(url,{...options,headers:{...commonHeaders,...options.headers},redirect:'manual',signal:AbortSignal.timeout(12000)});}catch{throw new PSNError('network');}
}
async function sonyJSON(response){
 if(!response.ok)throw new PSNError([400,401].includes(response.status)?'auth':'network');
 try{return await response.json();}catch{throw new PSNError('data');}
}
export function titleStat(title){
 requireCondition(typeof title.name==='string'&&title.name.length>0&&title.name.length<=200,502,'Sony вернула неполные данные игры.');
 const duration=title.playDuration??'PT0S';const parts=/^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(duration);
 requireCondition(parts,502,'Sony вернула некорректное время игры.');
 const hours=Math.round((Number(parts[1]||0)+Number(parts[2]||0)/60+Number(parts[3]||0)/3600)*10)/10;
 requireCondition(Number.isFinite(hours)&&hours<=1000000,502,'Sony вернула некорректное время игры.');
 let date='';if(title.lastPlayedDateTime){const d=new Date(title.lastPlayedDateTime);requireCondition(Number.isFinite(+d),502,'Sony вернула некорректную дату игры.');const iso=d.toISOString().slice(0,10);date=iso.split('-').reverse().join('.');requireCondition(validDate(date),502);}
 const image=title.imageUrl||'';requireCondition(!image||imageURL(image),502,'Sony вернула некорректный постер.');
 return {title:title.name,hours,date,image};
}
export async function fetchStats(npsso,fetcher=fetch){
 requireCondition(/^[a-zA-Z0-9]{64}$/.test(npsso),400,'Сначала сохрани токен PlayStation.');
 const cid=crypto.randomUUID();const params=new URLSearchParams({access_type:'offline',cid,client_id:clientId,device_base_font_size:'10',device_profile:'mobile',elements_visibility:'no_aclink',enable_scheme_error_code:'true',no_captcha:'true',PlatformPrivacyWs1:'minimal',redirect_uri:redirectURI,response_type:'code',scope,service_entity:'urn:service-entity:psn',service_logo:'ps',smcid:'psapp:signin',support_scheme:'sneiprls',turnOnTrustedBrowser:'true',ui:'pr'});
 const authorize=await sonyFetch(fetcher,oauth+'authorize?'+params,{headers:{Cookie:'npsso='+npsso,'Content-Type':'application/x-www-form-urlencoded','X-Requested-With':'com.scee.psxandroid','Sec-Fetch-Dest':'document','Sec-Fetch-Mode':'navigate','Sec-Fetch-Site':'same-site','Sec-Fetch-User':'?1'}});
 let code;try{const location=new URL(authorize.headers.get('Location'));code=location.searchParams.get('code');if(location.searchParams.get('error'))throw new PSNError('auth');}catch(error){if(error instanceof PSNError)throw error;throw new PSNError(authorize.status===403?'network':'auth');}
 if(!code)throw new PSNError('auth');
 const token=await sonyJSON(await sonyFetch(fetcher,oauth+'token',{method:'POST',headers:{Authorization:'Basic MDk1MTUxNTktNzIzNy00MzcwLTliNDAtMzgwNmU2N2MwODkxOnVjUGprYTV0bnRCMktxc1A=','Content-Type':'application/x-www-form-urlencoded','User-Agent':'com.sony.snei.np.android.sso.share.oauth.versa.USER_AGENT','X-Psn-Correlation-Id':cid},body:new URLSearchParams({cid,code,grant_type:'authorization_code',redirect_uri:redirectURI,scope,token_format:'jwt'})}));
 if(!token.access_token)throw new PSNError('auth');
 const all=[];let offset=0;
 for(let page=0;page<10;page++){
  const url='https://m.np.playstation.com/api/gamelist/v2/users/me/titles?'+new URLSearchParams({limit:'200',offset:String(offset)});
  const data=await sonyJSON(await sonyFetch(fetcher,url,{headers:{Authorization:'Bearer '+token.access_token}}));
  requireCondition(Array.isArray(data.titles),502,'Sony вернула неполный список игр.');all.push(...data.titles.map(titleStat));
  const next=Number(data.nextOffset||0);if(!next)return all;
  requireCondition(Number.isInteger(next)&&next>offset,502,'Sony вернула некорректный список игр.');offset=next;
 }
 throw new HttpError(502,'Список игр слишком большой для одного обновления.');
}
