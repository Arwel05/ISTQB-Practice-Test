# Revisione delle domande Agile (CTFL-AT 2014)

Generato da `npm run review:agile`. 100 domande, 29 obiettivi (keyword incluse). Le domande da ag028 in poi sono nuove e non ancora riviste.

## Per chi rivede

Serve una persona con certificazione CTFL-AT. Per ogni domanda verificare:

- **Obiettivo e livello K**: la domanda misura davvero l’obiettivo indicato, al livello K indicato (K3 = applicare, non ricordare).
- **Una sola risposta difendibile**, coerente con il syllabus 2014.
- **Motivazioni**: ogni alternativa ha una spiegazione corretta.
- **Originalità**: nessuna somiglianza con il sample exam ufficiale o con domande d’esame.

Le domande con livello K inferiore a quello dell’obiettivo servono come preparazione e non entrano nella simulazione.

## Copertura

| Obiettivo | K | Descrizione | Domande (in simulazione) |
|---|---|---|---|
| FA-1.1.1 | K1 | Concetti di base dello sviluppo Agile secondo il Manifesto Agile | 3 (3) |
| FA-1.1.2 | K2 | Vantaggi del whole-team approach | 4 (4) |
| FA-1.1.3 | K2 | Benefici di un feedback precoce e frequente | 4 (4) |
| FA-1.2.1 | K1 | Approcci di sviluppo Agile (Scrum, Kanban, XP) | 3 (3) |
| FA-1.2.2 | K3 | Scrivere user story testabili insieme a sviluppo e business | 3 (3) |
| FA-1.2.3 | K2 | Retrospettive come meccanismo di miglioramento del processo | 4 (4) |
| FA-1.2.4 | K2 | Uso e scopo della continuous integration | 3 (3) |
| FA-1.2.5 | K1 | Differenze fra release e iteration planning e contributo del tester | 3 (3) |
| FA-2-KW | K1 | Keyword del capitolo 2 | 3 (3) |
| FA-2.1.1 | K2 | Differenze fra testing in progetti Agile e non Agile | 3 (3) |
| FA-2.1.2 | K2 | Integrazione fra sviluppo e testing nei progetti Agile | 3 (3) |
| FA-2.1.3 | K2 | Ruolo del testing indipendente nei progetti Agile | 4 (4) |
| FA-2.2.1 | K2 | Strumenti e tecniche per comunicare stato dei test e qualità del prodotto | 4 (4) |
| FA-2.2.2 | K2 | Evoluzione dei test fra iterazioni e automazione contro il rischio di regressione | 4 (4) |
| FA-2.3.1 | K2 | Competenze del tester in un team Agile | 3 (3) |
| FA-2.3.2 | K2 | Ruolo del tester in un team Agile | 4 (4) |
| FA-3-KW | K1 | Keyword del capitolo 3 | 3 (3) |
| FA-3.1.1 | K1 | Concetti di TDD, ATDD e BDD | 3 (3) |
| FA-3.1.2 | K1 | Concetti della piramide dei test | 3 (3) |
| FA-3.1.3 | K2 | Quadranti del testing, livelli e tipi di test | 4 (4) |
| FA-3.1.4 | K3 | Esercitare il ruolo del tester in un team Scrum | 3 (3) |
| FA-3.2.1 | K3 | Valutare i rischi di qualità in un progetto Agile | 4 (3) |
| FA-3.2.2 | K3 | Stimare lo sforzo di test da contenuto dell’iterazione e rischi | 3 (3) |
| FA-3.3.1 | K3 | Interpretare informazioni rilevanti per le attività di test | 3 (3) |
| FA-3.3.2 | K2 | Spiegare al business come definire criteri di accettazione testabili | 4 (4) |
| FA-3.3.3 | K3 | Scrivere casi di test ATDD a partire da una user story | 3 (3) |
| FA-3.3.4 | K3 | Scrivere casi di test black-box, funzionali e non funzionali, da user story | 4 (3) |
| FA-3.3.5 | K3 | Eseguire testing esplorativo in un progetto Agile | 4 (3) |
| FA-3.4.1 | K1 | Strumenti per i tester secondo scopo e attività Agile | 3 (3) |

## Domande

### ag001 · FA-1.1.1 · K1

Un requisito ambiguo blocca il team. Quale scelta esprime persone e interazioni?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Confrontarsi direttamente e registrare gli esempi concordati | La conversazione chiarisce il significato; conservarne l’esito mantiene la tracciabilità utile. |
| B | Aggiungere approvazioni obbligatorie senza confronto | Aumentare il processo senza chiarire il bisogno non risolve l’ambiguità. |
| C | Eliminare ogni strumento | Il Manifesto valorizza le persone più degli strumenti, ma non vieta gli strumenti. |
| D | Attendere che il contratto risolva il dubbio | La negoziazione contrattuale non sostituisce la comprensione condivisa. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag002 · FA-1.1.1 · K1

Un feedback cambia il bisogno del cliente. Come rispondere?

| | Alternativa | Motivazione |
|---|---|---|
| A | Ignorarlo perché il piano è approvato | Seguire il piano a ogni costo trascura il valore del feedback. |
| B | Implementarlo senza analizzare rischi | Accogliere il cambiamento non elimina l’analisi dell’impatto. |
| C | Abbandonare ogni pianificazione | La pianificazione resta utile, ma è evolutiva. |
| D ✔ | Valutare valore e impatto e adattare il piano | Adattare significa decidere sulla base di nuove informazioni, conservando controllo e obiettivi. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag025 · FA-1.1.1 · K1

Quale scelta è coerente con i valori Agile?

| | Alternativa | Motivazione |
|---|---|---|
| A | Vietare la documentazione | Un valore relativo non è un divieto. |
| B | Sostituire il cliente con un contratto | Il contratto non sostituisce il confronto. |
| C | Impedire cambiamenti al piano | Un piano può evolvere quando cambiano le informazioni. |
| D ✔ | Preferire il confronto diretto, conservando la documentazione utile | La preferenza per le interazioni non annulla il valore degli altri strumenti. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag003 · FA-1.1.2 · K2

Chi è responsabile della qualità in un whole-team approach?

| | Alternativa | Motivazione |
|---|---|---|
| A | Soltanto chi approva il rilascio | L’approvazione del rilascio non produce da sola qualità. |
| B | Un gruppo esterno a fine progetto | Il controllo tardivo non sostituisce la prevenzione nel team. |
| C ✔ | L’intero team, con competenze complementari | La responsabilità è condivisa; questo non rende intercambiabili tutte le competenze. |
| D | Soltanto il tester | Il tester contribuisce e facilita, non assorbe la responsabilità degli altri. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag026 · FA-1.1.2 · K2

Nel team della clinica, solo il tester conosce i casi di prenotazione doppia. Quale intervento migliora il lavoro collettivo?

| | Alternativa | Motivazione |
|---|---|---|
| A | Delegare al tester ogni decisione di qualità | Responsabilità condivisa non significa delega totale. |
| B | Eliminare il ruolo della segreteria | Senza il dominio, il team può verificare un comportamento inutilizzabile. |
| C ✔ | Discutere questi esempi con sviluppo e segreteria | Condividere esempi combina conoscenza del dominio e competenze tecniche prima delle decisioni. |
| D | Conservarli fino al collaudo finale | Il controllo tardivo perde occasioni di prevenzione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag028 · FA-1.1.2 · K2

Durante la stima di una storia, la tester segnala che un caso limite richiederà dati difficili da preparare. Quale vantaggio del whole-team approach emerge?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Il rischio entra subito nella stima e nella pianificazione del team | Le competenze del tester arricchiscono le decisioni comuni: il costo della preparazione dei dati viene considerato prima di impegnarsi. |
| B | La tester diventa l’unica responsabile della stima | La stima resta una decisione del team; il tester vi contribuisce senza sostituire gli altri. |
| C | Gli sviluppatori non devono più scrivere test unitari | Il contributo del tester non elimina i test che gli sviluppatori scrivono sul proprio codice. |
| D | La storia esce dall’iterazione senza discussione | Il problema segnalato va discusso e valutato insieme, non usato per escludere la storia d’autorità. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag029 · FA-1.1.2 · K2

Quale pratica favorisce il whole-team approach?

| | Alternativa | Motivazione |
|---|---|---|
| A | Separare fisicamente i tester per garantire indipendenza assoluta | La separazione riduce collaborazione e feedback; nel whole-team approach il team lavora a stretto contatto. |
| B | Riservare la discussione dei requisiti al solo product owner | Il product owner ha un ruolo chiave, ma la comprensione condivisa richiede anche sviluppo e testing. |
| C | Limitare la comunicazione del tester ai defect report formali | La comunicazione solo formale rallenta il feedback e ostacola la responsabilità condivisa. |
| D ✔ | Discutere ogni funzionalità con business, sviluppo e testing insieme (Power of Three) | Le tre prospettive insieme chiariscono i requisiti e i test prima che il lavoro inizi: è un esempio citato dal syllabus. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag004 · FA-1.1.3 · K2

Qual è il beneficio principale di mostrare presto un prototipo?

