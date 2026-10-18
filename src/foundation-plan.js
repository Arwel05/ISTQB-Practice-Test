/* CTFL 4.0.1 Foundation: objectives, official exam plan and original questions added by lot (q081 onwards).
   Quotas from the Exam Structures & Rules Tables v1.19 (19 August 2026), CTFL v4.0 page: 40 questions (K1 8, K2 24, K3 8), pass mark 26, 60 minutes.
   Questions are original practice material written from the syllabus, not official ISTQB items. */
(function(root){
'use strict';
const D=root.TrainerData;
// [objective, K-level] for the 64 learning objectives of the CTFL 4.0.1 syllabus; the chapter is the second digit.
const los=[['FL-1.1.1',1],['FL-1.1.2',2],['FL-1.2.1',2],['FL-1.2.2',1],['FL-1.2.3',2],['FL-1.3.1',2],['FL-1.4.1',2],['FL-1.4.2',2],['FL-1.4.3',2],['FL-1.4.4',2],['FL-1.4.5',2],['FL-1.5.1',2],['FL-1.5.2',1],['FL-1.5.3',2],
 ['FL-2.1.1',2],['FL-2.1.2',1],['FL-2.1.3',1],['FL-2.1.4',2],['FL-2.1.5',2],['FL-2.1.6',2],['FL-2.2.1',2],['FL-2.2.2',2],['FL-2.2.3',2],['FL-2.3.1',2],
 ['FL-3.1.1',1],['FL-3.1.2',2],['FL-3.1.3',2],['FL-3.2.1',1],['FL-3.2.2',2],['FL-3.2.3',1],['FL-3.2.4',2],['FL-3.2.5',1],
 ['FL-4.1.1',2],['FL-4.2.1',3],['FL-4.2.2',3],['FL-4.2.3',3],['FL-4.2.4',3],['FL-4.3.1',2],['FL-4.3.2',2],['FL-4.3.3',2],['FL-4.4.1',2],['FL-4.4.2',2],['FL-4.4.3',2],['FL-4.5.1',2],['FL-4.5.2',2],['FL-4.5.3',3],
 ['FL-5.1.1',2],['FL-5.1.2',1],['FL-5.1.3',2],['FL-5.1.4',3],['FL-5.1.5',3],['FL-5.1.6',1],['FL-5.1.7',2],['FL-5.2.1',1],['FL-5.2.2',2],['FL-5.2.3',2],['FL-5.2.4',2],['FL-5.3.1',1],['FL-5.3.2',2],['FL-5.3.3',2],['FL-5.4.1',2],['FL-5.5.1',3],
 ['FL-6.1.1',2],['FL-6.2.1',1]].map(([id,k])=>({id,k,chapter:+id[3]}));
const kOf=Object.fromEntries(los.map(lo=>[lo.id,lo.k]));
// Groups draw n questions from several objectives together. Chapter totals 8/6/4/11/9/2.
const plan=[
 [['FL-1.1.1','FL-1.2.2'],1],[['FL-1.5.2'],1],[['FL-1.1.2','FL-1.2.1','FL-1.2.3'],1],[['FL-1.3.1'],1],[['FL-1.4.1','FL-1.4.2','FL-1.4.3','FL-1.4.4','FL-1.4.5'],3],[['FL-1.5.1','FL-1.5.3'],1],
 [['FL-2.1.2'],1],[['FL-2.1.3'],1],[['FL-2.2.1','FL-2.2.2'],1],[['FL-2.2.3','FL-2.3.1'],1],[['FL-2.1.1','FL-2.1.6'],1],[['FL-2.1.4','FL-2.1.5'],1],
 [['FL-3.1.1','FL-3.2.1','FL-3.2.3','FL-3.2.5'],2],[['FL-3.1.2','FL-3.1.3'],1],[['FL-3.2.2','FL-3.2.4'],1],
 [['FL-4.1.1'],1],[['FL-4.3.1','FL-4.3.2','FL-4.3.3'],2],[['FL-4.4.1','FL-4.4.2','FL-4.4.3'],2],[['FL-4.5.1','FL-4.5.2'],1],[['FL-4.2.1','FL-4.2.2','FL-4.2.3','FL-4.2.4','FL-4.5.3'],5],
 [['FL-5.1.2','FL-5.1.6','FL-5.2.1','FL-5.3.1'],1],[['FL-5.1.1','FL-5.1.3'],1],[['FL-5.1.7'],1],[['FL-5.2.2','FL-5.2.3','FL-5.2.4'],1],[['FL-5.3.2','FL-5.3.3'],1],[['FL-5.4.1'],1],[['FL-5.1.4','FL-5.1.5','FL-5.5.1'],3],
 [['FL-6.1.1'],1],[['FL-6.2.1'],1]
].map(([g,n])=>({los:g,n,k:kOf[g[0]]}));
// q004 tests FL-1.2.2, which the syllabus sets at K1.
const q004=D.questions.find(q=>q.id==='q004');if(q004)q004.k=1;
// [objective, question, options (correct first), reasons aligned with the options]. Rotated on insertion like the Agile bank.
const lots=[];
// LOTS
let next=81;
for(const rows of lots)rows.forEach(([lo,prompt,options,reasons])=>{
 const n=next++,shift=n%4,rotate=a=>a.slice(shift).concat(a.slice(0,shift));
 D.questions.push({id:'q'+String(n).padStart(3,'0'),chapter:+lo[3],lo,k:kOf[lo],prompt,options:rotate(options),answer:(4-shift)%4,reasons:rotate(reasons),explanation:reasons[0],source:'TestPilot · quesito originale · CTFL 4.0.1 · '+lo,syllabusUrl:D.syllabusUrl});
});
D.foundation={los,plan,lots,minutes:60,pass:26};
})(typeof globalThis!=='undefined'?globalThis:this);
