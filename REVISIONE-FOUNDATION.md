# Revisione delle domande Foundation (CTFL 4.0.1)

Generato da `npm run review:foundation`. 192 domande sui 64 obiettivi del syllabus: q001–q080 sono la banca originale, da q081 in poi sono le domande nuove della 1.8, non ancora riviste.

## Per chi rivede

Serve una persona con certificazione CTFL. Per ogni domanda nuova verificare:

- **Obiettivo e livello K**: la domanda misura davvero l’obiettivo indicato, al livello K del syllabus (K3 = applicare).
- **Una sola risposta difendibile**, coerente con il syllabus 4.0.1.
- **Motivazioni**: ogni alternativa ha una spiegazione corretta.
- **Originalità**: nessuna somiglianza con i sample exam ufficiali (il controllo locale `npm run check:sample` non ne ha trovate).

Per segnalare un problema durante lo studio c’è anche il pulsante «Segnala un problema» sotto ogni domanda dell’app.

## Copertura e quote d’esame (Exam Structure Tables v1.19)

| Gruppo d’esame | Domande in simulazione | K | Domande per obiettivo |
|---|---|---|---|
| FL-1.1.1, FL-1.2.2 | 1 | K1 | FL-1.1.1: 3 · FL-1.2.2: 3 |
| FL-1.5.2 | 1 | K1 | FL-1.5.2: 3 |
| FL-1.1.2, FL-1.2.1, FL-1.2.3 | 1 | K2 | FL-1.1.2: 3 · FL-1.2.1: 3 · FL-1.2.3: 3 |
| FL-1.3.1 | 1 | K2 | FL-1.3.1: 3 |
| FL-1.4.1, FL-1.4.2, FL-1.4.3, FL-1.4.4, FL-1.4.5 | 3 | K2 | FL-1.4.1: 3 · FL-1.4.2: 3 · FL-1.4.3: 3 · FL-1.4.4: 3 · FL-1.4.5: 3 |
| FL-1.5.1, FL-1.5.3 | 1 | K2 | FL-1.5.1: 3 · FL-1.5.3: 3 |
| FL-2.1.2 | 1 | K1 | FL-2.1.2: 3 |
| FL-2.1.3 | 1 | K1 | FL-2.1.3: 3 |
| FL-2.2.1, FL-2.2.2 | 1 | K2 | FL-2.2.1: 3 · FL-2.2.2: 3 |
| FL-2.2.3, FL-2.3.1 | 1 | K2 | FL-2.2.3: 3 · FL-2.3.1: 3 |
| FL-2.1.1, FL-2.1.6 | 1 | K2 | FL-2.1.1: 3 · FL-2.1.6: 3 |
| FL-2.1.4, FL-2.1.5 | 1 | K2 | FL-2.1.4: 3 · FL-2.1.5: 3 |
| FL-3.1.1, FL-3.2.1, FL-3.2.3, FL-3.2.5 | 2 | K1 | FL-3.1.1: 3 · FL-3.2.1: 3 · FL-3.2.3: 3 · FL-3.2.5: 3 |
| FL-3.1.2, FL-3.1.3 | 1 | K2 | FL-3.1.2: 3 · FL-3.1.3: 3 |
| FL-3.2.2, FL-3.2.4 | 1 | K2 | FL-3.2.2: 3 · FL-3.2.4: 3 |
| FL-4.1.1 | 1 | K2 | FL-4.1.1: 3 |
| FL-4.3.1, FL-4.3.2, FL-4.3.3 | 2 | K2 | FL-4.3.1: 3 · FL-4.3.2: 3 · FL-4.3.3: 3 |
| FL-4.4.1, FL-4.4.2, FL-4.4.3 | 2 | K2 | FL-4.4.1: 3 · FL-4.4.2: 3 · FL-4.4.3: 3 |
| FL-4.5.1, FL-4.5.2 | 1 | K2 | FL-4.5.1: 3 · FL-4.5.2: 3 |
| FL-4.2.1, FL-4.2.2, FL-4.2.3, FL-4.2.4, FL-4.5.3 | 5 | K3 | FL-4.2.1: 3 · FL-4.2.2: 3 · FL-4.2.3: 3 · FL-4.2.4: 3 · FL-4.5.3: 3 |
| FL-5.1.2, FL-5.1.6, FL-5.2.1, FL-5.3.1 | 1 | K1 | FL-5.1.2: 3 · FL-5.1.6: 3 · FL-5.2.1: 3 · FL-5.3.1: 3 |
| FL-5.1.1, FL-5.1.3 | 1 | K2 | FL-5.1.1: 3 · FL-5.1.3: 3 |
| FL-5.1.7 | 1 | K2 | FL-5.1.7: 3 |
| FL-5.2.2, FL-5.2.3, FL-5.2.4 | 1 | K2 | FL-5.2.2: 3 · FL-5.2.3: 3 · FL-5.2.4: 3 |
| FL-5.3.2, FL-5.3.3 | 1 | K2 | FL-5.3.2: 3 · FL-5.3.3: 3 |
| FL-5.4.1 | 1 | K2 | FL-5.4.1: 3 |
| FL-5.1.4, FL-5.1.5, FL-5.5.1 | 3 | K3 | FL-5.1.4: 3 · FL-5.1.5: 3 · FL-5.5.1: 3 |
| FL-6.1.1 | 1 | K2 | FL-6.1.1: 3 |
| FL-6.2.1 | 1 | K1 | FL-6.2.1: 3 |

## Domande nuove (da q081)

### q081 · FL-1.1.1 · K1

Quale è un obiettivo tipico del testing?

| | Alternativa | Motivazione |
|---|---|---|
| A | Correggere i difetti trovati nel codice | Correggere i difetti è debugging, un’attività diversa dal testing. |
| B | Garantire che il software sia privo di difetti | Il testing mostra la presenza di difetti, non può garantirne l’assenza. |
| C | Sostituire la revisione dei requisiti da parte del cliente | Il testing fornisce informazioni agli stakeholder, non sostituisce le loro decisioni. |
| D ✔ | Verificare se i requisiti specificati sono stati soddisfatti | Verificare il soddisfacimento dei requisiti specificati è uno degli obiettivi tipici elencati dal syllabus. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q082 · FL-1.1.1 · K1

Un ente regolatore chiede prove che l’app rispetti una norma sulla privacy. Quale obiettivo del testing risponde a questa esigenza?

| | Alternativa | Motivazione |
|---|---|---|
| A | Eseguire il debugging dei moduli | Il debugging trova e corregge le cause, non dimostra la conformità. |
| B | Stimare il budget del progetto | La stima del budget è un’attività di gestione del progetto. |
| C ✔ | Verificare la conformità del test object a requisiti contrattuali, legali e normativi | La verifica di conformità a requisiti legali e normativi è un obiettivo esplicito del testing. |
| D | Ridurre il numero di righe di codice | La dimensione del codice non è un obiettivo del testing. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q087 · FL-1.1.2 · K2

Il test di sistema provoca un crash. Quali attività seguono come parte del debugging?

| | Alternativa | Motivazione |
|---|---|---|
| A | Rivedere i requisiti con il cliente | La revisione dei requisiti è testing statico, non debugging. |
| B ✔ | Riprodurre il malfunzionamento, diagnosticare il difetto e correggerlo | Il processo tipico di debugging dopo un malfunzionamento è riproduzione, diagnosi e correzione. |
| C | Progettare nuovi casi di test e stimare lo sforzo | Progettare test e stimare sono attività di testing e di gestione. |
| D | Eseguire il confirmation testing e chiudere il report | Il confirmation testing segue il debugging, ma è testing. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q088 · FL-1.1.2 · K2

Una review del codice individua un difetto. Perché il debugging non richiede riproduzione né diagnosi?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Il testing statico trova direttamente il difetto: non c’è un malfunzionamento da riprodurre | Quando il testing statico identifica un difetto, il debugging consiste solo nel rimuoverlo. |
| B | Perché i difetti trovati in review non vanno corretti | I difetti trovati in review si correggono come gli altri. |
| C | Perché il debugging si applica solo ai requisiti | Il debugging riguarda anche il codice. |
| D | Perché la review sostituisce il confirmation testing | La review non sostituisce la verifica della correzione quando serve. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q089 · FL-1.2.1 · K2

In che modo il testing rappresenta gli utenti nel progetto?

| | Alternativa | Motivazione |
|---|---|---|
| A | I tester sostituiscono gli utenti nel collaudo di accettazione | Il collaudo di accettazione resta legato a utenti e business. |
| B | Il testing elimina la necessità di parlare con gli utenti | Il testing non elimina il dialogo con gli utenti. |
| C | I tester decidono le priorità di business al posto degli utenti | Le priorità di business restano agli stakeholder. |
| D ✔ | I tester fanno sì che la comprensione dei bisogni degli utenti sia considerata in tutto il ciclo di sviluppo | Coinvolgere un campione rappresentativo di utenti è spesso troppo costoso: i tester ne portano la prospettiva nel progetto. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q090 · FL-1.2.1 · K2

Perché il testing contribuisce alla decisione di rilascio?

| | Alternativa | Motivazione |
|---|---|---|
| A | Perché corregge direttamente i difetti trovati | La correzione è debugging, non testing. |
| B | Perché sostituisce la gestione del progetto | Il testing alimenta le decisioni, non sostituisce chi le prende. |
| C ✔ | Valuta direttamente la qualità del test object e fornisce misure usate nelle decisioni di progetto | Le misure ottenute dal testing entrano nelle decisioni di passaggio da una fase all’altra, compreso il rilascio. |
| D | Perché garantisce l’assenza di difetti | Il testing non può garantire l’assenza di difetti. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q083 · FL-1.2.2 · K1

Quale affermazione descrive la quality assurance (QA)?