| | Alternativa | Motivazione |
|---|---|---|
| A | Bloccare definitivamente i requisiti | L’apprendimento può far evolvere i requisiti. |
| B ✔ | Verificare ipotesi sul bisogno prima di investire molto | Il feedback anticipato permette di correggere una direzione sbagliata quando il costo è minore. |
| C | Dimostrare che il prodotto non ha difetti | Il prototipo non prova la correttezza del prodotto finale. |
| D | Eliminare i test di accettazione | Il feedback integra, non annulla, l’accettazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag027 · FA-1.1.3 · K2

La demo della prenotazione rivela che manca la scelta della sede. Perché mostrarla presto è stato utile?

| | Alternativa | Motivazione |
|---|---|---|
| A | Il feedback impone di cancellare tutto il lavoro | La modifica va valutata: non implica una riscrittura completa. |
| B ✔ | Il team può correggere un bisogno frainteso prima di costruirvi sopra | La scoperta anticipata riduce il lavoro fondato su un’ipotesi sbagliata. Non garantisce però un prodotto corretto. |
| C | La demo certifica l’assenza di altri difetti | Una singola osservazione non copre tutto il prodotto. |
| D | La demo rende inutili i test successivi | Il cambiamento dovrà ancora essere verificato. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag030 · FA-1.1.3 · K2

A ogni iterazione il cliente vede il software funzionante. Quale beneficio è più rilevante?

| | Alternativa | Motivazione |
|---|---|---|
| A | Il cliente non può più cambiare le priorità | Il feedback serve proprio a riordinare le priorità quando serve. |
| B | La documentazione dei requisiti diventa vietata | Il feedback non elimina la documentazione utile. |
| C ✔ | Le incomprensioni sui requisiti emergono presto, quando correggerle costa meno | Il feedback frequente fa emergere presto bisogni fraintesi, prima che altro lavoro vi si appoggi. |
| D | I test necessari si riducono a zero | Il feedback del cliente non sostituisce i test: li completa. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag031 · FA-1.1.3 · K2

In un progetto i problemi di qualità emergono solo nelle ultime settimane del rilascio. Quale cambiamento sfrutta meglio il feedback precoce?

| | Alternativa | Motivazione |
|---|---|---|
| A | Mostrare il prodotto solo quando è privo di difetti | Nessun prodotto si può dimostrare privo di difetti; attendere quel momento elimina il feedback. |
| B ✔ | Integrare e testare in ogni iterazione, mostrando i risultati agli stakeholder | Integrazione, test e revisione frequenti producono feedback quando è ancora economico intervenire. |
| C | Rinviare tutti i test a un collaudo finale più lungo | Un collaudo più lungo resta tardivo: i problemi emergono comunque alla fine. |
| D | Allungare le iterazioni a sei mesi | Iterazioni più lunghe ritardano il feedback invece di anticiparlo. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag007 · FA-1.2.1 · K1

La colonna “in lavorazione” supera il limite WIP. Quale risposta favorisce il flusso?

| | Alternativa | Motivazione |
|---|---|---|
| A | Nascondere le attività bloccate | Nascondere il blocco impedisce di gestirlo. |
| B | Eliminare la visualizzazione del flusso | La visualizzazione aiuta a individuare il problema. |
| C ✔ | Aiutare a completare il lavoro aperto prima di iniziarne altro | Limitare il lavoro iniziato riduce code e rende visibili i colli di bottiglia. |
| D | Aprire più attività per tenere tutti occupati | Più attività aperte possono aumentare attese e multitasking. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag032 · FA-1.2.1 · K1

Quale pratica è caratteristica di Extreme Programming (XP)?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Pair programming | Il pair programming è una delle pratiche XP, insieme a test-first e integrazione continua. |
| B | Kanban board con limiti WIP come unico strumento | I limiti WIP sono tipici di Kanban, non la pratica distintiva di XP. |
| C | Gate di fase con approvazione formale a fine progetto | I gate di fase appartengono ai modelli sequenziali. |
| D | Pianificazione dettagliata e definitiva di tutto il progetto all’inizio | Pianificare tutto in anticipo in modo definitivo contrasta con l’adattamento Agile. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag033 · FA-1.2.1 · K1

In Scrum, chi gestisce e ordina il product backlog?

| | Alternativa | Motivazione |
|---|---|---|
| A | Lo Scrum Master | Lo Scrum Master facilita e rimuove ostacoli, non ordina il backlog. |
| B | Il tester del team | Il tester contribuisce con rischi e domande, ma non possiede il backlog. |
| C | Il team di sviluppo, senza un responsabile | Il team stima e collabora, ma il backlog ha un responsabile: il product owner. |
| D ✔ | Il product owner | Il product owner rappresenta il cliente e decide l’ordine del backlog. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag034 · FA-1.2.2 · K3

La storia dice: “Come cliente voglio pagare velocemente”. Quale riscrittura è più testabile?

| | Alternativa | Motivazione |
|---|---|---|
| A | Come sistema voglio usare il database dei pagamenti | Descrive una scelta tecnica, non un bisogno di un utente. |
| B | Come cliente voglio un pagamento migliore di quello dei concorrenti | Il confronto con i concorrenti non è un criterio verificabile dal team. |
| C ✔ | Come cliente registrato voglio pagare con una carta salvata in al massimo due passaggi, per non reinserire i dati | Ruolo, azione e beneficio sono chiari e “due passaggi con carta salvata” si può verificare con un esempio concreto. |
| D | Il pagamento deve essere veloce e intuitivo | “Veloce” e “intuitivo” non hanno una soglia: nessun test può dire se sono soddisfatti. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag035 · FA-1.2.2 · K3

Storia: “Come bibliotecaria voglio prorogare un prestito”. Quale criterio di accettazione la completa in modo testabile?

| | Alternativa | Motivazione |
|---|---|---|
| A | La proroga va implementata con una stored procedure | È un vincolo di implementazione, non un criterio di accettazione del comportamento. |
| B ✔ | Un prestito non scaduto e senza prenotazioni si proroga di 14 giorni una sola volta; altrimenti il sistema mostra il motivo del rifiuto | Condizioni, durata, limite e comportamento in caso di rifiuto permettono di ricavare test positivi e negativi. |
| C | La proroga deve funzionare correttamente | “Correttamente” non dice che cosa verificare. |
| D | Il sistema deve essere facile da usare per le bibliotecarie | La facilità d’uso senza una misura non è verificabile. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag036 · FA-1.2.2 · K3

Nel refinement una storia è troppo grande per un’iterazione e nessuno concorda sul significato di “cliente affidabile”. Quale azione del tester è più utile?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Proporre esempi di clienti affidabili e non, e suggerire di dividere la storia in parti verificabili singolarmente | Gli esempi rendono testabile il termine ambiguo e storie più piccole si possono completare e verificare in un’iterazione. |
| B | Accettare la storia e chiarire il significato durante l’esecuzione dei test | Rinviare il chiarimento sposta l’ambiguità al momento più costoso. |
| C | Scrivere subito casi di test dettagliati senza coinvolgere il business | Senza il business i test incorporerebbero un’interpretazione non condivisa. |
| D | Chiedere un documento dei requisiti completo prima di qualsiasi discussione | Un documento completo non sostituisce la conversazione e ritarda il feedback. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag009 · FA-1.2.3 · K2

Quale risultato rende utile una retrospettiva?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Un miglioramento concreto con responsabilità e verifica | Un’azione verificabile trasforma l’osservazione in apprendimento sul processo. |
| B | Una graduatoria delle persone che hanno sbagliato | Attribuire colpe riduce sicurezza e collaborazione. |
| C | Solo una demo del prodotto | La demo riguarda la review del prodotto, non sostituisce la retrospettiva. |
| D | La promessa di non avere mai più difetti | Zero difetti futuri non è una promessa verificabile realistica. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag037 · FA-1.2.3 · K2

In retrospettiva il tester propone di discutere i difetti trovati tardi nell’iterazione. Perché è appropriato?

| | Alternativa | Motivazione |
|---|---|---|
| A | Serve a individuare il responsabile dei difetti | Una retrospettiva efficace evita la ricerca di colpevoli. |
| B | La retrospettiva sostituisce la review del codice | La review del codice è un’attività diversa con scopi propri. |
| C | Non è appropriato: il testing è escluso dalle retrospettive | I tester partecipano e portano la prospettiva della qualità. |
| D ✔ | La retrospettiva riguarda processo, persone, relazioni e strumenti, e può portare a miglioramenti del testing | Il syllabus cita fra i temi processo, persone, organizzazione, relazioni e strumenti, e prevede decisioni di miglioramento legate al testing: i difetti tardivi sono un buon spunto. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag038 · FA-1.2.3 · K2

Quale condizione rende efficace una retrospettiva?

| | Alternativa | Motivazione |
|---|---|---|
| A | Tenerla solo alla fine del progetto | Il valore viene dal miglioramento iterazione dopo iterazione, non da un bilancio finale. |
| B | Discutere soltanto i successi | Ignorare i problemi elimina proprio le occasioni di miglioramento. |
| C ✔ | Un clima di fiducia in cui si possono segnalare problemi senza timore di colpe | Senza fiducia i problemi reali non emergono e il miglioramento resta superficiale. |
| D | Usare il verbale per valutare le prestazioni individuali | Collegarla alle valutazioni individuali spinge a nascondere i problemi. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag039 · FA-1.2.3 · K2

