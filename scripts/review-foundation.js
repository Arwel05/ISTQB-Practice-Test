'use strict';
// Generates REVISIONE-FOUNDATION.md for a CTFL-certified reviewer. `npm run review:foundation` refreshes it.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
function data(){const ctx={};vm.createContext(ctx);for(const f of ['content.js','foundation-plan.js'])vm.runInContext(fs.readFileSync(path.join(root,'src',f),'utf8'),ctx);return ctx.TrainerData;}
const cell=s=>String(s).replace(/\|/g,'\\|');
function sheet(){
 const D=data(),F=D.foundation,qs=D.questions.filter(q=>q.chapter<=6),L=[];
 L.push('# Revisione delle domande Foundation (CTFL 4.0.1)','',
  `Generato da \`npm run review:foundation\`. ${qs.length} domande sui ${F.los.length} obiettivi del syllabus: q001–q080 sono la banca originale, da q081 in poi sono le domande nuove della 1.8, non ancora riviste.`,'',
  '## Per chi rivede','',
  'Serve una persona con certificazione CTFL. Per ogni domanda nuova verificare:','',
  '- **Obiettivo e livello K**: la domanda misura davvero l’obiettivo indicato, al livello K del syllabus (K3 = applicare).',
  '- **Una sola risposta difendibile**, coerente con il syllabus 4.0.1.',
  '- **Motivazioni**: ogni alternativa ha una spiegazione corretta.',
  '- **Originalità**: nessuna somiglianza con i sample exam ufficiali (il controllo locale `npm run check:sample` non ne ha trovate).','',
  'Per segnalare un problema durante lo studio c’è anche il pulsante «Segnala un problema» sotto ogni domanda dell’app.','');
 L.push('## Copertura e quote d’esame (Exam Structure Tables v1.19)','','| Gruppo d’esame | Domande in simulazione | K | Domande per obiettivo |','|---|---|---|---|');
 for(const g of F.plan)L.push(`| ${g.los.join(', ')} | ${g.n} | K${g.k} | ${g.los.map(lo=>lo+': '+qs.filter(q=>q.lo===lo&&q.k===g.k).length).join(' · ')} |`);
 L.push('','## Domande nuove (da q081)','');
 for(const lo of F.los)for(const q of qs.filter(q=>q.lo===lo.id&&+q.id.slice(1)>=81)){
  L.push(`### ${q.id} · ${q.lo} · K${q.k}`,'',cell(q.prompt),'','| | Alternativa | Motivazione |','|---|---|---|');
  q.options.forEach((o,i)=>L.push(`| ${String.fromCharCode(65+i)}${i===q.answer?' ✔':''} | ${cell(o)} | ${cell(q.reasons[i])} |`));
  L.push('','- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità','','Note:','');
 }
 return L.join('\n')+'\n';
}
if(require.main===module){fs.writeFileSync(path.join(root,'REVISIONE-FOUNDATION.md'),sheet());console.log('Creato REVISIONE-FOUNDATION.md');}
module.exports={sheet};