| | Alternativa | Motivazione |
|---|---|---|
| A | Riguarda solo il processo di sviluppo, non quello di test | La QA si applica sia al processo di sviluppo sia a quello di test. |
| B ✔ | È un approccio preventivo, orientato al processo, di cui è responsabile chiunque lavori al progetto | La QA lavora su implementazione e miglioramento dei processi, partendo dall’idea che un buon processo seguito correttamente produca un buon prodotto. |
| C | È un approccio correttivo, orientato al prodotto, svolto solo dai tester | Questa descrizione si avvicina al testing, che è una forma di controllo di qualità; inoltre la QA non è solo dei tester. |
| D | È un sinonimo di testing | Testing e QA sono spesso confusi, ma non coincidono. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q084 · FL-1.2.2 · K1

Come usano i risultati dei test il testing e la QA?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Il testing li usa per correggere difetti; la QA come feedback su quanto funzionano i processi di sviluppo e di test | Gli stessi risultati servono a due scopi: correggere i difetti del prodotto e migliorare i processi. |
| B | Li usa solo la QA | Anche il testing li usa, per far correggere i difetti. |
| C | Il testing li usa per valutare i processi, la QA per correggere difetti | Gli scopi sono invertiti. |
| D | Nessuno dei due li usa dopo il rilascio | Non c’è un limite temporale di questo tipo nell’uso dei risultati. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q091 · FL-1.2.3 · K2

Un firmware si comporta male perché un campo elettromagnetico ha alterato la memoria. Che cosa mostra il caso?

| | Alternativa | Motivazione |
|---|---|---|
| A | Il problema è un errore del tester | Nulla indica un errore di chi ha testato. |
| B ✔ | Un malfunzionamento può essere causato da condizioni ambientali, non solo da errori e difetti | Il syllabus cita proprio radiazioni e campi elettromagnetici come condizioni ambientali che causano malfunzionamenti. |
| C | Ogni malfunzionamento nasce da un errore umano nel codice | Errori e difetti non sono le uniche cause di malfunzionamento. |
| D | Un difetto produce sempre un malfunzionamento | Alcuni difetti producono malfunzionamenti solo in certe condizioni, altri mai. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q092 · FL-1.2.3 · K2

Un analista sotto forte pressione dei tempi fraintende una regola, nel codice nasce un difetto e il cliente vede un calcolo errato. Qual è la causa radice più plausibile?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | La pressione dei tempi che ha portato all’errore | La causa radice è la ragione fondamentale del problema: intervenire su di essa può prevenire errori simili. |
| B | Il calcolo errato visto dal cliente | Il calcolo errato è il malfunzionamento osservato. |
| C | Il difetto nel codice | Il difetto è la conseguenza dell’errore, non la causa radice. |
| D | Il defect report del problema | Il defect report documenta il problema, non lo causa. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q093 · FL-1.4.1 · K2

Quale attività di test risponde alla domanda «come testare?»

| | Alternativa | Motivazione |
|---|---|---|
| A | L’analisi dei test | L’analisi dei test risponde a «cosa testare?». |
| B | Il completamento dei test | Il completamento chiude le attività e raccoglie le lezioni apprese. |
| C | Il monitoraggio dei test | Il monitoraggio confronta l’avanzamento con il piano. |
| D ✔ | La progettazione dei test | La progettazione trasforma le condizioni di test in casi di test e altro testware. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q094 · FL-1.4.1 · K2

In quale attività i casi di test vengono organizzati in procedure e suite e si verifica che l’ambiente di test sia configurato correttamente?

| | Alternativa | Motivazione |
|---|---|---|
| A | Analisi dei test | L’analisi identifica le condizioni di test. |
| B | Esecuzione dei test | L’esecuzione usa ciò che l’implementazione ha preparato. |
| C ✔ | Implementazione dei test | Nell’implementazione si crea il testware necessario all’esecuzione, si organizzano procedure e suite e si prepara l’ambiente. |
| D | Pianificazione dei test | La pianificazione definisce obiettivi e approccio. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q095 · FL-1.4.2 · K2

Il team ha poca esperienza di automazione e non dispone di strumenti adatti. Quale aspetto del test process ne è più influenzato?

| | Alternativa | Motivazione |
|---|---|---|
| A | I sette principi del testing | I principi sono linee guida generali, valide in ogni contesto. |
| B ✔ | Il grado di automazione dei test | Competenze del team e strumenti disponibili sono fattori di contesto che incidono sul grado di automazione. |
| C | Gli obiettivi di business del cliente | Gli obiettivi del cliente non dipendono dalle competenze del team. |
| D | La definizione di difetto | La definizione di difetto non cambia con il contesto. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q096 · FL-1.4.2 · K2

Un progetto ha scadenza fissa e budget ridotto. Su quali aspetti del testing incide soprattutto questo vincolo?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Strategia di test, livello di copertura richiesto e dettaglio del testware | I vincoli di progetto influenzano strategia, tecniche, automazione, copertura, dettaglio del testware e reporting. |
| B | La definizione di errore, difetto e malfunzionamento | Le definizioni dei termini non cambiano con il budget. |
| C | I sette principi del testing | I principi restano gli stessi. |
| D | Nessuno: il testing non dipende dal contesto | Il testing dipende sempre dal contesto. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q097 · FL-1.4.3 · K2

Quale prodotto di lavoro è tipico della progettazione dei test?

| | Alternativa | Motivazione |
|---|---|---|
| A | Test log | Il test log è prodotto dall’esecuzione. |
| B | Test completion report | Il report di completamento chiude le attività. |
| C | Test plan | Il test plan nasce dalla pianificazione. |
| D ✔ | Casi di test e test charter, con i requisiti di dati e ambiente | La progettazione produce casi di test, test charter, coverage item e requisiti di dati e di ambiente. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q098 · FL-1.4.3 · K2

Stub, driver e simulatori sono prodotti di quale attività?

| | Alternativa | Motivazione |
|---|---|---|
| A | Completamento dei test | Il completamento produce report e lezioni apprese. |
| B | Monitoraggio e controllo dei test | Monitoraggio e controllo producono report di avanzamento e direttive. |
| C ✔ | Implementazione dei test, come elementi dell’ambiente di test | Il syllabus li elenca fra gli elementi dell’ambiente di test creati nell’implementazione. |
| D | Analisi dei test | L’analisi produce condizioni di test. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q099 · FL-1.4.4 · K2

Quale valore offre la tracciabilità fra risultati dei test e rischi?

| | Alternativa | Motivazione |
|---|---|---|
| A | Elimina la necessità del configuration management | Configuration management e tracciabilità hanno scopi diversi. |
| B ✔ | Permette di valutare il livello di rischio residuo del test object | Il syllabus usa proprio questo esempio: tracciare i risultati sui rischi aiuta a valutare il rischio residuo. |
| C | Sostituisce il report di avanzamento | La tracciabilità rende i report più comprensibili, non li sostituisce. |
| D | Riduce a zero il numero di test da eseguire | La tracciabilità non elimina i test. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q100 · FL-1.4.4 · K2

Un auditor chiede quali requisiti sono coperti dai test. Che cosa permette di rispondere?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | La tracciabilità fra casi di test e requisiti | Tracciare i casi di test sui requisiti verifica la copertura dei requisiti e facilita gli audit. |
| B | Il numero totale di test eseguiti | Un totale non dice quali requisiti sono coperti. |
| C | Un test log senza riferimenti ai requisiti | Senza riferimenti il log non collega test e requisiti. |
| D | La durata delle sessioni di test | La durata non misura la copertura. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q101 · FL-1.4.5 · K2

Su quali attività si concentra il ruolo di testing?

| | Alternativa | Motivazione |
|---|---|---|
| A | Pianificazione, monitoraggio, controllo e completamento dei test | Queste sono le attività tipiche del ruolo di gestione del test. |
| B | Solo esecuzione dei test | L’esecuzione è solo una parte del ruolo. |
| C | Solo gestione dei difetti | La gestione dei difetti non esaurisce il ruolo. |
| D ✔ | Analisi, progettazione, implementazione ed esecuzione dei test | Il ruolo di testing ha la responsabilità degli aspetti tecnici: analisi, progettazione, implementazione ed esecuzione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q102 · FL-1.4.5 · K2

In un team Agile senza test manager, chi svolge i compiti di gestione del test?

| | Alternativa | Motivazione |
|---|---|---|
| A | Solo lo Scrum Master | Nessun ruolo specifico è indicato come unico responsabile. |
| B | Sempre un test manager dedicato in ogni team | Il ruolo di gestione può essere svolto da persone diverse secondo il contesto. |
| C ✔ | In parte il team Agile stesso; i compiti che riguardano più team possono spettare a test manager esterni al team | Il syllabus prevede che alcuni compiti di gestione siano svolti dal team e quelli trasversali da test manager fuori dal team. |
| D | Nessuno: in Agile non esistono | I compiti di gestione del test esistono anche nei progetti Agile. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q103 · FL-1.5.1 · K2

Quale competenza aumenta soprattutto l’efficienza del testing, per esempio scegliendo gli strumenti di test adatti?

| | Alternativa | Motivazione |
|---|---|---|
| A | La creatività | Creatività e pensiero critico aumentano l’efficacia del testing. |
| B ✔ | La conoscenza tecnica | Il syllabus collega la conoscenza tecnica all’efficienza del testing, ad esempio con strumenti appropriati. |
| C | La conoscenza del dominio | La conoscenza del dominio serve a comprendere e comunicare con utenti e business. |
| D | L’ascolto attivo | L’ascolto attivo fa parte delle capacità di comunicazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q104 · FL-1.5.1 · K2