Dopo una retrospettiva il team introduce una checklist per le storie pronte. Che cosa mostra se il miglioramento funziona?

| | Alternativa | Motivazione |
|---|---|---|
| A | Il fatto che nessuno ne parli più | Il silenzio può indicare abbandono, non successo. |
| B ✔ | Verificare nelle iterazioni successive se calano le storie bloccate per informazioni mancanti | Un miglioramento va verificato sull’effetto atteso, con dati delle iterazioni successive. |
| C | L’approvazione unanime della checklist | Il consenso iniziale non dimostra un risultato. |
| D | Il numero di voci della checklist | La lunghezza della checklist non misura l’effetto sul flusso di lavoro. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag010 · FA-1.2.4 · K2

Una pipeline CI è verde. Cosa si può concludere?

| | Alternativa | Motivazione |
|---|---|---|
| A | Il prodotto è privo di difetti | I test possono mancare difetti e coprire solo parte del comportamento. |
| B | Ogni bisogno del cliente è soddisfatto | La correttezza tecnica non prova automaticamente l’utilità per il cliente. |
| C | La regressione futura è impossibile | Le modifiche future possono introdurre nuovi problemi. |
| D ✔ | I controlli eseguiti sono passati nelle condizioni della pipeline | Il risultato è circoscritto a controlli, dati, ambiente e versione effettivamente usati. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag040 · FA-1.2.4 · K2

Quale rischio rimane anche con una continuous integration ben configurata?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Sfuggono i difetti che nessun controllo automatico verifica | La CI dà feedback solo su ciò che i controlli automatici coprono: il resto richiede altri test. |
| B | Le modifiche non vengono integrate di frequente | Integrare spesso è proprio ciò che la CI realizza. |
| C | Il feedback arriva solo alla fine del rilascio | La CI fornisce feedback a ogni integrazione. |
| D | La build non viene mai compilata automaticamente | Compilare automaticamente è una delle sue attività di base. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag041 · FA-1.2.4 · K2

Quale attività fa parte tipicamente di un processo di continuous integration?

| | Alternativa | Motivazione |
|---|---|---|
| A | Integrare il codice una volta al mese dopo un collaudo manuale | Un’integrazione mensile non è continua e ritarda il feedback. |
| B | Rilasciare in produzione ogni modifica senza controlli | La CI integra e verifica; il rilascio senza controlli non ne fa parte. |
| C | Sostituire le review con l’integrazione automatica | La CI non sostituisce le review: le due pratiche si completano. |
| D ✔ | A ogni integrazione: compilare, eseguire test automatici e analisi statica, notificare il risultato al team | Build, test automatici, analisi statica e notifica del risultato sono le attività tipiche descritte dal syllabus. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag006 · FA-1.2.5 · K1

Quale attività appartiene soprattutto all’iteration planning?

| | Alternativa | Motivazione |
|---|---|---|
| A | Fissare immutabilmente tutte le release future | Il release planning è più ampio e comunque adattivo, non immutabile. |
| B | Consegnare solo un report finale | Il reporting finale non è pianificazione dell’iterazione. |
| C | Evitare stime dei test | L’effort del testing fa parte del lavoro da pianificare. |
| D ✔ | Dettagliare test e attività delle storie vicine | Il dettaglio cresce sul lavoro imminente, includendo rischi, dati e test. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag042 · FA-1.2.5 · K1

Quale attività del tester appartiene soprattutto alla release planning?

| | Alternativa | Motivazione |
|---|---|---|
| A | Eseguire la regressione sulla build di oggi | È esecuzione dei test, non pianificazione. |
| B | Correggere il codice difettoso | La correzione è debugging, compito di sviluppo. |
| C ✔ | Contribuire a definire l’approccio di test e i rischi di qualità del rilascio | Nella release planning il tester aiuta a valutare rischi, approccio e sforzo a livello di rilascio. |
| D | Scomporre una storia in task di test dell’iterazione | Il dettaglio dei task appartiene all’iteration planning. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag043 · FA-1.2.5 · K1

Quale differenza fra release planning e iteration planning è corretta?

| | Alternativa | Motivazione |
|---|---|---|
| A | La release planning si ripete ogni giorno | Il riallineamento quotidiano avviene nello stand-up, non nella release planning. |
| B ✔ | La release planning guarda al rilascio nel suo insieme; l’iteration planning seleziona e dettaglia le storie della singola iterazione | La release planning definisce backlog e obiettivi del rilascio; l’iteration planning sceglie e scompone il lavoro dell’iterazione. |
| C | L’iteration planning guarda all’intero rilascio; la release planning alla singola iterazione | L’ordine è invertito. |
| D | Sono la stessa attività con nomi diversi | Le due attività hanno orizzonte e livello di dettaglio diversi. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag044 · FA-2-KW · K1

Quando si esegue tipicamente un build verification test?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Subito dopo il deploy di una nuova build nell’ambiente di test | Il build verification test copre funzionalità critiche e punti di integrazione appena la build arriva in ambiente, così il team non perde tempo su una build instabile. |
| B | Solo alla fine del rilascio, prima della consegna | Eseguirlo solo alla fine annullerebbe il suo scopo: un feedback immediato su ogni build. |
| C | Prima di scrivere le user story | Senza una build non c’è nulla da verificare. |
| D | Una volta all’anno, durante l’audit | Un controllo annuale non dà alcun feedback sulle build dell’iterazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag045 · FA-2-KW · K1

Che cos’è un configuration item?

| | Alternativa | Motivazione |
|---|---|---|
| A | Un parametro di produzione che chiunque può modificare liberamente | Un elemento sotto configuration management è proprio controllato, non modificabile liberamente. |
| B | Un difetto registrato nel sistema di tracciamento | Un difetto è un’altra cosa, anche se il defect report può essere conservato e collegato agli elementi. |
| C | Una user story già completata | Lo stato di una storia non la rende un configuration item. |
| D ✔ | Un elemento identificato e gestito sotto configuration management, come codice, test o dati di test versionati | Codice, test automatici, casi di test manuali e dati di test possono essere configuration item: versionati e tracciati nel tempo. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag046 · FA-2-KW · K1

Qual è lo scopo del configuration management?

| | Alternativa | Motivazione |
|---|---|---|
| A | Misurare la velocità del team | La velocità è una metrica di avanzamento, non lo scopo del configuration management. |
| B | Approvare formalmente i requisiti | L’approvazione dei requisiti non è il suo obiettivo. |
| C ✔ | Identificare gli elementi e controllarne versioni e modifiche, conservandone la storia | Con il configuration management test e risultati restano allineati alle build: si sa che cosa è stato testato su quale versione. |
| D | Pianificare le iterazioni del rilascio | La pianificazione delle iterazioni è un’altra attività. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag016 · FA-2.1.1 · K2

Quale documentazione è coerente con un approccio Agile?

| | Alternativa | Motivazione |
|---|---|---|
| A | Solo codice anche per decisioni normative | Il codice non registra necessariamente motivazioni o evidenze richieste. |
| B ✔ | Informazioni utili, aggiornate e proporzionate a rischi e vincoli | La leggerezza riguarda utilità e manutenzione, non un divieto assoluto di documentare. |
| C | Nessun documento in qualsiasi contesto | Esistono bisogni di tracciabilità, manutenzione e conformità. |
| D | Tutti i documenti possibili prima di iniziare | Massimizzare documenti non equivale a massimizzare valore. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag047 · FA-2.1.1 · K2

Quale differenza fra un modello sequenziale e un progetto Agile riguarda il momento del testing?

| | Alternativa | Motivazione |
|---|---|---|
| A | Nel progetto Agile gli stakeholder di business non testano | Anche nei progetti Agile gli stakeholder di business provano le storie durante l’implementazione. |
| B ✔ | Nel progetto Agile il testing si svolge durante tutta l’iterazione, non come attività finale | Le iterazioni sono brevi e sviluppo, integrazione e test avvengono in parallelo e in sovrapposizione. |
| C | Nel progetto Agile il testing inizia solo dopo l’ultima iterazione | È l’opposto: un testing rinviato alla fine è tipico dei modelli sequenziali. |
| D | Nel modello sequenziale non esistono livelli di test | I livelli di test esistono in entrambi i modelli. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag048 · FA-2.1.1 · K2

Rispetto a un modello sequenziale, che cosa accade ai livelli di test in molti progetti Agile?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Si sovrappongono, perché requisiti, design e codice possono cambiare durante l’iterazione | Nei modelli sequenziali l’uscita da un livello è spesso l’ingresso nel successivo; nei progetti Agile i livelli tendono a sovrapporsi. |
| B | Ognuno deve chiudersi formalmente prima che inizi il successivo | Questa è la regola tipica dei modelli sequenziali, che nei progetti Agile spesso non vale. |
| C | I criteri di uscita vengono aboliti | Criteri come la definition of done continuano a esistere. |
| D | Resta un solo livello: l’accettazione | Unit test, test delle feature, regressione e altri livelli restano presenti. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag049 · FA-2.1.2 · K2

Durante un’iterazione, quale sequenza di attività di test attraversa tipicamente una user story?

