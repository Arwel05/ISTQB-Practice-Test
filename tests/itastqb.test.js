'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm');
const D=require('../src/content.js'),C=require('../src/core.js');
require('../src/agile.js');require('../src/agile-2014.js');require('../src/itastqb.js');
test('all 40 source questions have a distinct reviewed adaptation and aligned reasons',()=>{
 assert.equal(D.questions.length,147+D.agile.lots.flat().length);assert.equal(D.chapters.length,10);
 assert.equal(new Set(D.questions.map(q=>q.id)).size,D.questions.length);
 assert.equal(new Set(D.questions.map(q=>q.prompt)).size,D.questions.length);
 const bank=D.questions.filter(q=>q.chapter===10);assert.equal(bank.length,40);
 for(let n=1;n<=40;n++){
  const q=bank.find(q=>q.id==='ita'+String(n).padStart(3,'0'));assert.ok(q);
  assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);
  assert.equal(q.reasons.length,4);assert.equal(q.explanation,q.reasons[q.answer]);
  assert.ok(q.reasons.every(r=>r.length>35));assert.match(q.source,/soluzione editoriale/);
  assert.ok(q.topicChapter>=1&&q.topicChapter<=6);
 }
});
test('numerical adaptations retain correct answers after rotation',()=>{
 for(const [id,answer]of [['ita004','4'],['ita014','No: gli esiti possono contenere quantità molto diverse di istruzioni'],['ita019','Un test con D > E: ciascuna chiamata viene eseguita una volta'],['ita035','Minore di 2; da 2 a 20; maggiore di 20'],['ita036','−500, 0, 100, 1000'],['ita039','25, 30, 40']]){const q=D.questions.find(q=>q.id===id);assert.equal(q.options[q.answer],answer);}
});
test('supplementary sample stays out of CTFL exams and is selectable on its own',()=>{
 for(let n=0;n<100;n++){const exam=C.exam(D.questions);assert.equal(exam.length,40);assert.ok(exam.every(q=>q.chapter<=6));}
 assert.ok(C.adaptive(D.questions,{},20,10).every(q=>q.chapter===10));
});
test('new chapter, bookmarks and active questions survive export/import',()=>{
 const s=C.fresh(),q=D.questions.find(q=>q.id==='ita004');s.lessons=[1,7,10];s.bookmarks=[q.id];
 C.record(s,q,q.answer,'high',1000);
 s.active={id:'sample',mode:'practice',ids:[q.id],answers:{[q.id]:{choice:q.answer,confidence:'high'}},flags:[],index:0,startedAt:1000,deadline:null};
 assert.deepEqual(C.validateState(JSON.parse(JSON.stringify(s)),D.questions),s);
 const result=C.complete(s,D.questions,2000);assert.equal(result.score,1);
 assert.equal(C.validateState(s,D.questions).history[0].score,1);
});
test('distributed HTML includes self-contained data in correct order',()=>{
 const html=fs.readFileSync(require('node:path').join(__dirname,'../dist/TestPilot.html'),'utf8');
 assert.ok(!/<script src=/.test(html));
 const scripts=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
 assert.equal(scripts.length,require('../scripts/build.js').SCRIPTS.length);const context=vm.createContext({});
 for(const script of scripts.slice(0,4))vm.runInContext(script,context);
 assert.equal(context.TrainerData.questions.length,147+context.TrainerData.agile.lots.flat().length);assert.equal(context.TrainerData.version,'1.6.0');
 // D’Amico is a surname in an existing defect-report example, not audience wording.
 assert.ok(!/\bamici\b|(?<!D[’'])\bamico\b/i.test(html));
});
