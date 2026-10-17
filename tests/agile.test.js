'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const D=require('../src/content.js'),C=require('../src/core.js');
const legacy=C.fresh();C.record(legacy,D.questions[0],D.questions[0].answer,'high',1000);
require('../src/agile.js');
test('2014 first increment has stable original IDs and explicit syllabus objectives',()=>{
 const qs=D.questions.filter(q=>['ag025','ag026','ag027'].includes(q.id));
 assert.deepEqual(qs.map(q=>q.lo),['FA-1.1.1','FA-1.1.2','FA-1.1.3']);
 assert.deepEqual(qs.map(q=>q.k),[1,2,2]);
 for(const q of qs){assert.equal(q.chapter,7);assert.match(q.source,/quesito originale/);assert.ok(q.syllabusUrl.endsWith('ISTQB-CTFL-AT_Syllabus_v1.0.pdf'));}
 assert.ok(D.chapters.find(c=>c.id===7).sections.some(([title])=>title.startsWith('Laboratorio:')));
});
test('Agile integration has unique IDs and aligned answer rationales',()=>{
 assert.equal(D.questions.length,107);assert.equal(D.chapters.length,9);
 assert.equal(new Set(D.questions.map(q=>q.id)).size,107);
 for(const q of D.questions.filter(q=>q.chapter>6)){
  assert.equal(q.options.length,4);assert.equal(q.reasons.length,4);
  assert.ok(q.explanation.startsWith(q.reasons[q.answer]));
  assert.match(q.source,/p\.|quesito originale/);assert.ok(q.reasons.every(r=>r.length>20));
 }
});
test('CTFL exams never include supplementary Agile questions',()=>{
 for(let i=0;i<100;i++){const exam=C.exam(D.questions);assert.equal(exam.length,40);assert.ok(exam.every(q=>q.chapter<=6));}
});
test('old progress is retained and new lessons and answers roundtrip',()=>{
 assert.deepEqual(C.validateState(legacy,D.questions),legacy);
 const s=C.fresh(),q=D.questions.find(q=>q.id==='ag001');
 s.lessons=[1,7,8,9];s.bookmarks=[q.id];C.record(s,q,q.answer,'high',1000);
 s.active={id:'agile',mode:'practice',ids:[q.id],answers:{},flags:[],index:0,startedAt:1000,deadline:null};
 assert.deepEqual(C.validateState(JSON.parse(JSON.stringify(s)),D.questions),s);
 assert.equal(C.adaptive(D.questions,{},20,9).length,8);
});