| | Alternativa | Motivazione |
|---|---|---|
| A | Prima il collaudo utente, poi gli unit test | La sequenza è invertita: gli unit test accompagnano lo sviluppo. |
| B | Un solo test di sistema alla fine del rilascio | Concentrare tutto alla fine contraddice l’integrazione fra sviluppo e test. |
| C | Feature validation prima di scrivere il codice | Senza una funzionalità non c’è nulla da validare. |
| D ✔ | Unit test dello sviluppatore, poi feature verification sui criteri di accettazione e feature validation con gli stakeholder | La storia passa dagli unit test alla verifica sui criteri di accettazione, spesso automatizzata, e alla validazione collaborativa della sua utilità. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag050 · FA-2.1.2 · K2

Una tester lavora in coppia con uno sviluppatore sulla stessa funzionalità. Quale beneficio è più probabile?

| | Alternativa | Motivazione |
|---|---|---|
| A | Lo sviluppatore smette di scrivere unit test | Gli unit test restano compito dello sviluppatore. |
| B | L’indipendenza del testing aumenta al massimo | Il lavoro a stretto contatto riduce l’indipendenza, non la massimizza. |
| C ✔ | Sviluppo e test della funzionalità procedono insieme, con feedback immediato | Il pairing, citato dal syllabus, integra sviluppo e test: i problemi emergono mentre la funzionalità prende forma. |
| D | La tester non deve più progettare test | La progettazione dei test resta necessaria. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag051 · FA-2.1.2 · K2

Secondo la buona pratica citata dal syllabus, quando una funzionalità è “done”?

| | Alternativa | Motivazione |
|---|---|---|
| A | Quando la storia è stata stimata | La stima precede il lavoro. |
| B ✔ | Quando è stata integrata e testata con il sistema | Una funzionalità non si considera completata finché non è integrata e testata nel sistema. |
| C | Quando il codice compila | Compilare non dice nulla sul comportamento. |
| D | Quando passano gli unit test dello sviluppatore | Gli unit test da soli non verificano l’integrazione né i criteri di accettazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag015 · FA-2.1.3 · K2

Come mantenere pensiero critico collaborando strettamente con gli sviluppatori?

| | Alternativa | Motivazione |
|---|---|---|
| A | Isolare sempre il tester da ogni conversazione | L’isolamento può perdere informazioni e ritardare feedback. |
| B | Considerare la collaborazione incompatibile con il testing | Collaborazione e critica costruttiva possono rafforzarsi. |
| C ✔ | Usare revisioni incrociate e discutere ipotesi e rischi | Prospettive diverse possono sfidare le assunzioni senza perdere il contesto condiviso. |
| D | Accettare automaticamente ogni spiegazione del codice | Il consenso non è una verifica indipendente delle assunzioni. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag052 · FA-2.1.3 · K2

Un tester inserito stabilmente nel team Agile collabora ogni giorno con gli sviluppatori. Quale rischio va gestito?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | La perdita di indipendenza e di valutazione oggettiva | Stare nel team favorisce conoscenza e rapidità, ma può ridurre distacco e obiettività. |
| B | L’impossibilità di automatizzare i test | L’inserimento nel team non impedisce l’automazione. |
| C | La mancanza di feedback rapido | La vicinanza al team accelera il feedback. |
| D | La scarsa conoscenza del prodotto | Lavorando nel team il tester conosce bene il prodotto. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag053 · FA-2.1.3 · K2

Un team di test separato viene assegnato solo negli ultimi giorni di ogni sprint. Quale problema è tipico?

| | Alternativa | Motivazione |
|---|---|---|
| A | Perdita totale di indipendenza | Proprio la separazione preserva l’indipendenza. |
| B | Eccessiva vicinanza agli sviluppatori | Il problema è la distanza, non la vicinanza. |
| C | Impossibilità di eseguire test manuali | I test manuali restano possibili. |
| D ✔ | Pressione dei tempi e scarsa conoscenza delle nuove funzionalità | L’indipendenza è preservata, ma arrivare tardi porta pressione, poca conoscenza delle novità e relazioni difficili. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag054 · FA-2.1.3 · K2

Quale organizzazione combina indipendenza e buona conoscenza del prodotto?

| | Alternativa | Motivazione |
|---|---|---|
| A | Solo test automatici scritti dagli sviluppatori | Il solo test degli sviluppatori riduce l’indipendenza. |
| B | Nessun tester: il product owner verifica tutto | Il product owner non sostituisce un testing strutturato. |
| C ✔ | Un team di test indipendente con tester assegnati ai team Agile a lungo termine, fin dall’inizio | L’assegnazione stabile permette di conoscere il prodotto e costruire relazioni mantenendo l’appartenenza a un team indipendente. |
| D | Tester assegnati su richiesta negli ultimi giorni dello sprint | Arrivare a fine sprint lascia poca conoscenza e molta pressione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag013 · FA-2.2.1 · K2

Un burndown scende regolarmente. Quale conclusione è giustificata?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Il lavoro residuo misurato sta diminuendo, ma la qualità richiede altre evidenze | Il grafico rappresenta lavoro residuo, non una prova autonoma di qualità o copertura. |
| B | Tutti i requisiti sono corretti | I requisiti possono essere errati pur con attività completate. |
| C | Non restano rischi di prodotto | Il rischio residuo va valutato con evidenze specifiche. |
| D | La copertura dei test è completa | Una misura di effort non misura la copertura. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag055 · FA-2.2.1 · K2

Quale mezzo mostra in modo immediato e dettagliato lo stato di tutto il team, test inclusi?

| | Alternativa | Motivazione |
|---|---|---|
| A | Il contratto con il cliente | Il contratto non descrive l’avanzamento del lavoro. |
| B ✔ | La task board con colonne come “da fare”, “in corso”, “verifica” e “fatto” | Storie, task di sviluppo e di test si muovono sulla board: lo stato è visibile a tutti in ogni momento. |
| C | Il piano di test approvato a inizio progetto | Un piano iniziale non mostra lo stato corrente. |
| D | Il registro delle presenze | Le presenze non dicono nulla sui progressi. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag056 · FA-2.2.1 · K2

Come vanno usate le metriche di test in un team Agile?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Per supportare decisioni e miglioramento, non per premiare o punire singole persone | Il syllabus chiede metriche pertinenti, utili alle decisioni e mai usate per premiare, punire o isolare qualcuno. |
| B | Per classificare i membri del team | Classificare le persone è proprio l’uso da evitare. |
| C | Per sostituire le conversazioni nello stand-up | Le metriche completano la comunicazione, non la sostituiscono. |
| D | Solo a fine progetto, in un report conclusivo | In un progetto Agile servono informazioni aggiornate durante le iterazioni. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag057 · FA-2.2.1 · K2

Un task di test è fermo da tre giorni sulla board. Qual è la risposta più coerente con il syllabus?

| | Alternativa | Motivazione |
|---|---|---|
| A | Attendere la retrospettiva di fine iterazione | Aspettare la retrospettiva lascia il blocco attivo per giorni. |
| B | Spostarlo in “fatto” per non rallentare il burndown | Falsare lo stato rende inutile la board. |
| C | Risolverlo da soli senza informare nessuno | Il problema riguarda il team e la sua capacità di completare l’iterazione. |
| D ✔ | Segnalarlo nello stand-up perché il team analizzi e rimuova il blocco | I blocchi, anche quelli del testing, si comunicano nello stand-up quotidiano così che il team possa intervenire subito. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag011 · FA-2.2.2 · K2

A ogni iterazione cresce la regressione manuale. Quale strategia è sostenibile?

| | Alternativa | Motivazione |
|---|---|---|
| A | Rinunciare alla regressione | Le nuove funzionalità possono danneggiare quelle esistenti. |
| B | Conservare per sempre anche test obsoleti | Controlli obsoleti consumano risorse e possono produrre falsi allarmi. |
| C ✔ | Automatizzare controlli stabili e importanti e mantenere la suite | La selezione considera rischio, ripetibilità, costo e manutenzione; libera tempo per nuove indagini. |
| D | Automatizzare tutto senza valutare costi | Test instabili o poco utili possono costare più del beneficio. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag014 · FA-2.2.2 · K2

Qual è lo scopo di un Build Verification Test?

| | Alternativa | Motivazione |
|---|---|---|
| A | Sostituire ogni test di regressione | La selezione rapida lascia fuori molti comportamenti. |
| B | Certificare l’assenza di vulnerabilità | La sicurezza richiede analisi e test dedicati. |
| C | Misurare la soddisfazione degli utenti | Il funzionamento minimo non misura il valore percepito. |
| D ✔ | Valutare rapidamente se la build è adatta a test ulteriori | Un insieme breve di controlli essenziali evita di investire su una build inutilizzabile. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag058 · FA-2.2.2 · K2

A ogni iterazione il prodotto cresce e non c’è tempo per rieseguire tutti i test. Che cosa raccomanda il syllabus?

| | Alternativa | Motivazione |
|---|---|---|
| A | Congelare la suite di regressione al primo rilascio | Una suite congelata invecchia con le funzionalità che cambiano. |
| B | Rinunciare alla regressione e affidarsi al cliente | Il rischio di regressione resterebbe scoperto. |
| C ✔ | Rivedere i test, scegliere i candidati alla regressione, automatizzarne il più possibile e ritirare quelli non più rilevanti | La suite va curata a ogni iterazione: selezione, automazione e ritiro dei test superati tengono sotto controllo il rischio di regressione. |
| D | Eseguire solo i test dell’iterazione corrente | Le modifiche possono rompere funzionalità delle iterazioni precedenti. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag059 · FA-2.2.2 · K2

