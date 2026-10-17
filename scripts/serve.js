'use strict';
// Loopback-only preview. `node scripts/serve.js` serves the desktop HTML; `node scripts/serve.js web` serves sites/web (service worker enabled on localhost).
const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
const web=process.argv[2]==='web',port=web?4174:4173;
const dir=path.resolve(__dirname,'../sites/web'),file=path.resolve(__dirname,'../dist/TestPilot.html');
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.webmanifest':'application/manifest+json','.png':'image/png'};
const server=http.createServer((req,res)=>{
 const url=decodeURIComponent((req.url||'/').split('?')[0]);
 if(!web){if(url==='/'||url==='/TestPilot.html'){res.writeHead(200,{'Content-Type':types['.html'],'Cache-Control':'no-store'});fs.createReadStream(file).pipe(res);}else{res.writeHead(404);res.end('Not found');}return;}
 const target=path.join(dir,url.endsWith('/')?url+'index.html':url);
 if(!target.startsWith(dir+path.sep)||!fs.existsSync(target)||!fs.statSync(target).isFile()){res.writeHead(404);res.end('Not found');return;}
 res.writeHead(200,{'Content-Type':types[path.extname(target)]||'application/octet-stream','Cache-Control':'no-cache'});fs.createReadStream(target).pipe(res);
});
server.listen(port,'127.0.0.1',()=>console.log('TestPilot'+(web?' web':'')+': http://127.0.0.1:'+port));
