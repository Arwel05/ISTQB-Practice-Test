'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const {SCRIPTS}=require('../scripts/build.js'),{terms}=require('../src/terms.js');
const src=name=>fs.readFileSync(path.join(__dirname,'../src',name),'utf8');
function load(names,extra={}){const ctx={...extra};vm.createContext(ctx);for(const n of names)vm.runInContext(src(n),ctx);return ctx;}
const data=load(['content.js','agile.js','itastqb.js','content-en.js']),D=data.TrainerData,EN=D.en;
const locales=load(['locale-it.js','locale-en.js']).TestPilotLocales,IT=locales.it,ENL=locales.en;
const placeholders=s=>[...s.matchAll(/\{(\w+)\}/g)].map(m=>m[1]).sort();
const enText=q=>[q.prompt,...q.options,q.explanation,...(q.reasons||[])].join(' ');

test('editorial fixes preserve q080 answer identity and avoid inflated syllabus claims',()=>{
 const q=D.questions.find(q=>q.id==='q080');
 assert.equal(q.answer,1);
 assert.match(q.options[q.answer],/impegno di manutenzione.*eccessiva fiducia/);
 assert.match(EN.questions[q.id].options[q.answer],/maintenance effort.*excessive trust/);
 for(const dict of [IT,ENL])assert.ok(!dict['settings.aboutText'].includes('{lo}'));
});

test('Italian and English dictionaries have the same keys and placeholders, none empty',()=>{
 assert.deepEqual(Object.keys(ENL).sort(),Object.keys(IT).sort());
 for(const k of Object.keys(IT)){assert.ok(IT[k].trim()&&ENL[k].trim(),k);assert.deepEqual(placeholders(ENL[k]),placeholders(IT[k]),k);}
});
test('every key the interface asks for exists, including dynamic ones',()=>{
 const app=src('app.js')+src('pwa.js');
 const literal=[...app.matchAll(/\bt\('([a-zA-Z0-9.]+)'[,)]/g)].map(m=>m[1]);
 const dynamic=[...['practice','exam','review'].map(m=>'mode.'+m),...['home','learn','practice','exam','progress','glossary','settings'].map(p=>'nav.'+p),...['low','medium','high'].map(c=>'confidence.'+c),...Array.from({length:14},(_,i)=>'day.'+(i+1)),'language.it','language.en','language.switchTo.it','language.switchTo.en'];
 assert.ok(literal.length>200,'scan found the interface keys');
 for(const k of [...literal,...dynamic])assert.ok(k in IT,'missing key '+k);
});
test('English overlay mirrors each Italian question: same IDs, option count, distinct options, answer untouched',()=>{
 const ids=Object.keys(EN.questions);assert.equal(ids.length,80);
 // Exactly the 80 CTFL questions q001–q080; Agile and ITA-STQB stay Italian for now.
 assert.deepEqual(ids,[...D.questions.filter(q=>/^q0[0-8]\d$/.test(q.id)).map(q=>q.id)]);
 for(const id of ids){const it=D.questions.find(q=>q.id===id),en=EN.questions[id];assert.ok(it,id);
  for(const k of Object.keys(en))assert.ok(['prompt','options','explanation','reasons'].includes(k),id+' overrides '+k);
  assert.equal(en.options.length,it.options.length,id);assert.equal(new Set(en.options).size,en.options.length,id);
  if(it.reasons||en.reasons)assert.equal((en.reasons||[]).length,it.reasons.length,id);
  assert.ok(en.prompt.trim()&&en.explanation.trim(),id);}
 assert.deepEqual([...new Set(ids.map(id=>D.questions.find(q=>q.id===id).chapter))].sort(),[1,2,3,4,5,6]);
});
test('translated bank covers the mock-exam quotas 8/6/4/11/9/2, and the exam draws only translated questions',()=>{
 const C=require('../src/core.js'),bank=D.questions.filter(q=>EN.questions[q.id]);
 assert.deepEqual(C.WEIGHTS,[8,6,4,11,9,2]);
 C.WEIGHTS.forEach((n,i)=>assert.ok(bank.filter(q=>q.chapter===i+1).length>=n,'chapter '+(i+1)));
 assert.ok(C.examReady(bank));
 assert.ok(!C.examReady(bank.filter(q=>q.chapter!==6||q.id==='q080')),'one Tools question is not enough');
 for(let i=0;i<20;i++){const ex=C.exam(bank);assert.equal(ex.length,40);assert.ok(ex.every(q=>EN.questions[q.id]));}
});
test('numeric answers keep the same value in both languages',()=>{
 for(const [id,value] of [['q039','3'],['q040','9, 10, 20, 21'],['q041','11'],['q043','4'],['q045','75%'],['q046','75%'],['q047','.*100%'],['q056','0, 1, 99, 100'],['q057','50%'],['q058','2'],['q062','8'],['q063','T3, T2, T1'],['q075','30'],['q076','1']]){const q=D.questions.find(x=>x.id===id);assert.match(q.options[q.answer],new RegExp('^'+value));assert.match(EN.questions[id].options[q.answer],new RegExp('^'+value));}
 assert.match(EN.questions.q062.prompt,/E = \(a \+ 4\*m \+ b\) \/ 6/,'syllabus notation for three-point estimation');
});
test('chapters and glossary are fully covered in English',()=>{
 assert.deepEqual(Object.keys(EN.chapters).map(Number),[...D.chapters.map(ch=>ch.id)]);
 for(const ch of Object.values(EN.chapters))assert.ok(ch.title&&ch.short&&ch.intro);
 assert.equal(EN.glossary.length,D.glossary.length);
});
test('English uses the official ISTQB term wherever the Italian text uses the matching term',()=>{
 let checks=0;
 const check=(itText,enStr,label)=>{for(const tm of terms)if(tm.it.test(itText)){checks++;assert.match(enStr,tm.en,`${label}: "${tm.term}" expected`);}};
 for(const [id,en] of Object.entries(EN.questions))check(enText(D.questions.find(q=>q.id===id)),enText(en),id);
 D.glossary.forEach(([term],i)=>check(term,EN.glossary[i].join(' '),'glossary '+term));
 assert.ok(checks>=30,'terminology checks actually ran: '+checks);
});
test('no Italian left in English strings, except the deliberate way back to Italian',()=>{
 const italian=/\b(della|delle|degli|sono|questo|questa|anche|nella|domande?|risposte?|capitolo|allenamento|simulazione|perché|quindi|oppure)\b|\b(il|lo|gli|che|con|non)\s/i;
 const allowed=new Set(['beta.switch','language.it','language.switchTo.it','language.title']);
 for(const [k,v] of Object.entries(ENL))if(!allowed.has(k))assert.doesNotMatch(v,italian,k);
 for(const [id,q] of Object.entries(EN.questions))assert.doesNotMatch(enText(q),italian,id);
 for(const ch of Object.values(EN.chapters))assert.doesNotMatch(ch.title+' '+ch.intro,italian,ch.title);
 for(const g of EN.glossary)assert.doesNotMatch(g.join(' '),italian,g[0]);
});

