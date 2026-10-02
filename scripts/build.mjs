import fs from 'node:fs/promises';
await fs.mkdir('dist/assets',{recursive:true});
for(const file of await fs.readdir('public')){
 if(file==='index.html'||file==='admin.html')await fs.copyFile('public/'+file,'dist/'+file);
 else await fs.copyFile('public/'+file,'dist/assets/'+file);
}
await fs.writeFile('dist/_headers',`/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: no-referrer\n  X-Frame-Options: DENY\n  Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' https: blob:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'\n`);
console.log('Public assets prepared; private files excluded.');
