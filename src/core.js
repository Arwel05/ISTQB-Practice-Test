(function(root){
'use strict';
const DAY=86400000;
function fresh(){return {schema:1,name:'',createdAt:Date.now(),stats:{},history:[],lessons:[],days:[],bookmarks:[],active:null,examMinutes:60};}
function shuffle(items,rng=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
// Mock-exam quotas for CTFL chapters 1–6.
const WEIGHTS=[8,6,4,11,9,2];
function examReady(bank){return WEIGHTS.every((n,i)=>bank.filter(q=>q.chapter===i+1).length>=n);}
// Exams defined by objective groups: each group draws n questions whose objective is in the group and whose K-level matches.
function planPool(bank,g){return bank.filter(q=>g.los.includes(q.lo)&&q.k===g.k);}
function planReady(bank,plan){return plan.every(g=>planPool(bank,g).length>=g.n);}
function planExam(bank,plan,rng=Math.random){return shuffle(plan.flatMap(g=>{const pool=planPool(bank,g);if(pool.length<g.n)throw Error('Banca insufficiente per '+g.los.join(', '));return shuffle(pool,rng).slice(0,g.n);}),rng);}
function exam(bank,rng=Math.random){return shuffle(WEIGHTS.flatMap((n,i)=>{const pool=bank.filter(q=>q.chapter===i+1);if(pool.length<n)throw Error('Banca insufficiente per il capitolo '+(i+1));return shuffle(pool,rng).slice(0,n);}),rng);}
function priority(q,stats,now){const s=stats[q.id];if(!s)return 50;return (s.due<=now?80:0)+(s.lastCorrect?0:50)+(s.confidence==='low'?20:0)+30*(1-s.correct/s.seen)-Math.min(10,s.seen);}
function adaptive(bank,stats,count=10,chapter=0,now=Date.now(),rng=Math.random){return shuffle(bank.filter(q=>!chapter||q.chapter===chapter),rng).sort((a,b)=>priority(b,stats,now)-priority(a,stats,now)).slice(0,count);}
function record(state,q,answer,confidence='medium',now=Date.now()){
 const old=state.stats[q.id]||{seen:0,correct:0,streak:0}; const correct=answer===q.answer;
 const streak=correct&&confidence!=='low'?old.streak+1:0;
 const delay=correct?(confidence==='low'?DAY:Math.min(30,Math.pow(2,Math.min(streak,5)))*DAY):0;
 state.stats[q.id]={seen:old.seen+1,correct:old.correct+(correct?1:0),streak,lastCorrect:correct,confidence,lastAt:now,due:now+delay};return correct;
}
function due(bank,state,now=Date.now()){return bank.filter(q=>state.stats[q.id]&&state.stats[q.id].due<=now);}
function summarize(bank,stats){const entries=bank.map(q=>stats[q.id]).filter(Boolean);const seen=entries.reduce((n,s)=>n+s.seen,0),correct=entries.reduce((n,s)=>n+s.correct,0);return {unique:entries.length,seen,correct,accuracy:seen?Math.round(correct/seen*100):null,solid:entries.filter(s=>s.streak>=2&&s.lastCorrect&&s.confidence!=='low').length};}
function expired(session,now=Date.now()){return !!session&&session.mode==='exam'&&now>=session.deadline;}
function complete(state,bank,now=Date.now()){
 const s=state.active;if(!s)return null;
 const lookup=new Map(bank.map(q=>[q.id,q]));
 if(s.mode==='exam')s.ids.forEach(id=>record(state,lookup.get(id),s.answers[id]?.choice??-1,s.answers[id]?.confidence||'medium',now));
 const result={...s,finishedAt:now,score:s.ids.filter(id=>s.answers[id]?.choice===lookup.get(id).answer).length};
 state.history.unshift(result);state.history=state.history.slice(0,500);state.active=null;return result;
}
function validateState(value,bank){
 const bad=()=>{throw Error('Il file non è un backup TestPilot valido o appartiene a una versione incompatibile.');};
 if(!value||value.schema!==1||typeof value.name!=='string'||value.name.length>60||!value.stats||typeof value.stats!=='object'||Array.isArray(value.stats)||!Array.isArray(value.history)||value.history.length>500)bad();
 const ids=new Set(bank.map(q=>q.id)); const finite=n=>typeof n==='number'&&Number.isFinite(n)&&n>=0; const integer=n=>finite(n)&&Number.isSafeInteger(n);
 const state=fresh();state.name=value.name;state.createdAt=finite(value.createdAt)?value.createdAt:state.createdAt;
 for(const [id,s]of Object.entries(value.stats)){if(!ids.has(id)||!s||!integer(s.seen)||s.seen<1||!integer(s.correct)||s.correct>s.seen||!integer(s.streak)||s.streak>s.seen||typeof s.lastCorrect!=='boolean'||!['low','medium','high'].includes(s.confidence)||!finite(s.lastAt)||!finite(s.due))bad();state.stats[id]={seen:s.seen,correct:s.correct,streak:s.streak,lastCorrect:s.lastCorrect,confidence:s.confidence,lastAt:s.lastAt,due:s.due};}
 for(const key of ['lessons','days','bookmarks']){if(!Array.isArray(value[key]))bad();state[key]=[...new Set(value[key])];}
 if(state.lessons.some(n=>!Number.isInteger(n)||n<1||!bank.some(q=>q.chapter===n))||state.days.some(n=>!Number.isInteger(n)||n<1||n>14)||state.bookmarks.some(id=>!ids.has(id)))bad();
 const cleanSession=(s,history=false)=>{
  if(!s||typeof s.id!=='string'||s.id.length>100||!['practice','exam','review'].includes(s.mode)||!Array.isArray(s.ids)||s.ids.length<1||s.ids.length>80||new Set(s.ids).size!==s.ids.length||s.ids.some(id=>!ids.has(id))||!s.answers||typeof s.answers!=='object'||Array.isArray(s.answers)||!finite(s.startedAt))bad();
  for(const [id,a]of Object.entries(s.answers)){if(!s.ids.includes(id)||!a||!Number.isInteger(a.choice)||a.choice<0||a.choice>3||!['low','medium','high'].includes(a.confidence))bad();}
  if(s.mode==='exam'&&(s.ids.length!==40||!finite(s.deadline)||s.deadline<=s.startedAt||s.deadline-s.startedAt>75*60000+1000))bad();
  if(!Number.isInteger(s.index)||s.index<0||s.index>=s.ids.length||!Array.isArray(s.flags)||s.flags.some(id=>!s.ids.includes(id)))bad();
  const clean={id:s.id,mode:s.mode,ids:[...s.ids],answers:JSON.parse(JSON.stringify(s.answers)),startedAt:s.startedAt,deadline:s.mode==='exam'?s.deadline:null,index:s.index,flags:[...s.flags]};
  if(history){if(!finite(s.finishedAt)||!integer(s.score)||s.score>s.ids.length)bad();clean.finishedAt=s.finishedAt;clean.score=s.ids.reduce((n,id)=>n+(clean.answers[id]?.choice===bank.find(q=>q.id===id).answer?1:0),0);}
  return clean;
 };
 state.history=value.history.map(s=>cleanSession(s,true));state.active=value.active?cleanSession(value.active):null;state.examMinutes=value.examMinutes===75?75:60;return state;
}
const api={DAY,WEIGHTS,fresh,shuffle,examReady,exam,planReady,planExam,adaptive,record,due,summarize,expired,complete,validateState};root.TrainerCore=api;if(typeof module!=='undefined')module.exports=api;
})(typeof globalThis!=='undefined'?globalThis:this);