Perché le capacità di comunicazione sono cruciali per un tester?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Perché i risultati dei test possono essere percepiti come critiche al prodotto e all’autore, e vanno comunicati in modo costruttivo | Chi porta cattive notizie rischia di essere biasimato; anche il confirmation bias rende difficile accettarle. |
| B | Perché il tester deve convincere il team che il software è perfetto | Il testing non dimostra la perfezione del software. |
| C | Perché il tester decide da solo il rilascio | Il rilascio è una decisione degli stakeholder. |
| D | Perché i difetti non vanno mai discussi con gli sviluppatori | I difetti vanno discussi, in modo costruttivo. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q085 · FL-1.5.2 · K1

Nel whole team approach, chi può svolgere un’attività?

| | Alternativa | Motivazione |
|---|---|---|
| A | Solo chi ha il ruolo formale corrispondente | Il ruolo formale non limita chi può contribuire. |
| B | Solo il tester per i test e solo lo sviluppatore per il codice | La divisione rigida dei compiti è proprio ciò che l’approccio supera. |
| C | Solo il product owner | Il product owner è un membro del team, non l’unico esecutore. |
| D ✔ | Qualsiasi membro del team con le conoscenze e le competenze necessarie | Nel whole team approach chiunque abbia le competenze può svolgere un compito, e tutti sono responsabili della qualità. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q086 · FL-1.5.2 · K1

Quale è un vantaggio del whole team approach?

| | Alternativa | Motivazione |
|---|---|---|
| A | Elimina la necessità dei test di accettazione | I tester aiutano proprio il business a creare test di accettazione adeguati. |
| B | Rende inutile condividere lo spazio di lavoro | La condivisione dello spazio, fisico o virtuale, facilita la comunicazione. |
| C ✔ | Migliora comunicazione e collaborazione e sfrutta le diverse competenze del team | Il syllabus cita dinamiche di team migliori, più comunicazione e collaborazione e sinergia fra le competenze. |
| D | Garantisce sempre il massimo livello di indipendenza del testing | Al contrario: in contesti safety-critical può servire più indipendenza di quanta ne offra l’approccio. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q105 · FL-1.5.3 · K2

Quale è un possibile svantaggio dell’indipendenza del testing?

| | Alternativa | Motivazione |
|---|---|---|
| A | Il tester riconosce tipi di difetti diversi | È un vantaggio dell’indipendenza. |
| B | Il tester può mettere in discussione le assunzioni degli stakeholder | È un vantaggio dell’indipendenza. |
| C | Gli sviluppatori trovano molti difetti nel proprio codice | È un argomento a favore della familiarità, non uno svantaggio dell’indipendenza. |
| D ✔ | L’isolamento dal team di sviluppo, con problemi di comunicazione o rapporti conflittuali | Il syllabus cita isolamento, problemi di comunicazione e rapporto conflittuale, oltre al rischio che gli sviluppatori si sentano meno responsabili. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q106 · FL-1.5.3 · K2

Un componente viene testato da un collega dello stesso team dell’autore. Quale livello di indipendenza c’è?

| | Alternativa | Motivazione |
|---|---|---|
| A | Indipendenza alta | L’indipendenza alta richiede tester esterni al team, nella stessa organizzazione. |
| B | Indipendenza molto alta | L’indipendenza molto alta richiede tester esterni all’organizzazione. |
| C ✔ | Una certa indipendenza | I colleghi dello stesso team offrono una certa indipendenza. |
| D | Nessuna indipendenza | Nessuna indipendenza c’è quando testa l’autore stesso. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q117 · FL-2.1.1 · K2

In un modello di sviluppo sequenziale, che cosa fanno tipicamente i tester nelle fasi iniziali?

| | Alternativa | Motivazione |
|---|---|---|
| A | Test dinamici su tutto il sistema | Senza codice eseguibile il testing dinamico non è possibile così presto. |
| B | Test di accettazione con gli utenti | L’accettazione arriva quando il sistema è pronto. |
| C | Testing di regressione automatizzato | La regressione richiede un prodotto già esistente. |
| D ✔ | Review dei requisiti, analisi e progettazione dei test | Nei modelli sequenziali il codice eseguibile arriva più tardi: all’inizio si fanno review, analisi e progettazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q118 · FL-2.1.1 · K2

Perché nei progetti Agile si preferiscono documentazione leggera e ampia automazione dei test?

| | Alternativa | Motivazione |
|---|---|---|
| A | Perché la documentazione è vietata | La documentazione utile resta, solo più leggera. |
| B | Perché le iterazioni non producono software funzionante | Ogni iterazione punta proprio a software funzionante. |
| C ✔ | Perché il cambiamento può avvenire in tutto il progetto e la regressione va resa più facile | Il cambiamento continuo richiede documenti leggeri e automazione estesa per la regressione. |
| D | Perché nei progetti Agile non si fa testing manuale | Il testing manuale resta, spesso con tecniche basate sull’esperienza. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q107 · FL-2.1.2 · K1

Quale buona pratica di testing vale per qualsiasi ciclo di sviluppo?

| | Alternativa | Motivazione |
|---|---|---|
| A | I tester rivedono i prodotti di lavoro solo nella versione finale | I tester rivedono i prodotti appena ne esiste una bozza. |
| B ✔ | A ogni attività di sviluppo corrisponde un’attività di test | Così tutte le attività di sviluppo sono soggette a controllo di qualità. |
| C | Il testing inizia solo quando il codice è completo | Contrasta con il principio del testing anticipato. |
| D | Tutti i livelli di test hanno gli stessi obiettivi | Livelli diversi hanno obiettivi specifici e diversi, per evitare ridondanze. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q108 · FL-2.1.2 · K1

Secondo le buone pratiche indipendenti dal ciclo di vita, quando inizia l’analisi e progettazione dei test di un livello?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Durante la corrispondente fase di sviluppo | Iniziare durante la fase di sviluppo corrispondente applica il principio del testing anticipato. |
| B | Dopo il completamento di tutti i livelli precedenti | Attendere tutti i livelli precedenti ritarda il testing senza motivo. |
| C | Solo dopo il rilascio | Dopo il rilascio è troppo tardi per guidare lo sviluppo. |
| D | Quando il cliente approva il contratto | L’approvazione del contratto non è il riferimento indicato. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q109 · FL-2.1.3 · K1

Quale approccio esprime il comportamento atteso con casi di test in linguaggio naturale semplice, di solito nel formato Given/When/Then?

| | Alternativa | Motivazione |
|---|---|---|
| A | Test-Driven Development (TDD) | TDD guida il codice con test scritti prima, a livello di codice. |
| B | Testing esplorativo | Il testing esplorativo non definisce i test prima dello sviluppo. |
| C | Analisi statica | L’analisi statica non esprime comportamenti con esempi. |
| D ✔ | Behavior-Driven Development (BDD) | BDD usa scenari comprensibili agli stakeholder, poi tradotti in test eseguibili. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q110 · FL-2.1.3 · K1

Quale approccio ricava i test dai criteri di accettazione, come parte della progettazione del sistema?

| | Alternativa | Motivazione |
|---|---|---|
| A | Error guessing | Error guessing si basa sull’esperienza di errori ricorrenti. |
| B | Testing di regressione | La regressione non è un approccio test-first. |
| C ✔ | Acceptance Test-Driven Development (ATDD) | In ATDD i test nascono dai criteri di accettazione e sono scritti prima della parte di applicazione da sviluppare. |
| D | Test-Driven Development (TDD) | TDD parte da casi di test a livello di codice, non dai criteri di accettazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q121 · FL-2.1.4 · K2

Quale beneficio per il testing porta DevOps?

| | Alternativa | Motivazione |
|---|---|---|
| A | L’eliminazione completa del testing manuale | Il testing manuale, soprattutto dal punto di vista dell’utente, resta necessario. |
| B | L’assenza di costi per gli strumenti CI/CD | Gli strumenti CI/CD vanno introdotti e mantenuti: è un costo. |
| C | La garanzia che la pipeline non richieda manutenzione | La pipeline va definita e mantenuta: è un rischio citato. |
| D ✔ | Feedback rapido sulla qualità del codice e su eventuali impatti negativi delle modifiche | Feedback rapido, ambienti stabili e minor rischio di regressione sono benefici citati dal syllabus. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q122 · FL-2.1.4 · K2

Quale è un rischio o una sfida di DevOps per il testing?

| | Alternativa | Motivazione |
|---|---|---|
| A | Il feedback sul codice diventa più lento | DevOps accelera il feedback. |
| B | Il rischio di regressione aumenta per l’automazione | L’ampia regressione automatica riduce il rischio di regressione. |
| C ✔ | L’automazione dei test richiede risorse aggiuntive e può essere difficile da mantenere | Il syllabus cita pipeline da definire, strumenti da mantenere e automazione costosa da creare e mantenere. |
| D | La visibilità sulle caratteristiche non funzionali diminuisce | Al contrario, la visibilità sul non funzionale aumenta. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q123 · FL-2.1.5 · K2

Quale pratica realizza lo shift left?

| | Alternativa | Motivazione |
|---|---|---|
| A | Scrivere i casi di test dopo il codice | Scrivere i test prima del codice è una pratica di shift left. |
| B ✔ | Rivedere le specifiche dal punto di vista del tester prima che il codice esista | Le review delle specifiche fatte dai tester trovano presto ambiguità, incompletezze e incoerenze. |
| C | Rinviare i test non funzionali al collaudo finale | Lo shift left anticipa anche il non funzionale, già dal test di componente quando possibile. |
| D | Eseguire l’analisi statica solo dopo il rilascio | L’analisi statica va fatta prima del testing dinamico o in un processo automatico. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q124 · FL-2.1.5 · K2