Un test automatico di regressione fallisce dopo una modifica di comportamento voluta e concordata con il business. Che cosa fare?

| | Alternativa | Motivazione |
|---|---|---|
| A | Ignorare il fallimento finché non passa da solo | Un test che fallisce ignorato smette di informare. |
| B ✔ | Aggiornare il test, e se serve la storia, ai nuovi criteri di accettazione | Il team analizza il fallimento: se dipende da un cambiamento legittimo, il test va aggiornato o ritirato. |
| C | Disattivare l’intera suite di regressione | Disattivare la suite elimina la protezione dalla regressione. |
| D | Aprire un difetto di massima gravità senza analisi | Prima di parlare di difetto bisogna capire la causa. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag060 · FA-2.3.1 · K2

Oltre alle competenze Foundation, quali competenze il syllabus attende da un tester Agile?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Automazione dei test, TDD, ATDD e tecniche black-box, white-box ed esperienziali | Il syllabus elenca proprio automazione, TDD, ATDD e tecniche black-box, white-box ed esperienziali. |
| B | Gestione del budget aziendale | Il budget non è una competenza richiesta al tester. |
| C | Amministrazione dei contratti con i fornitori | La gestione dei contratti esula dal ruolo. |
| D | Progettazione grafica dell’interfaccia | Il design grafico non fa parte delle competenze attese. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag061 · FA-2.3.1 · K2

Quale comportamento riflette le competenze interpersonali attese da un tester Agile?

| | Alternativa | Motivazione |
|---|---|---|
| A | Attendere specifiche complete prima di fare domande | Aspettare specifiche complete rallenta il feedback e lascia ambiguità. |
| B | Evitare il confronto per non rallentare il team | Il confronto costruttivo fa parte del ruolo. |
| C | Comunicare soltanto tramite defect report | La comunicazione solo formale limita la collaborazione. |
| D ✔ | Raccogliere attivamente informazioni dagli stakeholder, senza basarsi solo su specifiche scritte | Il tester Agile cerca attivamente le informazioni dalle persone. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag062 · FA-2.3.1 · K2

Una tester è positiva e orientata alle soluzioni con il team, ma mette in dubbio una soluzione rischiosa. Quali competenze mostra?

| | Alternativa | Motivazione |
|---|---|---|
| A | Accettazione di ogni decisione per mantenere l’armonia | Accettare tutto per armonia è un rischio, non una competenza. |
| B | Conoscenza del dominio al posto delle competenze di test | La situazione non riguarda il dominio. |
| C ✔ | Orientamento alle soluzioni e pensiero critico e scettico sul prodotto | Il syllabus chiede insieme un atteggiamento positivo e uno sguardo critico, orientato alla qualità. |
| D | Indipendenza assoluta e rifiuto della collaborazione | Mettere in dubbio una scelta non significa rifiutare la collaborazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag012 · FA-2.3.2 · K2

Qual è un contributo del tester nel team Agile?

| | Alternativa | Motivazione |
|---|---|---|
| A | Approvare ogni decisione di business da solo | Le decisioni di business richiedono i responsabili del prodotto. |
| B ✔ | Aiutare il team a prevenire problemi e comunicare rischi | Coaching, esempi e pensiero critico migliorano le decisioni durante tutto il ciclo. |
| C | Essere l’unico responsabile di tutti i difetti | La responsabilità della qualità resta condivisa. |
| D | Limitarsi al collaudo finale | L’intervento anticipato previene problemi invece di rilevarli soltanto. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag063 · FA-2.3.2 · K2

Quale attività rientra nel ruolo del tester in un team Agile?

| | Alternativa | Motivazione |
|---|---|---|
| A | Sostituire lo Scrum Master | I ruoli restano distinti. |
| B ✔ | Misurare e comunicare la copertura dei test in tutte le dimensioni pertinenti | La misura della copertura è fra le attività che il syllabus attribuisce al tester. |
| C | Decidere da solo l’ordine del product backlog | L’ordine del backlog spetta al product owner. |
| D | Approvare il budget del rilascio | Il budget non è un compito del tester. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag064 · FA-2.3.2 · K2

Il team trascura sistematicamente i test non funzionali. Quale azione rientra nel ruolo del tester?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Fare coaching su quegli aspetti del testing e assicurare che i task siano pianificati | Coaching sul testing e pianificazione dei task di test nelle iterazioni sono attività previste per il tester. |
| B | Eseguire tutti i test non funzionali da solo, senza dirlo | Lavorare da solo e in silenzio toglie visibilità al team. |
| C | Tacere per non creare tensioni | Il silenzio su pratiche inefficaci è un rischio organizzativo citato dal syllabus. |
| D | Bloccare il rilascio senza discuterne | Le decisioni di rilascio si prendono insieme, sulla base delle informazioni. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag065 · FA-2.3.2 · K2

Quale rischio organizzativo per i tester Agile cita il syllabus?

| | Alternativa | Motivazione |
|---|---|---|
| A | Avere troppo tempo libero nelle iterazioni | Il problema citato è semmai il contrario: tenere il ritmo dei cambiamenti. |
| B | Non poter partecipare alle retrospettive | I tester partecipano alle retrospettive. |
| C | Dover lavorare solo con test manuali | L’automazione è diffusa nei progetti Agile. |
| D ✔ | Diventare tolleranti o silenziosi verso pratiche inefficienti o di bassa qualità | Il syllabus cita anche la perdita della mentalità del tester e la difficoltà di stare al passo con i cambiamenti. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag066 · FA-3-KW · K1

Che cos’è un unit test framework?

| | Alternativa | Motivazione |
|---|---|---|
| A | L’insieme dei criteri di accettazione di una storia | I criteri di accettazione sono condizioni, non uno strumento. |
| B | Una tecnica di stima basata sul consenso | La stima a consenso è il planning poker. |
| C ✔ | Uno strumento che supporta la scrittura e l’esecuzione automatica dei test di unità | Il framework fornisce struttura, asserzioni ed esecuzione automatica dei test di unità, come quelli scritti nel TDD. |
| D | Il documento che descrive la strategia di test del rilascio | La strategia di test è un documento, non uno strumento di esecuzione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag067 · FA-3-KW · K1

Che cos’è una test charter?

| | Alternativa | Motivazione |
|---|---|---|
| A | L’elenco dei difetti aperti | L’elenco dei difetti è un’informazione utile, non una charter. |
| B ✔ | Un documento che indica obiettivo e condizioni di test di una sessione esplorativa a tempo | La charter orienta la sessione esplorativa: che cosa esplorare, con quale scopo e in quale tempo. |
| C | Il contratto firmato con il cliente | Il contratto non guida una sessione di test. |
| D | Il report finale di completamento dei test | Il report riassume i risultati, non orienta una sessione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag068 · FA-3-KW · K1

Che cos’è un rischio di qualità (rischio di prodotto)?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Un possibile problema il cui effetto principale ricade sulla qualità del prodotto | Quando l’effetto principale riguarda la qualità del prodotto si parla di rischio di qualità o di prodotto. |
| B | Il ritardo nella consegna dell’ambiente di test | Un ritardo dell’ambiente minaccia il progetto: è un rischio di progetto. |
| C | Un elemento sotto configuration management | Un configuration item non è un rischio. |
| D | Una stima di sforzo in story point | Una stima non è un rischio. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag017 · FA-3.1.1 · K1

Qual è la sequenza essenziale del TDD?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Test rosso, codice minimo verde, refactoring | Il fallimento atteso verifica il test; il codice soddisfa il comportamento e il refactoring migliora la struttura mantenendo i test verdi. |
| B | Codice completo, rilascio, primo test | Il test arriva troppo tardi per guidare lo sviluppo. |
| C | Refactoring senza test, poi accettazione | Manca la rete di test che protegge il refactoring. |
| D | Demo, contratto, rilascio | Sono attività possibili di progetto, ma non il ciclo TDD. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag018 · FA-3.1.1 · K1

Business, sviluppatore e tester definiscono esempi di accettazione prima del codice. Quale pratica descrive il caso?

| | Alternativa | Motivazione |
|---|---|---|
| A | Solo test di carico | Il carico verifica una caratteristica non funzionale specifica. |
| B | Debugging dopo rilascio | Il debugging localizza e corregge cause di guasti, non definisce l’accettazione prima del codice. |
| C | Sola analisi statica | L’analisi statica non descrive la collaborazione sugli esempi di accettazione. |
| D ✔ | ATDD | ATDD usa esempi di accettazione condivisi come guida all’implementazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag019 · FA-3.1.1 · K1

Qual è il ruolo di Given–When–Then negli scenari BDD?

| | Alternativa | Motivazione |
|---|---|---|
| A | Sostituire ogni conversazione | Gli scenari sono frutto e supporto della conversazione. |
| B | Identificare sempre test di componente | La sintassi non determina il livello del test. |
| C ✔ | Esprimere contesto, evento e comportamento atteso in modo condiviso | La struttura rende esplicite precondizioni, azione e risultato; la comprensione condivisa resta centrale. |
| D | Provare automaticamente ogni requisito | Una forma testuale non garantisce copertura o esecuzione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag069 · FA-3.1.2 · K1

