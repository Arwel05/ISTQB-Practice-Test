'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const D=require('../src/content.js'),C=require('../src/core.js');
const legacy=C.fresh();C.record(legacy,D.questions[0],D.questions[0].answer,'high',1000);
require('../src/agile.js');require('../src/agile-2014.js');
test('2014 first increment has stable original IDs and explicit syllabus objectives',()=>{
 const qs=D.questions.filter(q=>['ag025','ag026','ag027'].includes(q.id));
 assert.deepEqual(qs.map(q=>q.lo),['FA-1.1.1','FA-1.1.2','FA-1.1.3']);
 assert.deepEqual(qs.map(q=>q.k),[1,2,2]);
 for(const q of qs){assert.equal(q.chapter,7);assert.match(q.source,/quesito originale/);assert.ok(q.syllabusUrl.endsWith('ISTQB-CTFL-AT_Syllabus_v1.0.pdf'));}
 assert.ok(D.chapters.find(c=>c.id===7).sections.some(([title])=>title.startsWith('Laboratorio:')));
});
test('Agile integration has unique IDs and aligned answer rationales',()=>{
 assert.equal(D.questions.length,107+D.agile.lots.flat().length);assert.equal(D.chapters.length,9);
 assert.equal(new Set(D.questions.map(q=>q.id)).size,D.questions.length);
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
 assert.equal(C.adaptive(D.questions,{},20,9).length,Math.min(20,D.questions.filter(q=>q.chapter===9).length));
});
// CTFL-AT 2014 objectives, exam plan and coverage (src/agile-2014.js).
const A=D.agile,agileQs=()=>D.questions.filter(q=>q.chapter>=7&&q.chapter<=9);
const loIds=new Set(A.los.map(lo=>lo.id)),kOf=Object.fromEntries(A.los.map(lo=>[lo.id,lo.k]));
// Chapters whose lot is complete must reach the coverage targets. Updated as each lot lands.
const DONE=[7];
test('exam plan matches the official CTFL-AT tables: 40 questions, K1 10, K2 22, K3 8, chapters 13/12/15',()=>{
 const total=A.plan.reduce((n,g)=>n+g.n,0),byK=k=>A.plan.filter(g=>g.k===k).reduce((n,g)=>n+g.n,0);
 assert.equal(total,40);assert.deepEqual([byK(1),byK(2),byK(3)],[10,22,8]);
 const ch=c=>A.plan.filter(g=>A.los.find(l=>l.id===g.los[0]).chapter===c).reduce((n,g)=>n+g.n,0);
 assert.deepEqual([ch(7),ch(8),ch(9)],[13,12,15]);
 for(const g of A.plan)for(const lo of g.los){assert.ok(loIds.has(lo),lo);assert.equal(kOf[lo],g.k,'one K-level per group: '+lo);}
 assert.equal(new Set(A.plan.flatMap(g=>g.los)).size,A.los.length,'every objective appears in exactly one group');
 assert.equal(A.pass,26);assert.equal(A.minutes,60);
});
test('every Agile question has a 2014 objective (or is an explicit extra) and a consistent K-level',()=>{
 for(const q of agileQs()){
  if(q.lo.startsWith('Approfondimento'))continue;
  assert.ok(loIds.has(q.lo),q.id+' → '+q.lo);
  assert.ok(q.k<=kOf[q.lo],q.id+' K'+q.k+' above its objective');
  assert.equal(A.los.find(l=>l.id===q.lo).chapter,q.chapter,q.id+' chapter');
 }
 assert.deepEqual(agileQs().filter(q=>q.lo.startsWith('Approfondimento')).map(q=>q.id),['ag008']);
});
test('completed chapters reach the coverage targets with exam-eligible questions',()=>{
 for(const g of A.plan)for(const lo of g.los){
  const chapter=A.los.find(l=>l.id===lo).chapter;if(!DONE.includes(chapter))continue;
  const eligible=agileQs().filter(q=>q.lo===lo&&q.k===kOf[lo]).length;
  assert.ok(eligible>=(g.los.length===1&&g.n>=2?4:3),`${lo}: ${eligible} exam-eligible questions`);
 }
});
test('new Agile questions are original, complete and unambiguous in structure',()=>{
 const added=agileQs().filter(q=>+q.id.slice(2)>=28);
 assert.equal(added.length,A.lots.flat().length);
 for(const q of added){
  assert.equal(q.k,kOf[q.lo],q.id);assert.match(q.source,/quesito originale · CTFL-AT 2014/);
  assert.equal(new Set(q.options).size,4,q.id);assert.ok(q.reasons.every(r=>r.length>20),q.id);
  assert.equal(q.explanation,q.reasons[q.answer],q.id);
 }
 assert.equal(new Set(agileQs().map(q=>q.prompt)).size,agileQs().length,'no duplicated prompts');
});