Che cosa NON significa lo shift left?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Trascurare il testing nelle fasi successive del ciclo di vita | Il syllabus precisa che anticipare il testing non significa trascurare quello successivo. |
| B | Anticipare il testing senza aspettare il codice | È proprio la definizione di shift left. |
| C | Accettare più sforzo iniziale per risparmiarne dopo | Il syllabus prevede costi o formazione anticipati, compensati da risparmi successivi. |
| D | Coinvolgere gli stakeholder perché sostengano l’approccio | Il sostegno degli stakeholder è indicato come importante. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q119 · FL-2.1.6 · K2

Quale domanda fa parte di una retrospettiva?

| | Alternativa | Motivazione |
|---|---|---|
| A | Quali test eliminare senza discuterne? | Le decisioni nascono dalla discussione, non la evitano. |
| B ✔ | Che cosa non ha funzionato e potrebbe essere migliorato? | Le retrospettive chiedono cosa ha funzionato, cosa no e come portare i miglioramenti nel futuro. |
| C | Chi è il responsabile dei difetti trovati? | Una retrospettiva non serve a cercare colpevoli. |
| D | Quale stipendio assegnare ai membri del team? | Le retribuzioni non sono un tema della retrospettiva. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q120 · FL-2.1.6 · K2

Quale beneficio tipico per il testing portano le retrospettive?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Migliore qualità del testware, per esempio rivedendo insieme i processi di test | Il syllabus cita testware migliore, più efficacia ed efficienza, coesione del team, base di test migliore e collaborazione. |
| B | La garanzia che non ci saranno più difetti | Nessuna pratica garantisce l’assenza di difetti. |
| C | L’eliminazione del report di completamento | I risultati della retrospettiva confluiscono di solito proprio nel report di completamento. |
| D | La sostituzione della pianificazione dei test | La retrospettiva migliora il processo, non sostituisce la pianificazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q111 · FL-2.2.1 · K2

Quale livello di test si concentra su validazione e disponibilità al rilascio, idealmente svolto dagli utenti previsti?

| | Alternativa | Motivazione |
|---|---|---|
| A | Test di sistema | Il test di sistema verifica il comportamento complessivo, spesso con un team indipendente. |
| B ✔ | Test di accettazione | Il test di accettazione dimostra che il sistema soddisfa i bisogni di business degli utenti. |
| C | Test di componente | Il test di componente verifica i componenti isolati. |
| D | Test di integrazione di componenti | L’integrazione di componenti verifica interfacce e interazioni fra componenti. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q112 · FL-2.2.2 · K2

Che cosa caratterizza il white-box testing?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Ricava i test dalla struttura interna, come codice, architettura o flussi di dati, e mira a coprirla | Il white-box testing è basato sulla struttura e punta a coprirla in misura accettabile. |
| B | Ricava i test solo dalla documentazione dei requisiti | Questo è il black-box testing, basato sulle specifiche. |
| C | Valuta solo le caratteristiche non funzionali | Funzionale, non funzionale, black-box e white-box sono tipi diversi. |
| D | Si applica solo al livello di accettazione | Tutti i tipi di test si applicano a tutti i livelli. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q113 · FL-2.2.2 · K2

Si verifica che una funzione di ricerca risponda entro due secondi mentre restituisce i risultati corretti. Che cosa mostra il caso?

| | Alternativa | Motivazione |
|---|---|---|
| A | Il test è solo funzionale | Il limite di tempo è una caratteristica non funzionale. |
| B | I test non funzionali si eseguono solo dopo il rilascio | Il non funzionale può iniziare presto, anche nelle review o nei test di componente. |
| C | Il test è white-box perché misura un tempo | Misurare un tempo non rende il test basato sulla struttura. |
| D ✔ | Molti test non funzionali nascono da test funzionali, verificando anche un vincolo non funzionale | Il syllabus spiega che molti test non funzionali riusano test funzionali aggiungendo un vincolo, come un tempo massimo. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q114 · FL-2.2.3 · K2

Dopo la correzione di un difetto il tester riesegue il test che falliva e passa. Che cosa resta da fare per controllare effetti collaterali?

| | Alternativa | Motivazione |
|---|---|---|
| A | Ripetere solo lo stesso test più volte | Ripetere lo stesso test non controlla le altre parti. |
| B | Il debugging del modulo corretto | Il debugging è già stato fatto: ora serve testing. |
| C ✔ | Testing di regressione, guidato dall’analisi d’impatto | La regressione cerca conseguenze indesiderate della modifica; l’analisi d’impatto aiuta a scegliere cosa ripetere. |
| D | Nulla: il confirmation testing basta | Il confirmation testing verifica solo la correzione del difetto originale. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q115 · FL-2.3.1 · K2

Quale situazione è un trigger di testing di manutenzione?

| | Alternativa | Motivazione |
|---|---|---|
| A | La stima iniziale del progetto | La stima iniziale non riguarda un sistema in esercizio. |
| B ✔ | La migrazione del sistema a una nuova piattaforma | Aggiornamenti e migrazioni dell’ambiente operativo sono trigger tipici della manutenzione. |
| C | La stesura dei primi requisiti di un nuovo prodotto | Un prodotto nuovo non è in manutenzione. |
| D | La prima review del codice di un componente nuovo | La review di codice nuovo appartiene allo sviluppo. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q116 · FL-2.3.1 · K2

Un sistema viene dismesso. Che cosa può richiedere il testing di manutenzione?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Verificare l’archiviazione dei dati e le procedure di ripristino o recupero | Il ritiro di un sistema può richiedere test di archiviazione dei dati e delle procedure di recupero. |
| B | Nulla: un sistema dismesso non si testa | Anche la dismissione è un trigger di manutenzione. |
| C | Solo test di prestazioni | Le prestazioni non sono il punto principale della dismissione. |
| D | Solo il test di componente | Il livello di test dipende da ciò che cambia, non solo dai componenti. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q125 · FL-3.1.1 · K1

Quale di questi prodotti di lavoro può essere esaminato con il testing statico?

| | Alternativa | Motivazione |
|---|---|---|
| A | Solo il codice eseguibile in produzione | Il testing statico non richiede codice in esecuzione. |
| B | Solo l’interfaccia grafica in esecuzione | Osservare l’interfaccia in esecuzione è testing dinamico. |
| C | Nessuno: il testing statico richiede l’esecuzione | È il contrario: il testing statico non esegue il software. |
| D ✔ | Una test charter | Qualsiasi prodotto di lavoro leggibile e comprensibile, comprese test charter, casi di test e backlog item, può essere esaminato staticamente. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q126 · FL-3.1.1 · K1

Quale prodotto di lavoro è poco adatto al testing statico?

| | Alternativa | Motivazione |
|---|---|---|
| A | Un modello dell’architettura | I modelli sono prodotti di lavoro esaminabili. |
| B | Un elemento del product backlog | Gli elementi del backlog si possono rivedere. |
| C ✔ | Codice eseguibile di terze parti che non va analizzato per motivi legali | Il syllabus esclude i prodotti difficili da interpretare per le persone e che non vanno analizzati con strumenti, come codice di terzi per vincoli legali. |
| D | Un contratto con il cliente | Anche i contratti si possono rivedere. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q133 · FL-3.1.2 · K2

Perché il testing statico ha valore anche quando seguirà il testing dinamico?

| | Alternativa | Motivazione |
|---|---|---|
| A | Perché garantisce l’assenza di malfunzionamenti in esecuzione | Nessuna tecnica garantisce l’assenza di malfunzionamenti. |
| B | Perché misura le prestazioni del sistema | Le prestazioni si misurano eseguendo il software. |
| C | Perché sostituisce il test di accettazione | Il test di accettazione resta necessario. |
| D ✔ | Può trovare difetti che il testing dinamico non trova, come codice irraggiungibile o difetti in prodotti non eseguibili | Il testing statico trova presto difetti diversi, anche in prodotti che non si possono eseguire. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q134 · FL-3.1.2 · K2

Quale vantaggio del testing statico riguarda i costi?

| | Alternativa | Motivazione |
|---|---|---|
| A | Elimina i costi di manutenzione | La manutenzione resta necessaria. |
| B | Rende gratuiti gli strumenti di analisi | Gli strumenti hanno comunque un costo. |
| C ✔ | I difetti trovati presto sono di solito meno costosi da correggere | Trovare i difetti presto evita che si propaghino nei prodotti successivi e riduce i costi. |
| D | Il testing statico non richiede tempo | Le review richiedono tempo e preparazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q135 · FL-3.1.3 · K2

Quale differenza fra testing statico e dinamico è corretta?

| | Alternativa | Motivazione |
|---|---|---|
| A | Non c’è differenza negli obiettivi | Entrambi valutano la qualità, ma con meccanismi diversi. |
| B ✔ | Il testing statico trova direttamente i difetti; il testing dinamico provoca malfunzionamenti da cui si risale ai difetti | È la distinzione principale descritta dal syllabus. |
| C | Il testing statico richiede l’esecuzione del software | Il testing statico non esegue il software. |
| D | Il testing dinamico si applica a prodotti non eseguibili | I prodotti non eseguibili si esaminano solo staticamente. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q136 · FL-3.1.3 · K2

Quale caratteristica di qualità si misura soprattutto con il testing dinamico?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | L’efficienza prestazionale | Le prestazioni dipendono dall’esecuzione del codice. |
| B | La manutenibilità del codice | La manutenibilità si valuta anche staticamente. |
| C | La coerenza fra requisiti | Le incoerenze fra requisiti si trovano con le review. |
| D | La conformità del codice agli standard | La conformità agli standard di codifica si verifica staticamente. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q127 · FL-3.2.1 · K1

Quale beneficio porta un feedback precoce e frequente degli stakeholder?

