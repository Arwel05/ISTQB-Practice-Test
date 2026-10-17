'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const read=name=>fs.readFileSync(path.join(root,'src',name),'utf8');
let html=read('index.html').replace('<link rel="stylesheet" href="style.css">',()=>'<style>'+read('style.css')+'</style>');
for(const name of ['content.js','agile.js','itastqb.js','core.js','app.js'])html=html.replace(`<script src="${name}"></script>`,()=>'<script>'+read(name).replace(/<\/script/gi,'<\\/script')+'</script>');
const out=path.join(root,'dist');fs.mkdirSync(out,{recursive:true});fs.writeFileSync(path.join(out,'TestPilot.html'),html);
fs.copyFileSync(path.join(root,'LEGGIMI.txt'),path.join(out,'LEGGIMI.txt'));
console.log('Creato dist/TestPilot.html ('+Math.round(Buffer.byteLength(html)/1024)+' KB). Nessuna dipendenza esterna.');