Che cosa rappresenta la piramide dei test?

| | Alternativa | Motivazione |
|---|---|---|
| A | Molti test di accettazione e pochi test di unità | È la forma rovesciata, spesso detta “cono gelato”, che la piramide vuole evitare. |
| B | Lo stesso numero di test a ogni livello | La piramide indica proprio una distribuzione disuguale. |
| C | La gerarchia dei ruoli nel team | Riguarda i livelli di test, non l’organizzazione delle persone. |
| D ✔ | Molti test ai livelli bassi, come unità e integrazione, e via via meno salendo verso i livelli alti | La base larga indica molti test di unità e integrazione; il numero diminuisce verso sistema e accettazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag070 · FA-3.1.2 · K1

Secondo il syllabus, con quali strumenti si automatizzano di solito i test alla base della piramide?

| | Alternativa | Motivazione |
|---|---|---|
| A | Nessuno: alla base si testa solo manualmente | La base della piramide è proprio la parte più automatizzata. |
| B | Strumenti di gestione dei contratti | Non sono strumenti di test. |
| C ✔ | Strumenti basati su API | Unit test e test di integrazione si automatizzano di solito con strumenti basati su API. |
| D | Strumenti basati sulla GUI | Gli strumenti GUI sono tipici dei livelli sistema e accettazione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag071 · FA-3.1.2 · K1

Su quale principio si fonda la piramide dei test?

| | Alternativa | Motivazione |
|---|---|---|
| A | L’automazione elimina ogni test manuale | La piramide non elimina i test manuali. |
| B ✔ | Anticipare QA e test, per eliminare i difetti il prima possibile | Il syllabus collega la piramide al principio del testing anticipato: rimuovere i difetti presto nel ciclo di vita. |
| C | Il testing esaustivo è possibile ai livelli bassi | Il testing esaustivo resta impossibile a ogni livello. |
| D | I test di accettazione costano meno da mantenere | I test di alto livello sono di solito più lenti e costosi da mantenere. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag023 · FA-3.1.3 · K2

Quale affermazione sui quadranti di testing è corretta?

| | Alternativa | Motivazione |
|---|---|---|
| A | Il quadrante rende superflua l’analisi del rischio | Il rischio guida la scelta e profondità delle attività. |
| B | Q3 contiene solo test di componente | Q3 riguarda la critica del prodotto dal punto di vista business, come esplorazione e usabilità. |
| C ✔ | Aiutano a ragionare su scopi e prospettive, non sono fasi obbligate | La classificazione stimola una strategia bilanciata; attività di quadranti diversi possono convivere. |
| D | Q1 deve sempre terminare prima di Q2 | Non si tratta di un ciclo di vita sequenziale. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag072 · FA-3.1.3 · K2

Un team esegue test di carico e di sicurezza. In quale quadrante si collocano?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Q4: orientati alla tecnologia, criticano il prodotto | Prestazioni, carico, stress, sicurezza e affidabilità tecnica sono test di Q4, spesso automatizzati. |
| B | Q1: unit test a supporto degli sviluppatori | Q1 contiene gli unit test. |
| C | Q2: test funzionali orientati al business | Q2 conferma il comportamento rispetto ai criteri di accettazione. |
| D | Q3: test esplorativi e di usabilità | Q3 critica il prodotto dal punto di vista dell’utente. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag073 · FA-3.1.3 · K2

Quale descrizione corrisponde al quadrante Q2?

| | Alternativa | Motivazione |
|---|---|---|
| A | Livello di unità, orientato alla tecnologia, a supporto degli sviluppatori | Questa è la descrizione di Q1. |
| B | Critica il prodotto con test di prestazioni e sicurezza | Questa è la descrizione di Q4. |
| C | Contiene user acceptance test, alpha e beta test | Questi test appartengono a Q3. |
| D ✔ | Livello di sistema, orientato al business, conferma il comportamento del prodotto con test funzionali, esempi e story test | Q2 verifica i criteri di accettazione, manualmente o in automatico, ed è utile per costruire la regressione automatica. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag074 · FA-3.1.3 · K2

Una tester pianifica test esplorativi e di usabilità con utenti reali. Che cosa indica il modello dei quadranti?

| | Alternativa | Motivazione |
|---|---|---|
| A | Non rientrano nei quadranti perché sono manuali | I quadranti includono test manuali e automatici. |
| B | Sono test statici e restano fuori dal modello | I quadranti riguardano il testing dinamico, e questi test lo sono. |
| C ✔ | Sono in Q3: orientati al business, criticano il prodotto e sono spesso manuali | Q3 raccoglie test esplorativi, di usabilità, scenari e accettazione utente, con scenari e dati realistici. |
| D | Sono in Q1 e vanno inseriti nella CI come unit test | Q1 riguarda gli unit test degli sviluppatori. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag075 · FA-3.1.4 · K3

Sprint zero di un nuovo progetto Scrum: come contribuisce la tester?

| | Alternativa | Motivazione |
|---|---|---|
| A | Con il collaudo finale insieme al cliente | Il collaudo finale arriva molto più avanti. |
| B ✔ | Con la strategia di test iniziale, una prima analisi dei rischi di qualità, le metriche di test e la definition of done | Nello sprint zero si preparano strategia, rischi, metriche, strumenti, task board e definition of done. |
| C | Con la regressione completa e il report di rilascio | Non c’è ancora un prodotto da sottoporre a regressione. |
| D | Scrivendo il codice delle prime storie | Nello sprint zero non si sviluppano ancora le storie. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag076 · FA-3.1.4 · K3

Nello sprint planning compare il task “Testare il modulo pagamenti”, stimato 6 giorni. Che cosa propone la tester?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Scomporlo in task da uno o due giorni, legati ai criteri di accettazione e visibili sulla task board | Il syllabus indica task di uno o due giorni: avanzamento e blocchi diventano visibili ogni giorno. |
| B | Accettarlo così e aggiornarlo a fine sprint | Un task di sei giorni nasconde i ritardi fino alla fine. |
| C | Toglierlo dalla board per non rallentare il burndown | Nascondere il lavoro di test falsa lo stato del team. |
| D | Chiedere al product owner di eseguirlo | Il test resta un compito del team, non va delegato al product owner. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag077 · FA-3.1.4 · K3

Gli stakeholder non si fidano dei risultati dei test del team Scrum. Quale pratica risponde meglio al problema?

| | Alternativa | Motivazione |
|---|---|---|
| A | Ridurre il numero di test eseguiti | Meno test non aumentano la fiducia. |
| B | Smettere di mostrare la task board | Meno trasparenza peggiora la fiducia. |
| C | Affidare tutto il test a un team esterno a fine progetto | Un test tardivo ed esterno porta i problemi di tempo e conoscenza già visti. |
| D ✔ | Rendere credibile la strategia di test, informando gli stakeholder sul processo di test | Fra le buone pratiche dei team Scrum il syllabus cita la credibilità: senza informazioni sul processo, i risultati non convincono. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag020 · FA-3.2.1 · K2 · preparazione, fuori simulazione

Due funzionalità hanno costi simili: una gestisce pagamenti, l’altra il colore di un’icona. Come prioritizzare i test?

| | Alternativa | Motivazione |
|---|---|---|
| A | Usare incremental design come misura del rischio | Il design incrementale non è una misura di probabilità e impatto. |
| B ✔ | Valutare probabilità e impatto dei problemi | L’analisi del rischio considera conseguenze e probabilità; il contesto può rendere prioritari i pagamenti. |
| C | Usare solo l’ordine alfabetico | L’ordine alfabetico non rappresenta il rischio. |
| D | Testare solo la più facile | La facilità non indica l’importanza del guasto. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag078 · FA-3.2.1 · K3

Nell’iteration planning ci sono tre elementi: A) calcolo degli interessi di un mutuo, usato da tutti i clienti; B) nuovo colore di un pulsante; C) report mensile, già stabile, usato da due persone. Quale scelta è più giustificata?

| | Alternativa | Motivazione |
|---|---|---|
| A | Tutti con la stessa profondità di test | La profondità del test deve essere proporzionale al livello di rischio. |
| B | C per primo perché è già stabile | La stabilità di C riduce la probabilità di difetti: semmai va dopo. |
| C ✔ | A per primo e con più test; B e C dopo, con meno test | A unisce impatto alto (tutti i clienti, denaro) e probabilità rilevante: va iniziato prima e testato di più. |
| D | B per primo perché è il più rapido | La rapidità non misura il rischio. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag079 · FA-3.2.1 · K3

Per la storia “ricerca prodotti” il team individua il rischio “risposte lente con molti utenti”. Come si classifica e che cosa lo mitiga meglio?

| | Alternativa | Motivazione |
|---|---|---|
| A | Rischio di usabilità: test esplorativo dell’interfaccia | L’usabilità riguarda la comprensibilità, non i tempi sotto carico. |
| B ✔ | Rischio non funzionale di efficienza: test di prestazioni con carichi realistici | La lentezza è un rischio di qualità legato a efficienza e tempi di risposta: va mitigata con test di prestazioni. |
| C | Rischio funzionale di accuratezza: una tabella decisionale | Il rischio non riguarda calcoli o regole. |
| D | Rischio di progetto: rivedere il piano | Il problema colpisce il prodotto, non il piano. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag080 · FA-3.2.1 · K3

