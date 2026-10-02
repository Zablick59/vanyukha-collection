import fs from 'node:fs/promises';
import {passwordHash,randomToken} from '../cloudflare/security.js';
let secrets;
try{secrets=JSON.parse(await fs.readFile('.local/cloudflare-secrets.json','utf8'));}catch{
 const access=await fs.readFile('.local/owner-access.txt','utf8');const password=access.split('\n').find(line=>line.startsWith('Пароль: '))?.slice(8);
 if(!password)throw Error('First run: python setup_owner.py --generate');
 const env=Object.fromEntries((await fs.readFile('.env','utf8')).split('\n').filter(l=>l.includes('=')).map(l=>{const i=l.indexOf('=');return [l.slice(0,i),l.slice(i+1)];}));
 secrets={APP_SECRET:randomToken()+randomToken(),OWNER_PASSWORD_HASH:await passwordHash(password),PSN_SYNC_SECRET:randomToken(),PSN_NPSSO:env.PSN_NPSSO||''};
 await fs.writeFile('.local/cloudflare-secrets.json',JSON.stringify(secrets,null,2)+'\n',{mode:0o600});
}
await fs.writeFile('.dev.vars',Object.entries(secrets).map(([k,v])=>`${k}=${JSON.stringify(v)}`).join('\n')+'\n',{mode:0o600});
console.log('Cloudflare secrets prepared locally. None were printed or added to Git.');
