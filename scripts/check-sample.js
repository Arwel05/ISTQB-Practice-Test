'use strict';
// Local-only check: flags questions that look too close to an official ISTQB sample exam.
// The samples are ISTQB copyright and never enter the repository: pass the paths of the downloaded PDFs (or of their text).
// Usage: node scripts/check-sample.js --track foundation|agile <sample.pdf|.txt> [more samples...]
// Two signals, compared on the English version of each question (all questions are translated):
//  - 5-word sequences shared with a sample question (at least 3, or 25% of the question’s sequences);
//  - distinctive details shared with a sample question (multi-digit numbers, amounts, acronyms): at least 3, and at least 75% of the question’s own details.
// A flag means “compare by hand”, not “copied”.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),{execFileSync}=require('node:child_process'),{SCRIPTS}=require('./build.js');
const args=process.argv.slice(2),ti=args.indexOf('--track'),track=ti>=0?args[ti+1]:'foundation';
const files=args.filter((a,i)=>a!=='--track'&&i!==ti+1);
if(!files.length||!['foundation','agile'].includes(track)){console.error('Uso: node scripts/check-sample.js --track foundation|agile <sample.pdf> [...]');process.exit(2);}
const py='import sys\nfrom pypdf import PdfReader\nsys.stdout.reconfigure(encoding="utf-8")\nprint("\\n".join(p.extract_text() or "" for p in PdfReader(sys.argv[1]).pages))';
const sample=[];
for(const file of files){
 if(!fs.existsSync(file)){console.error('File non trovato: '+file);process.exit(2);}
 const text=file.toLowerCase().endsWith('.pdf')?execFileSync('python',['-I','-c',py,path.resolve(file)],{encoding:'utf8',maxBuffer:1<<26}):fs.readFileSync(file,'utf8');
 // Question bodies start at "Question #N (" lines that are not table-of-contents entries.
 // Page headers and footers (page numbers, versions, copyright) are dropped so their numbers do not count.
 const clean=text.split('\n').filter(l=>!/Page \d+ of \d+|^Version \d|©|Sample Exam|Certified Tester|Foundation Level/.test(l)).join('\n');
 for(const c of clean.split(/\n(?=Question #\d+ \()/))if(/^Question #\d+ \(/.test(c)&&!/\.{10,}/.test(c.split('\n')[0]))sample.push({id:path.basename(file)+' #'+c.match(/#(\d+)/)[1],body:c});
}
const ctx={};vm.createContext(ctx);
for(const f of SCRIPTS.filter(n=>/^(content|agile|itastqb|foundation)/.test(n)))vm.runInContext(fs.readFileSync(path.join(__dirname,'../src',f),'utf8'),ctx);
const D=ctx.TrainerData,inTrack=q=>track==='agile'?q.chapter>=7&&q.chapter<=9:q.chapter<=6;
const bank=D.questions.filter(inTrack);
const words=s=>s.toLowerCase().replace(/[^a-z0-9%€$ ]+/g,' ').split(/\s+/).filter(Boolean);
const shingles=s=>{const w=words(s),out=new Set();for(let i=0;i+5<=w.length;i++)out.add(w.slice(i,i+5).join(' '));return out;};
const marks=s=>new Set([...(s.match(/\d{2,}(?:[.,]\d+)?/g)||[]),...(s.match(/\b[A-Z]{3,}\d*\b/g)||[]).filter(w=>!['ISTQB','CTFL','TDD','ATDD','BDD','API','GUI','WIP','BVA','XP','CRUD','DEVOPS'].includes(w.toUpperCase()))]);
const prepared=sample.map(s=>({...s,sh:shingles(s.body),mk:marks(s.body)}));
let flagged=0;
for(const q of bank){
 const en=D.en.questions[q.id],text=[en.prompt,...en.options].join(' '),sh=shingles(text),mk=marks(text);
 for(const s of prepared){
  const common=[...sh].filter(x=>s.sh.has(x)),shared=[...mk].filter(x=>s.mk.has(x));
  if(common.length>=3&&common.length>=0.25*sh.size||shared.length>=3&&shared.length>=0.75*mk.size){flagged++;console.log(`${q.id} ↔ ${s.id}: ${common.length} sequenze comuni${common.length?' (es. «'+common[0]+'»)':''}${shared.length?'; dettagli: '+shared.join(', '):''}`);}
 }
}
console.log(`${sample.length} domande nei sample, ${bank.length} domande ${track}, ${flagged} coppie da confrontare a mano.`);
process.exitCode=sample.length?0:1;
