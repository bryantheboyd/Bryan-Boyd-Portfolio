(()=>{
  'use strict';
  const root=document.documentElement;
  const $=(q)=>document.querySelector(q);
  const $$=(q)=>[...document.querySelectorAll(q)];
  const values={theme:['paper','night','field','signal'],layout:['editorial','gallery','index'],type:['contrast','literary','system']};
  const DEFAULT={theme:'paper',layout:'editorial',type:'contrast',grain:true};
  let settings={...DEFAULT};
  try{
    const stored=JSON.parse(localStorage.getItem('bb-design-v3')||'{}');
    for(const k of ['theme','layout','type'])if(values[k].includes(stored[k]))settings[k]=stored[k];
    if(typeof stored.grain==='boolean')settings.grain=stored.grain;
  }catch{}
  const panel=$('#studio-panel');
  const trigger=$('[data-studio-trigger]');
  const close=$('[data-studio-close]');
  const status=$('[data-design-status]');
  if(!panel||!trigger||!close)return;
  const activate=(updates={},announce=true)=>{
    settings={...settings,...updates};
    root.dataset.designTheme=settings.theme;
    root.dataset.designLayout=settings.layout;
    root.dataset.designType=settings.type;
    root.dataset.designGrain=settings.grain?'on':'off';
    for(const k of ['theme','layout','type'])$$(`button[data-design-${k}]`).forEach(b=>b.setAttribute('aria-pressed',String(b.getAttribute(`data-design-${k}`)===settings[k])));
    const checkbox=$('[data-design-grain]');if(checkbox)checkbox.checked=settings.grain;
    if(announce)status.textContent=`Color ${settings.theme}; layout ${settings.layout}; type ${settings.type}; grain ${settings.grain?'on':'off'}.`;
    try{localStorage.setItem('bb-design-v3',JSON.stringify(settings));}catch{}
  };
  activate({},false);
  const setOpen=(open,restoreFocus=false)=>{
    panel.toggleAttribute('data-open',open);
    panel.inert=!open;
    trigger.setAttribute('aria-expanded',String(open));
    trigger.querySelector('.studio-trigger-mark').textContent=open?'−':'+';
    if(open)close.focus({preventScroll:true});
    if(!open&&restoreFocus)trigger.focus({preventScroll:true});
  };
  // Don't cover playback controls while a local film is playing.
  document.addEventListener('play',event=>{
    if(event.target instanceof HTMLVideoElement){root.dataset.videoPlaying='true';setOpen(false)}
  },true);
  const restoreDisplay=()=>{if(![...document.querySelectorAll('video')].some(v=>!v.paused&&!v.ended))delete root.dataset.videoPlaying};
  document.addEventListener('pause',restoreDisplay,true);
  document.addEventListener('ended',restoreDisplay,true);
  trigger.addEventListener('click',()=>setOpen(!panel.hasAttribute('data-open'),true));
  close.addEventListener('click',()=>setOpen(false,true));
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&panel.hasAttribute('data-open')){e.stopPropagation();setOpen(false,true)}
  });
  for(const key of ['theme','layout','type'])$$(`button[data-design-${key}]`).forEach(b=>b.addEventListener('click',()=>activate({[key]:b.getAttribute(`data-design-${key}`)})));
  $('[data-design-grain]').addEventListener('change',e=>activate({grain:e.target.checked}));
  $('[data-design-reset]').addEventListener('click',()=>activate({...DEFAULT}));
  $('[data-design-random]').addEventListener('click',()=>{
    const updates={};
    for(const key of ['theme','layout','type']){
      const choices=values[key].filter(v=>v!==settings[key]);
      updates[key]=choices[Math.floor(Math.random()*choices.length)];
    }
    updates.grain=Math.random()>=.5;
    activate(updates);
  });
})();
