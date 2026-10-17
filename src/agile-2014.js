/* CTFL-AT 2014 (syllabus v1.0): learning objectives, official exam plan, mapping of the existing Agile questions and original questions added by lot.
   Questions are original practice material, not official ISTQB items; the official sample exam is kept outside the app as an external check. */
(function(root){
'use strict';
const D=root.TrainerData,syllabus='https://istqb.org/wp-content/uploads/2024/11/ISTQB-CTFL-AT_Syllabus_v1.0.pdf';
// [code, K-level, track chapter (7–9 = syllabus 1–3), short Italian summary]. The keyword entries are the K1 “Keywords” rows of the exam tables.
const los=[
 ['FA-1.1.1',1,7,'Concetti di base dello sviluppo Agile secondo il Manifesto Agile'],
 ['FA-1.1.2',2,7,'Vantaggi del whole-team approach'],
 ['FA-1.1.3',2,7,'Benefici di un feedback precoce e frequente'],
 ['FA-1.2.1',1,7,'Approcci di sviluppo Agile (Scrum, Kanban, XP)'],
 ['FA-1.2.2',3,7,'Scrivere user story testabili insieme a sviluppo e business'],
 ['FA-1.2.3',2,7,'Retrospettive come meccanismo di miglioramento del processo'],
 ['FA-1.2.4',2,7,'Uso e scopo della continuous integration'],
 ['FA-1.2.5',1,7,'Differenze fra release e iteration planning e contributo del tester'],
 ['FA-2-KW',1,8,'Keyword del capitolo 2'],
 ['FA-2.1.1',2,8,'Differenze fra testing in progetti Agile e non Agile'],
 ['FA-2.1.2',2,8,'Integrazione fra sviluppo e testing nei progetti Agile'],
 ['FA-2.1.3',2,8,'Ruolo del testing indipendente nei progetti Agile'],
 ['FA-2.2.1',2,8,'Strumenti e tecniche per comunicare stato dei test e qualità del prodotto'],
 ['FA-2.2.2',2,8,'Evoluzione dei test fra iterazioni e automazione contro il rischio di regressione'],
 ['FA-2.3.1',2,8,'Competenze del tester in un team Agile'],
 ['FA-2.3.2',2,8,'Ruolo del tester in un team Agile'],
 ['FA-3-KW',1,9,'Keyword del capitolo 3'],
 ['FA-3.1.1',1,9,'Concetti di TDD, ATDD e BDD'],
 ['FA-3.1.2',1,9,'Concetti della piramide dei test'],
 ['FA-3.1.3',2,9,'Quadranti del testing, livelli e tipi di test'],
 ['FA-3.1.4',3,9,'Esercitare il ruolo del tester in un team Scrum'],
 ['FA-3.2.1',3,9,'Valutare i rischi di qualità in un progetto Agile'],
 ['FA-3.2.2',3,9,'Stimare lo sforzo di test da contenuto dell’iterazione e rischi'],
 ['FA-3.3.1',3,9,'Interpretare informazioni rilevanti per le attività di test'],
 ['FA-3.3.2',2,9,'Spiegare al business come definire criteri di accettazione testabili'],
 ['FA-3.3.3',3,9,'Scrivere casi di test ATDD a partire da una user story'],
 ['FA-3.3.4',3,9,'Scrivere casi di test black-box, funzionali e non funzionali, da user story'],
 ['FA-3.3.5',3,9,'Eseguire testing esplorativo in un progetto Agile'],
 ['FA-3.4.1',1,9,'Strumenti per i tester secondo scopo e attività Agile']
].map(([id,k,chapter,text])=>({id,k,chapter,text}));
const kOf=Object.fromEntries(los.map(lo=>[lo.id,lo.k]));
// Exam Structures & Rules Tables v1.19 (19 August 2026), CTFL-AT page: 40 questions (K1 10, K2 22, K3 8), 1 point each, pass mark 26.
// Groups draw their K1 questions from several objectives together. Chapter totals: 13, 12, 15.
const plan=[
 {los:['FA-1.1.1','FA-1.2.1','FA-1.2.5'],n:5},{los:['FA-1.1.2'],n:2},{los:['FA-1.1.3'],n:2},{los:['FA-1.2.2'],n:1},{los:['FA-1.2.3'],n:2},{los:['FA-1.2.4'],n:1},
 {los:['FA-2-KW'],n:1},{los:['FA-2.1.1'],n:1},{los:['FA-2.1.2'],n:1},{los:['FA-2.1.3'],n:2},{los:['FA-2.2.1'],n:2},{los:['FA-2.2.2'],n:2},{los:['FA-2.3.1'],n:1},{los:['FA-2.3.2'],n:2},
 {los:['FA-3-KW','FA-3.1.1','FA-3.1.2','FA-3.4.1'],n:4},{los:['FA-3.1.3'],n:2},{los:['FA-3.1.4'],n:1},{los:['FA-3.2.1'],n:1},{los:['FA-3.2.2'],n:1},{los:['FA-3.3.1'],n:1},{los:['FA-3.3.2'],n:2},{los:['FA-3.3.3'],n:1},{los:['FA-3.3.4'],n:1},{los:['FA-3.3.5'],n:1}
].map(g=>({...g,k:kOf[g.los[0]]}));
// Existing questions mapped to objectives by content. K2 questions on K3 objectives stay as preparation and are not drawn in the mock exam.
const remap={ag001:['FA-1.1.1',1],ag002:['FA-1.1.1',1],ag003:['FA-1.1.2',2],ag004:['FA-1.1.3',2],ag005:['FA-3.3.2',2],ag006:['FA-1.2.5',1],ag007:['FA-1.2.1',1],
 ag008:['Approfondimento · Scrum Guide 2020',2],ag009:['FA-1.2.3',2],ag010:['FA-1.2.4',2],ag011:['FA-2.2.2',2],ag012:['FA-2.3.2',2],ag013:['FA-2.2.1',2],ag014:['FA-2.2.2',2],
 ag015:['FA-2.1.3',2],ag016:['FA-2.1.1',2],ag017:['FA-3.1.1',1],ag018:['FA-3.1.1',1],ag019:['FA-3.1.1',1],ag020:['FA-3.2.1',2],ag021:['FA-3.4.1',1],ag022:['FA-3.3.4',2],
 ag023:['FA-3.1.3',2],ag024:['FA-3.3.5',2]};
// The chapter follows the objective, so a question moves to the syllabus chapter it actually tests.
for(const q of D.questions)if(remap[q.id]){const [lo,k]=remap[q.id],target=los.find(x=>x.id===lo);q.lo=lo;q.k=k;if(target)q.chapter=target.chapter;}
// [objective, question, options (correct first), reasons aligned with the options]. Rotated on insertion like the rest of the bank.
const lots=[];
lots.push([ // Lot 1 · syllabus chapter 1
 ['FA-1.1.2','Durante la stima di una storia, la tester segnala che un caso limite richiederà dati difficili da preparare. Quale vantaggio del whole-team approach emerge?',
  ['Il rischio entra subito nella stima e nella pianificazione del team','La tester diventa l’unica responsabile della stima','Gli sviluppatori non devono più scrivere test unitari','La storia esce dall’iterazione senza discussione'],
  ['Le competenze del tester arricchiscono le decisioni comuni: il costo della preparazione dei dati viene considerato prima di impegnarsi.','La stima resta una decisione del team; il tester vi contribuisce senza sostituire gli altri.','Il contributo del tester non elimina i test che gli sviluppatori scrivono sul proprio codice.','Il problema segnalato va discusso e valutato insieme, non usato per escludere la storia d’autorità.']],
 ['FA-1.1.2','Quale pratica favorisce il whole-team approach?',
  ['Discutere ogni funzionalità con business, sviluppo e testing insieme (Power of Three)','Separare fisicamente i tester per garantire indipendenza assoluta','Riservare la discussione dei requisiti al solo product owner','Limitare la comunicazione del tester ai defect report formali'],
  ['Le tre prospettive insieme chiariscono i requisiti e i test prima che il lavoro inizi: è un esempio citato dal syllabus.','La separazione riduce collaborazione e feedback; nel whole-team approach il team lavora a stretto contatto.','Il product owner ha un ruolo chiave, ma la comprensione condivisa richiede anche sviluppo e testing.','La comunicazione solo formale rallenta il feedback e ostacola la responsabilità condivisa.']],
 ['FA-1.1.3','A ogni iterazione il cliente vede il software funzionante. Quale beneficio è più rilevante?',
  ['Le incomprensioni sui requisiti emergono presto, quando correggerle costa meno','I test necessari si riducono a zero','Il cliente non può più cambiare le priorità','La documentazione dei requisiti diventa vietata'],
  ['Il feedback frequente fa emergere presto bisogni fraintesi, prima che altro lavoro vi si appoggi.','Il feedback del cliente non sostituisce i test: li completa.','Il feedback serve proprio a riordinare le priorità quando serve.','Il feedback non elimina la documentazione utile.']],
 ['FA-1.1.3','In un progetto i problemi di qualità emergono solo nelle ultime settimane del rilascio. Quale cambiamento sfrutta meglio il feedback precoce?',
  ['Integrare e testare in ogni iterazione, mostrando i risultati agli stakeholder','Rinviare tutti i test a un collaudo finale più lungo','Allungare le iterazioni a sei mesi','Mostrare il prodotto solo quando è privo di difetti'],
  ['Integrazione, test e revisione frequenti producono feedback quando è ancora economico intervenire.','Un collaudo più lungo resta tardivo: i problemi emergono comunque alla fine.','Iterazioni più lunghe ritardano il feedback invece di anticiparlo.','Nessun prodotto si può dimostrare privo di difetti; attendere quel momento elimina il feedback.']],
 ['FA-1.2.1','Quale pratica è caratteristica di Extreme Programming (XP)?',
  ['Pair programming','Kanban board con limiti WIP come unico strumento','Gate di fase con approvazione formale a fine progetto','Pianificazione dettagliata e definitiva di tutto il progetto all’inizio'],
  ['Il pair programming è una delle pratiche XP, insieme a test-first e integrazione continua.','I limiti WIP sono tipici di Kanban, non la pratica distintiva di XP.','I gate di fase appartengono ai modelli sequenziali.','Pianificare tutto in anticipo in modo definitivo contrasta con l’adattamento Agile.']],
 ['FA-1.2.1','In Scrum, chi gestisce e ordina il product backlog?',
  ['Il product owner','Lo Scrum Master','Il tester del team','Il team di sviluppo, senza un responsabile'],
  ['Il product owner rappresenta il cliente e decide l’ordine del backlog.','Lo Scrum Master facilita e rimuove ostacoli, non ordina il backlog.','Il tester contribuisce con rischi e domande, ma non possiede il backlog.','Il team stima e collabora, ma il backlog ha un responsabile: il product owner.']],
 ['FA-1.2.2','La storia dice: “Come cliente voglio pagare velocemente”. Quale riscrittura è più testabile?',
  ['Come cliente registrato voglio pagare con una carta salvata in al massimo due passaggi, per non reinserire i dati','Il pagamento deve essere veloce e intuitivo','Come sistema voglio usare il database dei pagamenti','Come cliente voglio un pagamento migliore di quello dei concorrenti'],
  ['Ruolo, azione e beneficio sono chiari e “due passaggi con carta salvata” si può verificare con un esempio concreto.','“Veloce” e “intuitivo” non hanno una soglia: nessun test può dire se sono soddisfatti.','Descrive una scelta tecnica, non un bisogno di un utente.','Il confronto con i concorrenti non è un criterio verificabile dal team.']],
 ['FA-1.2.2','Storia: “Come bibliotecaria voglio prorogare un prestito”. Quale criterio di accettazione la completa in modo testabile?',
  ['Un prestito non scaduto e senza prenotazioni si proroga di 14 giorni una sola volta; altrimenti il sistema mostra il motivo del rifiuto','La proroga deve funzionare correttamente','Il sistema deve essere facile da usare per le bibliotecarie','La proroga va implementata con una stored procedure'],
  ['Condizioni, durata, limite e comportamento in caso di rifiuto permettono di ricavare test positivi e negativi.','“Correttamente” non dice che cosa verificare.','La facilità d’uso senza una misura non è verificabile.','È un vincolo di implementazione, non un criterio di accettazione del comportamento.']],
 ['FA-1.2.2','Nel refinement una storia è troppo grande per un’iterazione e nessuno concorda sul significato di “cliente affidabile”. Quale azione del tester è più utile?',
  ['Proporre esempi di clienti affidabili e non, e suggerire di dividere la storia in parti verificabili singolarmente','Accettare la storia e chiarire il significato durante l’esecuzione dei test','Scrivere subito casi di test dettagliati senza coinvolgere il business','Chiedere un documento dei requisiti completo prima di qualsiasi discussione'],
  ['Gli esempi rendono testabile il termine ambiguo e storie più piccole si possono completare e verificare in un’iterazione.','Rinviare il chiarimento sposta l’ambiguità al momento più costoso.','Senza il business i test incorporerebbero un’interpretazione non condivisa.','Un documento completo non sostituisce la conversazione e ritarda il feedback.']],
 ['FA-1.2.3','In retrospettiva il tester propone di discutere i difetti trovati tardi nell’iterazione. Perché è appropriato?',
  ['La retrospettiva riguarda processo, persone, relazioni e strumenti, e può portare a miglioramenti del testing','Serve a individuare il responsabile dei difetti','La retrospettiva sostituisce la review del codice','Non è appropriato: il testing è escluso dalle retrospettive'],
  ['Il syllabus cita fra i temi processo, persone, organizzazione, relazioni e strumenti, e prevede decisioni di miglioramento legate al testing: i difetti tardivi sono un buon spunto.','Una retrospettiva efficace evita la ricerca di colpevoli.','La review del codice è un’attività diversa con scopi propri.','I tester partecipano e portano la prospettiva della qualità.']],
 ['FA-1.2.3','Quale condizione rende efficace una retrospettiva?',
  ['Un clima di fiducia in cui si possono segnalare problemi senza timore di colpe','Usare il verbale per valutare le prestazioni individuali','Tenerla solo alla fine del progetto','Discutere soltanto i successi'],
  ['Senza fiducia i problemi reali non emergono e il miglioramento resta superficiale.','Collegarla alle valutazioni individuali spinge a nascondere i problemi.','Il valore viene dal miglioramento iterazione dopo iterazione, non da un bilancio finale.','Ignorare i problemi elimina proprio le occasioni di miglioramento.']],
 ['FA-1.2.3','Dopo una retrospettiva il team introduce una checklist per le storie pronte. Che cosa mostra se il miglioramento funziona?',
  ['Verificare nelle iterazioni successive se calano le storie bloccate per informazioni mancanti','L’approvazione unanime della checklist','Il numero di voci della checklist','Il fatto che nessuno ne parli più'],
  ['Un miglioramento va verificato sull’effetto atteso, con dati delle iterazioni successive.','Il consenso iniziale non dimostra un risultato.','La lunghezza della checklist non misura l’effetto sul flusso di lavoro.','Il silenzio può indicare abbandono, non successo.']],
 ['FA-1.2.4','Quale rischio rimane anche con una continuous integration ben configurata?',
  ['Sfuggono i difetti che nessun controllo automatico verifica','Le modifiche non vengono integrate di frequente','Il feedback arriva solo alla fine del rilascio','La build non viene mai compilata automaticamente'],
  ['La CI dà feedback solo su ciò che i controlli automatici coprono: il resto richiede altri test.','Integrare spesso è proprio ciò che la CI realizza.','La CI fornisce feedback a ogni integrazione.','Compilare automaticamente è una delle sue attività di base.']],
 ['FA-1.2.4','Quale attività fa parte tipicamente di un processo di continuous integration?',
  ['A ogni integrazione: compilare, eseguire test automatici e analisi statica, notificare il risultato al team','Integrare il codice una volta al mese dopo un collaudo manuale','Rilasciare in produzione ogni modifica senza controlli','Sostituire le review con l’integrazione automatica'],
  ['Build, test automatici, analisi statica e notifica del risultato sono le attività tipiche descritte dal syllabus.','Un’integrazione mensile non è continua e ritarda il feedback.','La CI integra e verifica; il rilascio senza controlli non ne fa parte.','La CI non sostituisce le review: le due pratiche si completano.']],
 ['FA-1.2.5','Quale attività del tester appartiene soprattutto alla release planning?',
  ['Contribuire a definire l’approccio di test e i rischi di qualità del rilascio','Scomporre una storia in task di test dell’iterazione','Eseguire la regressione sulla build di oggi','Correggere il codice difettoso'],
  ['Nella release planning il tester aiuta a valutare rischi, approccio e sforzo a livello di rilascio.','Il dettaglio dei task appartiene all’iteration planning.','È esecuzione dei test, non pianificazione.','La correzione è debugging, compito di sviluppo.']],
 ['FA-1.2.5','Quale differenza fra release planning e iteration planning è corretta?',
  ['La release planning guarda al rilascio nel suo insieme; l’iteration planning seleziona e dettaglia le storie della singola iterazione','L’iteration planning guarda all’intero rilascio; la release planning alla singola iterazione','Sono la stessa attività con nomi diversi','La release planning si ripete ogni giorno'],
  ['La release planning definisce backlog e obiettivi del rilascio; l’iteration planning sceglie e scompone il lavoro dell’iterazione.','L’ordine è invertito.','Le due attività hanno orizzonte e livello di dettaglio diversi.','Il riallineamento quotidiano avviene nello stand-up, non nella release planning.']]
]);
D.agile={los,plan,lots,syllabus,minutes:60,pass:26};
let next=28;
for(const rows of lots)rows.forEach(([lo,prompt,options,reasons])=>{
 const n=next++,shift=n%4,rotate=a=>a.slice(shift).concat(a.slice(0,shift)),chapter=los.find(x=>x.id===lo).chapter;
 D.questions.push({id:'ag'+String(n).padStart(3,'0'),chapter,lo,k:kOf[lo],prompt,options:rotate(options),answer:(4-shift)%4,reasons:rotate(reasons),explanation:reasons[0],source:'TestPilot · quesito originale · CTFL-AT 2014 · '+lo,syllabusUrl:syllabus});
});
})(globalThis);
