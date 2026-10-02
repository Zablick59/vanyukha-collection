const encoder=new TextEncoder();
export function hex(bytes){return Array.from(new Uint8Array(bytes),v=>v.toString(16).padStart(2,'0')).join('');}
export function unhex(value){return Uint8Array.from(value.match(/../g)||[],v=>parseInt(v,16));}
export function randomToken(){return hex(crypto.getRandomValues(new Uint8Array(32)));}
export async function sha(value){return hex(await crypto.subtle.digest('SHA-256',encoder.encode(value)));}
export function equal(a,b){if(typeof a!=='string'||typeof b!=='string'||a.length!==b.length)return false;let diff=0;for(let i=0;i<a.length;i++)diff|=a.charCodeAt(i)^b.charCodeAt(i);return diff===0;}
export async function passwordHash(password,salt=randomToken()){
 const key=await crypto.subtle.importKey('raw',encoder.encode(password),'PBKDF2',false,['deriveBits']);
 const value=await crypto.subtle.deriveBits({name:'PBKDF2',hash:'SHA-256',salt:unhex(salt),iterations:100000},key,256);
 return 'pbkdf2:100000:'+salt+':'+hex(value);
}
export async function verifyPassword(password,stored){if(typeof password!=='string'||password.length>256||!stored)return false;const parts=stored.split(':');if(parts.length!==4||parts[0]!=='pbkdf2'||parts[1]!=='100000')return false;return equal(await passwordHash(password,parts[2]),stored);}
async function encryptionKey(secret){return crypto.subtle.importKey('raw',await crypto.subtle.digest('SHA-256',encoder.encode(secret)),'AES-GCM',false,['encrypt','decrypt']);}
export async function encrypt(value,secret){const iv=crypto.getRandomValues(new Uint8Array(12));const data=await crypto.subtle.encrypt({name:'AES-GCM',iv},await encryptionKey(secret),encoder.encode(value));return hex(iv)+':'+hex(data);}
export async function decrypt(value,secret){const [iv,data]=value.split(':');return new TextDecoder().decode(await crypto.subtle.decrypt({name:'AES-GCM',iv:unhex(iv)},await encryptionKey(secret),unhex(data)));}
