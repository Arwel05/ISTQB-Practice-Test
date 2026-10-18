'use strict';
// Lists every translated question where the Italian uses an ISTQB term and the English does not use the matching syllabus term.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),{terms}=require('../src/terms.js'),{SCRIPTS}=require('./build.js');
const ctx={};vm.createContext(ctx);
for(const f of SCRIPTS.filter(n=>/^(content|agile|itastqb|foundation)/.test(n)))vm.runInContext(fs.readFileSync(path.join(__dirname,'../src',f),'utf8'),ctx);
const D=ctx.TrainerData,txt=q=>[q.prompt,...q.options,q.explanation,...(q.reasons||[])].join(' ');let n=0;
for(const q of D.questions){const en=D.en.questions[q.id];if(!en){console.log('missing English',q.id);n++;continue;}for(const tm of terms)if(tm.it.test(txt(q))&&!tm.en.test(txt(en))){n++;console.log(q.id,'→',tm.term,'| IT:',txt(q).match(tm.it)[0]);}}
console.log(n?n+' da sistemare':'Terminologia allineata.');process.exitCode=n?1:0;
