'use strict';
// Local-only check: flags Agile questions that share distinctive details with the official CTFL-AT sample exam.
// The sample is ISTQB copyright and never enters the repository: pass the path of the downloaded PDF (or of its text).
// Usage: node scripts/check-agile-sample.js <ISTQB_CTFL-AT_Sample-Exam-Questions.pdf|.txt>
// The bank is Italian and the sample English, so word overlap is meaningless: the check compares what survives
// translation (multi-digit numbers, amounts, acronyms). A flag means "compare by hand", not "copied".
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),{execFileSync}=require('node:child_process');
const file=process.argv[2];
if(!file||!fs.existsSync(file)){console.error('Indica il percorso del sample exam CTFL-AT (PDF o testo).');process.exit(2);}
const text=file.toLowerCase().endsWith('.pdf')
 ?execFileSync('python',['-I','-c','import sys\nfrom pypdf import PdfReader\nsys.stdout.reconfigure(encoding="utf-8")\nprint("\\n".join(p.extract_text() or "" for p in PdfReader(sys.argv[1]).pages))',path.resolve(file)],{encoding:'utf8',maxBuffer:1<<26})
 :fs.readFileSync(file,'utf8');
// Question bodies start at "Question #N (" lines that are not table-of-contents entries.
const sample=text.split(/\n(?=Question #\d+ \()/).filter(c=>/^Question #\d+ \(/.test(c)&&!/\.{10,}/.test(c.split('\n')[0])).map(c=>({id:c.match(/#(\d+)/)[1],body:c}));
const ctx={};vm.createContext(ctx);
for(const f of ['content.js','agile.js','agile-2014.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,'../src',f),'utf8'),ctx);
const bank=ctx.TrainerData.questions.filter(q=>q.chapter>=7&&q.chapter<=9);
const marks=s=>new Set([...(s.match(/\d{2,}(?:[.,]\d+)?/g)||[]),...(s.match(/\b[A-Z]{3,}\d*\b/g)||[]).filter(w=>!['ISTQB','CTFL','TDD','ATDD','BDD','API','GUI','WIP','BVA','XP','CRUD'].includes(w))]);
let flagged=0;
for(const q of bank){
 const ours=marks([q.prompt,...q.options].join(' '));if(ours.size<2)continue;
 for(const s of sample){const shared=[...ours].filter(m=>marks(s.body).has(m));if(shared.length>=2){flagged++;console.log(`${q.id} ↔ sample #${s.id}: ${shared.join(', ')}`);}}
}
console.log(`${sample.length} domande del sample, ${bank.length} domande Agile, ${flagged} coppie da confrontare a mano.`);
process.exit(sample.length?0:1);