| | Alternativa | Motivazione |
|---|---|---|
| A | Sostituisce il testing dinamico | Il feedback non sostituisce l’esecuzione dei test. |
| B ✔ | Permette di comunicare presto possibili problemi di qualità e di evitare fraintendimenti sui requisiti | Il feedback frequente fa emergere presto incomprensioni e problemi, quando correggerli costa meno. |
| C | Garantisce che i requisiti non cambino più | Il feedback può proprio portare a cambiare i requisiti. |
| D | Rende inutili le review | Le review restano utili. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q128 · FL-3.2.1 · K1

Che cosa può succedere se gli stakeholder non danno feedback durante lo sviluppo?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Il prodotto può non corrispondere alla loro visione, con rilavorazioni costose e scadenze mancate | Il syllabus cita prodotti lontani dalla visione degli stakeholder, rilavorazioni, ritardi e perfino il fallimento del progetto. |
| B | Il prodotto risulta sempre conforme alle aspettative | Senza feedback le aspettative non vengono verificate. |
| C | I difetti diminuiscono automaticamente | L’assenza di feedback non riduce i difetti. |
| D | I test di accettazione diventano superflui | I test di accettazione restano necessari. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q137 · FL-3.2.2 · K2

In quale attività del processo di review si definiscono scopo, prodotto da rivedere, caratteristiche di qualità e criteri di uscita?

| | Alternativa | Motivazione |
|---|---|---|
| A | Review individuale | Nella review individuale ciascuno esamina il prodotto. |
| B | Comunicazione e analisi | Nella comunicazione e analisi si discutono le anomalie. |
| C | Correzione e reporting | Nella correzione e reporting si correggono i difetti e si comunicano i risultati. |
| D ✔ | Pianificazione | La pianificazione definisce l’ambito della review, i criteri di uscita, lo sforzo e i tempi. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q138 · FL-3.2.2 · K2

Che cosa avviene nella fase di comunicazione e analisi della review?

| | Alternativa | Motivazione |
|---|---|---|
| A | Si distribuiscono i materiali ai partecipanti | La distribuzione dei materiali avviene all’avvio della review. |
| B | Si chiude la review senza discussione | La discussione è il cuore di questa fase. |
| C ✔ | Le anomalie trovate vengono analizzate e si decidono stato, responsabilità e azioni | Le anomalie non sono automaticamente difetti: vanno analizzate e decise, spesso in una riunione. |
| D | Si stabiliscono i criteri di uscita | I criteri di uscita si definiscono nella pianificazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q129 · FL-3.2.3 · K1

Quale ruolo raccoglie le anomalie e registra le informazioni della review, come le decisioni?

| | Alternativa | Motivazione |
|---|---|---|
| A | Il moderatore | Il moderatore facilita le riunioni. |
| B | L’autore | L’autore crea e corregge il prodotto di lavoro. |
| C | Il manager | Il manager decide cosa rivedere e mette a disposizione le risorse. |
| D ✔ | Lo scriba (recorder) | Lo scriba raccoglie le anomalie dei revisori e registra informazioni e decisioni. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q130 · FL-3.2.3 · K1

Quale ruolo ha la responsabilità complessiva della review e decide chi coinvolgere, quando e dove?

| | Alternativa | Motivazione |
|---|---|---|
| A | Lo scriba | Lo scriba registra anomalie e decisioni. |
| B | L’autore | L’autore crea e corregge il prodotto. |
| C ✔ | Il review leader | Il review leader organizza la review e ne ha la responsabilità complessiva. |
| D | Il revisore | Il revisore esegue l’esame del prodotto. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q139 · FL-3.2.4 · K2

Quale tipo di review è guidato dall’autore e può avere fra gli obiettivi anche formare i revisori?

| | Alternativa | Motivazione |
|---|---|---|
| A | Review informale | La review informale non segue un processo definito. |
| B ✔ | Walkthrough | Il walkthrough, guidato dall’autore, può servire a formare, creare consenso, generare idee e trovare anomalie. |
| C | Ispezione | Nell’ispezione l’autore non può fare il review leader né lo scriba. |
| D | Review tecnica | La review tecnica è guidata da un moderatore. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q140 · FL-3.2.4 · K2

Quale affermazione sulla review tecnica è corretta?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | È svolta da revisori tecnicamente qualificati e guidata da un moderatore, per creare consenso e prendere decisioni tecniche | Consenso e decisioni su problemi tecnici sono gli obiettivi tipici della review tecnica. |
| B | È sempre guidata dall’autore | A guidare è il moderatore, non l’autore. |
| C | Non ha alcun obiettivo oltre alla formazione | Ha più obiettivi, fra cui trovare anomalie e valutare la qualità. |
| D | È il tipo di review più formale | Il tipo più formale è l’ispezione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q131 · FL-3.2.5 · K1

Quale fattore contribuisce al successo di una review?

| | Alternativa | Motivazione |
|---|---|---|
| A | Ridurre al minimo il tempo di preparazione | Serve tempo adeguato per prepararsi. |
| B ✔ | Obiettivi chiari e criteri di uscita misurabili | Obiettivi chiari e criteri di uscita misurabili sono fra i fattori di successo citati. |
| C | Usare la review per valutare le prestazioni dei partecipanti | Valutare i partecipanti non deve mai essere un obiettivo. |
| D | Rivedere in una sola volta il documento intero, anche se molto lungo | Conviene rivedere porzioni piccole. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q132 · FL-3.2.5 · K1

Quale altro fattore favorisce review efficaci?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Il supporto del management e una formazione adeguata dei partecipanti | Il syllabus cita supporto del management, formazione e reviews come parte della cultura dell’organizzazione. |
| B | L’assenza di feedback agli autori | Il feedback a stakeholder e autori è un fattore di successo. |
| C | Scegliere sempre l’ispezione, qualunque sia il contesto | Va scelto il tipo di review adatto al contesto. |
| D | Tenere segreti i risultati della review | I risultati vanno comunicati, non nascosti. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q143 · FL-4.1.1 · K2

Un tester ricava i test dalla struttura del flusso di controllo del codice. Quale famiglia di tecniche usa?

| | Alternativa | Motivazione |
|---|---|---|
| A | Nessuna tecnica: è debugging | Progettare test dalla struttura è testing, non debugging. |
| B ✔ | Tecniche white-box | Le tecniche white-box si basano sulla struttura interna del test object, come il flusso di controllo. |
| C | Tecniche black-box | Le tecniche black-box si basano sulle specifiche, non sulla struttura. |
| D | Tecniche basate sull’esperienza | Le tecniche basate sull’esperienza usano conoscenza ed esperienza del tester. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q144 · FL-4.1.1 · K2

Quale famiglia di tecniche usa come base principale conoscenza ed esperienza del tester?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Tecniche basate sull’esperienza | Error guessing, testing esplorativo e checklist sfruttano l’esperienza di chi testa. |
| B | Tecniche black-box | Le tecniche black-box partono dalle specifiche. |
| C | Tecniche white-box | Le tecniche white-box partono dalla struttura. |
| D | Tecniche di analisi statica automatica | L’analisi statica automatica non è una famiglia di tecniche di progettazione dei test. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q160 · FL-4.2.4 · K3

Modello a stati: Bloccato →(codice corretto)→ Attivo; Attivo →(timeout)→ Bloccato; Attivo →(logout)→ Uscito; Uscito →(login)→ Attivo. Partendo da Bloccato, quale sequenza copre tutte le transizioni valide in un solo test?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | codice corretto, timeout, codice corretto, logout, login | Copre Bloccato→Attivo, Attivo→Bloccato, Attivo→Uscito e Uscito→Attivo: tutte e quattro le transizioni valide. |
| B | codice corretto, logout, login | Manca la transizione Attivo→Bloccato per timeout. |
| C | codice corretto, timeout, codice corretto, timeout | Mancano Attivo→Uscito e Uscito→Attivo. |
| D | logout, login, timeout | Da Bloccato il logout non è una transizione valida. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q145 · FL-4.3.1 · K2

Un programma ha 40 istruzioni eseguibili e la suite ne esegue 30. Quale affermazione è corretta?

| | Alternativa | Motivazione |
|---|---|---|
| A | La copertura delle istruzioni è del 30% | Il 30 è il numero di istruzioni eseguite, non la percentuale. |
| B | La copertura dei rami è sicuramente del 75% | Copertura delle istruzioni e dei rami sono misure diverse. |
| C | Il 75% dei difetti è stato trovato | La copertura non misura la percentuale di difetti trovati. |
| D ✔ | La copertura delle istruzioni è del 75%, ma questo non dimostra che le istruzioni eseguite siano corrette | 30 su 40 dà il 75%; la copertura misura l’esecuzione, non la correttezza dei risultati. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q146 · FL-4.3.1 · K2

Che cosa NON garantisce il 100% di copertura delle istruzioni?

| | Alternativa | Motivazione |
|---|---|---|
| A | Che i test abbiano esercitato il codice | Raggiungere la copertura implica aver eseguito il codice. |
| B | Che esista una misura di copertura definita | La copertura delle istruzioni è appunto una misura definita. |
| C ✔ | Che tutta la logica delle decisioni sia stata testata, per esempio entrambi gli esiti di ogni decisione | Si possono eseguire tutte le istruzioni senza percorrere l’esito falso di un IF senza ELSE. |
| D | Che ogni istruzione eseguibile sia stata eseguita almeno una volta | È proprio ciò che il 100% delle istruzioni garantisce. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q147 · FL-4.3.2 · K2

Che cosa conta come ramo nella copertura dei rami?

| | Alternativa | Motivazione |
|---|---|---|
| A | Ogni istruzione eseguibile | Le istruzioni sono l’elemento della copertura delle istruzioni. |
| B ✔ | Un trasferimento di controllo fra due nodi del grafo di flusso, condizionato o incondizionato | Il syllabus considera rami sia i trasferimenti condizionati sia quelli incondizionati. |
| C | Solo l’esito vero di ogni IF | Anche l’esito falso è un ramo. |
| D | Ogni riga di commento | I commenti non sono codice eseguibile. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q148 · FL-4.3.3 · K2