Durante l’identificazione dei rischi il team scopre che molte storie hanno criteri di accettazione vaghi. Quale mitigazione è possibile già prima di eseguire test?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Rivedere a fondo le storie con il business per chiarire i criteri | Il syllabus ricorda che alcuni rischi si mitigano prima dell’esecuzione, per esempio con una revisione accurata delle storie. |
| B | Allungare lo sprint | Più tempo non chiarisce i criteri. |
| C | Ignorare il problema e testare ciò che si può | Test basati su criteri vaghi lasciano il rischio scoperto. |
| D | Rinviare l’analisi dei rischi al rilascio successivo | Rinviare lascia il rischio attivo proprio quando conta. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag081 · FA-3.2.2 · K3

Nel planning poker le carte rivelate sono 3, 5, 5 e 21. Che cosa fa il team?

| | Alternativa | Motivazione |
|---|---|---|
| A | Usa la media, 8,5 | La media non è nella sequenza e salta la discussione che dà valore alla tecnica. |
| B | Sceglie 21, il valore più prudente, senza discutere | Regole come il valore più alto servono a limitare i giri, non a evitare la discussione. |
| C | Scarta il 21 e assegna 5 | Scartare il valore anomalo perde l’informazione che contiene. |
| D ✔ | Discute le differenze, partendo da chi ha scelto 3 e 21, e ripete la stima | Le stime divergenti si discutono, perché rivelano conoscenze o ipotesi diverse; poi si ripete il giro. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag082 · FA-3.2.2 · K3

Due storie richiedono lo stesso sforzo di sviluppo: una riguarda il calcolo delle commissioni (rischio alto), l’altra un testo informativo (rischio basso). Come si riflette il testing nella stima?

| | Alternativa | Motivazione |
|---|---|---|
| A | La storia a basso rischio riceve la stima più alta | Il rischio basso richiede meno test, non di più. |
| B | Il test non entra nella stima e si stima a fine rilascio | Nei progetti Agile la stima include lo sforzo di test. |
| C ✔ | La storia ad alto rischio riceve una stima maggiore, per la maggiore profondità di test | La stima comprende anche il test: un rischio più alto richiede test più approfonditi, quindi più sforzo. |
| D | Stessa stima, perché lo sviluppo è uguale | Ignorare il test sottostima la storia rischiosa. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag083 · FA-3.2.2 · K3

Tutti gli stimatori mostrano valori molto alti, 55 e 89, per una storia. Che cosa indica di solito?

| | Alternativa | Motivazione |
|---|---|---|
| A | La storia non richiede test | La dimensione della stima non elimina il test. |
| B ✔ | La storia non è ben compresa o va scomposta in storie più piccole | Il syllabus spiega che una stima alta segnala di solito scarsa comprensione o una storia troppo grande. |
| C | La storia è la più importante del backlog | Dimensione e priorità sono cose diverse. |
| D | Il team è poco produttivo | Una stima alta parla della storia, non della produttività. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag084 · FA-3.3.1 · K3

La definition of done d’integrazione chiede che tutte le interfacce fra unità siano testate. Il report: 9 interfacce su 10 testate, nessun difetto maggiore aperto. Che cosa concludi?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | L’integrazione non è ancora “done”: manca un’interfaccia | Ogni criterio va soddisfatto: l’assenza di difetti maggiori non compensa l’interfaccia non testata. |
| B | È “done”, perché non ci sono difetti maggiori | Un criterio soddisfatto non sostituisce gli altri. |
| C | È “done”, perché il 90% basta | Il criterio chiede tutte le interfacce, non una soglia. |
| D | La definition of done non si applica all’integrazione | Ogni livello di test ha la propria definition of done. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag085 · FA-3.3.1 · K3

La storia del checkout non dice nulla sui tempi di risposta, ma i profili utente mostrano picchi di accesso durante i saldi. Come usi questa informazione?

| | Alternativa | Motivazione |
|---|---|---|
| A | La ignori, perché conta solo la storia | La storia è una base importante, ma non l’unica. |
| B | La usi solo dopo il rilascio | Scoprire il problema in produzione costa di più. |
| C | La registri come difetto | Non è stato osservato alcun malfunzionamento: è un’informazione per il test. |
| D ✔ | Come base di test aggiuntiva: proponi un criterio e test di prestazioni per i picchi | I profili utente sono fra le basi di test citate dal syllabus: segnalano un rischio da discutere e coprire. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag086 · FA-3.3.1 · K3

A fine iterazione tutte le storie sono testate singolarmente, ma l’integrazione delle funzionalità non è stata testata e due difetti non critici non sono nel backlog. Secondo la definition of done d’iterazione del syllabus, che cosa manca?

| | Alternativa | Motivazione |
|---|---|---|
| A | Solo correggere subito tutti i difetti non critici | I difetti non critici possono restare, purché tracciati e prioritizzati. |
| B | Solo scrivere la documentazione | La documentazione non risolve le due mancanze. |
| C ✔ | Testare l’integrazione delle funzionalità e inserire i difetti non critici nel backlog con una priorità | La DoD d’iterazione chiede integrazione testata e difetti non critici, non risolvibili nell’iterazione, aggiunti al backlog con priorità. |
| D | Niente: l’iterazione è completa | Due elementi della DoD non sono soddisfatti. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag005 · FA-3.3.2 · K2

Una storia dice “ricerca veloce”. Qual è il contributo più utile del tester?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Chiarire carico, soglia e risultati attesi con il team | Condizioni e soglie rendono osservabile la qualità richiesta e sostengono esempi verificabili. |
| B | Accettare “veloce” come criterio misurabile | “Veloce” dipende dalle aspettative: senza condizioni non è un oracolo affidabile. |
| C | Scegliere da solo la soluzione tecnica | Il bisogno va concordato; imporre l’implementazione non è il primo passo. |
| D | Rimandare ogni chiarimento al collaudo | Un chiarimento tardivo aumenta rilavorazioni e divergenze. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag087 · FA-3.3.2 · K2

Un product owner chiede come rendere testabili i criteri di accettazione. Quale indicazione è corretta?

| | Alternativa | Motivazione |
|---|---|---|
| A | Scrivere solo il titolo della storia | Il titolo non basta a capire quando la storia è soddisfatta. |
| B ✔ | Descrivere comportamenti osservabili, regole di business, dati e caratteristiche di qualità misurabili | Il syllabus elenca fra gli aspetti da coprire comportamento, qualità, scenari, regole, interfacce, vincoli e dati. |
| C | Usare aggettivi come “rapido” e “semplice” | Gli aggettivi senza misura non sono verificabili. |
| D | Lasciare i dettagli agli sviluppatori | Senza criteri condivisi ciascuno interpreta a modo suo. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag088 · FA-3.3.2 · K2

Quale criterio di accettazione è una definizione dei dati?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Il codice postale ha 5 cifre, è obbligatorio e non ha valore predefinito | Formato, tipo, valori ammessi e valori predefiniti di un dato sono definizioni dei dati. |
| B | La pagina si carica in meno di 2 secondi | È una caratteristica di qualità (prestazioni). |
| C | Solo i clienti con contratto attivo possono chiedere un rimborso | È una regola di business. |
| D | Il sistema invia l’ordine al magazzino tramite API | È un’interfaccia esterna. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag089 · FA-3.3.2 · K2

Come spieghi al business che “il sistema deve essere affidabile” non è un criterio testabile?

| | Alternativa | Motivazione |
|---|---|---|
| A | Proponendo di eliminare il requisito | Il bisogno di affidabilità resta reale. |
| B | Lasciando la valutazione al giudizio del tester | Senza criterio condiviso il giudizio diventa soggettivo. |
| C | Rinviando il tema a dopo il rilascio | Rinviare aumenta il rischio e il costo. |
| D ✔ | Proponendo un criterio misurabile, per esempio un numero massimo di errori ammessi su un certo numero di operazioni | Una soglia misurabile rende verificabile una caratteristica di qualità, come suggerisce il syllabus per l’affidabilità. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag090 · FA-3.3.3 · K3

Storia: “Come cliente voglio usare un codice sconto valido per ottenere il 10% sul totale”. Con ATDD, quale esempio scrivi per primo?

| | Alternativa | Motivazione |
|---|---|---|
| A | La pagina del carrello regge 1000 utenti contemporanei | Gli aspetti non funzionali si coprono dopo il percorso positivo. |
| B | Lo sconto si applica anche alle spese di spedizione | La spedizione non è nella storia: un esempio non deve aggiungere nulla alla storia. |
| C ✔ | Dato un carrello da 50 € e il codice valido SCONTO10, quando lo applico, allora il totale è 45 € | In ATDD si parte dagli esempi positivi, il percorso in cui tutto va come previsto; poi si aggiungono casi negativi e non funzionali. |
| D | Dato un codice scaduto, quando lo applico, allora compare un messaggio d’errore | È un buon esempio, ma negativo: viene dopo quelli positivi. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag091 · FA-3.3.3 · K3

Nel workshop di specifica emerge l’esempio “il codice sconto vale anche sui prodotti già scontati”, che la storia non prevede. Come procedi?