// Minimal DOM to render every page in both languages and record any key missing from the active dictionary.
function boot(lang,stored,track='foundation'){
 const store=new Map([['testpilot.track',track],['testpilot.lang',lang],...(stored?[['testpilot.ctfl.v1',JSON.stringify(stored)]]:[])]);
 const handlers={},missing=new Set(),el=()=>({innerHTML:'',textContent:'',classList:{add(){},remove(){},toggle(){}},focus(){},addEventListener(){}});
 const nodes={app:el(),main:el(),toast:el()},skip=el();
 const ctx={localStorage:{getItem:k=>store.get(k)??null,setItem:(k,v)=>store.set(k,String(v))},location:{hash:''},matchMedia:()=>({matches:false}),scrollTo(){},setInterval(){},
  addEventListener:(n,fn)=>{handlers[n]=fn;},document:{documentElement:{lang:''},getElementById:id=>nodes[id]||null,querySelector:()=>skip,querySelectorAll:()=>[],addEventListener(){}}};
 ctx.window=ctx;vm.createContext(ctx);
 for(const n of SCRIPTS.filter(n=>n!=='i18n.js'&&n!=='app.js'))vm.runInContext(src(n),ctx);
 // Record lookups that miss the active dictionary (i18n otherwise falls back silently).
 for(const l of ['it','en']){const dict=ctx.TestPilotLocales[l];ctx.TestPilotLocales[l]=new Proxy(dict,{get:(o,k)=>{if(typeof k==='string'&&!k.endsWith('.one')&&!(k in o)&&l===lang)missing.add(k);return o[k];}});}
 vm.runInContext(src('i18n.js'),ctx);vm.runInContext(src('app.js'),ctx);
 const show=hash=>{ctx.location.hash='#'+hash;handlers.hashchange();return nodes.app.innerHTML;};
 return {ctx,show,missing,doc:ctx.document};
}
function sampleState(){
 const C=require('../src/core.js'),s=C.fresh(),now=Date.now();s.name='Ada';
 const ids=['q002','q040','ita005'];
 s.history=[{id:'h1',mode:'practice',ids,answers:{q002:{choice:3,confidence:'high'},q040:{choice:0,confidence:'low'}},flags:[],index:0,startedAt:now-9e5,deadline:null,finishedAt:now-6e5,score:1}];
 s.active={id:'a1',mode:'practice',ids:['q006','ag002'],answers:{},flags:[],index:1,startedAt:now,deadline:null};
 for(const id of ['q002','q040'])s.stats[id]={seen:1,correct:id==='q002'?1:0,streak:0,lastCorrect:id==='q002',confidence:'medium',lastAt:now,due:now};
 return s;
}
const pages=['home','learn','lesson/1','lesson/8','practice','exam','quiz','result','progress','glossary','settings'];
for(const lang of ['it','en'])test(`every page renders in ${lang} without missing keys or undefined values`,()=>{
 const {show,missing,doc}=boot(lang,sampleState());
 assert.equal(doc.documentElement.lang,lang);
 const seen=new Set();
 for(const p of pages){const html=show(p);seen.add(html);assert.ok(html.length>500,p);assert.doesNotMatch(html,/undefined|NaN|\[object /,p);}
 assert.equal(seen.size,pages.length,'each route renders its own page');
 assert.deepEqual([...missing],[]);
});
test('English beta: counter, translated-only practice choices, exam enabled, untranslated questions marked as Italian',()=>{
 const {show}=boot('en',sampleState());
 assert.match(show('home'),/English beta: 80 of 120 questions translated, including all CTFL questions/);
 const practice=show('practice');assert.doesNotMatch(practice,/value="7"/,'Agile chapters have no English questions yet');assert.match(practice,/value="4">4\. Test techniques/);
 const exam=show('exam');assert.match(exam,/data-action="start-exam"/);assert.doesNotMatch(exam,/available in Italian only/);
 assert.match(show('settings'),/80 of 147 questions translated/);
 const quiz=show('quiz');assert.match(quiz,/Italian only/);assert.match(quiz,/<h1 class="question-title" tabindex="-1" lang="it">/,'the Agile question is still Italian');
 const result=show('result');assert.match(result,/A test reveals an incorrect total/);assert.match(result,/<span lang="it">/);
 assert.match(show('glossary'),/Absence|Equivalence partition/);
 assert.match(show('lesson/1'),/not yet available in English/);
});
test('Italian interface is unchanged by the language layer for questions and exam',()=>{
 const {show}=boot('it',sampleState());
 const home=show('home');assert.doesNotMatch(home,/English beta/);assert.match(home,/Il tuo prossimo passo, più chiaro\.|Bentornato, Ada\./);
 assert.match(show('exam'),/data-action="start-exam"/);
 assert.match(show('result'),/Un test rivela un totale errato/);
 assert.doesNotMatch(show('quiz'),/lang="it"/,'no language marks in the Italian interface');
});
test('reviewer sheet is up to date with the translations',()=>{
 const {sheet}=require('../scripts/review-sheet.js');
 assert.equal(fs.readFileSync(path.join(__dirname,'../REVISIONE-EN.md'),'utf8').replace(/\r\n/g,'\n'),sheet(),'run npm run review:en');
});

test('Foundation and Agile have disjoint banks, chapters, statistics and mock-exam access',()=>{
 const s=sampleState();s.active=null;
 s.stats.ag001={seen:1,correct:1,streak:1,lastCorrect:true,confidence:'high',lastAt:1000,due:2000};
 const f=boot('it',s),a=boot('it',s,'agile');
 const F=f.ctx.TrainerTracks.view('foundation'),A=f.ctx.TrainerTracks.view('agile');
 assert.equal(F.questions.length,120);assert.equal(A.questions.length,27);
 assert.ok(A.questions.every(q=>!F.questions.some(x=>x.id===q.id)));
 assert.doesNotMatch(f.show('learn'),/data-id="7"/);
 assert.doesNotMatch(a.show('learn'),/data-id="1"/);
 assert.doesNotMatch(a.show('exam'),/data-action="start-exam"/);
 assert.match(a.show('exam'),/Simulazione Agile non disponibile/);
 assert.doesNotMatch(a.show('progress'),/data-action="history"/);
 assert.match(a.show('home'),/1 <span>\/ 27/);
 assert.match(f.show('home'),/2 <span>\/ 120/);
 assert.match(a.show('glossary'),/Whole-team approach/);
 assert.doesNotMatch(a.show('practice'),/value="1"/);
 const e=boot('en',s,'agile');assert.match(e.show('practice'),/currently in Italian/);
});

test('legacy mixed sessions are preserved without entering course session totals',()=>{
 const s=sampleState();s.history[0].ids.push('ag001');
 const {ctx,show}=boot('it',s);
 assert.equal(ctx.TrainerTracks.session(s.history[0]),'legacy');
 assert.match(show('progress'),/Archivio precedente/);
 assert.match(show('progress'),/0 completate/);
 assert.match(show('courses'),/CTFL-AT/);
 assert.match(show('quiz'),/sessione precedente|Sessione precedente/);
});
