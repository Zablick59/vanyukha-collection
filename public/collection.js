'use strict';
let items=[], section='all';
const $=id=>document.getElementById(id);
function element(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
function dateValue(value){if(!value)return 0;const [d,m,y]=value.split('.');return Date.UTC(+y,+m-1,+d)||0;}
function number(value){return parseFloat(String(value||'').replace(',','.'))||0;}
function render(){
 const query=$('search-input').value.trim().toLocaleLowerCase('ru');const platform=$('platform-select').value;
 let rows=items.filter(i=>(section==='wishlist'?i.status==='wishlist':i.status!=='wishlist'&&(section==='all'||i.category===section))&&i.title.toLocaleLowerCase('ru').includes(query));
 if(section==='games'&&platform!=='all')rows=rows.filter(i=>platform==='PC'?/PC|ПК|Steam/i.test(i.platform||''):/PS[45]|PlayStation/i.test(i.platform||''));
 const [field,dir]=$('sort-select').value.split('-');rows.sort((a,b)=>((field==='date'?dateValue(a[field])-dateValue(b[field]):number(a[field])-number(b[field]))*(dir==='desc'?-1:1)));
 const fragment=document.createDocumentFragment();
 rows.forEach(item=>{
  const card=element('article','card');const image=element('img','poster');image.src=item.image||'/assets/poster-placeholder.svg';image.alt=item.title;image.loading='lazy';image.referrerPolicy='no-referrer';image.addEventListener('error',()=>{image.src='/assets/poster-placeholder.svg';},{once:true});card.append(image);
  const info=element('div','info');info.append(element('h2','title',item.title));const tags=element('div','tags-container');
  [item.year?`${item.category==='games'?'🕹️':'🎬'} ${item.year}`:'',item.date?`👁️ ${item.date}`:'',item.category==='games'?item.platform:'',item.category==='games'?item.hours:'',item.status==='wishlist'?'В планах':''].filter(Boolean).forEach(t=>tags.append(element('span','tag',t)));info.append(tags);
  if(item.comment)info.append(element('p','details',item.comment));
  if(item.rating){const wrap=element('div','rating-wrapper');wrap.append(element('span','rating-star rainbow-text','★'),element('span','rating-value rainbow-text',item.rating.split('/')[0]),element('span','rating-max','/10'));info.append(wrap);}
  card.append(info);fragment.append(card);
 });
 $('main-grid').replaceChildren(fragment);$('summary').textContent=`${rows.length} записей`;$('notice').textContent=rows.length?'':'Ничего не найдено. Попробуй другое название.';
}
async function refresh(){try{const r=await fetch('/api/collection',{cache:'no-store'});if(!r.ok)throw Error();items=(await r.json()).items;render();}catch{$('notice').textContent='Не удалось загрузить коллекцию. Проверь соединение и обнови страницу.';}}
document.querySelectorAll('[data-section]').forEach(button=>button.addEventListener('click',()=>{section=button.dataset.section;document.querySelectorAll('[data-section]').forEach(b=>b.classList.toggle('active',b===button));$('platform-wrapper').hidden=section!=='games';$('platform-select').value='all';$('section-title').textContent={all:'Посмотрел. Поиграл. Оценил.',movies:'Фильмы и сериалы',games:'Игры',wishlist:'В планах'}[section];render();}));
['search-input','sort-select','platform-select'].forEach(id=>$(id).addEventListener(id==='search-input'?'input':'change',render));
refresh();setInterval(()=>{if(!document.hidden)refresh();},30000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});
