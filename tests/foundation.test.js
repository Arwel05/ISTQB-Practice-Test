'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const C=require('../src/core.js');
const ctx={};vm.createContext(ctx);
for(const f of ['content.js','foundation-plan.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'../src',f),'utf8'),ctx);
const D=ctx.TrainerData,F=D.foundation,kOf=Object.fromEntries(F.los.map(l=>[l.id,l.k]));
const bank=()=>D.questions.filter(q=>q.chapter<=6);
// Chapters whose lot is complete must reach the coverage targets. Updated as each lot lands.
const DONE=[1,2,3,4,5,6];

test('Foundation plan matches the official CTFL v4.0 tables: 40 questions, K1 8 / K2 24 / K3 8, chapters 8/6/4/11/9/2',()=>{
 const sum=gs=>gs.reduce((n,g)=>n+g.n,0);
 assert.equal(sum(F.plan),40);
 assert.deepEqual([1,2,3].map(k=>sum(F.plan.filter(g=>g.k===k))),[8,24,8]);
 assert.deepEqual([1,2,3,4,5,6].map(c=>sum(F.plan.filter(g=>+g.los[0][3]===c))),[...C.WEIGHTS]);
 const listed=F.plan.flatMap(g=>g.los);
 assert.equal(listed.length,64);assert.equal(new Set(listed).size,64);assert.deepEqual([...listed].sort(),[...F.los.map(l=>l.id)].sort());
 for(const g of F.plan)for(const lo of g.los)assert.equal(kOf[lo],g.k,'one K-level per group: '+lo);
 assert.equal(F.pass,26);assert.equal(F.minutes,60);
});
test('every Foundation question has a syllabus objective and the K-level of that objective or lower',()=>{
 for(const q of bank()){assert.ok(kOf[q.lo],q.id+' → '+q.lo);assert.ok(q.k<=kOf[q.lo],q.id+' K'+q.k+' above '+q.lo);assert.equal(+q.lo[3],q.chapter,q.id);}
 assert.equal(D.questions.find(q=>q.id==='q004').k,1,'FL-1.2.2 is K1 in the syllabus');
});
test('completed chapters reach the coverage targets with exam-eligible questions',()=>{
 for(const g of F.plan)for(const lo of g.los){
  if(!DONE.includes(+lo[3]))continue;
  const eligible=bank().filter(q=>q.lo===lo&&q.k===kOf[lo]).length;
  assert.ok(eligible>=(g.los.length===1&&g.n>=2?4:3),`${lo}: ${eligible} exam-eligible questions`);
 }
});
test('new Foundation questions are original and complete',()=>{
 const added=bank().filter(q=>+q.id.slice(1)>=81);
 assert.equal(added.length,F.lots.flat().length);
 for(const q of added){
  assert.equal(q.k,kOf[q.lo],q.id);assert.match(q.source,/quesito originale · CTFL 4\.0\.1/);
  assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4,q.id);
  assert.equal(q.reasons.length,4);assert.ok(q.reasons.every(r=>r.length>20),q.id);assert.equal(q.explanation,q.reasons[q.answer],q.id);
 }
 assert.equal(new Set(bank().map(q=>q.prompt)).size,bank().length,'no duplicated prompts');
 assert.equal(new Set(D.questions.map(q=>q.id)).size,D.questions.length,'unique IDs');
});
test('once every group is covered, 100 mock exams follow the official quotas',()=>{
 if(!C.planReady(bank(),F.plan))return;
 for(let n=0;n<100;n++){const exam=C.planExam(bank(),F.plan);
  assert.equal(exam.length,40);assert.equal(new Set(exam.map(q=>q.id)).size,40);
  for(const g of F.plan)assert.equal(exam.filter(q=>g.los.includes(q.lo)).length,g.n,g.los.join('+'));
  assert.deepEqual([1,2,3].map(k=>exam.filter(q=>q.k===k).length),[8,24,8]);
  assert.deepEqual([1,2,3,4,5,6].map(c=>exam.filter(q=>q.chapter===c).length),[...C.WEIGHTS]);}
});