Quale è un punto di forza del white-box testing?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Tiene conto dell’intera implementazione, quindi trova difetti anche quando le specifiche sono vaghe o incomplete | Il syllabus indica questo vantaggio, insieme alla misura oggettiva della copertura. |
| B | Trova sempre i requisiti non implementati | È proprio il suo limite: non vede ciò che manca nel codice. |
| C | Non richiede di conoscere il codice | Senza struttura non è white-box. |
| D | Sostituisce il testing black-box | Le due famiglie di tecniche si completano. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q149 · FL-4.3.3 · K2

Il white-box testing si può usare anche nel testing statico?

| | Alternativa | Motivazione |
|---|---|---|
| A | No, richiede sempre l’esecuzione | Le tecniche white-box non richiedono sempre l’esecuzione. |
| B | Solo per il test di accettazione | Non è legato al livello di accettazione. |
| C | Solo con strumenti di test di carico | Il carico è un test non funzionale dinamico. |
| D ✔ | Sì, per esempio con dry run su codice, pseudocodice o diagrammi di flusso | Il syllabus cita i dry run su codice non ancora eseguibile, pseudocodice e logica di alto livello. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q150 · FL-4.4.1 · K2

Che cos’è un fault attack?

| | Alternativa | Motivazione |
|---|---|---|
| A | Un tipo di test di carico | Il carico è una caratteristica non funzionale diversa. |
| B | Una review formale del codice | La review è testing statico, non questa tecnica. |
| C ✔ | Un approccio strutturato all’error guessing: si elencano possibili errori, difetti e malfunzionamenti e si progettano test per esporli | I fault attack sono il modo metodico di applicare l’error guessing. |
| D | Un attacco informatico al sistema in produzione | Non si tratta di un attacco reale, ma di una tecnica di progettazione dei test. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q151 · FL-4.4.1 · K2

Su che cosa si basa l’error guessing?

| | Alternativa | Motivazione |
|---|---|---|
| A | Sulle quote dell’esame | Le quote d’esame non c’entrano con la tecnica. |
| B ✔ | Sulla conoscenza di come l’applicazione ha funzionato in passato, degli errori tipici degli sviluppatori e dei malfunzionamenti di applicazioni simili | L’error guessing anticipa errori, difetti e malfunzionamenti grazie all’esperienza. |
| C | Solo sulle partizioni di equivalenza | Le partizioni sono una tecnica black-box. |
| D | Sulla copertura dei rami | La copertura dei rami è una tecnica white-box. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q152 · FL-4.4.2 · K2

In quale situazione il testing esplorativo è particolarmente utile?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Quando le specifiche sono poche o inadeguate o c’è forte pressione sui tempi | Il syllabus indica proprio specifiche scarse e pressione sui tempi; l’esplorazione completa le tecniche più formali. |
| B | Solo quando esistono specifiche formali complete | Funziona anche, e soprattutto, quando le specifiche sono scarse. |
| C | Solo per i test di componente automatizzati | Si usa tipicamente nei test manuali di livello più alto. |
| D | Mai insieme ad altre tecniche | Può incorporare altre tecniche e completarle. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q153 · FL-4.4.2 · K2

Quali caratteristiche del tester rendono più efficace il testing esplorativo?

| | Alternativa | Motivazione |
|---|---|---|
| A | Solo la velocità di battitura | La velocità non è indicata come fattore. |
| B | Solo la conoscenza di un linguaggio di programmazione | La programmazione può aiutare, ma non è il fattore principale. |
| C | L’assenza di conoscenze sul prodotto | Conoscere dominio e prodotto aiuta l’esplorazione. |
| D ✔ | Esperienza, conoscenza del dominio, capacità analitiche, curiosità e creatività | Il syllabus elenca queste qualità come fattori di efficacia del testing esplorativo. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q154 · FL-4.4.3 · K2

Quale elemento NON dovrebbe stare in una checklist per il checklist-based testing?

| | Alternativa | Motivazione |
|---|---|---|
| A | Un controllo basato sull’esperienza di malfunzionamenti passati | L’esperienza dei malfunzionamenti passati è una fonte tipica. |
| B | Un aspetto importante per l’utente | Ciò che conta per l’utente è una base tipica. |
| C ✔ | Un elemento che si può verificare automaticamente | Il syllabus esclude elementi verificabili automaticamente, troppo generici o più adatti come criteri di ingresso o uscita. |
| D | Una domanda formulata in modo verificabile | Gli elementi vanno formulati come domande verificabili. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q155 · FL-4.4.3 · K2

Che effetto hanno le checklist di alto livello?

| | Alternativa | Motivazione |
|---|---|---|
| A | Eliminano la necessità di aggiornarle | Le checklist vanno aggiornate sulla base dell’analisi dei difetti. |
| B ✔ | Più variabilità e copertura nei test, ma meno ripetibilità | Il syllabus nota che checklist generali portano variabilità e copertura a scapito della ripetibilità. |
| C | Massima ripetibilità dei test | La ripetibilità diminuisce, non aumenta. |
| D | Nessuna differenza rispetto a casi di test dettagliati | Senza casi dettagliati il risultato varia di più. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q156 · FL-4.5.1 · K2

Quali sono le 3C di una user story?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Card, Conversation, Confirmation | La scheda descrive la storia, la conversazione la chiarisce, la conferma ne definisce i criteri di accettazione. |
| B | Code, Compile, Commit | Sono passi dello sviluppo, non aspetti della storia. |
| C | Cost, Coverage, Criteria | Non è la sigla usata dal syllabus. |
| D | Customer, Contract, Change | Non è la sigla usata dal syllabus. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q157 · FL-4.5.1 · K2

Perché una user story va scritta insieme da business, sviluppo e testing?

| | Alternativa | Motivazione |
|---|---|---|
| A | Perché il tester deve approvare da solo ogni storia | L’approvazione non spetta solo al tester. |
| B | Per evitare di scrivere criteri di accettazione | I criteri di accettazione sono parte della conferma. |
| C | Perché lo sviluppo non deve conoscere il bisogno | Lo sviluppo deve proprio capire il bisogno. |
| D ✔ | Per ottenere una visione condivisa di che cosa realizzare, combinando prospettive diverse | La collaborazione costruisce una comprensione comune e storie testabili. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q158 · FL-4.5.2 · K2

Quale è un formato orientato agli scenari per scrivere i criteri di accettazione?

| | Alternativa | Motivazione |
|---|---|---|
| A | Una tabella che associa input e output | La tabella input/output è anch’essa orientata alle regole. |
| B | Un diagramma di Gantt | Il Gantt è uno strumento di pianificazione. |
| C ✔ | Given/When/Then, come nel BDD | Il formato scenario-oriented descrive contesto, evento e risultato atteso. |
| D | Un elenco puntato di verifiche | L’elenco di verifiche è un formato orientato alle regole. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q159 · FL-4.5.2 · K2

A che cosa servono i criteri di accettazione?

| | Alternativa | Motivazione |
|---|---|---|
| A | A misurare la velocità del team | Non sono una metrica di velocità. |
| B ✔ | A definire l’ambito della storia, raggiungere consenso fra gli stakeholder e fare da base al testing di accettazione | Il syllabus elenca anche la descrizione di scenari positivi e negativi e il supporto a pianificazione e stima. |
| C | A sostituire la conversazione sulla storia | I criteri completano la conversazione, non la sostituiscono. |
| D | A fissare l’implementazione tecnica | Descrivono il comportamento atteso, non l’implementazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q161 · FL-4.5.3 · K3

Storia: «Come cliente voglio cambiare la password; la nuova deve avere almeno 8 caratteri ed essere diversa dall’attuale». Con ATDD, quale insieme di test copre la storia senza andare oltre?

| | Alternativa | Motivazione |
|---|---|---|
| A | Solo una password valida accettata | Manca la verifica delle due regole. |
| B | Password valida accettata; password senza caratteri speciali rifiutata | I caratteri speciali non sono nella storia: un esempio non deve aggiungere nulla. |
| C | Password di 7 caratteri rifiutata; email di conferma inviata | L’email non è nella storia e manca il caso positivo. |
| D ✔ | Password nuova di 8 caratteri accettata; di 7 caratteri rifiutata; uguale all’attuale rifiutata | Copre il caso positivo e entrambe le regole della storia, senza aggiungere requisiti. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q162 · FL-4.5.3 · K3

In un workshop ATDD il team ha scritto il caso positivo di una storia. Quale passo viene dopo?

| | Alternativa | Motivazione |
|---|---|---|
| A | Aggiungere esempi per funzionalità non presenti nella storia | Gli esempi non devono andare oltre la storia. |
| B | Duplicare il caso positivo con valori simili | Due esempi non devono descrivere la stessa caratteristica. |
| C ✔ | Scrivere i casi negativi e, se pertinenti, test non funzionali | In ATDD dopo il percorso positivo si coprono i casi negativi e gli attributi non funzionali. |
| D | Automatizzare subito senza altri casi | Mancherebbero i casi negativi. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q171 · FL-5.1.1 · K2

Quale contenuto fa parte di un piano di test?

| | Alternativa | Motivazione |
|---|---|---|
| A | Le valutazioni individuali dei tester | Le valutazioni individuali non sono contenuti del piano. |
| B ✔ | Approccio di test, con livelli, tipi, tecniche e criteri di ingresso e di uscita | Il piano descrive contesto, stakeholder, comunicazione, rischi, approccio, budget e calendario. |
| C | Il codice sorgente del prodotto | Il codice è un prodotto dello sviluppo. |
| D | I log di esecuzione già raccolti | I log nascono dall’esecuzione, non dal piano. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q172 · FL-5.1.1 · K2

