/* Web/PWA layer: only bundled in the hosted build, never in the desktop ZIP. */
(function(root){
'use strict';
const LAST_EXPORT='testpilot.lastExport',BACKUP_DAYS=14;
const supported='serviceWorker' in navigator&&(location.protocol==='https:'||['localhost','127.0.0.1'].includes(location.hostname));
const ios=/iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
const standalone=()=>matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
let prompt=null,waiting=null,busy=false,requested=false,bar=null;
const listeners=[],changed=()=>listeners.forEach(fn=>fn());
function lastExport(){try{return Number(localStorage.getItem(LAST_EXPORT))||0;}catch(e){return 0;}}
function showBar(){
 if(!bar){bar=document.createElement('div');bar.className='update-bar';bar.setAttribute('role','status');bar.hidden=true;bar.innerHTML='<span>È disponibile una nuova versione di TestPilot.</span><button class="btn secondary" type="button">Aggiorna</button>';
  bar.querySelector('button').onclick=()=>{if(!waiting)return;requested=true;bar.hidden=true;waiting.postMessage('skip-waiting');};document.body.append(bar);}
 // Never offer a reload in the middle of a timed simulation.
 bar.hidden=!waiting||busy;
}
function track(reg){
 if(reg.waiting&&navigator.serviceWorker.controller)waiting=reg.waiting;
 reg.addEventListener('updatefound',()=>{const w=reg.installing;if(w)w.addEventListener('statechange',()=>{if(w.state==='installed'&&navigator.serviceWorker.controller){waiting=w;showBar();}});});
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)reg.update().catch(()=>{});});
 showBar();
}
addEventListener('beforeinstallprompt',e=>{e.preventDefault();prompt=e;changed();});
addEventListener('appinstalled',()=>{prompt=null;changed();});
if(supported){
 navigator.serviceWorker.addEventListener('controllerchange',()=>{if(requested){requested=false;location.reload();}});
 addEventListener('load',()=>{navigator.serviceWorker.register('sw.js').then(track).catch(()=>{});});
}
// Ask the browser not to evict local progress under storage pressure.
if(navigator.storage&&navigator.storage.persist)navigator.storage.persisted().then(p=>p||navigator.storage.persist()).catch(()=>{});
root.TestPilotPWA={
 ios,standalone,
 canPrompt:()=>!!prompt,
 install(){if(!prompt)return;const p=prompt;prompt=null;p.prompt();p.userChoice.finally(changed);},
 onChange(fn){listeners.push(fn);},
 setBusy(value){busy=!!value;if(bar)showBar();},
 markExport(){try{localStorage.setItem(LAST_EXPORT,String(Date.now()));}catch(e){}},
 backupDue(state,now=Date.now()){return state.history.length>0&&now-lastExport()>BACKUP_DAYS*86400000;},
 lastExport
};
})(typeof window!=='undefined'?window:globalThis);
