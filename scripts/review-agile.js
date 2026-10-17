'use strict';
// Generates REVISIONE-AGILE.md for a CTFL-AT certified reviewer. `npm run review:agile` refreshes it.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..');
function data(){const ctx={};vm.createContext(ctx);for(const f of ['content.js','agile.js','agile-2014.js'])vm.runInContext(fs.readFileSync(path.join(root,'src',f),'utf8'),ctx);return ctx.TrainerData;}
const cell=s=>String(s).replace(/\|/g,'\\|');
function sheet(){
 const D=data(),A=D.agile,qs=D.questions.filter(q=>q.chapter>=7&&q.chapter<=9),L=[];
 L.push('# Revisione delle domande Agile (CTFL-AT 2014)','',
  `Generato da \`npm run review:agile\`. ${qs.length} domande, ${A.los.length} obiettivi (keyword incluse). Le domande da ag028 in poi sono nuove e non ancora riviste.`,'',
  '## Per chi rivede','',
  'Serve una persona con certificazione CTFL-AT. Per ogni domanda verificare:','',
  '- **Obiettivo e livello K**: la domanda misura davvero l’obiettivo indicato, al livello K indicato (K3 = applicare, non ricordare).',
  '- **Una sola risposta difendibile**, coerente con il syllabus 2014.',
  '- **Motivazioni**: ogni alternativa ha una spiegazione corretta.',
  '- **Originalità**: nessuna somiglianza con il sample exam ufficiale o con domande d’esame.','',
  'Le domande con livello K inferiore a quello dell’obiettivo servono come preparazione e non entrano nella simulazione.','');
 L.push('## Copertura','','| Obiettivo | K | Descrizione | Domande (in simulazione) |','|---|---|---|---|');
 for(const lo of A.los){const all=qs.filter(q=>q.lo===lo.id),ok=all.filter(q=>q.k===lo.k);L.push(`| ${lo.id} | K${lo.k} | ${cell(lo.text)} | ${all.length} (${ok.length}) |`);}
 L.push('','## Domande','');
 for(const lo of A.los)for(const q of qs.filter(q=>q.lo===lo.id)){
  L.push(`### ${q.id} · ${q.lo} · K${q.k}${q.k<lo.k?' · preparazione, fuori simulazione':''}`,'',cell(q.prompt),'','| | Alternativa | Motivazione |','|---|---|---|');
  q.options.forEach((o,i)=>L.push(`| ${String.fromCharCode(65+i)}${i===q.answer?' ✔':''} | ${cell(o)} | ${cell(q.reasons[i])} |`));
  L.push('','- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità','','Note:','');
 }
 const extra=qs.filter(q=>!A.los.some(lo=>lo.id===q.lo));
 if(extra.length)L.push('## Approfondimenti fuori syllabus','',...extra.map(q=>`- ${q.id}: ${cell(q.prompt)} (${cell(q.lo)})`),'');
 return L.join('\n')+'\n';
}
if(require.main===module){fs.writeFileSync(path.join(root,'REVISIONE-AGILE.md'),sheet());console.log('Creato REVISIONE-AGILE.md');}
module.exports={sheet};
