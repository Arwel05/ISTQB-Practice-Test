/* Service worker template: scripts/build-web.js fills in VERSION and FILES. */
'use strict';
const VERSION='__VERSION__',CACHE='testpilot-'+VERSION,FILES=__FILES__;
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('testpilot-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
// A new version waits until the user accepts it from the update bar.
self.addEventListener('message',e=>{if(e.data==='skip-waiting')self.skipWaiting();});
self.addEventListener('fetch',e=>{
 const req=e.request;if(req.method!=='GET'||new URL(req.url).origin!==location.origin)return;
 e.respondWith((async()=>{const c=await caches.open(CACHE);const hit=await c.match(req,{ignoreSearch:true})||(req.mode==='navigate'?await c.match('./'):undefined);return hit||fetch(req);})());
});