Qual è uno scopo del piano di test?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Documentare mezzi e calendario per raggiungere gli obiettivi di test e favorire la comunicazione | Il piano aiuta a rispettare criteri, comunicare e ragionare in anticipo sulle difficoltà. |
| B | Garantire l’assenza di difetti | Nessun piano garantisce l’assenza di difetti. |
| C | Sostituire la strategia di test dell’organizzazione | Il piano dimostra l’aderenza alla strategia, non la sostituisce. |
| D | Evitare ogni modifica durante il progetto | Il piano può essere aggiornato quando le condizioni cambiano. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q163 · FL-5.1.2 · K1

Quale contributo del tester appartiene alla release planning?

| | Alternativa | Motivazione |
|---|---|---|
| A | Correggere i difetti trovati | La correzione è debugging. |
| B ✔ | Partecipare alle analisi dei rischi di progetto e di qualità e pianificare il testing del rilascio | Nella release planning il tester scrive storie e criteri testabili, analizza i rischi, stima e definisce l’approccio di test. |
| C | Scomporre una singola storia in task di test dell’iterazione | Il dettaglio dei task di una storia appartiene all’iteration planning. |
| D | Eseguire i test di regressione notturni | È esecuzione dei test, non pianificazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q164 · FL-5.1.2 · K1

Quale contributo del tester appartiene all’iteration planning?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Valutare la testabilità delle user story e stimare lo sforzo di tutti i task di test | Analisi dettagliata dei rischi, testabilità, task di test e stime appartengono all’iteration planning. |
| B | Ridefinire il product backlog dell’intero rilascio | La ridefinizione del backlog di rilascio è release planning. |
| C | Approvare il budget del progetto | Il budget non è un compito del tester. |
| D | Firmare il contratto con il cliente | Il contratto non è un’attività di pianificazione dei test. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q173 · FL-5.1.3 · K2

Quale è un tipico criterio di ingresso?

| | Alternativa | Motivazione |
|---|---|---|
| A | Il livello di copertura concordato è stato raggiunto | È una misura di completezza: un criterio di uscita. |
| B | Tutti i difetti trovati sono stati segnalati | È un criterio di uscita di tipo sì/no. |
| C | I test di regressione sono tutti automatizzati | È un criterio di uscita di tipo sì/no. |
| D ✔ | Tutti gli smoke test sono stati superati | La qualità iniziale del test object, come smoke test superati, è un criterio di ingresso tipico. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q174 · FL-5.1.3 · K2

Il tempo è finito ma la copertura concordata non è stata raggiunta. Quando è accettabile chiudere comunque il testing?

| | Alternativa | Motivazione |
|---|---|---|
| A | Sempre: il tempo prevale su tutto | Serve una decisione consapevole sul rischio, non un automatismo. |
| B | Quando il tester lo decide da solo | La decisione spetta agli stakeholder. |
| C ✔ | Quando gli stakeholder hanno valutato e accettato il rischio di andare in produzione senza altri test | Il syllabus considera validi tempo e budget esauriti, se gli stakeholder accettano consapevolmente il rischio. |
| D | Mai: i criteri di uscita vanno sempre raggiunti | Esaurire tempo o budget può essere un criterio di uscita valido. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q189 · FL-5.1.4 · K3

In progetti simili il rapporto fra sforzo di sviluppo e di test è 3:2. Lo sviluppo è stimato in 600 giornate. Quale stima basata sul rapporto dà il testing?

| | Alternativa | Motivazione |
|---|---|---|
| A | 900 giornate | 900 inverte il rapporto (600 × 3 / 2). |
| B | 200 giornate | 200 è un terzo, non due terzi. |
| C | 240 giornate | 240 corrisponde al 40%, non al rapporto 3:2. |
| D ✔ | 400 giornate | Con un rapporto 3:2 il test vale due terzi dello sviluppo: 600 × 2 / 3 = 400. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q190 · FL-5.1.5 · K3

Casi di test: TC1 priorità alta, richiede che prima venga eseguito TC3; TC2 priorità media; TC3 priorità bassa, nessuna dipendenza; TC4 priorità bassa, nessuna dipendenza. Quale ordine segue la priorità rispettando le dipendenze?

| | Alternativa | Motivazione |
|---|---|---|
| A | TC1, TC2, TC3, TC4 | TC1 non può precedere TC3. |
| B | TC3, TC4, TC1, TC2 | TC4, a bassa priorità, ritarda inutilmente TC1 e TC2. |
| C ✔ | TC3, TC1, TC2, TC4 | TC1 è il più importante ma richiede TC3: si esegue TC3, poi TC1, poi TC2 (media) e infine TC4 (bassa). |
| D | TC1, TC3, TC2, TC4 | TC1 non può precedere TC3. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q165 · FL-5.1.6 · K1

Che cosa rappresentano gli strati più bassi della piramide dei test?

| | Alternativa | Motivazione |
|---|---|---|
| A | Pochi test end-to-end lenti | I test end-to-end stanno in cima, e sono pochi. |
| B | Solo test manuali di accettazione | L’accettazione manuale sta ai livelli alti. |
| C | Solo test non funzionali | Il modello non distingue gli strati per funzionale e non funzionale. |
| D ✔ | Molti test piccoli, isolati e veloci | Alla base ci sono molti test piccoli e rapidi; salendo i test diventano più complessi, lenti e meno numerosi. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q166 · FL-5.1.6 · K1

Quale affermazione sulla piramide dei test è corretta?

| | Alternativa | Motivazione |
|---|---|---|
| A | Impone di non automatizzare i test di interfaccia | La piramide indica proporzioni, non divieti. |
| B | Mette i test end-to-end alla base | I test end-to-end stanno in cima. |
| C ✔ | Numero e nomi degli strati possono variare, per esempio unità, servizi e interfaccia utente | Il syllabus precisa che il modello può avere strati diversi a seconda del contesto. |
| D | Ha sempre esattamente tre strati con nomi fissi | Il numero di strati non è fisso. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q175 · FL-5.1.7 · K2

In quale quadrante si collocano i test di componente e di integrazione di componenti, automatizzati nella CI?

| | Alternativa | Motivazione |
|---|---|---|
| A | Q4: orientati alla tecnologia, critica del prodotto | Q4 contiene smoke test e test non funzionali, esclusa l’usabilità. |
| B ✔ | Q1: orientati alla tecnologia, a supporto del team | Q1 contiene test di componente e di integrazione di componenti, da automatizzare nella CI. |
| C | Q2: orientati al business, a supporto del team | Q2 contiene test funzionali, esempi e test delle storie. |
| D | Q3: orientati al business, critica del prodotto | Q3 contiene esplorazione, usabilità e accettazione utente. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q176 · FL-5.1.7 · K2

In quale quadrante si colloca il test di usabilità?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Q3: orientato al business, critica del prodotto | Il syllabus mette usabilità, esplorazione e accettazione utente in Q3. |
| B | Q4: orientato alla tecnologia, critica del prodotto | Q4 contiene i test non funzionali eccetto l’usabilità. |
| C | Q1: orientato alla tecnologia, a supporto del team | Q1 contiene test di componente. |
| D | Q2: orientato al business, a supporto del team | Q2 contiene test funzionali ed esempi. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q167 · FL-5.2.1 · K1

Da quali due fattori dipende il livello di rischio?

| | Alternativa | Motivazione |
|---|---|---|
| A | Copertura e velocità | Copertura e velocità sono altre misure. |
| B ✔ | Probabilità e impatto | Il livello di rischio si ricava dalla probabilità che il problema si verifichi e dal suo impatto. |
| C | Costo e durata del progetto | Costo e durata sono vincoli di progetto, non la misura del rischio. |
| D | Numero di tester e di sviluppatori | Le persone disponibili non definiscono il livello di rischio. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q168 · FL-5.2.1 · K1

Due rischi: A ha probabilità alta e impatto basso; B ha probabilità media e impatto molto alto. Che cosa serve per confrontarli?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Combinare probabilità e impatto, per esempio con una matrice dei rischi | Il livello di rischio unisce i due fattori, in modo quantitativo o qualitativo con una matrice. |
| B | Considerare solo la probabilità | La sola probabilità ignora le conseguenze. |
| C | Considerare solo l’ordine in cui sono stati scoperti | L’ordine di scoperta non misura il rischio. |
| D | Considerare solo chi li ha segnalati | Chi segnala non cambia il livello di rischio. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q177 · FL-5.2.2 · K2

Quale è un rischio di progetto?

| | Alternativa | Motivazione |
|---|---|---|
| A | Un calcolo produce risultati sbagliati | È un rischio di prodotto. |
| B | Il tempo di risposta è inadeguato | È un rischio di prodotto. |
| C | Una vulnerabilità di sicurezza | È un rischio di prodotto. |
| D ✔ | Un fornitore terzo non consegna in tempo un componente | I problemi dei fornitori sono rischi di progetto, come quelli organizzativi, di persone e tecnici. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q178 · FL-5.2.2 · K2

Quale è una possibile conseguenza di un rischio di prodotto che si realizza?

| | Alternativa | Motivazione |
|---|---|---|
| A | Mancanza di personale nel team | È un rischio di progetto legato alle persone. |
| B | Stime imprecise del progetto | È un rischio di progetto organizzativo. |
| C ✔ | Insoddisfazione degli utenti e perdita di reputazione | Il syllabus elenca insoddisfazione, perdita di ricavi, fiducia e reputazione e, nei casi estremi, danni fisici. |
| D | Ritardo nella consegna dell’ambiente di test | È un rischio di progetto, non una conseguenza di un rischio di prodotto. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q179 · FL-5.2.3 · K2

