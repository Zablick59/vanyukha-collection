'use strict';
let items=[], section='all';
const $=id=>document.getElementById(id);
function element(tag,cls,text){const n=document.createElement(tag);if(cls)n.className=cls;if(text!==undefined)n.textContent=text;return n;}
function dateValue(value){if(!value)return 0;const [d,m,y]=value.split('.');return Date.UTC(+y,+m-1,+d)||0;}
function number(value){return parseFloat(String(value||'').replace(',','.'))||0;}
function hasReview(item){return typeof item.review==='string'&&!!item.review.trim();}
function tagsFor(item){
 const tags=element('div','tags-container');
 [item.year?`${item.category==='games'?'🕹️':'🎬'} ${item.year}`:'',item.date?`👁️ ${item.date}`:'',item.category==='games'?item.platform:'',item.category==='games'?item.hours:'',item.status==='wishlist'?'В планах':''].filter(Boolean).forEach(t=>tags.append(element('span','tag',t)));
 return tags;
}
function posterFor(item){
 const image=element('img','poster');image.src=item.image||'/assets/poster-placeholder.svg';image.alt=item.title;image.loading='lazy';image.referrerPolicy='no-referrer';image.addEventListener('error',()=>{image.src='/assets/poster-placeholder.svg';},{once:true});return image;
}
function ratingFor(item){
 const wrap=element('div','rating-wrapper');wrap.append(element('span','rating-star rainbow-text','★'),element('span','rating-value rainbow-text',item.rating.split('/')[0]),element('span','rating-max','/10'));return wrap;
}
function selectContent(tab){
 const review=tab==='review';
 for(const name of ['overview','review']){
  const selected=(name==='review')===review;
  $(name+'-tab').setAttribute('aria-selected',String(selected));$(name+'-tab').tabIndex=selected?0:-1;$(name+'-panel').hidden=!selected;
 }
}
function openItem(item,tab='overview'){
 $('item-dialog-title').textContent=item.title;
 const overview=element('div','dialog-overview');overview.append(posterFor(item));const details=element('div','dialog-details');details.append(tagsFor(item));if(item.rating)details.append(ratingFor(item));overview.append(details);
 const comment=element('p','details',item.comment||'Комментария пока нет.');
 $('overview-panel').replaceChildren(overview,comment);
 $('review-tab').hidden=!hasReview(item);$('review-panel').textContent=item.review||'';
 selectContent(tab==='review'&&hasReview(item)?'review':'overview');$('item-dialog').showModal();
}
function render(){
 const query=$('search-input').value.trim().toLocaleLowerCase('ru');const platform=$('platform-select').value;
 let rows=items.filter(i=>(section==='wishlist'?i.status==='wishlist':i.status!=='wishlist'&&(section==='all'||i.category===section))&&i.title.toLocaleLowerCase('ru').includes(query));
 if(section==='games'&&platform!=='all')rows=rows.filter(i=>platform==='PC'?/PC|ПК|Steam/i.test(i.platform||''):/PS[45]|PlayStation/i.test(i.platform||''));
 const [field,dir]=$('sort-select').value.split('-');rows.sort((a,b)=>((field==='date'?dateValue(a[field])-dateValue(b[field]):number(a[field])-number(b[field]))*(dir==='desc'?-1:1)));
 const fragment=document.createDocumentFragment();
 rows.forEach(item=>{
  const card=element('article','card');card.append(posterFor(item));
  const info=element('div','info');const heading=element('h2','title');const title=element('button','card-title',item.title);title.type='button';title.setAttribute('aria-haspopup','dialog');title.setAttribute('aria-controls','item-dialog');title.addEventListener('click',()=>openItem(item));heading.append(title);info.append(heading,tagsFor(item));
  if(item.comment)info.append(element('p','details',item.comment));
  if(item.rating)info.append(ratingFor(item));
  if(hasReview(item)){const review=element('button','review-link','Рецензия');review.type='button';review.setAttribute('aria-haspopup','dialog');review.setAttribute('aria-controls','item-dialog');review.addEventListener('click',()=>openItem(item,'review'));info.append(review);}
  card.append(info);fragment.append(card);
 });
 $('main-grid').replaceChildren(fragment);$('summary').textContent=`${rows.length} записей`;$('notice').textContent=rows.length?'':'Ничего не найдено. Попробуй другое название.';
}
async function refresh(){try{const r=await fetch('/api/collection',{cache:'no-store'});if(!r.ok)throw Error();items=(await r.json()).items;render();}catch{$('notice').textContent='Не удалось загрузить коллекцию. Проверь соединение и обнови страницу.';}}
document.querySelectorAll('[data-section]').forEach(button=>button.addEventListener('click',()=>{section=button.dataset.section;document.querySelectorAll('[data-section]').forEach(b=>b.classList.toggle('active',b===button));$('platform-wrapper').hidden=section!=='games';$('platform-select').value='all';$('section-title').textContent={all:'Всё',movies:'Фильмы и сериалы',games:'Игры',wishlist:'В планах'}[section];render();}));
['search-input','sort-select','platform-select'].forEach(id=>$(id).addEventListener(id==='search-input'?'input':'change',render));
$('close-item-dialog').addEventListener('click',()=>$('item-dialog').close());
$('item-dialog').addEventListener('click',event=>{if(event.target===$('item-dialog')){const r=$('item-dialog').getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)$('item-dialog').close();}});
for(const name of ['overview','review']){
 $(name+'-tab').addEventListener('click',()=>selectContent(name));
 $(name+'-tab').addEventListener('keydown',event=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(event.key)&&!$('review-tab').hidden){event.preventDefault();const next=event.key==='Home'?'overview':event.key==='End'?'review':name==='review'?'overview':'review';selectContent(next);$(next+'-tab').focus();}});
}
refresh();setInterval(()=>{if(!document.hidden)refresh();},30000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();});
