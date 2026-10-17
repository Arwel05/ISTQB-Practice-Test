'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
// Load order matters: data, English overlay, logic, dictionaries, i18n, then the UI.
const SCRIPTS=['content.js','agile.js','itastqb.js','content-en.js','core.js','locale-it.js','locale-en.js','i18n.js','tracks.js','app.js'];
const read=name=>fs.readFileSync(path.join(root,'src',name),'utf8');
// Inline CSS and scripts into one self-contained HTML. `extraScripts` load just before app.js; `head` is appended to <head>.
function bundle({extraScripts=[],head=''}={}){
 let html=read('index.html').replace('<link rel="stylesheet" href="style.css">',()=>'<style>'+read('style.css')+'</style>'+head);
 html=html.replace('<script src="app.js"></script>',()=>extraScripts.map(name=>`<script src="${name}"></script>`).join('')+'<script src="app.js"></script>');
 for(const name of SCRIPTS.flatMap(n=>n==='app.js'?[...extraScripts,n]:[n]))html=html.replace(`<script src="${name}"></script>`,()=>'<script>'+read(name).replace(/<\/script/gi,'<\\/script')+'</script>');
 return html;
}
if(require.main===module){
 const html=bundle();
 const out=path.join(root,'dist');fs.mkdirSync(out,{recursive:true});fs.writeFileSync(path.join(out,'TestPilot.html'),html);
 fs.copyFileSync(path.join(root,'LEGGIMI.txt'),path.join(out,'LEGGIMI.txt'));
 console.log('Creato dist/TestPilot.html ('+Math.round(Buffer.byteLength(html)/1024)+' KB). Nessuna dipendenza esterna.');
}
module.exports={bundle,SCRIPTS};