Come può influire l’analisi dei rischi di prodotto sul testing?

| | Alternativa | Motivazione |
|---|---|---|
| A | Stabilisce solo il calendario delle riunioni | Il calendario delle riunioni non è un risultato dell’analisi dei rischi. |
| B ✔ | Determina ambito, livelli, tipi, tecniche e copertura dei test, oltre alla loro priorità | L’analisi dei rischi orienta ampiezza e profondità del testing e aiuta a trovare presto i difetti critici. |
| C | Non influisce: il testing è sempre uguale | Il testing dipende dal rischio e dal contesto. |
| D | Elimina la necessità di stimare lo sforzo | Il rischio entra proprio nella stima dello sforzo. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q180 · FL-5.2.3 · K2

L’analisi dei rischi indica che un modulo ha un rischio molto alto. Quale conseguenza è più coerente?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Testarlo più a fondo e presto, con tecniche e copertura adeguate | Più rischio significa più priorità e più profondità di testing. |
| B | Testarlo per ultimo, con meno test | È l’opposto di ciò che suggerisce il rischio. |
| C | Escluderlo dal testing | Escluderlo lascerebbe il rischio più alto scoperto. |
| D | Testarlo come ogni altro modulo, senza differenze | Il testing va proporzionato al rischio. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q181 · FL-5.2.4 · K2

Quale azione mitiga un rischio di prodotto tramite il testing?

| | Alternativa | Motivazione |
|---|---|---|
| A | Trasferire il rischio a un’assicurazione | Il trasferimento è un’altra risposta al rischio, non mitigazione tramite testing. |
| B | Accettare il rischio senza fare nulla | L’accettazione è un’altra risposta al rischio. |
| C | Preparare un piano di emergenza | Il piano di emergenza è un’altra risposta al rischio. |
| D ✔ | Applicare tecniche di test e livelli di copertura adeguati al rischio | Scegliere tester adatti, indipendenza, review, tecniche, tipi di test e regressione sono azioni di mitigazione tramite testing. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q182 · FL-5.2.4 · K2

In che cosa consiste il controllo dei rischi di prodotto?

| | Alternativa | Motivazione |
|---|---|---|
| A | Solo nella stima dei costi | La stima dei costi non è controllo del rischio. |
| B | Solo nella scrittura del piano di test | Il piano documenta, ma il controllo comprende azioni e verifiche. |
| C ✔ | In mitigazione e monitoraggio dei rischi | Il monitoraggio verifica che le azioni di mitigazione funzionino e fa emergere nuovi rischi. |
| D | Solo nell’identificazione dei rischi | L’identificazione precede il controllo. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q169 · FL-5.3.1 · K1

Quale è una metrica di qualità del prodotto?

| | Alternativa | Motivazione |
|---|---|---|
| A | Il numero di casi di test implementati | È una metrica di avanzamento dei test. |
| B | L’uso delle risorse del progetto | È una metrica di avanzamento del progetto. |
| C | Il costo del testing | È una metrica di costo. |
| D ✔ | Il tempo medio tra i malfunzionamenti (MTTF) | Disponibilità, tempo di risposta e MTTF sono metriche di qualità del prodotto. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q170 · FL-5.3.1 · K1

Quale è una metrica relativa ai difetti?

| | Alternativa | Motivazione |
|---|---|---|
| A | L’avanzamento della preparazione dell’ambiente | È una metrica di avanzamento dei test. |
| B | La copertura dei requisiti | È una metrica di copertura. |
| C ✔ | La percentuale di difetti rilevati (defect detection percentage) | Numero e priorità dei difetti, densità e percentuale di rilevamento sono metriche dei difetti. |
| D | Il tempo di risposta dell’applicazione | È una metrica di qualità del prodotto. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q183 · FL-5.3.2 · K2

Quale contenuto è tipico di un report di avanzamento dei test?

| | Alternativa | Motivazione |
|---|---|---|
| A | Il codice sorgente modificato | Il codice non fa parte del report. |
| B ✔ | Impedimenti e soluzioni adottate, rischi nuovi o cambiati e testing previsto per il periodo successivo | Il report di avanzamento supporta il controllo in corso: periodo, avanzamento, impedimenti, metriche, rischi e prossimi passi. |
| C | Le lezioni apprese dell’intero progetto | Le lezioni apprese stanno nel report di completamento. |
| D | Solo l’elenco dei nomi dei tester | I nomi non descrivono l’avanzamento. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q184 · FL-5.3.2 · K2

Perché i report di test vanno adattati al pubblico?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Perché destinatari diversi hanno bisogno di informazioni e formalità diverse | Un report per il team è diverso da uno per gli stakeholder, per contenuto e formalità. |
| B | Perché i dati cambiano a seconda di chi legge | I dati restano gli stessi; cambia cosa e come comunicarlo. |
| C | Perché i report formali sono vietati | I report formali sono una delle opzioni. |
| D | Perché solo il team di sviluppo li legge | Anche gli stakeholder esterni al team li usano. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q185 · FL-5.3.3 · K2

Il team è distribuito su più fusi orari. Quale modo di comunicare lo stato dei test è più adatto?

| | Alternativa | Motivazione |
|---|---|---|
| A | Solo conversazioni a voce nello stesso ufficio | La distanza rende difficile la comunicazione solo verbale in presenza. |
| B | Nessuna comunicazione fino alla fine del progetto | Lo stato va comunicato durante il lavoro. |
| C | Solo messaggi personali a un singolo collega | La comunicazione va adattata ai diversi stakeholder, non limitata a uno. |
| D ✔ | Una comunicazione più formale, per esempio report o documentazione online | Il syllabus indica che la comunicazione più formale è più adatta ai team distribuiti. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q186 · FL-5.3.3 · K2

Quale strumento è un esempio di dashboard per comunicare lo stato dei test?

| | Alternativa | Motivazione |
|---|---|---|
| A | Un diagramma entità-relazione | Il diagramma descrive i dati, non l’avanzamento. |
| B | Il manuale utente | Il manuale descrive il prodotto, non lo stato dei test. |
| C ✔ | Una burn-down chart o una task board | Il syllabus cita dashboard CI/CD, task board e burn-down chart. |
| D | Un contratto firmato | Il contratto non mostra lo stato dei test. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q187 · FL-5.4.1 · K2

Come supporta il testing il configuration management?

| | Alternativa | Motivazione |
|---|---|---|
| A | Misura la copertura del codice | La copertura si misura con altri strumenti. |
| B ✔ | Identifica, controlla e traccia i prodotti di test come configuration item, con versioni e baseline | Piani, casi, script, risultati e log diventano configuration item versionati e collegati fra loro. |
| C | Sostituisce la gestione dei difetti | La gestione dei difetti è un’altra attività. |
| D | Stabilisce le priorità dei test | Le priorità dipendono da rischi e dipendenze. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q188 · FL-5.4.1 · K2

Perché è utile poter tornare a una baseline precedente?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Per riprodurre i risultati di test ottenuti in passato | Il configuration management registra ciò che cambia a ogni baseline e permette di tornare indietro per riprodurre i risultati. |
| B | Per cancellare definitivamente i difetti | I difetti non si cancellano tornando indietro. |
| C | Per evitare di versionare i test | La baseline presuppone proprio il versionamento. |
| D | Per saltare il controllo delle modifiche | Le modifiche passano da un processo di controllo formale. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q191 · FL-5.5.1 · K3

Un defect report contiene titolo, passi per riprodurre, risultato atteso e ottenuto, gravità e priorità. Quale informazione importante manca?

| | Alternativa | Motivazione |
|---|---|---|
| A | Un’opinione sullo sviluppatore | Le opinioni personali non vanno inserite. |
| B ✔ | L’identificazione del test object e dell’ambiente di test, con le versioni | Senza versione del test object e ambiente è difficile riprodurre e isolare il problema. |
| C | Il nome del project manager | Il nome del manager non aiuta a riprodurre il difetto. |
| D | Una stima del costo di correzione | La stima dei costi non è un contenuto tipico del report. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q192 · FL-5.5.1 · K3

Quale titolo di defect report è più utile?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Il totale dell’ordine applica due volte lo sconto quando si usano due coupon | Un buon titolo riassume in breve che cosa non va e in quale situazione. |
| B | Bug nel carrello!!! | Non dice quale problema si è osservato. |
| C | Non funziona niente | È vago e non aiuta a capire il difetto. |
| D | Errore trovato da Marco | Chi l’ha trovato non descrive il problema. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q141 · FL-6.1.1 · K2

Quale categoria di strumenti supporta lo sviluppo di dati di test e la progettazione dei test?

| | Alternativa | Motivazione |
|---|---|---|
| A | Strumenti di analisi statica | L’analisi statica esamina codice e documenti senza eseguirli. |
| B | Strumenti di gestione dei difetti | La gestione dei difetti traccia le anomalie. |
| C | Strumenti di collaborazione | La collaborazione facilita la comunicazione. |
| D ✔ | Strumenti di progettazione e implementazione dei test | Questi strumenti aiutano a generare casi di test, dati di test e procedure. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### q142 · FL-6.2.1 · K1

Quale è un rischio dell’automazione dei test?

| | Alternativa | Motivazione |
|---|---|---|
| A | Avere valutazioni più oggettive, per esempio della copertura | È un beneficio: lo strumento misura ciò che a mano sarebbe complicato. |
| B | Prevenire semplici errori umani grazie alla ripetibilità | È un beneficio: l’esecuzione è più coerente e ripetibile. |
| C ✔ | Affidarsi troppo allo strumento, trascurando il pensiero critico | Il syllabus cita la dipendenza eccessiva dallo strumento fra i rischi. |
| D | Ridurre i tempi di esecuzione dei test | È un beneficio: test più rapidi danno feedback prima. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

