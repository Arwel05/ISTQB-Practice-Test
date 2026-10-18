'use strict';
// Generates REVISIONE-EN.md: Italian and English side by side, for a CTFL-certified reviewer. `npm run review:en` refreshes it.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),{terms}=require('../src/terms.js');
function data(){const ctx={};vm.createContext(ctx);for(const f of ['content.js','agile.js','agile-2014.js','itastqb.js','foundation-plan.js','content-en.js','content-en-agile.js','content-en-ita.js','content-en-foundation.js','content-en-rotate.js','content-en-chapters.js'])vm.runInContext(fs.readFileSync(path.join(root,'src',f),'utf8'),ctx);return ctx.TrainerData;}
// The 10 questions of the 1.4 pilot, marked so the reviewer can start from them.
const PILOT=['q002','q006','q024','q028','q035','q040','q044','q062','q067','q080'];
const label=re=>re.source.replace(/\\b/g,'').replace(/\[oi\]|\[ei\]|\[il\]/g,'*').replace(/\|/g,' / ');
const cell=s=>String(s).replace(/\|/g,'\\|');
function sheet(){
 const D=data(),EN=D.en,L=[];
 L.push('# Revisione della traduzione inglese (beta)','',
  `Generato da \`npm run review:en\`. ${Object.keys(EN.questions).length} domande tradotte su ${D.questions.length} (tutte le CTFL, q001–q080), più titoli dei capitoli e glossario. Le ${PILOT.length} domande del pilota 1.4 sono marcate «pilota»: conviene partire da quelle.`,'',
  '## Per chi rivede','',
  'Serve una persona con certificazione CTFL, meglio se ha sostenuto l’esame in inglese. Per ogni domanda verificare:','',
  '- **Terminologia**: i termini sono quelli del syllabus CTFL 4.0.1 e del glossario ISTQB.',
  '- **Significato**: la versione inglese chiede la stessa cosa e ha la stessa risposta corretta.',
  '- **Una sola risposta difendibile**: nessuna alternativa diventa corretta, o ambigua, per effetto della traduzione.',
  '- **Stile d’esame**: inglese naturale, senza calchi dall’italiano.','',
  'Segnare le note nella colonna o sotto la domanda. Le alternative compaiono nello stesso ordine in entrambe le lingue: è un vincolo tecnico, perché i backup salvano la posizione della risposta.','',
  '## Termini vincolati','',
  'Un test automatico verifica che, quando il testo italiano usa il termine a sinistra, la versione inglese usi quello a destra.','',
  '| Italiano (modello) | Inglese (syllabus CTFL 4.0.1) | OK? |','|---|---|---|');
 for(const tm of terms)L.push(`| ${cell(label(tm.it))} | ${cell(tm.term)} | |`);
 L.push('','## Domande tradotte','');
 for(const [id,en] of Object.entries(EN.questions)){
  const it=D.questions.find(q=>q.id===id),ch=D.chapters.find(c=>c.id===it.chapter);
  L.push(`### ${id}${PILOT.includes(id)?' · pilota':''} · ${it.lo} · K${it.k} · ${EN.chapters[ch.id].title}`,'','| | Italiano | English |','|---|---|---|',`| Domanda | ${cell(it.prompt)} | ${cell(en.prompt)} |`);
  it.options.forEach((o,i)=>L.push(`| ${String.fromCharCode(65+i)}${i===it.answer?' ✔':''} | ${cell(o)} | ${cell(en.options[i])} |`));
  L.push(`| Spiegazione | ${cell(it.explanation)} | ${cell(en.explanation)} |`,'','- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile','','Note:','');
 }
 L.push('## Capitoli','','| # | Italiano | English |','|---|---|---|');
 for(const ch of D.chapters)L.push(`| ${ch.id} | ${cell(ch.title)} — ${cell(ch.intro)} | ${cell(EN.chapters[ch.id].title)} — ${cell(EN.chapters[ch.id].intro)} |`);
 L.push('','## Glossario','','| Italiano | English |','|---|---|');
 D.glossary.forEach((g,i)=>L.push(`| **${cell(g[0])}** — ${cell(g[1])} | **${cell(EN.glossary[i][0])}** — ${cell(EN.glossary[i][1])} |`));
 return L.join('\n')+'\n';
}
if(require.main===module){fs.writeFileSync(path.join(root,'REVISIONE-EN.md'),sheet());console.log('Creato REVISIONE-EN.md');}
module.exports={sheet};
