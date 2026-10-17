'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const D=require('../src/content.js'),C=require('../src/core.js');
test('bank is original structured content with stable IDs and complete chapter counts',()=>{
 assert.equal(D.questions.length,80);assert.equal(new Set(D.questions.map(q=>q.id)).size,80);
 assert.equal(new Set(D.questions.map(q=>q.prompt)).size,80);
 assert.equal(new Set(D.questions.map(q=>q.lo)).size,64);
 assert.deepEqual(D.chapters.map(ch=>D.questions.filter(q=>q.chapter===ch.id).length),[16,12,8,22,18,4]);
 for(const q of D.questions){assert.equal(q.options.length,4);assert.equal(new Set(q.options).size,4);assert.match(q.lo,new RegExp('^FL-'+q.chapter+'\\.\\d+\\.\\d+$'));assert.ok(q.k>=1&&q.k<=3);assert.ok(q.answer>=0&&q.answer<4);assert.ok(q.explanation.length>60);}
});
test('every generated exam has 40 unique questions with the specified chapter allocation',()=>{
 for(let n=0;n<100;n++){const exam=C.exam(D.questions);assert.equal(exam.length,40);assert.equal(new Set(exam.map(q=>q.id)).size,40);assert.deepEqual(D.chapters.map(ch=>exam.filter(q=>q.chapter===ch.id).length),[8,6,4,11,9,2]);}
});
test('answer rotation preserves intended answer for numerical examples',()=>{
 for(const [snippet,correct]of [['18 delle 24','75%'],['più probabile 7','8 ore'],['120 giornate','30 giornate'],['interi da 10 a 20','9, 10, 20, 21'],['percorso A→B→C→A','75%']]){const q=D.questions.find(q=>q.prompt.includes(snippet));assert.equal(q.options[q.answer],correct);}
});
test('adaptive selection prioritizes mistakes, schedules confident successes, and respects chapter filter',()=>{
 const s=C.fresh(),q=D.questions[0],now=100000;C.record(s,q,(q.answer+1)%4,'high',now);
 assert.equal(s.stats[q.id].lastCorrect,false);assert.equal(C.due(D.questions,s,now).length,1);
 assert.equal(C.adaptive(D.questions,s.stats,10,0,now)[0].id,q.id);
 C.record(s,q,q.answer,'low',now);assert.equal(s.stats[q.id].due,now+C.DAY);assert.equal(s.stats[q.id].streak,0);
 C.record(s,q,q.answer,'high',now);assert.equal(s.stats[q.id].due,now+2*C.DAY);
 C.record(s,q,q.answer,'high',now);assert.equal(s.stats[q.id].due,now+4*C.DAY);assert.equal(C.summarize(D.questions,s.stats).solid,1);
 assert.equal(C.adaptive(D.questions,s.stats,20,6,now).length,4);assert.ok(C.adaptive(D.questions,s.stats,20,6,now).every(q=>q.chapter===6));
});
test('empty progress has no invented accuracy or mastery',()=>{assert.deepEqual(C.summarize(D.questions,{}),{unique:0,seen:0,correct:0,accuracy:null,solid:0});});
test('backup validates complete state and retains active exam answers/deadline',()=>{
 const s=C.fresh(),ids=C.exam(D.questions).map(q=>q.id);s.name='Anna <script>';s.active={id:'session',mode:'exam',ids,answers:{[ids[0]]:{choice:2,confidence:'medium'}},flags:[ids[1]],index:3,startedAt:1000,deadline:3601000};
 assert.deepEqual(C.validateState(JSON.parse(JSON.stringify(s)),D.questions),s);
});
test('backup rejects malformed counters, unknown questions, invalid choices, and duplicate session items',()=>{
 const s=C.fresh(),q=D.questions[0];C.record(s,q,q.answer,'high',1000);
 for(const mutate of [v=>v.stats[q.id].correct=100,v=>v.stats.qBAD=v.stats[q.id],v=>v.lessons=[99],v=>v.name=42,v=>v.bookmarks=['missing']]){const v=JSON.parse(JSON.stringify(s));mutate(v);assert.throws(()=>C.validateState(v,D.questions));}
 const base={id:'s',mode:'practice',ids:[q.id],answers:{[q.id]:{choice:0,confidence:'medium'}},flags:[],index:0,startedAt:1000,deadline:null};
 for(const mutate of [v=>v.active.answers[q.id].choice=4,v=>v.active.ids.push(q.id),v=>v.active.index=100]){const v=JSON.parse(JSON.stringify({...s,active:base}));mutate(v);assert.throws(()=>C.validateState(v,D.questions));}
});
test('import recalculates history scores instead of trusting a reported score',()=>{
 const s=C.fresh(),q=D.questions[0];s.history=[{id:'s',mode:'practice',ids:[q.id],answers:{[q.id]:{choice:(q.answer+1)%4,confidence:'medium'}},flags:[],index:0,startedAt:1000,deadline:null,finishedAt:2000,score:1}];assert.equal(C.validateState(s,D.questions).history[0].score,0);
});
test('deadline persists across restart and completion scores unanswered questions once',()=>{
 const s=C.fresh(),questions=C.exam(D.questions),ids=questions.map(q=>q.id),q=questions[0];
 s.active={id:'timer-test',mode:'exam',ids,answers:{[q.id]:{choice:q.answer,confidence:'medium'}},flags:[],index:39,startedAt:1000,deadline:3601000};
 const restored=C.validateState(JSON.parse(JSON.stringify(s)),D.questions);
 assert.equal(C.expired(restored.active,3600999),false);assert.equal(C.expired(restored.active,3601000),true);
 const result=C.complete(restored,D.questions,3601000);assert.equal(result.score,1);assert.equal(result.ids.length,40);
 assert.equal(C.summarize(D.questions,restored.stats).seen,40);assert.equal(C.summarize(D.questions,restored.stats).correct,1);assert.equal(C.due(D.questions,restored,3601000).length,39);
 assert.equal(C.complete(restored,D.questions,3602000),null);assert.equal(restored.history.length,1);assert.equal(C.summarize(D.questions,restored.stats).seen,40);
});
test('completing a practice session does not double count feedback already recorded',()=>{
 const s=C.fresh(),q=D.questions[0];C.record(s,q,q.answer,'high',1000);
 s.active={id:'practice',mode:'practice',ids:[q.id],answers:{[q.id]:{choice:q.answer,confidence:'high'}},flags:[],index:0,startedAt:1000,deadline:null};
 assert.equal(C.expired(s.active,999999),false);C.complete(s,D.questions,2000);assert.equal(s.stats[q.id].seen,1);assert.equal(s.history[0].score,1);
});
