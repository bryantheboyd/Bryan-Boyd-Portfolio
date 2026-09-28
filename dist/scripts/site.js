(() => {
  const $=(s,root=document)=>root.querySelector(s),$$=(s,root=document)=>[...root.querySelectorAll(s)];
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const records=JSON.parse($('#record-data').textContent),experience=JSON.parse($('#experience-data').textContent);
  const recordById=new Map(records.map(r=>[r.id,r]));
  const dialogOpeners=new WeakMap();
  const openDialog=(dialog,opener)=>{dialogOpeners.set(dialog,opener);dialog.showModal()};
  $$('dialog').forEach(dialog=>{
    $$('[data-close-dialog]',dialog).forEach(b=>b.addEventListener('click',()=>dialog.close()));
    dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
    dialog.addEventListener('close',()=>dialogOpeners.get(dialog)?.focus({preventScroll:true}));
  });
  const reel=$('#reel-dialog'),video=$('video',reel);
  $$('[data-reel-open]').forEach(b=>b.addEventListener('click',()=>{
    if(!video.src){video.src=matchMedia('(max-width:700px)').matches?'/video/bryan-boyd-reel-mobile.mp4':'/video/bryan-boyd-reel-web.mp4';video.load()}
    openDialog(reel,b);video.play().catch(()=>{});
  }));
  reel.addEventListener('close',()=>video.pause());reel.addEventListener('cancel',()=>video.pause());
  const imageDialog=$('#image-dialog');
  $$('[data-image-view]').forEach(a=>a.addEventListener('click',e=>{
    if(e.ctrlKey||e.metaKey||e.shiftKey||e.altKey)return;
    e.preventDefault();const im=$('img',a),target=$('img',imageDialog);
    target.src=a.href;target.alt=a.dataset.imageAlt||im?.alt||'Image detail';
    $('p',imageDialog).textContent=target.alt;$('[data-image-original]',imageDialog).href=a.href;
    openDialog(imageDialog,a);
  }));
  const contact=$('#contact-dialog');
  $$('[data-contact-open]').forEach(b=>b.addEventListener('click',()=>openDialog(contact,b)));
  $('[data-copy-email]').addEventListener('click',async()=>{
    const address=$('.email-address',contact).href.replace('mailto:','');
    try{await navigator.clipboard.writeText(address);$('[data-copy-status]').textContent='Copied. Over to you.'}
    catch{$('[data-copy-status]').textContent=address;const range=document.createRange();range.selectNodeContents($('.email-address',contact));getSelection().removeAllRanges();getSelection().addRange(range)}
  });
  // Channel changes are intentional cuts. Nothing auto-advances or makes sound.
  const channel=$('.channel');
  if(channel){
    let active=0,take=0,request=0;
    const presets=$$('[data-channel-select]');
    const render=async(index,frame=0)=>{
      const ticket=++request,c=experience.channels[index],f=c.frames[frame];
      const preload=new Image();preload.src=f.src;try{await preload.decode()}catch{}
      if(ticket!==request)return;
      active=index;take=frame;channel.dataset.channel=c.id;
      preload.className='channel-image';preload.alt=f.alt;preload.width=1366;preload.height=720;
      $('.channel-image').replaceWith(preload);
      $('[data-channel-label]').textContent=`CH. ${c.number} / ${c.label.toUpperCase()}`;
      $('[data-channel-title]').innerHTML=c.display;
      $('[data-channel-description]').textContent=c.description;
      const a=$('[data-channel-link]');a.href=c.href;a.replaceChildren(document.createTextNode(c.link));const arrow=document.createElement('span');arrow.textContent='↗';a.append(arrow);
      $('[data-frame-caption]').textContent=f.caption;
      presets.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));
      $('[data-channel-status]').textContent=`Channel ${c.number}: ${c.title}. ${f.caption}.`;
    };
    $('[data-next-channel]').addEventListener('click',()=>render((active+1)%experience.channels.length));
    $('[data-another-take]').addEventListener('click',()=>render(active,(take+1)%experience.channels[active].frames.length));
    presets.forEach((b,i)=>b.addEventListener('click',()=>render(i)));
    channel.addEventListener('keydown',e=>{if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();render((active+(e.key==='ArrowRight'?1:experience.channels.length-1))%experience.channels.length)}});
  }
  const exposureButtons=$$('[data-exposure]');
  exposureButtons.forEach(b=>b.addEventListener('click',()=>{
    const n=b.dataset.exposure,src=`/images/coronet/exposure-00000${n}.webp`,plate=`/images/coronet/plate-00000${n}.png`;
    $('.lab-image').src=src;$('.lab-image').alt=`${b.dataset.alt}, synthetic exposure 00000${n}`;
    $('[data-lab-image-link]').href=src;$('.lab-plate').src=plate;$('.lab-plate').alt=`Full archive record for Endless Coronet exposure 00000${n}`;$('[data-lab-plate-link]').href=plate;
    $('[data-lab-caption]').textContent=`EXPOSURE 00000${n} / SYNTHETIC IMAGE`;
    exposureButtons.forEach(btn=>btn.setAttribute('aria-pressed',String(btn===b)));
    $('[data-lab-status]').textContent=`Exposure 00000${n} selected. Image and examination record updated.`;
  }));
  // A thread carries its own position between real project pages.
  const threadBar=$('[data-thread-continue]');
  if(threadBar){
    const url=new URL(location.href),thread=experience.threads.find(t=>t.id===url.searchParams.get('thread'));
    const position=Number(url.searchParams.get('stop'))-1;
    if(thread&&Number.isInteger(position)&&position>=0&&position<thread.stops.length&&new URL(thread.stops[position].href,location.origin).pathname===location.pathname){
      threadBar.hidden=false;$('[data-thread-progress]').textContent=`THREAD ${thread.number} / STOP ${position+1} OF ${thread.stops.length}`;$('[data-thread-name]').textContent=thread.title;
      const next=$('[data-thread-next]');
      if(position+1<thread.stops.length){const target=new URL(thread.stops[position+1].href,location.origin);target.searchParams.set('thread',thread.id);target.searchParams.set('stop',String(position+2));next.href=target.pathname+target.search+target.hash;next.textContent=`Next: ${thread.stops[position+1].title} ↗`}
      else{next.href='/threads/';next.textContent='Thread complete. Pick another ↗'}
    }
  }
  const rows=$$('[data-credit-row]');
  let randomPool=records,lastRandom='';
  const randomDialog=$('#random-dialog');
  const pull=()=>{
    const pool=randomPool.length>1?randomPool.filter(r=>r.id!==lastRandom):randomPool;
    if(!pool.length)return;
    const random=new Uint32Array(1);crypto.getRandomValues(random);const r=pool[random[0]%pool.length];lastRandom=r.id;
    $('[data-random-number]').textContent=r.number;
    const im=$('[data-random-image]');im.hidden=!r.image;
    if(r.image){im.src=r.image;im.alt=r.imageAlt}else{im.removeAttribute('src');im.alt=''}
    $('[data-random-format]').textContent=r.format;$('#random-title').textContent=r.title;$('[data-random-role]').textContent=r.roles.join(' / ');$('[data-random-client]').textContent=r.client||'Independent';$('[data-random-link]').href='/index/#'+r.id;
  };
  $$('[data-random-open]').forEach(b=>b.addEventListener('click',()=>{pull();openDialog(randomDialog,b)}));
  $('[data-random-again]').addEventListener('click',pull);
  if(!rows.length)return;
  const filters=$$('[data-filter]'),input=$('[data-index-search]'),empty=$('[data-index-empty]'),count=$('[data-index-count]'),reset=$('[data-index-reset]'),views=$$('[data-index-view]'),layout=$('[data-index-layout]');
  let filter='all',view='list';
  const preview=row=>{
    const r=recordById.get(row.dataset.recordId),im=$('[data-preview-image]');
    $('[data-preview-number]').textContent=r.number;$('[data-preview-title]').textContent=r.title;$('[data-preview-client]').textContent=r.client||'Independent';
    im.hidden=!r.image;if(r.image){im.src=r.image;im.alt=r.imageAlt}else{im.removeAttribute('src');im.alt=''}
  };
  const syncURL=()=>{
    const url=new URL(location.href),q=input.value.trim();
    filter==='all'?url.searchParams.delete('filter'):url.searchParams.set('filter',filter);
    q?url.searchParams.set('q',q):url.searchParams.delete('q');
    view==='list'?url.searchParams.delete('view'):url.searchParams.set('view',view);
    history.replaceState(null,'',url);
  };
  const apply=(update=true)=>{
    const words=input.value.trim().toLowerCase().split(/\s+/);let visible=[];
    rows.forEach(row=>{const show=(filter==='all'||row.dataset.tags.split(' ').includes(filter))&&words.every(w=>row.dataset.search.includes(w));row.hidden=!show;if(show)visible.push(row)});
    filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));
    count.textContent=`${visible.length} ${visible.length===1?'record':'records'}${visible.length!==records.length?' / '+records.length:''}`;
    empty.hidden=visible.length>0;reset.hidden=filter==='all'&&!input.value.trim();$('.index-preview').hidden=!visible.length;
    randomPool=visible.map(r=>recordById.get(r.dataset.recordId));$$('[data-random-open]').forEach(b=>b.disabled=!visible.length);
    if(visible.length)preview(visible[0]);if(update)syncURL();
  };
  const changeView=(value,update=true)=>{view=value;layout.dataset.indexLayout=view;views.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.indexView===view)));if(update)syncURL()};
  const clear=()=>{filter='all';input.value='';apply();input.focus()};
  filters.forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;apply()}));input.addEventListener('input',()=>apply());reset.addEventListener('click',clear);$('[data-clear-search]').addEventListener('click',clear);
  views.forEach(b=>b.addEventListener('click',()=>changeView(b.dataset.indexView)));
  rows.forEach(row=>{row.addEventListener('pointerenter',()=>preview(row));row.addEventListener('focusin',()=>preview(row));row.addEventListener('toggle',()=>{if(row.open)preview(row)})});
  const openHash=()=>{let id;try{id=decodeURIComponent(location.hash.slice(1))}catch{return}const row=rows.find(r=>r.id===id);if(row){if(row.hidden){filter='all';input.value='';apply()};row.open=true;preview(row);row.scrollIntoView({behavior:reduced.matches?'instant':'smooth',block:'start'})}};
  const fromURL=()=>{const url=new URL(location.href),requested=url.searchParams.get('filter');filter=filters.some(b=>b.dataset.filter===requested)?requested:'all';input.value=url.searchParams.get('q')||'';changeView(url.searchParams.get('view')==='sheet'?'sheet':'list',false);apply(false);openHash()};
  fromURL();window.addEventListener('popstate',fromURL);window.addEventListener('hashchange',openHash);
})();
