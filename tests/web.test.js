'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const {build,versionOf}=require('../scripts/build-web.js');
const web=path.join(__dirname,'../sites/web'),{files,version}=build();
const swParts=sw=>({version:JSON.parse(sw.match(/const VERSION=("[^"]+")/)[1]),precache:JSON.parse(sw.match(/FILES=(\[[^\]]*\])/)[1])});
const pngSize=buf=>{assert.deepEqual([...buf.subarray(0,8)],[137,80,78,71,13,10,26,10]);return [buf.readUInt32BE(16),buf.readUInt32BE(20)];};

test('hosted build publishes only the app, manifest, icons and service worker',()=>{
 assert.deepEqual(Object.keys(files).sort(),['.nojekyll','icons/apple-touch-icon.png','icons/icon-192.png','icons/icon-512.png','icons/icon-maskable-512.png','index.html','manifest.webmanifest','sw.js']);
 for(const name of Object.keys(files))assert.ok(!/\.(pdf|json|txt)$/i.test(name),name);
 assert.ok(!/"stats"\s*:\s*\{\s*"/.test(files['index.html']),'no saved progress embedded');
});
test('manifest is installable and every icon has its declared size',()=>{
 const m=JSON.parse(files['manifest.webmanifest']);
 assert.equal(m.display,'standalone');assert.equal(m.start_url,'./');assert.equal(m.scope,'./');assert.equal(m.lang,'it');
 assert.ok(m.name&&m.short_name.length<=12&&/^#[0-9a-f]{6}$/i.test(m.theme_color));
 assert.ok(m.icons.some(i=>i.sizes==='192x192')&&m.icons.some(i=>i.sizes==='512x512'&&i.purpose==='any')&&m.icons.some(i=>i.purpose==='maskable'));
 for(const i of m.icons){const [w,h]=pngSize(files[i.src]);assert.deepEqual([w+'x'+h],[i.sizes]);}
 assert.deepEqual(pngSize(files['icons/apple-touch-icon.png']),[180,180]);
});
test('service worker precaches exactly the generated files, with paths relative to the Pages subfolder',()=>{
 const {precache,version:v}=swParts(files['sw.js']);
 assert.equal(v,version);
 assert.deepEqual([...precache].sort(),['./',...Object.keys(files).filter(n=>n!=='sw.js'&&n!=='.nojekyll')].sort());
 for(const p of precache)assert.ok(!p.startsWith('/'),p);
 for(const ref of files['index.html'].match(/(?:href|src)="[^"]+"/g).filter(r=>!/https?:|#/.test(r)))assert.ok(!/="\//.test(ref),ref);
 assert.equal(files['sw.js'].match(/skipWaiting\(\)/g).length,1);
 assert.match(files['sw.js'],/e\.data==='skip-waiting'/,'a new version activates only on request');
});
test('cache version changes with any content change and is stable otherwise',()=>{
 const base=Object.fromEntries(Object.entries(files).filter(([n])=>n!=='sw.js'&&n!=='.nojekyll'));
 assert.equal(versionOf(base),version);assert.equal(build().version,version);
 assert.notEqual(versionOf({...base,'index.html':base['index.html']+' '}),version);
});
test('the files on disk match a fresh build',()=>{
 for(const [name,data] of Object.entries(files))assert.ok(Buffer.from(data).equals(fs.readFileSync(path.join(web,name))),name);
});
test('PWA layer is in the hosted page only, never in the desktop ZIP',()=>{
 const desktop=fs.readFileSync(path.join(__dirname,'../dist/TestPilot.html'),'utf8'),hosted=files['index.html'];
 assert.ok(!desktop.includes('serviceWorker')&&!desktop.includes('manifest.webmanifest'),'desktop ZIP has no service worker or manifest');
 const scripts=[...hosted.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
 assert.equal(scripts.length,6);assert.match(scripts[4],/TestPilotPWA/);assert.match(scripts[5],/window\.TestPilotPWA/);
 assert.match(hosted,/<link rel="manifest" href="manifest\.webmanifest">/);assert.match(hosted,/viewport-fit=cover/);
});
function loadPwa({protocol='https:',ua='Mozilla/5.0 (Linux; Android 14)',stored=null}={}){
 const events={},store=new Map(stored?[['testpilot.lastExport',String(stored)]]:[]),registered=[];
 const ctx={location:{protocol,hostname:'example.github.io'},matchMedia:()=>({matches:false}),addEventListener:(n,fn)=>{events[n]=fn;},
  localStorage:{getItem:k=>store.get(k)??null,setItem:(k,v)=>store.set(k,v)},document:{addEventListener(){}},
  navigator:{userAgent:ua,platform:'Linux',maxTouchPoints:5,serviceWorker:{addEventListener(){},register:u=>{registered.push(u);return Promise.resolve({addEventListener(){}});}}}};
 ctx.window=ctx;vm.createContext(ctx);vm.runInContext(fs.readFileSync(path.join(__dirname,'../src/pwa.js'),'utf8'),ctx);
 return {P:ctx.TestPilotPWA,events,store,registered};
}
test('backup reminder appears after 14 days without export, only once there is something to lose',()=>{
 const DAY=86400000,now=100*DAY;
 assert.equal(loadPwa().P.backupDue({history:[]},now),false);
 assert.equal(loadPwa().P.backupDue({history:[{}]},now),true);
 assert.equal(loadPwa({stored:now-13*DAY}).P.backupDue({history:[{}]},now),false);
 assert.equal(loadPwa({stored:now-15*DAY}).P.backupDue({history:[{}]},now),true);
 const {P,store}=loadPwa();P.markExport();assert.ok(Number(store.get('testpilot.lastExport'))>0);
});
test('service worker registers only on https or localhost and install prompt is deferred',()=>{
 const https=loadPwa();https.events.load();assert.deepEqual(https.registered,['sw.js']);
 const file=loadPwa({protocol:'file:'});assert.equal(file.events.load,undefined);
 let prevented=false;https.events.beforeinstallprompt({preventDefault(){prevented=true;},prompt(){},userChoice:Promise.resolve()});
 assert.ok(prevented&&https.P.canPrompt());
 assert.equal(loadPwa({ua:'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X)'}).P.ios,true);
});
