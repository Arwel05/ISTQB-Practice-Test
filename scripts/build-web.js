'use strict';
// Hosted PWA build for GitHub Pages: sites/web/. Contains only generated files: no PDFs, backups or progress.
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto');
const {bundle}=require('./build.js'),{icon}=require('./icons.js');
const root=path.resolve(__dirname,'..'),out=path.join(root,'sites/web');
const THEME='#205c4c',BACKGROUND='#f7f8f4';
const head='<link rel="manifest" href="manifest.webmanifest"><link rel="icon" type="image/png" href="icons/icon-192.png"><link rel="apple-touch-icon" href="icons/apple-touch-icon.png"><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-title" content="TestPilot"><meta name="apple-mobile-web-app-status-bar-style" content="default">';
const manifest={name:'TestPilot · Trainer ISTQB',short_name:'TestPilot',description:'Allenamento indipendente per ISTQB CTFL e Agile Tester, utilizzabile offline.',lang:'it',dir:'ltr',start_url:'./',scope:'./',display:'standalone',orientation:'any',theme_color:THEME,background_color:BACKGROUND,icons:[
 {src:'icons/icon-192.png',sizes:'192x192',type:'image/png',purpose:'any'},
 {src:'icons/icon-512.png',sizes:'512x512',type:'image/png',purpose:'any'},
 {src:'icons/icon-maskable-512.png',sizes:'512x512',type:'image/png',purpose:'maskable'}]};
function build(){
const files={
 'index.html':bundle({extraScripts:['pwa.js'],head}),
 'manifest.webmanifest':JSON.stringify(manifest,null,1),
 'icons/icon-192.png':icon(192),'icons/icon-512.png':icon(512),'icons/icon-maskable-512.png':icon(512),'icons/apple-touch-icon.png':icon(180)};
// The cache name derives from every cached byte, so any content change ships a new service worker.
const version=versionOf(files);
const precache=['./',...Object.keys(files)];
files['sw.js']=fs.readFileSync(path.join(root,'src/sw.js'),'utf8').replace("'__VERSION__'",()=>JSON.stringify(version)).replace('__FILES__',()=>JSON.stringify(precache));
files['.nojekyll']='';
return {files,version};
}
function versionOf(files){const hash=crypto.createHash('sha256');for(const name of Object.keys(files).sort())hash.update(name).update(files[name]);return hash.digest('hex').slice(0,12);}
if(require.main===module){
const {files,version}=build();
fs.rmSync(out,{recursive:true,force:true});
for(const [name,data] of Object.entries(files)){fs.mkdirSync(path.dirname(path.join(out,name)),{recursive:true});fs.writeFileSync(path.join(out,name),data);}
console.log(`Creato sites/web (versione ${version}, ${Object.keys(files).length} file, ${Math.round(Buffer.byteLength(files['index.html'])/1024)} KB di HTML).`);
}
module.exports={build,versionOf};