| | Alternativa | Motivazione |
|---|---|---|
| A | Lasci decidere lo sviluppatore | La decisione riguarda il business, non solo lo sviluppo. |
| B ✔ | Chiarisci con il business e aggiorni la storia prima di farne un test | Gli esempi non devono descrivere aspetti assenti dalla storia: la lacuna si risolve nella storia, con il business. |
| C | Lo aggiungi come test senza modificare la storia | Un test che va oltre la storia crea requisiti nascosti. |
| D | Lo scarti senza discuterne | Il caso è reale: ignorarlo lascia l’ambiguità. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag092 · FA-3.3.3 · K3

Due esempi ATDD verificano entrambi lo sconto del 10% con codice valido, su carrelli da 50 € e da 60 €, senza altre differenze. Che cosa fare?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Sostituirne uno con un caso diverso, per esempio un codice scaduto, perché due esempi non devono descrivere la stessa caratteristica | Secondo il syllabus nessuna coppia di esempi deve descrivere la stessa caratteristica: meglio usare l’esempio per un caso non coperto. |
| B | Tenerli: più esempi uguali aumentano la copertura | Esempi equivalenti non aggiungono copertura. |
| C | Trasformarli in unit test | Il problema è la ridondanza, non il livello di test. |
| D | Eliminarli entrambi | Il caso positivo serve: va tenuto uno dei due. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag022 · FA-3.3.4 · K2 · preparazione, fuori simulazione

Quale insieme applica BVA a due valori a un campo intero valido da 18 a 65 inclusi?

| | Alternativa | Motivazione |
|---|---|---|
| A | 18, 40, 65 | Il valore centrale non compensa l’assenza dei due valori esterni. |
| B | 19, 20, 63, 64 | Questi valori sono interni e non verificano i confini di validità. |
| C | Solo 40 | Un rappresentante interno non è un’analisi dei valori limite. |
| D ✔ | 17, 18, 65, 66 | Ogni confine è verificato con un valore valido adiacente a uno non valido: 17/18 e 65/66. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag093 · FA-3.3.4 · K3

Storia: “Un cliente può ordinare da 1 a 10 biglietti per evento”. Con la BVA a due valori, quali quantità scegli?

| | Alternativa | Motivazione |
|---|---|---|
| A | 1, 5 e 10 | Il 5 non è un valore limite e mancano i valori invalidi. |
| B | 0 e 10 | Mancano il limite valido 1 e il valore invalido 11. |
| C | 2 e 9 | 2 e 9 sono vicini interni, non i confini con le partizioni invalide. |
| D ✔ | 0, 1, 10 e 11 | Per ogni confine servono il valore limite e il vicino nella partizione adiacente: 0/1 e 10/11. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag094 · FA-3.3.4 · K3

Storia: “La spedizione è gratuita per ordini da 50 € in su e per i clienti Premium a qualsiasi importo”. Con una tabella decisionale completa, quante regole ci sono e quale caso paga la spedizione?

| | Alternativa | Motivazione |
|---|---|---|
| A | 4 regole; pagano i clienti Premium sotto 50 € | I Premium hanno la spedizione gratuita a qualsiasi importo. |
| B | 3 regole; pagano gli ordini da 50 € in su | La tabella completa ha 4 regole e chi supera 50 € non paga. |
| C ✔ | 4 regole; paga solo il cliente non Premium con ordine sotto 50 € | Due condizioni booleane danno 4 combinazioni; solo “non Premium e sotto 50 €” non soddisfa nessuna delle due. |
| D | 2 regole; paga ogni ordine sotto 50 € | Due regole non coprono tutte le combinazioni, e i Premium sotto 50 € non pagano. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag095 · FA-3.3.4 · K3

Storia: “La ricerca risponde entro 2 secondi con fino a 200 utenti contemporanei”. Quali test ricavi applicando la BVA al carico?

| | Alternativa | Motivazione |
|---|---|---|
| A | Verificare solo che la ricerca restituisca risultati | È un test funzionale: ignora il requisito di prestazioni. |
| B ✔ | Misurare i tempi con 200 e con 201 utenti contemporanei | Le tecniche black-box valgono anche per i requisiti non funzionali: 200 è il limite, 201 il primo valore oltre. |
| C | Misurare solo con 1 utente | Un utente non esercita il limite. |
| D | Misurare con 100 utenti, a metà dell’intervallo | Il valore medio non verifica il confine. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag024 · FA-3.3.5 · K2 · preparazione, fuori simulazione

Qual è una buona charter per una sessione esplorativa?

| | Alternativa | Motivazione |
|---|---|---|
| A | Garantire che non esistano difetti | Nessuna sessione può dimostrare in generale l’assenza di difetti. |
| B ✔ | Esplorare i rimborsi interrotti per individuare incoerenze nei saldi, annotando evidenze | Missione e rischio orientano l’apprendimento; le note rendono comunicabili risultati e lacune. |
| C | Cliccare liberamente senza registrare risultati | Senza missione e traccia è difficile valutare o comunicare la sessione. |
| D | Eseguire solo uno script immutabile | L’esplorazione adatta i test a ciò che si apprende, non è mera esecuzione rigida. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag096 · FA-3.3.5 · K3

Una charter dice: “Attore: cliente registrato. Scopo: verificare la modifica degli indirizzi. Setup: account con due indirizzi. Attività: creare, leggere, modificare, cancellare indirizzi”. Quale elemento manca per capire se il comportamento osservato è corretto?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Le note per l’oracolo | Le oracle notes indicano come valutare i risultati, per esempio con quale riferimento confrontarli. |
| B | Il nome dello sviluppatore | Non è un elemento di una charter. |
| C | Il budget del progetto | Non aiuta a valutare il comportamento. |
| D | La data di rilascio | Non dice come giudicare i risultati. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag097 · FA-3.3.5 · K3

In una sessione esplorativa sull’app di prenotazione applichi l’euristica “interruzioni”. Quale test la segue?

| | Alternativa | Motivazione |
|---|---|---|
| A | Provare la prenotazione con 0 e con 1 posto | Questa è l’euristica dei limiti (boundaries). |
| B | Creare, leggere, modificare e cancellare una prenotazione | Questa è l’euristica CRUD. |
| C | Cambiare la lingua del dispositivo | Questa è l’euristica delle variazioni di configurazione. |
| D ✔ | Chiudere l’app durante il pagamento e riaprirla per controllare lo stato della prenotazione | Disconnessioni, spegnimenti o riavvii a metà operazione sono l’euristica delle interruzioni. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag098 · FA-3.3.5 · K3

Una funzione appena consegnata non è ancora conosciuta da nessuno nel team. Quale sessione esplorativa conviene pianificare per prima?

| | Alternativa | Motivazione |
|---|---|---|
| A | Una sessione di regressione automatica | La regressione automatica non è una sessione esplorativa. |
| B | Nessuna: prima servono script dettagliati | L’esplorazione è utile proprio quando i dettagli sono pochi. |
| C ✔ | Una sessione di survey, per capire come funziona | Nella gestione per sessioni si parte dalla survey per conoscere la funzione, poi analisi e deep coverage. |
| D | Una sessione di deep coverage sui casi limite | Senza conoscere la funzione è difficile scegliere i casi limite giusti. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag021 · FA-3.4.1 · K1

A cosa serve una mind map nel testing?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Organizzare idee, rischi e percorsi di esplorazione | Una mappa aiuta a esplorare e collegare idee; la verifica della copertura richiede ulteriori evidenze. |
| B | Eseguire automaticamente test UI | La visualizzazione delle idee non è un motore di esecuzione. |
| C | Sostituire il controllo delle versioni | La gestione delle versioni ha un altro scopo. |
| D | Dimostrare che ogni rischio è coperto | Una mappa può essere incompleta e non prova che i test siano stati eseguiti. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag099 · FA-3.4.1 · K1

Quale strumento adottano spesso i team Agile al posto di strumenti separati per test, requisiti e difetti?

| | Alternativa | Motivazione |
|---|---|---|
| A | Un antivirus | Non c’entra con la gestione delle attività. |
| B ✔ | Un tool di application lifecycle management o di gestione dei task, con task board, burndown e user story | Il syllabus cita strumenti “tutto in uno” con le funzioni tipiche dello sviluppo Agile. |
| C | Un foglio di calcolo per le ferie | Non gestisce il lavoro del team. |
| D | Un compilatore | È uno strumento di sviluppo, non di gestione. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

### ag100 · FA-3.4.1 · K1

Perché gli strumenti di configuration management sono importanti per i tester Agile?

| | Alternativa | Motivazione |
|---|---|---|
| A ✔ | Per conservare e gestire i numerosi test automatici a tutti i livelli e i loro artefatti | Il grande numero di test automatici rende essenziale versionarli e gestirli insieme alle build. |
| B | Per stimare le storie nel planning poker | La stima è un’altra attività. |
| C | Per sostituire la task board | La task board ha un altro scopo. |
| D | Per scrivere i criteri di accettazione | I criteri di accettazione si definiscono con il business. |

- [ ] Obiettivo e K  - [ ] Risposta unica  - [ ] Motivazioni  - [ ] Originalità

Note:

## Approfondimenti fuori syllabus

- ag008: Nella Scrum Guide 2020, il Daily Scrum richiede sempre le tre domande tradizionali? (Approfondimento · Scrum Guide 2020)

