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
lots.push([ // Lot 1 · chapter 1 (q081–q106)
 ['FL-1.1.1','Quale è un obiettivo tipico del testing?',
  ['Verificare se i requisiti specificati sono stati soddisfatti','Correggere i difetti trovati nel codice','Garantire che il software sia privo di difetti','Sostituire la revisione dei requisiti da parte del cliente'],
  ['Verificare il soddisfacimento dei requisiti specificati è uno degli obiettivi tipici elencati dal syllabus.','Correggere i difetti è debugging, un’attività diversa dal testing.','Il testing mostra la presenza di difetti, non può garantirne l’assenza.','Il testing fornisce informazioni agli stakeholder, non sostituisce le loro decisioni.']],
 ['FL-1.1.1','Un ente regolatore chiede prove che l’app rispetti una norma sulla privacy. Quale obiettivo del testing risponde a questa esigenza?',
  ['Verificare la conformità del test object a requisiti contrattuali, legali e normativi','Ridurre il numero di righe di codice','Eseguire il debugging dei moduli','Stimare il budget del progetto'],
  ['La verifica di conformità a requisiti legali e normativi è un obiettivo esplicito del testing.','La dimensione del codice non è un obiettivo del testing.','Il debugging trova e corregge le cause, non dimostra la conformità.','La stima del budget è un’attività di gestione del progetto.']],
 ['FL-1.2.2','Quale affermazione descrive la quality assurance (QA)?',
  ['È un approccio preventivo, orientato al processo, di cui è responsabile chiunque lavori al progetto','È un approccio correttivo, orientato al prodotto, svolto solo dai tester','È un sinonimo di testing','Riguarda solo il processo di sviluppo, non quello di test'],
  ['La QA lavora su implementazione e miglioramento dei processi, partendo dall’idea che un buon processo seguito correttamente produca un buon prodotto.','Questa descrizione si avvicina al testing, che è una forma di controllo di qualità; inoltre la QA non è solo dei tester.','Testing e QA sono spesso confusi, ma non coincidono.','La QA si applica sia al processo di sviluppo sia a quello di test.']],
 ['FL-1.2.2','Come usano i risultati dei test il testing e la QA?',
  ['Il testing li usa per correggere difetti; la QA come feedback su quanto funzionano i processi di sviluppo e di test','Li usa solo la QA','Il testing li usa per valutare i processi, la QA per correggere difetti','Nessuno dei due li usa dopo il rilascio'],
  ['Gli stessi risultati servono a due scopi: correggere i difetti del prodotto e migliorare i processi.','Anche il testing li usa, per far correggere i difetti.','Gli scopi sono invertiti.','Non c’è un limite temporale di questo tipo nell’uso dei risultati.']],
 ['FL-1.5.2','Nel whole team approach, chi può svolgere un’attività?',
  ['Qualsiasi membro del team con le conoscenze e le competenze necessarie','Solo chi ha il ruolo formale corrispondente','Solo il tester per i test e solo lo sviluppatore per il codice','Solo il product owner'],
  ['Nel whole team approach chiunque abbia le competenze può svolgere un compito, e tutti sono responsabili della qualità.','Il ruolo formale non limita chi può contribuire.','La divisione rigida dei compiti è proprio ciò che l’approccio supera.','Il product owner è un membro del team, non l’unico esecutore.']],
 ['FL-1.5.2','Quale è un vantaggio del whole team approach?',
  ['Migliora comunicazione e collaborazione e sfrutta le diverse competenze del team','Garantisce sempre il massimo livello di indipendenza del testing','Elimina la necessità dei test di accettazione','Rende inutile condividere lo spazio di lavoro'],
  ['Il syllabus cita dinamiche di team migliori, più comunicazione e collaborazione e sinergia fra le competenze.','Al contrario: in contesti safety-critical può servire più indipendenza di quanta ne offra l’approccio.','I tester aiutano proprio il business a creare test di accettazione adeguati.','La condivisione dello spazio, fisico o virtuale, facilita la comunicazione.']],
 ['FL-1.1.2','Il test di sistema provoca un crash. Quali attività seguono come parte del debugging?',
  ['Riprodurre il malfunzionamento, diagnosticare il difetto e correggerlo','Progettare nuovi casi di test e stimare lo sforzo','Eseguire il confirmation testing e chiudere il report','Rivedere i requisiti con il cliente'],
  ['Il processo tipico di debugging dopo un malfunzionamento è riproduzione, diagnosi e correzione.','Progettare test e stimare sono attività di testing e di gestione.','Il confirmation testing segue il debugging, ma è testing.','La revisione dei requisiti è testing statico, non debugging.']],
 ['FL-1.1.2','Una review del codice individua un difetto. Perché il debugging non richiede riproduzione né diagnosi?',
  ['Il testing statico trova direttamente il difetto: non c’è un malfunzionamento da riprodurre','Perché i difetti trovati in review non vanno corretti','Perché il debugging si applica solo ai requisiti','Perché la review sostituisce il confirmation testing'],
  ['Quando il testing statico identifica un difetto, il debugging consiste solo nel rimuoverlo.','I difetti trovati in review si correggono come gli altri.','Il debugging riguarda anche il codice.','La review non sostituisce la verifica della correzione quando serve.']],
 ['FL-1.2.1','In che modo il testing rappresenta gli utenti nel progetto?',
  ['I tester fanno sì che la comprensione dei bisogni degli utenti sia considerata in tutto il ciclo di sviluppo','I tester sostituiscono gli utenti nel collaudo di accettazione','Il testing elimina la necessità di parlare con gli utenti','I tester decidono le priorità di business al posto degli utenti'],
  ['Coinvolgere un campione rappresentativo di utenti è spesso troppo costoso: i tester ne portano la prospettiva nel progetto.','Il collaudo di accettazione resta legato a utenti e business.','Il testing non elimina il dialogo con gli utenti.','Le priorità di business restano agli stakeholder.']],
 ['FL-1.2.1','Perché il testing contribuisce alla decisione di rilascio?',
  ['Valuta direttamente la qualità del test object e fornisce misure usate nelle decisioni di progetto','Perché garantisce l’assenza di difetti','Perché corregge direttamente i difetti trovati','Perché sostituisce la gestione del progetto'],
  ['Le misure ottenute dal testing entrano nelle decisioni di passaggio da una fase all’altra, compreso il rilascio.','Il testing non può garantire l’assenza di difetti.','La correzione è debugging, non testing.','Il testing alimenta le decisioni, non sostituisce chi le prende.']],
 ['FL-1.2.3','Un firmware si comporta male perché un campo elettromagnetico ha alterato la memoria. Che cosa mostra il caso?',
  ['Un malfunzionamento può essere causato da condizioni ambientali, non solo da errori e difetti','Ogni malfunzionamento nasce da un errore umano nel codice','Un difetto produce sempre un malfunzionamento','Il problema è un errore del tester'],
  ['Il syllabus cita proprio radiazioni e campi elettromagnetici come condizioni ambientali che causano malfunzionamenti.','Errori e difetti non sono le uniche cause di malfunzionamento.','Alcuni difetti producono malfunzionamenti solo in certe condizioni, altri mai.','Nulla indica un errore di chi ha testato.']],
 ['FL-1.2.3','Un analista sotto forte pressione dei tempi fraintende una regola, nel codice nasce un difetto e il cliente vede un calcolo errato. Qual è la causa radice più plausibile?',
  ['La pressione dei tempi che ha portato all’errore','Il calcolo errato visto dal cliente','Il difetto nel codice','Il defect report del problema'],
  ['La causa radice è la ragione fondamentale del problema: intervenire su di essa può prevenire errori simili.','Il calcolo errato è il malfunzionamento osservato.','Il difetto è la conseguenza dell’errore, non la causa radice.','Il defect report documenta il problema, non lo causa.']],
 ['FL-1.4.1','Quale attività di test risponde alla domanda «come testare?»',
  ['La progettazione dei test','L’analisi dei test','Il completamento dei test','Il monitoraggio dei test'],
  ['La progettazione trasforma le condizioni di test in casi di test e altro testware.','L’analisi dei test risponde a «cosa testare?».','Il completamento chiude le attività e raccoglie le lezioni apprese.','Il monitoraggio confronta l’avanzamento con il piano.']],
 ['FL-1.4.1','In quale attività i casi di test vengono organizzati in procedure e suite e si verifica che l’ambiente di test sia configurato correttamente?',
  ['Implementazione dei test','Pianificazione dei test','Analisi dei test','Esecuzione dei test'],
  ['Nell’implementazione si crea il testware necessario all’esecuzione, si organizzano procedure e suite e si prepara l’ambiente.','La pianificazione definisce obiettivi e approccio.','L’analisi identifica le condizioni di test.','L’esecuzione usa ciò che l’implementazione ha preparato.']],
 ['FL-1.4.2','Il team ha poca esperienza di automazione e non dispone di strumenti adatti. Quale aspetto del test process ne è più influenzato?',
  ['Il grado di automazione dei test','Gli obiettivi di business del cliente','La definizione di difetto','I sette principi del testing'],
  ['Competenze del team e strumenti disponibili sono fattori di contesto che incidono sul grado di automazione.','Gli obiettivi del cliente non dipendono dalle competenze del team.','La definizione di difetto non cambia con il contesto.','I principi sono linee guida generali, valide in ogni contesto.']],
 ['FL-1.4.2','Un progetto ha scadenza fissa e budget ridotto. Su quali aspetti del testing incide soprattutto questo vincolo?',
  ['Strategia di test, livello di copertura richiesto e dettaglio del testware','La definizione di errore, difetto e malfunzionamento','I sette principi del testing','Nessuno: il testing non dipende dal contesto'],
  ['I vincoli di progetto influenzano strategia, tecniche, automazione, copertura, dettaglio del testware e reporting.','Le definizioni dei termini non cambiano con il budget.','I principi restano gli stessi.','Il testing dipende sempre dal contesto.']],
 ['FL-1.4.3','Quale prodotto di lavoro è tipico della progettazione dei test?',
  ['Casi di test e test charter, con i requisiti di dati e ambiente','Test log','Test completion report','Test plan'],
  ['La progettazione produce casi di test, test charter, coverage item e requisiti di dati e di ambiente.','Il test log è prodotto dall’esecuzione.','Il report di completamento chiude le attività.','Il test plan nasce dalla pianificazione.']],
 ['FL-1.4.3','Stub, driver e simulatori sono prodotti di quale attività?',
  ['Implementazione dei test, come elementi dell’ambiente di test','Analisi dei test','Completamento dei test','Monitoraggio e controllo dei test'],
  ['Il syllabus li elenca fra gli elementi dell’ambiente di test creati nell’implementazione.','L’analisi produce condizioni di test.','Il completamento produce report e lezioni apprese.','Monitoraggio e controllo producono report di avanzamento e direttive.']],
 ['FL-1.4.4','Quale valore offre la tracciabilità fra risultati dei test e rischi?',
  ['Permette di valutare il livello di rischio residuo del test object','Sostituisce il report di avanzamento','Riduce a zero il numero di test da eseguire','Elimina la necessità del configuration management'],
  ['Il syllabus usa proprio questo esempio: tracciare i risultati sui rischi aiuta a valutare il rischio residuo.','La tracciabilità rende i report più comprensibili, non li sostituisce.','La tracciabilità non elimina i test.','Configuration management e tracciabilità hanno scopi diversi.']],
 ['FL-1.4.4','Un auditor chiede quali requisiti sono coperti dai test. Che cosa permette di rispondere?',
  ['La tracciabilità fra casi di test e requisiti','Il numero totale di test eseguiti','Un test log senza riferimenti ai requisiti','La durata delle sessioni di test'],
  ['Tracciare i casi di test sui requisiti verifica la copertura dei requisiti e facilita gli audit.','Un totale non dice quali requisiti sono coperti.','Senza riferimenti il log non collega test e requisiti.','La durata non misura la copertura.']],
 ['FL-1.4.5','Su quali attività si concentra il ruolo di testing?',
  ['Analisi, progettazione, implementazione ed esecuzione dei test','Pianificazione, monitoraggio, controllo e completamento dei test','Solo esecuzione dei test','Solo gestione dei difetti'],
  ['Il ruolo di testing ha la responsabilità degli aspetti tecnici: analisi, progettazione, implementazione ed esecuzione.','Queste sono le attività tipiche del ruolo di gestione del test.','L’esecuzione è solo una parte del ruolo.','La gestione dei difetti non esaurisce il ruolo.']],
 ['FL-1.4.5','In un team Agile senza test manager, chi svolge i compiti di gestione del test?',
  ['In parte il team Agile stesso; i compiti che riguardano più team possono spettare a test manager esterni al team','Nessuno: in Agile non esistono','Solo lo Scrum Master','Sempre un test manager dedicato in ogni team'],
  ['Il syllabus prevede che alcuni compiti di gestione siano svolti dal team e quelli trasversali da test manager fuori dal team.','I compiti di gestione del test esistono anche nei progetti Agile.','Nessun ruolo specifico è indicato come unico responsabile.','Il ruolo di gestione può essere svolto da persone diverse secondo il contesto.']],
 ['FL-1.5.1','Quale competenza aumenta soprattutto l’efficienza del testing, per esempio scegliendo gli strumenti di test adatti?',
  ['La conoscenza tecnica','La conoscenza del dominio','L’ascolto attivo','La creatività'],
  ['Il syllabus collega la conoscenza tecnica all’efficienza del testing, ad esempio con strumenti appropriati.','La conoscenza del dominio serve a comprendere e comunicare con utenti e business.','L’ascolto attivo fa parte delle capacità di comunicazione.','Creatività e pensiero critico aumentano l’efficacia del testing.']],
 ['FL-1.5.1','Perché le capacità di comunicazione sono cruciali per un tester?',
  ['Perché i risultati dei test possono essere percepiti come critiche al prodotto e all’autore, e vanno comunicati in modo costruttivo','Perché il tester deve convincere il team che il software è perfetto','Perché il tester decide da solo il rilascio','Perché i difetti non vanno mai discussi con gli sviluppatori'],
  ['Chi porta cattive notizie rischia di essere biasimato; anche il confirmation bias rende difficile accettarle.','Il testing non dimostra la perfezione del software.','Il rilascio è una decisione degli stakeholder.','I difetti vanno discussi, in modo costruttivo.']],
 ['FL-1.5.3','Quale è un possibile svantaggio dell’indipendenza del testing?',
  ['L’isolamento dal team di sviluppo, con problemi di comunicazione o rapporti conflittuali','Il tester riconosce tipi di difetti diversi','Il tester può mettere in discussione le assunzioni degli stakeholder','Gli sviluppatori trovano molti difetti nel proprio codice'],
  ['Il syllabus cita isolamento, problemi di comunicazione e rapporto conflittuale, oltre al rischio che gli sviluppatori si sentano meno responsabili.','È un vantaggio dell’indipendenza.','È un vantaggio dell’indipendenza.','È un argomento a favore della familiarità, non uno svantaggio dell’indipendenza.']],
 ['FL-1.5.3','Un componente viene testato da un collega dello stesso team dell’autore. Quale livello di indipendenza c’è?',
  ['Una certa indipendenza','Nessuna indipendenza','Indipendenza alta','Indipendenza molto alta'],
  ['I colleghi dello stesso team offrono una certa indipendenza.','Nessuna indipendenza c’è quando testa l’autore stesso.','L’indipendenza alta richiede tester esterni al team, nella stessa organizzazione.','L’indipendenza molto alta richiede tester esterni all’organizzazione.']]
]);
// LOTS
let next=81;
for(const rows of lots)rows.forEach(([lo,prompt,options,reasons])=>{
 const n=next++,shift=n%4,rotate=a=>a.slice(shift).concat(a.slice(0,shift));
 D.questions.push({id:'q'+String(n).padStart(3,'0'),chapter:+lo[3],lo,k:kOf[lo],prompt,options:rotate(options),answer:(4-shift)%4,reasons:rotate(reasons),explanation:reasons[0],source:'TestPilot · quesito originale · CTFL 4.0.1 · '+lo,syllabusUrl:D.syllabusUrl});
});
D.foundation={los,plan,lots,minutes:60,pass:26};
})(typeof globalThis!=='undefined'?globalThis:this);
