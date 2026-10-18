# Revisione della traduzione inglese (beta)

Generato da `npm run review:en`. 282 domande tradotte su 282 (tutte le CTFL, q001–q080), più titoli dei capitoli e glossario. Le 10 domande del pilota 1.4 sono marcate «pilota»: conviene partire da quelle.

## Per chi rivede

Serve una persona con certificazione CTFL, meglio se ha sostenuto l’esame in inglese. Per ogni domanda verificare:

- **Terminologia**: i termini sono quelli del syllabus CTFL 4.0.1 e del glossario ISTQB.
- **Significato**: la versione inglese chiede la stessa cosa e ha la stessa risposta corretta.
- **Una sola risposta difendibile**: nessuna alternativa diventa corretta, o ambigua, per effetto della traduzione.
- **Stile d’esame**: inglese naturale, senza calchi dall’italiano.

Segnare le note nella colonna o sotto la domanda. Le alternative compaiono nello stesso ordine in entrambe le lingue: è un vincolo tecnico, perché i backup salvano la posizione della risposta.

## Termini vincolati

Un test automatico verifica che, quando il testo italiano usa il termine a sinistra, la versione inglese usi quello a destra.

| Italiano (modello) | Inglese (syllabus CTFL 4.0.1) | OK? |
|---|---|---|
| debugging | debugging | |
| difett* | defect | |
| malfunzionament* / failure | failure | |
| error* | error | |
| assenza di difetti è una falsa garanzia | absence-of-defects fallacy | |
| test esaustiv | exhaustive testing | |
| test di accettazione / testing di accettazione | acceptance testing | |
| criteri di accettazione | acceptance criteria | |
| analisi statica / analizzatore statico | static analysis | |
| pianificazione dei test | test planning | |
| non funzional | non-functional testing | |
| funzionale | functional testing | |
| prestazion | performance efficiency | |
| confirmation testing | confirmation testing | |
| regression testing / regressione | regression testing | |
| test di manutenzione / testing di manutenzione | maintenance testing | |
| integrazione di componenti | component integration testing | |
| integrazione di sistemi | system integration testing | |
| test di sistema / testing di sistema | system testing | |
| shift left | shift left | |
| TDD | test-driven development (TDD) | |
| ATDD | acceptance test-driven development (ATDD) | |
| whole team | whole team approach | |
| quality assurance | quality assurance | |
| condizioni di test | test condition | |
| analisi dei test | test analysis | |
| esecuzione dei test | test execution | |
| completamento dei test | test completion | |
| test log | test log | |
| ispezion | inspection | |
| walkthrough | walkthrough | |
| review informale | informal review | |
| review individuale | individual review | |
| moderatore | moderator | |
| black-box | black-box test technique | |
| white-box | white-box test technique | |
| BVA / valori limite | boundary value analysis | |
| 2 valori | 2-value BVA | |
| partizion | equivalence partitioning | |
| tabella decisionale | decision table testing | |
| transizion | state transition testing | |
| copertura delle istruzioni | statement coverage | |
| copertura dei rami | branch coverage | |
| copertura | coverage | |
| error guessing | error guessing | |
| esplorativ | exploratory testing | |
| checklist | checklist-based testing | |
| stima a tre punti | three-point estimation | |
| stima / stime | three-point estimation | |
| piano di test | test plan | |
| piramide dei test | test pyramid | |
| quadranti del testing | testing quadrants | |
| probabilità e impatto | risk likelihood | |
| analisi del rischio | risk analysis | |
| mitigat / mitigazion | risk mitigation | |
| monitoraggio | test monitoring | |
| rischio di progetto | project risk | |
| rischio di prodotto | product risk | |
| rischio residuo | residual risk | |
| report di completamento | test completion report | |
| defect report | defect report | |
| gestione della configurazione | configuration management | |
| gestione de* test | test management | |
| casi di test | test case | |
| automazione | test automation | |
| oracol | test oracle | |
| base di test | test basis | |
| tracciabilit | traceability | |
| criterio di ingresso | entry criteria | |
| criterio di uscita | exit criteria | |
| charter | test charter | |
| gravit | severity | |
| priorit | priority | |
| testing statico | static testing | |
| testing dinamico / test dinamic | dynamic testing | |

## Domande tradotte

### q001 · FL-1.1.1 · K1 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale è un obiettivo legittimo del testing? | Which of these is a legitimate objective of testing? |
| A ✔ | Fornire informazioni sulla qualità e sul rischio | Providing information about quality and risk |
| B | Provare che nessun difetto esiste | Proving that no defects exist |
| C | Correggere tutti i difetti del codice | Fixing all the defects in the code |
| D | Sostituire ogni decisione di rilascio | Replacing every release decision |
| Spiegazione | Le evidenze dei test aiutano le decisioni. Non dimostrano assenza assoluta di difetti; correggere il codice è attività di debugging. | Test results provide evidence that supports decisions. They do not prove the complete absence of defects; fixing the code is debugging. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q002 · pilota · FL-1.1.2 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Un test rivela un totale errato. La sviluppatrice trova una formula sbagliata e la corregge. Come si chiama questa seconda attività? | A test reveals an incorrect total. The developer finds a wrong formula and fixes it. What is this second activity called? |
| A | Test di accettazione | Acceptance testing |
| B | Analisi statica automatica | Automated static analysis |
| C | Pianificazione dei test | Test planning |
| D ✔ | Debugging | Debugging |
| Spiegazione | Individuare la causa nel codice e correggerla è debugging. Il test ha evidenziato il problema; un test successivo potrà confermare la correzione. | Finding the cause in the code and fixing it is debugging. The test revealed the problem; a subsequent test can confirm the fix. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q003 · FL-1.2.1 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Perché discutere esempi di comportamento durante la definizione dei requisiti? | Why discuss examples of behaviour while the requirements are being defined? |
| A | Per trasferire tutta la qualità al tester | To hand all responsibility for quality over to the tester |
| B | Per dimostrare che il prodotto è già corretto | To prove that the product is already correct |
| C ✔ | Per prevenire interpretazioni diverse prima dell’implementazione | To prevent different interpretations before implementation |
| D | Per evitare ogni test dinamico successivo | To avoid any later dynamic testing |
| Spiegazione | Gli esempi rendono visibili ambiguità quando correggerle è meno oneroso. Non sostituiscono la verifica del software implementato. | Examples expose ambiguities at a point when they are cheaper to fix. They do not replace verifying the implemented software. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q004 · FL-1.2.2 · K1 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale attività è principalmente di quality assurance, orientata al processo? | Which activity is mainly quality assurance, focused on the process? |
| A | Confrontare risultato ottenuto e atteso | Comparing actual and expected results |
| B ✔ | Migliorare il processo di review dopo averne analizzato le lacune | Improving the review process after analysing its gaps |
| C | Eseguire un test di login | Running a login test |
| D | Segnalare un totale errato nel carrello | Reporting an incorrect total in the shopping cart |
| Spiegazione | La QA cerca di migliorare i processi per prevenire problemi. Le altre attività valutano direttamente un prodotto: sono controllo della qualità. | Quality assurance aims to improve processes in order to prevent problems. The other activities evaluate a product directly: they are quality control. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q005 · FL-1.2.3 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Un analista legge male una regola, il codice contiene un confronto errato e una transazione viene rifiutata. Qual è il difetto? | An analyst misreads a rule, the code contains a wrong comparison and a transaction is rejected. What is the defect? |
| A ✔ | Il confronto errato nel codice | The wrong comparison in the code |
| B | La lettura sbagliata dell’analista | The analyst’s misreading |
| C | Il rifiuto osservato della transazione | The observed rejection of the transaction |
| D | Il cliente che invia la transazione | The customer who submits the transaction |
| Spiegazione | L’errore umano può introdurre un difetto nel prodotto. Quando quel difetto si manifesta durante l’esecuzione si osserva un failure. | A human error can introduce a defect into the product. When that defect is triggered during execution, a failure is observed. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q006 · pilota · FL-1.3.1 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Un sistema soddisfa tutte le specifiche, ma gli utenti non riescono a svolgere il loro lavoro. Quale principio spiega meglio il problema? | A system meets all its specifications, but users cannot get their work done. Which principle best explains the problem? |
| A | I difetti si distribuiscono sempre uniformemente | Defects are always distributed evenly |
| B | I test esaustivi sono sempre possibili | Exhaustive testing is always possible |
| C | Ogni difetto produce sempre un failure | Every defect always causes a failure |
| D ✔ | L’assenza di difetti è una falsa garanzia di utilità | Absence-of-defects fallacy |
| Spiegazione | Anche un prodotto conforme alle specifiche può non soddisfare i bisogni reali. La verifica dei requisiti non basta senza considerare l’uso e il valore. | Even a product that conforms to its specifications may not meet users’ real needs. Verifying the requirements is not enough without also considering use and value. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q007 · FL-1.3.1 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Una suite invariata trova sempre meno nuovi difetti. Qual è la risposta più appropriata? | An unchanged test suite finds fewer and fewer new defects. What is the most appropriate response? |
| A | Concludere che il sistema non contiene difetti | Conclude that the system contains no defects |
| B | Ripetere soltanto gli stessi dati più spesso | Just repeat the same data more often |
| C ✔ | Rivedere casi, dati e scenari mantenendo la regressione utile | Review the test cases, data and scenarios while keeping the useful regression tests |
| D | Eliminare tutti i test che passano | Remove all the tests that pass |
| Spiegazione | I test possono perdere efficacia nel trovare nuovi problemi. Aggiornarli e ampliarli aiuta; i test di regressione continuano ad avere valore. | Tests can become less effective at finding new problems. Updating and extending them helps, and regression testing keeps its value. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q008 · FL-1.4.1 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Stai ricavando condizioni di test da una specifica. In quale attività sei principalmente? | You are deriving test conditions from a specification. Which activity are you mainly performing? |
| A | Debugging | Debugging |
| B ✔ | Analisi dei test | Test analysis |
| C | Esecuzione dei test | Test execution |
| D | Completamento dei test | Test completion |
| Spiegazione | L’analisi identifica cosa testare. La progettazione stabilisce come, l’implementazione prepara gli elementi eseguibili e l’esecuzione produce risultati. | Test analysis identifies what to test. Test design determines how, test implementation prepares what is needed for execution, and test execution produces results. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q009 · FL-1.4.2 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Due team testano un videogioco e un dispositivo medico. Perché i loro processi possono essere diversi? | Two teams are testing a video game and a medical device. Why might their test processes differ? |
| A ✔ | Rischi, vincoli e contesto influenzano il processo | Risks, constraints and context influence the process |
| B | Il testing ha un unico processo valido per ogni prodotto | Testing has a single process that is valid for every product |
| C | Solo la dimensione del team influenza i test | Only the size of the team influences testing |
| D | Il testing non serve ai videogiochi | Video games do not need testing |
| Spiegazione | Approccio e rigore dipendono da contesto, rischi, ciclo di sviluppo e vincoli. Le tecniche non si applicano in modo identico a ogni prodotto. | The test approach and its rigour depend on the context, the risks, the development lifecycle and the constraints. Test techniques are not applied identically to every product. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q010 · FL-1.4.3 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale prodotto di lavoro è tipicamente generato durante l’esecuzione dei test? | Which work product is typically produced during test execution? |
| A | Una prima definizione degli obiettivi strategici | An initial definition of the strategic objectives |
| B | Il codice della correzione | The code of the fix |
| C | Il contratto commerciale del progetto | The commercial contract for the project |
| D ✔ | Un registro dei risultati effettivi | A record of the actual results |
| Spiegazione | Il test log registra quanto è accaduto durante l’esecuzione. Piano, codice delle correzioni e contratti hanno scopi e momenti differenti. | The test log records what happened during execution. The test plan, the code of fixes and contracts serve different purposes at different times. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q011 · FL-1.4.4 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Un requisito cambia. Quale informazione aiuta maggiormente a identificare i test da aggiornare? | A requirement changes. Which information helps most in identifying the tests to update? |
| A | L’ordine alfabetico dei nomi dei test | The alphabetical order of the test names |
| B | Il solo numero di difetti chiusi | The number of closed defects alone |
| C ✔ | I collegamenti di tracciabilità tra requisito e test | The traceability links between the requirement and the tests |
| D | Il numero totale di sviluppatori | The total number of developers |
| Spiegazione | La tracciabilità rende visibili dipendenze e copertura, aiutando l’analisi d’impatto. Un conteggio aggregato non identifica i test coinvolti. | Traceability makes dependencies and coverage visible, which supports impact analysis. An aggregate count does not identify the tests affected. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q012 · FL-1.4.5 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale compito appartiene principalmente al ruolo di gestione del test? | Which task belongs mainly to the test management role? |
| A | Scrivere obbligatoriamente tutto il codice di produzione | Writing all the production code, as a mandatory duty |
| B ✔ | Coordinare pianificazione, monitoraggio e controllo | Coordinating test planning, test monitoring and test control |
| C | Correggere ogni difetto applicativo | Fixing every application defect |
| D | Approvare unilateralmente ogni requisito di business | Unilaterally approving every business requirement |
| Spiegazione | La gestione del test coordina attività e risorse. Il ruolo di testing si concentra soprattutto sulle attività tecniche; i ruoli possono essere ricoperti dalla stessa persona. | The test management role coordinates activities and resources. The testing role focuses mainly on the technical activities; the same person can take on both roles. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q013 · FL-1.5.1 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Come comunica meglio un tester un problema controverso? | How does a tester best communicate a contentious problem? |
| A ✔ | Presenta passi ed evidenze e ascolta le spiegazioni del team | By presenting the steps and the evidence, and listening to the team’s explanations |
| B | Attribuisce il difetto alla scarsa competenza dell’autore | By blaming the defect on the author’s lack of skill |
| C | Evita di segnalare il problema per non creare conflitti | By not reporting the problem, to avoid conflict |
| D | Invia soltanto “non funziona” | By sending only “it doesn’t work” |
| Spiegazione | Una comunicazione precisa e costruttiva facilita la soluzione. Colpevolizzare o omettere evidenze riduce la collaborazione. | Precise, constructive communication makes the problem easier to solve. Blaming people or leaving out evidence reduces collaboration. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q014 · FL-1.5.2 · K1 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Nel whole team approach, chi contribuisce alla qualità? | In the whole team approach, who contributes to quality? |
| A | Soltanto i tester | Only the testers |
| B | Soltanto il product owner | Only the product owner |
| C | Soltanto un revisore esterno | Only an external reviewer |
| D ✔ | Tutto il team | The whole team |
| Spiegazione | Le competenze si completano e la qualità è condivisa. Ciò non annulla i ruoli specialistici né eventuali requisiti di indipendenza. | Skills complement each other and quality is a shared responsibility. This does not remove specialist roles or any independence requirements. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q015 · FL-1.5.3 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale è un possibile vantaggio di un tester indipendente dall’autore? | Which of these is a possible benefit of a tester who is independent of the author? |
| A | Non ha bisogno di comunicare col team | They do not need to communicate with the team |
| B | Conosce sempre il codice meglio dell’autore | They always know the code better than the author |
| C ✔ | Può mettere in discussione assunzioni condivise dall’autore | They can challenge assumptions that the author holds |
| D | Garantisce che non rimangano difetti | They guarantee that no defects remain |
| Spiegazione | L’indipendenza porta prospettive diverse, ma non garantisce completezza e può creare isolamento se manca collaborazione. | Independence brings different perspectives, but it does not guarantee completeness and can lead to isolation if collaboration is lacking. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q016 · FL-1.3.1 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Il 70% dei difetti rilevati si trova in due moduli su venti. Cosa suggerisce questa evidenza? | 70% of the detected defects are in two modules out of twenty. What does this evidence suggest? |
| A | Distribuire lo sforzo sempre in parti uguali | Always spread the effort equally |
| B ✔ | Concentrare ulteriori indagini sui moduli a rischio senza ignorare gli altri | Focus further investigation on the high-risk modules without ignoring the others |
| C | Smettere di testare tutti gli altri moduli | Stop testing all the other modules |
| D | Assumere che il 70% dei difetti futuri sarà identico | Assume that 70% of future defects will be identical |
| Spiegazione | La concentrazione dei difetti orienta le priorità. Non dimostra che altrove non esistano problemi né predice esattamente i difetti futuri. | Defect clustering informs test priority. It does not show that there are no problems elsewhere, nor does it predict future defects exactly. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q017 · FL-2.1.1 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | In uno sviluppo iterativo, come si collocano normalmente le attività di test? | In iterative development, where do the test activities normally fit? |
| A ✔ | Si ripetono e si adattano nei vari incrementi | They are repeated and adapted in each increment |
| B | Avvengono soltanto dopo l’ultima iterazione | They happen only after the last iteration |
| C | Si limitano alla documentazione iniziale | They are limited to the initial documentation |
| D | Sono sostituite dalla retrospettiva | They are replaced by the retrospective |
| Spiegazione | Ogni incremento richiede feedback e verifiche coerenti con il lavoro svolto. La regressione resta necessaria quando il prodotto evolve. | Each increment needs feedback and verification consistent with the work done. Regression testing remains necessary as the product evolves. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q018 · FL-2.1.2 · K1 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Quale pratica favorisce il testing in qualunque ciclo di sviluppo? | Which practice supports testing in any software development lifecycle? |
| A | Attendere sempre la fine della codifica per pensare ai test | Always waiting for coding to finish before thinking about tests |
| B | Far progettare i test soltanto agli utenti finali | Having only end users design the tests |
| C | Non collegare i test agli obiettivi | Not linking tests to objectives |
| D ✔ | Coinvolgere i tester presto nella revisione dei prodotti di lavoro | Involving testers early in reviewing work products |
| Spiegazione | Il coinvolgimento precoce permette di chiarire requisiti e preparare verifiche. Non richiede un particolare modello di sviluppo. | Early involvement makes it possible to clarify requirements and prepare tests. It does not require any particular development model. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q019 · FL-2.1.3 · K1 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Quale approccio usa piccoli test sul codice per guidarne l’implementazione? | Which approach uses small tests on the code to drive its implementation? |
| A | Beta testing | Beta testing |
| B | Ispezione formale | Formal inspection |
| C ✔ | TDD | TDD |
| D | Test di manutenzione | Maintenance testing |
| Spiegazione | Nel TDD si parte da un test che fallisce, si implementa quanto serve e si migliora il codice. ATDD lavora invece sugli esempi di accettazione condivisi. | In TDD you start with a failing test, implement just enough code and then refactor. ATDD, by contrast, works from shared acceptance examples. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q020 · FL-2.1.4 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Una pipeline DevOps esegue test automatici a ogni modifica. Quale affermazione è più corretta? | A DevOps pipeline runs automated tests on every change. Which statement is most accurate? |
| A | Rende inutili i test non funzionali | It makes non-functional testing unnecessary |
| B ✔ | Accelera il feedback, ma richiede test affidabili e manutenzione | It speeds up feedback, but needs reliable tests and maintenance |
| C | Elimina ogni necessità di testing manuale | It removes any need for manual testing |
| D | Garantisce che ogni build sia pronta per il rilascio | It guarantees that every build is ready for release |
| Spiegazione | Automazione e integrazione continua accelerano la scoperta di problemi, ma non coprono da sole tutti i rischi. | Test automation and continuous integration speed up the discovery of problems, but they do not cover all risks on their own. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q021 · FL-2.1.5 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Quale esempio rappresenta lo shift left? | Which example represents shift left? |
| A ✔ | Rivedere i criteri di accettazione prima della codifica | Reviewing the acceptance criteria before coding |
| B | Spostare tutti i test dopo il rilascio | Moving all testing to after the release |
| C | Eliminare i test di sistema | Eliminating system testing |
| D | Affidare ogni verifica agli utenti in produzione | Leaving all verification to users in production |
| Spiegazione | Anticipare discussione e verifica aiuta a prevenire problemi. Non significa eliminare i controlli necessari nelle fasi successive. | Bringing discussion and verification forward helps to prevent problems. It does not mean removing the checks that are needed in later phases. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q022 · FL-2.1.6 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Una retrospettiva individua ritardi negli ambienti di test. Qual è l’esito più utile? | A retrospective identifies delays in the test environments. What is the most useful outcome? |
| A | Un elenco di colpe senza azioni | A list of who is to blame, with no actions |
| B | La cancellazione dei test d’integrazione | Cancelling the integration tests |
| C | La promessa generica di lavorare meglio | A general promise to work better |
| D ✔ | Un’azione assegnata con una misura per valutarne il miglioramento | An assigned action, with a measure to evaluate the improvement |
| Spiegazione | Un miglioramento concreto va applicato e verificato. La sola discussione, senza responsabilità e follow-up, non cambia il processo. | A concrete improvement must be implemented and checked. Discussion alone, without ownership and follow-up, does not change the process. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q023 · FL-2.2.1 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Verifichi lo scambio di messaggi tra il sistema ordini e un gateway di pagamento esterno. Quale livello descrive meglio il test? | You check the messages exchanged between the order system and an external payment gateway. Which test level best describes this test? |
| A | Analisi statica | Static analysis |
| B | Unit test di una funzione interna | Unit test of an internal function |
| C ✔ | Integrazione di sistemi | System integration testing |
| D | Componente isolato | An isolated component |
| Spiegazione | L’interazione tra sistemi distinti è integrazione di sistemi. Le interazioni tra componenti interni riguardano invece l’integrazione di componenti. | The interaction between separate systems is the subject of system integration testing. Interactions between internal components are the subject of component integration testing instead. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q024 · pilota · FL-2.2.2 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Misuri il tempo di risposta con 500 utenti simultanei. Che tipo di test stai eseguendo? | You measure response time with 500 concurrent users. What type of testing are you performing? |
| A | Review informale | Informal review |
| B ✔ | Non funzionale, di prestazioni | Non-functional testing (performance) |
| C | Solo funzionale | Functional testing only |
| D | Solo confirmation testing | Confirmation testing only |
| Spiegazione | Le prestazioni descrivono quanto bene il sistema opera. Il tipo di test non determina da solo il livello a cui viene eseguito. | Performance describes how well the system behaves. The test type does not, on its own, determine the test level at which it is performed. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q025 · FL-2.2.3 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Dopo una correzione riprovi il caso che causava il crash. Qual è l’obiettivo immediato? | After a fix, you re-run the case that caused the crash. What is the immediate objective? |
| A ✔ | Confermare che il difetto originario sia stato corretto | To confirm that the original defect has been fixed |
| B | Dimostrare l’assenza di ogni regressione | To prove that there is no regression of any kind |
| C | Misurare la copertura dei requisiti del progetto | To measure the requirements coverage of the project |
| D | Verificare ogni interfaccia esterna | To check every external interface |
| Spiegazione | Questo è confirmation testing. Per cercare effetti collaterali della modifica serve anche una selezione di test di regressione. | This is confirmation testing. To look for side effects of the change, regression testing with a selection of tests is also needed. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q026 · FL-2.3.1 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Un’applicazione stabile migra a una nuova versione del database. Quale test è pertinente? | A stable application is migrated to a new version of its database. Which testing is relevant? |
| A | Nessuno, perché il codice applicativo non cambia | None, because the application code does not change |
| B | Soltanto una review del contratto | Only a review of the contract |
| C | Solo test del primo sviluppo, senza adattamenti | Only the tests from the original development, without adaptation |
| D ✔ | Testing di manutenzione basato sull’impatto della migrazione | Maintenance testing based on the impact of the migration |
| Spiegazione | Una modifica dell’ambiente può cambiare il comportamento. L’analisi d’impatto aiuta a selezionare verifiche di migrazione e regressione. | A change to the environment can change the behaviour. Impact analysis helps to select tests for the migration and for regression testing. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q027 · FL-2.2.1 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Un gruppo di utenti verifica che il prodotto supporti il proprio flusso operativo. Quale livello è più pertinente? | A group of users checks that the product supports their operational workflow. Which test level is most relevant? |
| A | Integrazione di componenti | Component integration testing |
| B | Analisi del flusso di controllo | Control flow analysis |
| C ✔ | Accettazione | Acceptance testing |
| D | Componente | Component testing |
| Spiegazione | Il testing di accettazione guarda esigenze e disponibilità all’uso. Il test di sistema può aver già verificato requisiti tecnici senza validare l’intero uso operativo. | Acceptance testing focuses on needs and readiness for use. System testing may already have verified the technical requirements without validating the whole operational use. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q028 · pilota · FL-2.2.3 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | La correzione del login potrebbe influire sul recupero password. Quale attività cerca questo effetto collaterale? | The login fix might affect password recovery. Which activity looks for this side effect? |
| A | Rimozione dei test già superati | Removing tests that have already passed |
| B ✔ | Regression testing | Regression testing |
| C | Solo confirmation testing del login | Confirmation testing of the login only |
| D | Solo analisi dei requisiti iniziali | Analysis of the initial requirements only |
| Spiegazione | La regressione cerca conseguenze indesiderate delle modifiche. Riprovare soltanto il difetto originale non verifica le funzionalità collegate. | Regression testing looks for unintended consequences of changes. Re-testing only the original defect does not check the related functionality. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q029 · FL-3.1.1 · K1 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale prodotto può essere esaminato mediante testing statico? | Which work product can be examined by static testing? |
| A ✔ | Una user story non ancora implementata | A user story that has not yet been implemented |
| B | Soltanto un programma in esecuzione | Only a running program |
| C | Soltanto un file eseguibile installato | Only an installed executable file |
| D | Soltanto una schermata in produzione | Only a screen in production |
| Spiegazione | Requisiti, modelli, codice e test possono essere esaminati senza eseguire il programma sotto test. | Requirements, models, code and tests can be examined without executing the software under test. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q030 · FL-3.1.2 · K2 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Una review scopre che due requisiti si contraddicono. Qual è il vantaggio principale? | A review finds that two requirements contradict each other. What is the main benefit? |
| A | Garantire che tutti i requisiti siano completi | Guaranteeing that all the requirements are complete |
| B | Eliminare automaticamente tutti i test dinamici | Automatically eliminating all dynamic testing |
| C | Misurare direttamente le prestazioni del sistema | Directly measuring the performance of the system |
| D ✔ | Correggere l’incoerenza prima che si propaghi nell’implementazione | Correcting the inconsistency before it spreads into the implementation |
| Spiegazione | La scoperta anticipata può evitare rilavorazioni. Una review non prova la completezza e non misura prestazioni runtime. | Early detection can avoid rework. A review does not prove completeness and does not measure runtime performance. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q031 · FL-3.1.3 · K2 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale attività è testing statico? | Which activity is static testing? |
| A | Un utente osserva un crash | A user observes a crash |
| B | Un test misura la memoria durante l’esecuzione | A test measures memory use during execution |
| C ✔ | Un analizzatore segnala una variabile usata prima dell’inizializzazione senza eseguire il programma | An analyser reports a variable used before initialisation, without executing the program |
| D | Un test invia richieste HTTP al servizio | A test sends HTTP requests to the service |
| Spiegazione | L’analizzatore esamina il prodotto senza eseguirlo. Le altre attività osservano un sistema in esecuzione. | The analyser examines the work product without executing it. The other activities observe a running system. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q032 · FL-3.2.1 · K1 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale beneficio offre un feedback frequente degli stakeholder? | What benefit does frequent stakeholder feedback provide? |
| A | Impedire qualunque modifica | Preventing any change |
| B ✔ | Chiarire prima aspettative e incomprensioni | Clarifying expectations and misunderstandings earlier |
| C | Congelare per sempre i requisiti | Freezing the requirements forever |
| D | Rendere superflua ogni comunicazione futura | Making all future communication unnecessary |
| Spiegazione | Feedback precoci e frequenti aiutano ad allineare il prodotto ai bisogni e a ridurre malintesi. Non eliminano il cambiamento. | Early and frequent feedback helps to align the product with real needs and to reduce misunderstandings. It does not eliminate change. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q033 · FL-3.2.2 · K2 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Prima della discussione collettiva, i revisori esaminano autonomamente il documento. Quale attività è? | Before the group discussion, the reviewers examine the document on their own. Which activity is this? |
| A ✔ | Review individuale | Individual review |
| B | Risoluzione e reporting | Fixing and reporting |
| C | Implementazione dei test | Test implementation |
| D | Esecuzione dinamica | Dynamic execution |
| Spiegazione | L’esame individuale permette di identificare anomalie da analizzare insieme. La risoluzione riguarda invece correzioni e relativo follow-up. | Individual review allows anomalies to be identified and then analysed together. Fixing and reporting, by contrast, concerns the corrections and their follow-up. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q034 · FL-3.2.3 · K1 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Chi facilita una riunione di review e aiuta a mantenerla produttiva? | Who facilitates a review meeting and helps to keep it productive? |
| A | Il compilatore | The compiler |
| B | L’utente finale necessariamente | The end user, necessarily |
| C | Il solo autore, in ogni tipo di review | The author alone, in every type of review |
| D ✔ | Il moderatore | The moderator |
| Spiegazione | Il moderatore facilita collaborazione, discussione e gestione del tempo. Lo scriba registra; l’autore spiega e corregge il prodotto. | The moderator facilitates collaboration, discussion and time management. The scribe records; the author explains and fixes the work product. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q035 · pilota · FL-3.2.4 · K2 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale review è normalmente la più formale, con criteri, ruoli e raccolta di misure? | Which review type is normally the most formal, with defined criteria, roles and collection of metrics? |
| A | Scambio estemporaneo in chat | An ad hoc chat exchange |
| B | Qualunque walkthrough senza preparazione | Any walkthrough without preparation |
| C ✔ | Ispezione | Inspection |
| D | Review informale | Informal review |
| Spiegazione | L’ispezione applica un processo formalizzato. Un walkthrough è generalmente guidato dall’autore e non equivale automaticamente a un’ispezione. | An inspection follows a formalised process. A walkthrough is generally led by the author and is not automatically equivalent to an inspection. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q036 · FL-3.2.5 · K1 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale fattore favorisce il successo di una review? | Which factor contributes to a successful review? |
| A | Evitare competenze diverse nel gruppo | Avoiding different skills in the group |
| B ✔ | Obiettivi chiari e tempo sufficiente per la preparazione | Clear objectives and enough time to prepare |
| C | Usare il conteggio dei difetti per colpevolizzare gli autori | Using defect counts to blame the authors |
| D | Discutere senza leggere il materiale | Discussing without reading the material |
| Spiegazione | Preparazione, obiettivi condivisi e clima costruttivo migliorano la review. La valutazione punitiva delle persone scoraggia segnalazioni utili. | Preparation, shared objectives and a constructive atmosphere improve a review. Judging people punitively discourages useful reports. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q037 · FL-4.1.1 · K2 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Derivi test dalle regole di una specifica senza usare la struttura del codice. Quale famiglia di tecniche usi? | You derive tests from the rules in a specification without using the structure of the code. Which family of test techniques are you using? |
| A ✔ | Black-box | Black-box |
| B | White-box | White-box |
| C | Solo analisi statica | Static analysis only |
| D | Solo debugging | Debugging only |
| Spiegazione | Le tecniche black-box derivano test dal comportamento specificato. Le white-box usano invece struttura interna e flusso di controllo. | Black-box test techniques derive tests from the specified behaviour. White-box test techniques use the internal structure and the control flow instead. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q038 · FL-4.2.1 · K3 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Un campo accetta età intere da 18 a 65 inclusi. Quale insieme copre le tre partizioni sotto, dentro e sopra l’intervallo? | A field accepts whole-number ages from 18 to 65 inclusive. Which set covers the three partitions below, within and above the range? |
| A | 18, 40, 65 | 18, 40, 65 |
| B | 20, 30, 40 | 20, 30, 40 |
| C | 17, 16, 66 | 17, 16, 66 |
| D ✔ | 17, 40, 66 | 17, 40, 66 |
| Spiegazione | 17 rappresenta la classe sotto soglia, 40 quella valida e 66 quella sopra soglia. Più valori della stessa classe non coprono una classe mancante. | 17 represents the partition below the range, 40 the valid partition and 66 the partition above the range. Several values from the same partition do not cover a missing partition. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q039 · FL-4.2.1 · K3 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Una tariffa è A per 0–9 km, B per 10–29 km e C da 30 km in poi. Per distanze intere non negative, quanti test minimi coprono queste partizioni valide? | A fare is A for 0–9 km, B for 10–29 km and C for 30 km or more. For non-negative whole distances, what is the minimum number of tests that covers these valid partitions? |
| A | 4 | 4 |
| B | 40 | 40 |
| C ✔ | 3 | 3 |
| D | 2 | 2 |
| Spiegazione | Le tre fasce hanno comportamenti distinti: serve almeno un rappresentante per ciascuna. La domanda riguarda solo le partizioni valide indicate. | The three bands behave differently, so at least one representative of each is needed. The question concerns only the valid partitions given. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q040 · pilota · FL-4.2.2 · K3 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Un campo accetta interi da 10 a 20 inclusi. Quale insieme dà copertura BVA a 2 valori sui due confini? | A field accepts integers from 10 to 20 inclusive. Which set achieves 2-value BVA coverage of both boundaries? |
| A | 8, 10, 20, 22 | 8, 10, 20, 22 |
| B ✔ | 9, 10, 20, 21 | 9, 10, 20, 21 |
| C | 10, 15, 20 | 10, 15, 20 |
| D | 9, 11, 19, 21 | 9, 11, 19, 21 |
| Spiegazione | Ogni confine separa due classi: 9/10 al limite inferiore e 20/21 al superiore. Per la BVA a 2 valori servono i due valori ai lati di ciascun confine. | Each boundary separates two partitions: 9/10 at the lower boundary and 20/21 at the upper one. 2-value BVA needs the two values on either side of each boundary. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q041 · FL-4.2.2 · K3 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Per l’intervallo intero valido 10–20, quali valori aggiungi a 9, 10, 20, 21 per la BVA a 3 valori? | For the valid integer range 10–20, which values do you add to 9, 10, 20, 21 for 3-value BVA? |
| A ✔ | 11 e 19 | 11 and 19 |
| B | 8 e 22 | 8 and 22 |
| C | 12 e 18 | 12 and 18 |
| D | 0 e 30 | 0 and 30 |
| Spiegazione | La BVA a 3 valori verifica il valore limite e i suoi due vicini: 9,10,11 e 19,20,21. 8 e 22 non sono i vicini interni dei limiti validi. | 3-value BVA tests each boundary value and both its neighbours: 9, 10, 11 and 19, 20, 21. 8 and 22 are not the inner neighbours of the valid boundaries. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q042 · FL-4.2.3 · K3 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Uno sconto si applica solo se il cliente è socio E il totale è almeno 100 €. Quale caso riceve lo sconto? | A discount applies only if the customer is a member AND the total is at least €100. Which case gets the discount? |
| A | Non socio, totale 150 € | Non-member, total €150 |
| B | Socio, totale 99 € | Member, total €99 |
| C | Non socio, totale 99 € | Non-member, total €99 |
| D ✔ | Socio, totale 100 € | Member, total €100 |
| Spiegazione | Entrambe le condizioni devono essere vere. “Almeno 100” include 100; né la sola appartenenza né il solo importo bastano. | Both conditions must be true. “At least 100” includes 100; neither membership alone nor the amount alone is enough. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q043 · FL-4.2.3 · K3 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Due condizioni booleane sono indipendenti e tutte le combinazioni sono possibili. Quante regole ha la tabella decisionale completa prima di semplificarla? | Two Boolean conditions are independent and all combinations are possible. How many rules does the full decision table have before it is simplified? |
| A | 3 | 3 |
| B | 8 | 8 |
| C ✔ | 4 | 4 |
| D | 2 | 2 |
| Spiegazione | Due possibilità per ciascuna delle due condizioni danno 2 × 2 = 4 combinazioni. Le azioni uguali possono consentire una semplificazione successiva. | Two possible values for each of the two conditions give 2 × 2 = 4 combinations. Rules with the same actions may allow the table to be simplified afterwards. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q044 · pilota · FL-4.2.4 · K3 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Un account passa da Attivo a Bloccato dopo tre password errate consecutive; un login corretto azzera il conteggio. Partendo da Attivo, quale sequenza lo blocca? | An account changes from Active to Locked after three consecutive wrong passwords; a correct login resets the count. Starting from Active, which sequence locks it? |
| A | Errata, errata, corretta | Wrong, wrong, correct |
| B ✔ | Errata, errata, errata | Wrong, wrong, wrong |
| C | Errata, corretta, errata | Wrong, correct, wrong |
| D | Corretta, errata, corretta | Correct, wrong, correct |
| Spiegazione | Il blocco dipende da tre errori consecutivi. Un successo azzera il conteggio e interrompe la sequenza. | Locking depends on three consecutive login errors. A successful login resets the count and breaks the sequence. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q045 · FL-4.2.4 · K3 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Un modello ha transizioni A→B, B→A, B→C e C→A. Il percorso A→B→C→A copre quale percentuale delle transizioni? | A state model has the transitions A→B, B→A, B→C and C→A. What percentage of the transitions does the path A→B→C→A cover? |
| A ✔ | 75% | 75% |
| B | 100% | 100% |
| C | 50% | 50% |
| D | 25% | 25% |
| Spiegazione | Il percorso usa tre transizioni distinte su quattro. Visita tutti gli stati, ma non percorre B→A: copertura degli stati e delle transizioni sono diverse. | The path exercises three distinct transitions out of four. It visits every state but does not exercise B→A: all states coverage and valid transitions coverage are different. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q046 · FL-4.3.1 · K2 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Una suite esegue 18 delle 24 istruzioni eseguibili. Qual è la copertura delle istruzioni? | A test suite executes 18 of the 24 executable statements. What is the statement coverage? |
| A | 80% | 80% |
| B | 60% | 60% |
| C | 100% | 100% |
| D ✔ | 75% | 75% |
| Spiegazione | La copertura è 18/24 × 100 = 75%. Non si conta il numero di test né il numero di righe del file, che può includere commenti. | Statement coverage is 18/24 × 100 = 75%. You do not count the number of tests or the number of lines in the file, which may include comments. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q047 · FL-4.3.2 · K2 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Una suite copre il 100% dei rami raggiungibili. Cosa puoi concludere sulle istruzioni raggiungibili? | A test suite covers 100% of the reachable branches. What can you conclude about the reachable statements? |
| A | Nessuna istruzione è necessariamente eseguita | No statement is necessarily executed |
| B | Tutti i possibili percorsi sono coperti | All possible paths are covered |
| C ✔ | Sono coperte al 100% | They are 100% covered |
| D | Sono necessariamente coperte solo al 50% | They are necessarily only 50% covered |
| Spiegazione | La copertura dei rami include quella delle istruzioni raggiungibili. Non implica copertura di tutti i percorsi, soprattutto in presenza di cicli. | Branch coverage subsumes statement coverage of the reachable statements. It does not imply that all paths are covered, especially when there are loops. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q048 · FL-4.3.3 · K2 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Quale limite ha una suite con copertura strutturale del 100%? | What is a limitation of a test suite with 100% structural coverage? |
| A | Rende inutili i risultati attesi | It makes expected results unnecessary |
| B ✔ | Può non rilevare funzionalità richieste ma non implementate | It may not detect required functionality that has not been implemented |
| C | Dimostra che tutti i requisiti sono soddisfatti | It proves that all the requirements are met |
| D | Garantisce l’assenza di difetti | It guarantees the absence of defects |
| Spiegazione | La struttura esistente non rivela da sola funzionalità mancanti. Servono anche test basati sulle specifiche e oracoli adeguati. | The existing structure alone cannot reveal missing functionality. Specification-based tests and suitable test oracles are also needed. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q049 · FL-4.4.1 · K2 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Un tester prova un nome con apostrofo ricordando difetti simili in passato. Quale tecnica sta usando? | A tester tries a name containing an apostrophe, remembering similar defects in the past. Which test technique are they using? |
| A ✔ | Error guessing | Error guessing |
| B | Analisi dei valori limite necessariamente | Boundary value analysis, necessarily |
| C | Copertura dei rami | Branch coverage |
| D | Stima a tre punti | Three-point estimation |
| Spiegazione | La scelta nasce dall’esperienza su possibili errori. Non richiede una partizione o un modello strutturale formalizzato. | The choice comes from experience of likely errors. It does not require a partition or a formal structural model. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q050 · FL-4.4.2 · K2 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | In una sessione con obiettivo definito, il tester impara dal comportamento e adatta subito i test successivi. È un esempio di: | In a session with a defined objective, the tester learns from the behaviour and immediately adapts the next tests. This is an example of: |
| A | Esecuzione rigidamente scriptata | Rigidly scripted execution |
| B | Solo ispezione | Inspection only |
| C | Testing casuale senza obiettivo | Random testing with no objective |
| D ✔ | Testing esplorativo | Exploratory testing |
| Spiegazione | Nel testing esplorativo apprendimento, progettazione ed esecuzione si influenzano. Un charter e note rendono la sessione focalizzata e comunicabile. | In exploratory testing, learning, test design and test execution influence one another. A test charter and notes keep the session focused and easy to communicate. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q051 · FL-4.4.3 · K2 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Qual è un rischio di una checklist troppo generica? | What is a risk of an overly generic checklist? |
| A | Impedisce ogni uso dell’esperienza | It prevents any use of experience |
| B | Richiede sempre accesso al codice sorgente | It always requires access to the source code |
| C ✔ | Tester diversi possono interpretare le voci in modi diversi | Different testers may interpret the items in different ways |
| D | Garantisce automaticamente copertura totale | It automatically guarantees full coverage |
| Spiegazione | Le voci dovrebbero essere comprensibili e verificabili. Una checklist guida l’attenzione ma non garantisce copertura completa né risultati identici. | Checklist items should be understandable and verifiable. A checklist guides attention but does not guarantee full coverage or identical results. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q052 · FL-4.5.1 · K2 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Business, sviluppo e testing discutono insieme una user story. Quale risultato cercano soprattutto? | Business, development and testing discuss a user story together. What are they mainly trying to achieve? |
| A | La scelta del linguaggio di programmazione da parte dei tester | Testers choosing the programming language |
| B ✔ | Una comprensione condivisa sostenuta da esempi | A shared understanding supported by examples |
| C | Una story priva di qualunque criterio verificabile | A story without any verifiable criteria |
| D | L’eliminazione di ogni comunicazione futura | Eliminating all future communication |
| Spiegazione | Le prospettive diverse fanno emergere ambiguità e casi mancanti. La collaborazione migliora comprensione e testabilità della story. | Different perspectives bring out ambiguities and missing cases. Collaboration improves the understanding and testability of the story. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q053 · FL-4.5.2 · K2 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | “Dato un carrello vuoto, quando aggiungo un prodotto, allora compare una riga” è un criterio espresso in forma: | “Given an empty cart, when I add a product, then a line item appears” is an acceptance criterion written in which format? |
| A ✔ | Orientata allo scenario | Scenario-oriented |
| B | Di copertura dei rami | Branch coverage |
| C | Di stima del rischio | Risk estimation |
| D | Di tabella delle risorse | Resource table |
| Spiegazione | La forma Given/When/Then descrive uno scenario concreto. I criteri possono anche essere espressi come regole o checklist. | The Given/When/Then format describes a concrete scenario. Acceptance criteria can also be rule-oriented, for example a checklist. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q054 · FL-4.5.3 · K3 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Una story dice: “Dopo tre tentativi errati consecutivi l’account si blocca”. Quale test di accettazione è più direttamente pertinente? | A story says: “After three consecutive wrong attempts the account is locked”. Which acceptance test is most directly relevant? |
| A | Account attivo; una password errata; aspettarsi il blocco | Active account; one wrong password; expect it to be locked |
| B | Account attivo; login corretto; aspettarsi il blocco | Active account; correct login; expect it to be locked |
| C | Account bloccato; cambiare il colore del pulsante | Locked account; change the colour of the button |
| D ✔ | Account attivo; tre password errate consecutive; verificare il blocco | Active account; three consecutive wrong passwords; check that it is locked |
| Spiegazione | Il test traduce il criterio in precondizione, azioni e risultato osservabile. Gli altri casi contraddicono la regola o non la verificano. | In acceptance testing, the test turns the criterion into a precondition, actions and an observable result. The other cases contradict the rule or do not check it. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q055 · FL-4.2.1 · K3 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Un campo formato accetta solo PDF o PNG; gli altri valori formano una classe invalida. Quale insieme copre le tre classi indicate? | A format field accepts only PDF or PNG; all other values form an invalid partition. Which set covers the three partitions given? |
| A | TXT, DOC, GIF | TXT, DOC, GIF |
| B | PNG, PNG, PNG | PNG, PNG, PNG |
| C ✔ | PDF, PNG, TXT | PDF, PNG, TXT |
| D | PDF, PDF, PNG | PDF, PDF, PNG |
| Spiegazione | Le classi specificate sono PDF, PNG e altro. TXT rappresenta la classe invalida; tre formati invalidi non coprono le due classi valide. | The specified partitions are PDF, PNG and other. TXT represents the invalid partition; three invalid formats do not cover the two valid partitions. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q056 · FL-4.2.2 · K3 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Un carrello accetta quantità intere da 1 a 99. Quale insieme copre i due confini con BVA a 2 valori? | A shopping cart accepts whole-number quantities from 1 to 99. Which set covers both boundaries with 2-value BVA? |
| A | 0, 50, 100 | 0, 50, 100 |
| B ✔ | 0, 1, 99, 100 | 0, 1, 99, 100 |
| C | 1, 50, 99 | 1, 50, 99 |
| D | 2, 98 | 2, 98 |
| Spiegazione | Le coppie adiacenti ai confini sono 0/1 e 99/100. Un valore centrale può essere utile per altri scopi, ma non sostituisce un valore di confine. | The pairs next to the boundaries are 0/1 and 99/100. A middle value may be useful for other purposes, but it does not replace a boundary value. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q057 · FL-4.3.2 · K2 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Un IF ha un ramo vero e uno falso, senza ELSE. Un test percorre solo il ramo vero. Qual è la copertura dei due rami? | An IF has a true branch and a false branch, with no ELSE. A test exercises only the true branch. What is the branch coverage of the two branches? |
| A ✔ | 50% | 50% |
| B | 100% | 100% |
| C | 0% | 0% |
| D | Non esiste un ramo falso senza ELSE | There is no false branch without an ELSE |
| Spiegazione | Anche senza un blocco ELSE esiste il trasferimento di controllo quando la condizione è falsa. Percorrere solo l’esito vero copre un ramo su due. | Even without an ELSE block, there is a transfer of control when the condition is false. Exercising only the true outcome covers one branch out of two. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q058 · FL-4.2.3 · K3 · Test Analysis and Design

| | Italiano | English |
|---|---|---|
| Domanda | Accesso consentito se (badge valido) E (PIN corretto). Hai provato vero/vero e falso/vero. Quante combinazioni restano per coprire la tabella completa? | Access is granted if (badge valid) AND (PIN correct). You have tested true/true and false/true. How many combinations remain to cover the full decision table? |
| A | 0 | 0 |
| B | 1 | 1 |
| C | 3 | 3 |
| D ✔ | 2 | 2 |
| Spiegazione | Mancano vero/falso e falso/falso. Le quattro combinazioni sono possibili per le due condizioni indipendenti. | True/false and false/false are missing. All four combinations are possible for the two independent conditions. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q059 · FL-5.1.1 · K2 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | Quale contenuto è appropriato in un piano di test? | Which content is appropriate in a test plan? |
| A | Soltanto il codice sorgente | Only the source code |
| B | Una garanzia di assenza di rischi | A guarantee that there are no risks |
| C ✔ | Ambito, approccio, risorse e criteri di completamento | Scope, test approach, resources and exit criteria |
| D | Soltanto l’elenco dei difetti già corretti | Only the list of defects already fixed |
| Spiegazione | Il piano coordina obiettivi e lavoro. Un elenco di difetti o il codice non sostituiscono approccio, risorse e criteri. | The test plan coordinates objectives and work. A list of defects or the code cannot replace the test approach, the resources and the criteria. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q060 · FL-5.1.2 · K1 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | Come può contribuire un tester alla pianificazione di un’iterazione? | How can a tester contribute to iteration planning? |
| A | Rinviando ogni discussione dei test alla fine | By postponing all discussion of testing until the end |
| B ✔ | Chiarendo testabilità, rischi e sforzo di verifica delle story | By clarifying the testability, risks and test effort of the stories |
| C | Garantendo che ogni story sia priva di difetti | By guaranteeing that every story is free of defects |
| D | Decidendo da solo tutte le priorità commerciali | By single-handedly setting every business priority |
| Spiegazione | Il tester porta una prospettiva sulla verifica e sui rischi, aiutando stime e criteri. La pianificazione resta un’attività collaborativa. | The tester brings a perspective on verification and risks, helping with estimates and acceptance criteria. Planning remains a collaborative activity. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q061 · FL-5.1.3 · K2 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | “L’ambiente è disponibile e lo smoke test passa” è usato per decidere se iniziare una campagna. Si tratta di: | “The environment is available and the smoke test passes” is used to decide whether to start a test cycle. This is an example of: |
| A ✔ | Criterio di ingresso | Entry criteria |
| B | Criterio di uscita | Exit criteria |
| C | Defect report | Defect report |
| D | Metrica di copertura dei rami | Branch coverage metric |
| Spiegazione | Il criterio definisce la disponibilità a iniziare l’attività. Un criterio di uscita definisce quando considerarla completata. | Entry criteria define the readiness to start an activity. Exit criteria define when it can be considered complete. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q062 · pilota · FL-5.1.4 · K3 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | Stima ottimistica 4 ore, più probabile 7, pessimistica 16. Con (O + 4M + P)/6, qual è la stima? | Most optimistic estimate 4 hours, most likely 7, most pessimistic 16. Using three-point estimation, E = (a + 4*m + b) / 6, what is the estimate? |
| A | 9 ore | 9 hours |
| B | 7 ore | 7 hours |
| C | 27 ore | 27 hours |
| D ✔ | 8 ore | 8 hours |
| Spiegazione | (4 + 4×7 + 16)/6 = 48/6 = 8. La media semplice dei tre valori darebbe 9, ma non è la formula ponderata richiesta. | (4 + 4×7 + 16) / 6 = 48 / 6 = 8. The simple average of the three values would give 9, but that is not the weighted formula required. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q063 · FL-5.1.5 · K3 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | T1 copre un rischio basso. T2 copre un rischio alto ma richiede T3. T3 è disponibile e prepara i dati. Quale ordine rispetta rischio e dipendenza? | T1 covers a low risk. T2 covers a high risk but requires T3. T3 is available and prepares the data. Which order respects both risk and dependency? |
| A | T1, T2, T3 | T1, T2, T3 |
| B | T2, T1, T3 | T2, T1, T3 |
| C ✔ | T3, T2, T1 | T3, T2, T1 |
| D | T2, T3, T1 | T2, T3, T1 |
| Spiegazione | Per eseguire T2 correttamente serve prima T3. Poi si affronta il rischio alto prima di T1: la priorità non annulla le dipendenze. | T3 must run first for T2 to run correctly. Then the high risk is addressed before T1: priority does not override dependencies. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q064 · FL-5.1.6 · K1 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | Quale configurazione descrive la piramide dei test? | Which configuration describes the test pyramid? |
| A | Solo test manuali di accettazione | Only manual acceptance tests |
| B ✔ | Molti test piccoli e rapidi alla base, meno test ampi in cima | Many small, fast tests at the bottom and fewer broad tests at the top |
| C | Solo test end-to-end | Only end-to-end tests |
| D | Lo stesso numero di test per ogni livello obbligatoriamente | The same number of tests at every level, as a mandatory rule |
| Spiegazione | La piramide rappresenta una distribuzione tipica per ottenere feedback rapido e limitare costi dei test più ampi. Non prescrive un numero fisso. | The test pyramid represents a typical distribution that gives fast feedback and limits the cost of broader tests. It does not prescribe a fixed number. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q065 · FL-5.1.7 · K2 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | Nei quadranti del testing, dove si collocano tipicamente i test esplorativi orientati al business che criticano il prodotto? | In the testing quadrants, where are business-facing exploratory tests that critique the product typically placed? |
| A ✔ | Q3 | Q3 |
| B | Q1 | Q1 |
| C | Q2 | Q2 |
| D | Q4 | Q4 |
| Spiegazione | Q3 guarda il prodotto dalla prospettiva del business e ne valuta il comportamento. Q1 è tecnico a supporto del team, Q2 business a supporto, Q4 tecnico di critica. | Q3 is business facing and critiques the product: it includes exploratory testing. Q1 is technology facing and supports the team, Q2 is business facing and supports the team, and Q4 is technology facing and critiques the product. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q066 · FL-5.2.1 · K1 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | Quali due attributi si usano normalmente per valutare il livello di un rischio? | Which two attributes are normally used to assess the level of a risk? |
| A | Numero di tester e colore dell’interfaccia | Number of testers and colour of the user interface |
| B | Età del progetto e nome del prodotto | Age of the project and name of the product |
| C | Numero di test e numero di commenti | Number of tests and number of comments |
| D ✔ | Probabilità e impatto | Likelihood and impact |
| Spiegazione | Il rischio combina la possibilità che un evento si verifichi e le sue conseguenze. Un solo conteggio di test non rappresenta questi due aspetti. | Risk combines the possibility that an event occurs with its consequences. A simple count of tests does not represent these two aspects. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q067 · pilota · FL-5.2.2 · K2 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | Quale è un rischio di progetto, distinto da un rischio di prodotto? | Which of these is a project risk, as distinct from a product risk? |
| A | Un utente può leggere dati altrui | A user can read other users’ data |
| B | Il checkout duplica un pagamento | Checkout charges a payment twice |
| C ✔ | L’ambiente di test non sarà pronto in tempo | The test environment will not be ready on time |
| D | Il sistema calcola male le imposte | The system calculates taxes incorrectly |
| Spiegazione | L’ambiente in ritardo minaccia il piano e la consegna. Gli altri esempi riguardano caratteristiche o comportamenti problematici del prodotto. | A late test environment threatens the plan and the delivery. The other examples concern problematic characteristics or behaviour of the product. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q068 · FL-5.2.3 · K2 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | L’analisi identifica una funzione con alta probabilità di guasto e grave impatto. Come dovrebbe influenzare il testing? | Risk analysis identifies a function with a high likelihood of failure and a severe impact. How should this influence testing? |
| A | Limitarsi a contare i test totali | Just count the total number of tests |
| B ✔ | Aumentare priorità e profondità dei test pertinenti | Increase the priority and depth of the relevant tests |
| C | Escluderla perché difficile | Exclude it because it is difficult |
| D | Ridurre i test perché il rischio è già noto | Reduce testing because the risk is already known |
| Spiegazione | L’analisi del rischio orienta ambito, priorità, tecniche e sforzo. Conoscere un rischio non equivale a ridurlo. | Risk analysis guides the scope, priority, test techniques and effort. Knowing about a risk is not the same as reducing it. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q069 · FL-5.2.4 · K2 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | Dopo i test permane un rischio importante non mitigato. Qual è una risposta appropriata? | After testing, a significant unmitigated risk remains. What is an appropriate response? |
| A ✔ | Comunicarlo e supportare una decisione esplicita sul rischio residuo | Communicate it and support an explicit decision about the residual risk |
| B | Ometterlo se la maggioranza dei test passa | Leave it out if most of the tests pass |
| C | Dichiararlo nullo perché la data è vicina | Declare it non-existent because the date is close |
| D | Cambiare la metrica per far risultare tutto verde | Change the metric so that everything appears green |
| Spiegazione | Controllare il rischio comprende mitigazione e monitoraggio. I rischi residui devono essere visibili a chi decide; un test verde altrove non li annulla. | Risk control includes risk mitigation and risk monitoring. Residual risks must be visible to the decision makers; a passed test elsewhere does not remove them. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q070 · FL-5.3.1 · K1 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | Quale è una metrica di avanzamento dell’esecuzione? | Which of these is a test execution progress metric? |
| A | Nome del responsabile del progetto | Name of the project manager |
| B | Colore del logo applicativo | Colour of the application logo |
| C | Numero di riunioni commerciali | Number of sales meetings |
| D ✔ | Numero di test eseguiti rispetto a quelli pianificati | Number of tests executed compared with those planned |
| Spiegazione | Il confronto tra eseguito e pianificato aiuta a seguire l’avanzamento. Va letto insieme a risultati, rischio e qualità, non come prova unica di prontezza. | Comparing executed with planned tests helps to track progress. It should be read together with results, risk and quality, not as the only evidence of readiness. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q071 · FL-5.3.2 · K2 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | Quale informazione è particolarmente utile in un report di completamento? | Which information is particularly useful in a test completion report? |
| A | Solo il numero di ore senza risultati | Only the number of hours, with no results |
| B | Tutti i log grezzi senza sintesi per il destinatario | All the raw logs, with no summary for the reader |
| C ✔ | Risultati complessivi, scostamenti e rischi residui | Overall results, deviations and residual risks |
| D | Una dichiarazione assoluta di assenza di difetti | An absolute statement that there are no defects |
| Spiegazione | Il report riassume cosa è stato raggiunto e cosa resta aperto. Deve aiutare il destinatario a decidere, non soltanto accumulare dati. | The report summarises what has been achieved and what remains open. It should help the reader make decisions, not just pile up data. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q072 · FL-5.3.3 · K2 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | Devi comunicare lo stato dei test a dirigenti non tecnici. Quale approccio è più adatto? | You need to report test status to non-technical executives. Which approach is most suitable? |
| A | Usare lo stesso dettaglio tecnico per ogni destinatario | Use the same technical detail for every audience |
| B ✔ | Sintetizzare impatto, rischi e decisioni richieste con evidenze accessibili | Summarise the impact, the risks and the decisions needed, with accessible evidence |
| C | Inviare solo stack trace senza contesto | Send only stack traces, with no context |
| D | Nascondere tutti i difetti aperti | Hide all open defects |
| Spiegazione | Forma e dettaglio vanno adattati al pubblico. La sintesi deve restare fedele alle evidenze e rendere chiari i rischi. | The format and level of detail should be adapted to the audience. The summary must stay faithful to the evidence and make the risks clear. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q073 · FL-5.4.1 · K2 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | Un test fallisce solo su una vecchia build, ma i risultati non indicano le versioni. Quale pratica risolve il problema di tracciabilità? | A test fails only on an old build, but the results do not record the versions. Which practice solves this traceability problem? |
| A ✔ | Gestione della configurazione di build, test, dati e ambiente | Configuration management of builds, tests, data and environment |
| B | Aumentare soltanto il numero di test | Just increasing the number of tests |
| C | Eliminare tutti i risultati falliti | Deleting all failed results |
| D | Rinominare il prodotto | Renaming the product |
| Spiegazione | Identificare versioni e baseline rende i risultati interpretabili e riproducibili. Più test non compensano configurazioni sconosciute. | Identifying versions and baselines makes results interpretable and reproducible. More tests do not make up for unknown configurations. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q074 · FL-5.5.1 · K3 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | Un’app si chiude quando salvi un nome con apostrofo. Quale segnalazione è più utile? | An app closes when you save a name containing an apostrophe. Which report is most useful? |
| A | “Profilo rotto, sistemare subito” | “Profile broken, fix now” |
| B | “Errore dello sviluppatore” | “Developer error” |
| C | “App lenta” senza altri dettagli | “App slow”, with no other details |
| D ✔ | Build 2.1, Windows 11; aprire Profilo, inserire D’Amico, salvare; atteso salvataggio, ottenuta chiusura; log allegato | Build 2.1, Windows 11; open Profile, enter D’Amico, save; expected: saved; actual: app closes; log attached |
| Spiegazione | La prima segnalazione offre contesto, passi, dati, confronto atteso/ottenuto ed evidenze. Le altre non consentono di riprodurre e analizzare il problema. | The detailed report gives the context, steps, data, expected versus actual results and evidence. The others do not allow the problem to be reproduced and analysed. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q075 · FL-5.1.4 · K3 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | Su progetti comparabili il test richiede il 25% dello sforzo di sviluppo. Per 120 giornate di sviluppo, quale stima basata sul rapporto ottieni? | On comparable projects, testing takes 25% of the development effort. For 120 person-days of development, what estimate do you get with estimation based on ratios? |
| A | 45 giornate | 45 person-days |
| B | 480 giornate | 480 person-days |
| C ✔ | 30 giornate | 30 person-days |
| D | 25 giornate | 25 person-days |
| Spiegazione | 120 × 0,25 = 30. La validità dipende dalla comparabilità dei progetti: il rapporto storico non garantisce lo sforzo reale. | 120 × 0.25 = 30. Its validity depends on how comparable the projects are: a historical ratio does not guarantee the actual effort. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q076 · FL-5.1.5 · K3 · Managing the Test Activities

| | Italiano | English |
|---|---|---|
| Domanda | T1 copre R1 e R2; T2 copre R2 e R3; T3 copre R4. Hai già eseguito T1. Con priorità alla maggiore copertura aggiuntiva, quanti nuovi requisiti copre T2? | T1 covers R1 and R2; T2 covers R2 and R3; T3 covers R4. You have already run T1. Giving priority to the greatest additional coverage, how many new requirements does T2 cover? |
| A | 0 | 0 |
| B ✔ | 1 | 1 |
| C | 2 | 2 |
| D | 3 | 3 |
| Spiegazione | R2 è già coperto da T1; T2 aggiunge soltanto R3. La copertura aggiuntiva conta gli elementi ancora scoperti, non tutti quelli del test. | R2 is already covered by T1, so T2 adds only R3. Additional coverage counts the items not yet covered, not all the items the test covers. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q077 · FL-6.1.1 · K2 · Test Tools

| | Italiano | English |
|---|---|---|
| Domanda | Vuoi identificare automaticamente codice irraggiungibile senza eseguire il programma. Quale strumento scegli? | You want to identify unreachable code automatically, without executing the program. Which tool do you choose? |
| A ✔ | Analizzatore statico | Static analysis tool |
| B | Generatore di carico | Load generator |
| C | Registratore di test GUI | GUI test recorder |
| D | Sistema di ticket da solo | A ticketing system on its own |
| Spiegazione | L’analisi statica esamina la struttura del codice. Un generatore di carico richiede esecuzione e un sistema di ticket organizza segnalazioni. | Static analysis examines the structure of the code. A load generator requires execution, and a ticketing system organises reports. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q078 · FL-6.2.1 · K1 · Test Tools

| | Italiano | English |
|---|---|---|
| Domanda | Quale è un possibile beneficio dell’automazione dei test? | Which of these is a possible benefit of test automation? |
| A | Assenza totale di manutenzione | No maintenance at all |
| B | Garanzia automatica di qualità | An automatic guarantee of quality |
| C | Eliminazione della progettazione dei test | No more test design |
| D ✔ | Esecuzione ripetibile di controlli frequenti | Repeatable execution of frequent checks |
| Spiegazione | L’automazione può rendere controlli ripetibili e rapidi. Restano necessari progettazione, manutenzione e interpretazione dei risultati. | Test automation can make checks repeatable and fast. Test design, maintenance and interpretation of the results are still needed. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q079 · FL-6.1.1 · K2 · Test Tools

| | Italiano | English |
|---|---|---|
| Domanda | Devi organizzare casi di test, esecuzioni e risultati condivisi. Quale categoria di strumenti è più pertinente? | You need to organise test cases, test runs and shared results. Which category of tools is most relevant? |
| A | Solo compilazione | Compilation only |
| B | Solo generazione di carico | Load generation only |
| C ✔ | Gestione dei test | Test management |
| D | Solo profiling della memoria | Memory profiling only |
| Spiegazione | Gli strumenti di gestione aiutano a pianificare e registrare il lavoro. Non implicano che i casi registrati vengano eseguiti automaticamente. | Test management tools help to plan and record the work. They do not mean that the recorded test cases are executed automatically. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q080 · pilota · FL-6.2.1 · K1 · Test Tools

| | Italiano | English |
|---|---|---|
| Domanda | Quale è un rischio dell’automazione? | Which of these is a risk of test automation? |
| A | Ridurre attività ripetitive | Reducing repetitive work |
| B ✔ | Sottovalutare l’impegno di manutenzione e riporre eccessiva fiducia nei test automatizzati | Underestimating maintenance effort and placing excessive trust in automated tests |
| C | Avere controlli ripetibili | Having repeatable checks |
| D | Ricevere feedback più rapido | Getting faster feedback |
| Spiegazione | Suite fragili, costi sottostimati e fiducia eccessiva possono ridurre il valore dell’automazione. Le altre opzioni sono benefici potenziali. | Brittle suites, underestimated costs and over-reliance can reduce the value of test automation. The other options are potential benefits. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag001 · FA-1.1.1 · K1 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Un requisito ambiguo blocca il team. Quale scelta esprime persone e interazioni? | An ambiguous requirement is blocking the team. Which choice reflects individuals and interactions? |
| A ✔ | Confrontarsi direttamente e registrare gli esempi concordati | Talk it through directly and record the agreed examples |
| B | Aggiungere approvazioni obbligatorie senza confronto | Add mandatory approvals without discussion |
| C | Eliminare ogni strumento | Get rid of every tool |
| D | Attendere che il contratto risolva il dubbio | Wait for the contract to settle the question |
| Spiegazione | La conversazione chiarisce il significato; conservarne l’esito mantiene la tracciabilità utile. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | The conversation clarifies the meaning; recording the outcome keeps useful traceability. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag002 · FA-1.1.1 · K1 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Un feedback cambia il bisogno del cliente. Come rispondere? | Feedback changes what the customer needs. How should the team respond? |
| A | Ignorarlo perché il piano è approvato | Ignore it because the plan has been approved |
| B | Implementarlo senza analizzare rischi | Implement it without analysing the risks |
| C | Abbandonare ogni pianificazione | Abandon all planning |
| D ✔ | Valutare valore e impatto e adattare il piano | Assess value and impact, then adapt the plan |
| Spiegazione | Adattare significa decidere sulla base di nuove informazioni, conservando controllo e obiettivi. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | Adapting means deciding on new information while keeping control and objectives. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag003 · FA-1.1.2 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Chi è responsabile della qualità in un whole-team approach? | Who is responsible for quality in a whole-team approach? |
| A | Soltanto chi approva il rilascio | Only whoever approves the release |
| B | Un gruppo esterno a fine progetto | An external group at the end of the project |
| C ✔ | L’intero team, con competenze complementari | The whole team, with complementary skills |
| D | Soltanto il tester | The tester alone |
| Spiegazione | La responsabilità è condivisa; questo non rende intercambiabili tutte le competenze. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | Responsibility is shared; that does not make all skills interchangeable. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag004 · FA-1.1.3 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Qual è il beneficio principale di mostrare presto un prototipo? | What is the main benefit of showing a prototype early? |
| A | Bloccare definitivamente i requisiti | Freezing the requirements for good |
| B ✔ | Verificare ipotesi sul bisogno prima di investire molto | Checking assumptions about the need before investing heavily |
| C | Dimostrare che il prodotto non ha difetti | Proving that the product has no defects |
| D | Eliminare i test di accettazione | Removing acceptance testing |
| Spiegazione | Il feedback anticipato permette di correggere una direzione sbagliata quando il costo è minore. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | Early feedback lets the team correct a wrong direction while it is still cheap. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag005 · FA-3.3.2 · K2 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Una storia dice “ricerca veloce”. Qual è il contributo più utile del tester? | A story says “fast search”. What is the tester’s most useful contribution? |
| A ✔ | Chiarire carico, soglia e risultati attesi con il team | Clarify load, threshold and expected results with the team |
| B | Accettare “veloce” come criterio misurabile | Accept “fast” as a measurable criterion |
| C | Scegliere da solo la soluzione tecnica | Choose the technical solution alone |
| D | Rimandare ogni chiarimento al collaudo | Postpone every clarification to acceptance testing |
| Spiegazione | Condizioni e soglie rendono osservabile la qualità richiesta e sostengono esempi verificabili. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | Conditions and thresholds make the required quality observable and support verifiable examples. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag006 · FA-1.2.5 · K1 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Quale attività appartiene soprattutto all’iteration planning? | Which activity belongs mainly to iteration planning? |
| A | Fissare immutabilmente tutte le release future | Fixing all future releases once and for all |
| B | Consegnare solo un report finale | Delivering only a final report |
| C | Evitare stime dei test | Avoiding test estimates |
| D ✔ | Dettagliare test e attività delle storie vicine | Detailing the tests and tasks of the upcoming stories |
| Spiegazione | Il dettaglio cresce sul lavoro imminente, includendo rischi, dati e test. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | Detail grows on imminent work, including risks, data and tests. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag007 · FA-1.2.1 · K1 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | La colonna “in lavorazione” supera il limite WIP. Quale risposta favorisce il flusso? | The “in progress” column exceeds its WIP limit. Which response helps the flow? |
| A | Nascondere le attività bloccate | Hide the blocked tasks |
| B | Eliminare la visualizzazione del flusso | Stop visualising the flow |
| C ✔ | Aiutare a completare il lavoro aperto prima di iniziarne altro | Help finish the open work before starting anything new |
| D | Aprire più attività per tenere tutti occupati | Open more tasks to keep everyone busy |
| Spiegazione | Limitare il lavoro iniziato riduce code e rende visibili i colli di bottiglia. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | Limiting work in progress reduces queues and makes bottlenecks visible. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag008 · Approfondimento · Scrum Guide 2020 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Nella Scrum Guide 2020, il Daily Scrum richiede sempre le tre domande tradizionali? | In the 2020 Scrum Guide, does the Daily Scrum always require the three traditional questions? |
| A | Sì: serve ad approvare individualmente ogni attività | Yes: it serves to approve each person’s tasks one by one |
| B ✔ | No: il formato deve aiutare a ispezionare il progresso verso lo Sprint Goal | No: the format must support the inspection of progress toward the Sprint Goal |
| C | Sì: le tre domande sono obbligatorie | Yes: the three questions are mandatory |
| D | No: è una presentazione al cliente | No: it is a presentation to the customer |
| Spiegazione | Le tre domande sono una possibile tecnica, non un vincolo della guida 2020. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | The three questions are one possible technique, not a requirement of the 2020 guide. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag009 · FA-1.2.3 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Quale risultato rende utile una retrospettiva? | Which outcome makes a retrospective useful? |
| A ✔ | Un miglioramento concreto con responsabilità e verifica | A concrete improvement with an owner and a way to check it |
| B | Una graduatoria delle persone che hanno sbagliato | A ranking of the people who made mistakes |
| C | Solo una demo del prodotto | Only a product demo |
| D | La promessa di non avere mai più difetti | A promise never to have defects again |
| Spiegazione | Un’azione verificabile trasforma l’osservazione in apprendimento sul processo. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | A verifiable action turns an observation into learning about the process. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag010 · FA-1.2.4 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Una pipeline CI è verde. Cosa si può concludere? | A CI pipeline is green. What can you conclude? |
| A | Il prodotto è privo di difetti | The product has no defects |
| B | Ogni bisogno del cliente è soddisfatto | Every customer need is met |
| C | La regressione futura è impossibile | Future regressions are impossible |
| D ✔ | I controlli eseguiti sono passati nelle condizioni della pipeline | The checks that ran passed under the pipeline’s conditions |
| Spiegazione | Il risultato è circoscritto a controlli, dati, ambiente e versione effettivamente usati. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | The result is limited to the checks, data, environment and version actually used. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag011 · FA-2.2.2 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | A ogni iterazione cresce la regressione manuale. Quale strategia è sostenibile? | Manual regression testing grows with every iteration. Which strategy is sustainable? |
| A | Rinunciare alla regressione | Give up regression testing |
| B | Conservare per sempre anche test obsoleti | Keep even obsolete tests forever |
| C ✔ | Automatizzare controlli stabili e importanti e mantenere la suite | Automate stable, important checks and maintain the suite |
| D | Automatizzare tutto senza valutare costi | Automate everything without weighing the costs |
| Spiegazione | La selezione considera rischio, ripetibilità, costo e manutenzione; libera tempo per nuove indagini. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | Selection weighs risk, repeatability, cost and maintenance, and frees time for new investigation. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag012 · FA-2.3.2 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Qual è un contributo del tester nel team Agile? | What is one contribution of the tester in an Agile team? |
| A | Approvare ogni decisione di business da solo | Approving every business decision alone |
| B ✔ | Aiutare il team a prevenire problemi e comunicare rischi | Helping the team prevent problems and communicate risks |
| C | Essere l’unico responsabile di tutti i difetti | Being solely responsible for all defects |
| D | Limitarsi al collaudo finale | Doing only the final acceptance check |
| Spiegazione | Coaching, esempi e pensiero critico migliorano le decisioni durante tutto il ciclo. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | Coaching, examples and critical thinking improve decisions throughout the lifecycle. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag013 · FA-2.2.1 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Un burndown scende regolarmente. Quale conclusione è giustificata? | A burndown chart goes down steadily. Which conclusion is justified? |
| A ✔ | Il lavoro residuo misurato sta diminuendo, ma la qualità richiede altre evidenze | The measured remaining work is decreasing, but quality needs other evidence |
| B | Tutti i requisiti sono corretti | All requirements are correct |
| C | Non restano rischi di prodotto | No product risks remain |
| D | La copertura dei test è completa | Test coverage is complete |
| Spiegazione | Il grafico rappresenta lavoro residuo, non una prova autonoma di qualità o copertura. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | The chart shows remaining work; it is not proof of quality or coverage on its own. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag014 · FA-2.2.2 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Qual è lo scopo di un Build Verification Test? | What is the purpose of a build verification test? |
| A | Sostituire ogni test di regressione | Replace all regression testing |
| B | Certificare l’assenza di vulnerabilità | Certify that there are no vulnerabilities |
| C | Misurare la soddisfazione degli utenti | Measure user satisfaction |
| D ✔ | Valutare rapidamente se la build è adatta a test ulteriori | Quickly assess whether the build is fit for further testing |
| Spiegazione | Un insieme breve di controlli essenziali evita di investire su una build inutilizzabile. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | A short set of essential checks avoids investing in an unusable build. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag015 · FA-2.1.3 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Come mantenere pensiero critico collaborando strettamente con gli sviluppatori? | How can a tester keep thinking critically while working closely with developers? |
| A | Isolare sempre il tester da ogni conversazione | Always keep the tester out of every conversation |
| B | Considerare la collaborazione incompatibile con il testing | Treat collaboration as incompatible with testing |
| C ✔ | Usare revisioni incrociate e discutere ipotesi e rischi | Use cross-reviews and discuss assumptions and risks |
| D | Accettare automaticamente ogni spiegazione del codice | Automatically accept every explanation of the code |
| Spiegazione | Prospettive diverse possono sfidare le assunzioni senza perdere il contesto condiviso. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | Different perspectives can challenge assumptions without losing the shared context. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag016 · FA-2.1.1 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Quale documentazione è coerente con un approccio Agile? | Which kind of documentation fits an Agile approach? |
| A | Solo codice anche per decisioni normative | Only code, even for regulatory decisions |
| B ✔ | Informazioni utili, aggiornate e proporzionate a rischi e vincoli | Useful, up-to-date information proportionate to risks and constraints |
| C | Nessun documento in qualsiasi contesto | No documents in any context |
| D | Tutti i documenti possibili prima di iniziare | Every possible document before starting |
| Spiegazione | La leggerezza riguarda utilità e manutenzione, non un divieto assoluto di documentare. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | Lightweight means useful and maintainable, not an absolute ban on documentation. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag017 · FA-3.1.1 · K1 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Qual è la sequenza essenziale del TDD? | What is the essential sequence of TDD? |
| A ✔ | Test rosso, codice minimo verde, refactoring | Failing test, minimal code to pass, refactoring |
| B | Codice completo, rilascio, primo test | Complete code, release, first test |
| C | Refactoring senza test, poi accettazione | Refactoring without tests, then acceptance |
| D | Demo, contratto, rilascio | Demo, contract, release |
| Spiegazione | Il fallimento atteso verifica il test; il codice soddisfa il comportamento e il refactoring migliora la struttura mantenendo i test verdi. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | The expected failure validates the test; the code satisfies the behaviour, and refactoring improves the structure while the tests stay green. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag018 · FA-3.1.1 · K1 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Business, sviluppatore e tester definiscono esempi di accettazione prima del codice. Quale pratica descrive il caso? | Business, developer and tester define acceptance examples before the code. Which practice is this? |
| A | Solo test di carico | Load testing only |
| B | Debugging dopo rilascio | Debugging after release |
| C | Sola analisi statica | Static analysis only |
| D ✔ | ATDD | ATDD |
| Spiegazione | ATDD usa esempi di accettazione condivisi come guida all’implementazione. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | ATDD uses shared acceptance examples to guide the implementation. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag019 · FA-3.1.1 · K1 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Qual è il ruolo di Given–When–Then negli scenari BDD? | What is the role of Given–When–Then in BDD scenarios? |
| A | Sostituire ogni conversazione | To replace every conversation |
| B | Identificare sempre test di componente | To always identify component tests |
| C ✔ | Esprimere contesto, evento e comportamento atteso in modo condiviso | To express context, event and expected behaviour in a shared way |
| D | Provare automaticamente ogni requisito | To prove every requirement automatically |
| Spiegazione | La struttura rende esplicite precondizioni, azione e risultato; la comprensione condivisa resta centrale. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | The structure makes preconditions, action and result explicit; shared understanding stays central. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag020 · FA-3.2.1 · K2 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Due funzionalità hanno costi simili: una gestisce pagamenti, l’altra il colore di un’icona. Come prioritizzare i test? | Two features cost about the same: one handles payments, the other an icon colour. How should testing be prioritised? |
| A | Usare incremental design come misura del rischio | Use incremental design as the risk measure |
| B ✔ | Valutare probabilità e impatto dei problemi | Assess the likelihood and impact of problems |
| C | Usare solo l’ordine alfabetico | Use alphabetical order only |
| D | Testare solo la più facile | Test only the easier one |
| Spiegazione | L’analisi del rischio considera conseguenze e probabilità; il contesto può rendere prioritari i pagamenti. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | Risk analysis considers consequences and likelihood; in this context payments may well get priority. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag021 · FA-3.4.1 · K1 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | A cosa serve una mind map nel testing? | What is a mind map used for in testing? |
| A ✔ | Organizzare idee, rischi e percorsi di esplorazione | Organising ideas, risks and exploration paths |
| B | Eseguire automaticamente test UI | Running UI tests automatically |
| C | Sostituire il controllo delle versioni | Replacing version control |
| D | Dimostrare che ogni rischio è coperto | Proving that every risk is covered |
| Spiegazione | Una mappa aiuta a esplorare e collegare idee; la verifica della copertura richiede ulteriori evidenze. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | A map helps explore and connect ideas; checking coverage needs further evidence. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag022 · FA-3.3.4 · K2 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Quale insieme applica BVA a due valori a un campo intero valido da 18 a 65 inclusi? | Which set applies 2-value BVA to a valid integer field from 18 to 65 inclusive? |
| A | 18, 40, 65 | 18, 40, 65 |
| B | 19, 20, 63, 64 | 19, 20, 63, 64 |
| C | Solo 40 | 40 only |
| D ✔ | 17, 18, 65, 66 | 17, 18, 65, 66 |
| Spiegazione | Ogni confine è verificato con un valore valido adiacente a uno non valido: 17/18 e 65/66. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | Each boundary is checked with a valid value next to an invalid one: 17/18 and 65/66. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag023 · FA-3.1.3 · K2 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Quale affermazione sui quadranti di testing è corretta? | Which statement about the testing quadrants is correct? |
| A | Il quadrante rende superflua l’analisi del rischio | The quadrant makes risk analysis unnecessary |
| B | Q3 contiene solo test di componente | Q3 contains only component tests |
| C ✔ | Aiutano a ragionare su scopi e prospettive, non sono fasi obbligate | They help reason about purposes and perspectives; they are not mandatory phases |
| D | Q1 deve sempre terminare prima di Q2 | Q1 must always finish before Q2 |
| Spiegazione | La classificazione stimola una strategia bilanciata; attività di quadranti diversi possono convivere. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | The classification encourages a balanced strategy; activities from different quadrants can coexist. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag024 · FA-3.3.5 · K2 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Qual è una buona charter per una sessione esplorativa? | Which is a good test charter for an exploratory testing session? |
| A | Garantire che non esistano difetti | Guarantee that no defects exist |
| B ✔ | Esplorare i rimborsi interrotti per individuare incoerenze nei saldi, annotando evidenze | Explore interrupted refunds to find inconsistent balances, recording evidence |
| C | Cliccare liberamente senza registrare risultati | Click around freely without recording results |
| D | Eseguire solo uno script immutabile | Run only a fixed script |
| Spiegazione | Missione e rischio orientano l’apprendimento; le note rendono comunicabili risultati e lacune. Per risolvere il quesito, identifica lo scopo dell’attività e controlla se la proposta conserva collaborazione, feedback e gestione del rischio. Le alternative vanno valutate nel contesto, non riconosciute per una sola parola chiave. | Mission and risk guide the learning; notes make results and gaps communicable. To answer, identify the purpose of the activity and check whether the proposal preserves collaboration, feedback and risk management. Judge the options in context, not by a single keyword. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag025 · FA-1.1.1 · K1 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Quale scelta è coerente con i valori Agile? | Which choice is consistent with Agile values? |
| A | Vietare la documentazione | Ban documentation |
| B | Sostituire il cliente con un contratto | Replace the customer with a contract |
| C | Impedire cambiamenti al piano | Prevent changes to the plan |
| D ✔ | Preferire il confronto diretto, conservando la documentazione utile | Prefer direct discussion while keeping useful documentation |
| Spiegazione | La preferenza per le interazioni non annulla il valore degli altri strumenti. Nel laboratorio della clinica distingui sempre il risultato tecnico dal bisogno del paziente: la qualità richiede entrambi. Motiva la scelta prima di leggere le alternative. | Preferring interactions does not cancel the value of the other items. In the clinic workshop, always separate the technical result from the patient’s need: quality requires both. Justify your choice before reading the options. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag026 · FA-1.1.2 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Nel team della clinica, solo il tester conosce i casi di prenotazione doppia. Quale intervento migliora il lavoro collettivo? | In the clinic team, only the tester knows the double-booking cases. Which action improves the team’s collective work? |
| A | Delegare al tester ogni decisione di qualità | Delegate every quality decision to the tester |
| B | Eliminare il ruolo della segreteria | Remove the front office from the team |
| C ✔ | Discutere questi esempi con sviluppo e segreteria | Discuss these examples with development and the front office |
| D | Conservarli fino al collaudo finale | Keep them until final acceptance testing |
| Spiegazione | Condividere esempi combina conoscenza del dominio e competenze tecniche prima delle decisioni. Nel laboratorio della clinica distingui sempre il risultato tecnico dal bisogno del paziente: la qualità richiede entrambi. Motiva la scelta prima di leggere le alternative. | Sharing examples combines domain knowledge and technical skills before decisions are made. In the clinic workshop, always separate the technical result from the patient’s need: quality requires both. Justify your choice before reading the options. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag027 · FA-1.1.3 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | La demo della prenotazione rivela che manca la scelta della sede. Perché mostrarla presto è stato utile? | The booking demo reveals that choosing the clinic location is missing. Why was showing it early useful? |
| A | Il feedback impone di cancellare tutto il lavoro | The feedback forces the team to throw away all the work |
| B ✔ | Il team può correggere un bisogno frainteso prima di costruirvi sopra | The team can fix a misunderstood need before building on top of it |
| C | La demo certifica l’assenza di altri difetti | The demo certifies that there are no other defects |
| D | La demo rende inutili i test successivi | The demo makes later tests unnecessary |
| Spiegazione | La scoperta anticipata riduce il lavoro fondato su un’ipotesi sbagliata. Non garantisce però un prodotto corretto. Nel laboratorio della clinica distingui sempre il risultato tecnico dal bisogno del paziente: la qualità richiede entrambi. Motiva la scelta prima di leggere le alternative. | Early discovery reduces work based on a wrong assumption. It does not, however, guarantee a correct product. In the clinic workshop, always separate the technical result from the patient’s need: quality requires both. Justify your choice before reading the options. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag028 · FA-1.1.2 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Durante la stima di una storia, la tester segnala che un caso limite richiederà dati difficili da preparare. Quale vantaggio del whole-team approach emerge? | While a story is being estimated, the tester points out that one edge case will need test data that is hard to prepare. Which advantage of the whole-team approach does this show? |
| A ✔ | Il rischio entra subito nella stima e nella pianificazione del team | The risk enters the team’s estimate and planning straight away |
| B | La tester diventa l’unica responsabile della stima | The tester becomes solely responsible for the estimate |
| C | Gli sviluppatori non devono più scrivere test unitari | Developers no longer need to write unit tests |
| D | La storia esce dall’iterazione senza discussione | The story leaves the iteration without discussion |
| Spiegazione | Le competenze del tester arricchiscono le decisioni comuni: il costo della preparazione dei dati viene considerato prima di impegnarsi. | The tester’s skills enrich shared decisions: the cost of preparing the data is considered before committing. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag029 · FA-1.1.2 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Quale pratica favorisce il whole-team approach? | Which practice supports the whole-team approach? |
| A | Separare fisicamente i tester per garantire indipendenza assoluta | Physically separating testers to guarantee complete independence |
| B | Riservare la discussione dei requisiti al solo product owner | Leaving requirements discussions to the product owner alone |
| C | Limitare la comunicazione del tester ai defect report formali | Limiting the tester’s communication to formal defect reports |
| D ✔ | Discutere ogni funzionalità con business, sviluppo e testing insieme (Power of Three) | Discussing every feature with business, development and testing together (power of three) |
| Spiegazione | Le tre prospettive insieme chiariscono i requisiti e i test prima che il lavoro inizi: è un esempio citato dal syllabus. | The three perspectives together clarify requirements and tests before work starts: the syllabus cites it as an example. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag030 · FA-1.1.3 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | A ogni iterazione il cliente vede il software funzionante. Quale beneficio è più rilevante? | At every iteration the customer sees working software. Which benefit is most relevant? |
| A | Il cliente non può più cambiare le priorità | The customer can no longer change priorities |
| B | La documentazione dei requisiti diventa vietata | Requirements documentation becomes forbidden |
| C ✔ | Le incomprensioni sui requisiti emergono presto, quando correggerle costa meno | Misunderstood requirements surface early, when fixing them costs less |
| D | I test necessari si riducono a zero | The tests needed drop to zero |
| Spiegazione | Il feedback frequente fa emergere presto bisogni fraintesi, prima che altro lavoro vi si appoggi. | Frequent feedback reveals misunderstood needs early, before other work builds on them. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag031 · FA-1.1.3 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | In un progetto i problemi di qualità emergono solo nelle ultime settimane del rilascio. Quale cambiamento sfrutta meglio il feedback precoce? | In a project, quality problems only emerge in the last weeks before release. Which change makes best use of early feedback? |
| A | Mostrare il prodotto solo quando è privo di difetti | Show the product only when it is defect-free |
| B ✔ | Integrare e testare in ogni iterazione, mostrando i risultati agli stakeholder | Integrate and test in every iteration, showing the results to stakeholders |
| C | Rinviare tutti i test a un collaudo finale più lungo | Postpone all testing to a longer final acceptance phase |
| D | Allungare le iterazioni a sei mesi | Extend iterations to six months |
| Spiegazione | Integrazione, test e revisione frequenti producono feedback quando è ancora economico intervenire. | Frequent integration, testing and review produce feedback while it is still cheap to act. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag032 · FA-1.2.1 · K1 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Quale pratica è caratteristica di Extreme Programming (XP)? | Which practice is characteristic of Extreme Programming (XP)? |
| A ✔ | Pair programming | Pair programming |
| B | Kanban board con limiti WIP come unico strumento | A Kanban board with WIP limits as the only tool |
| C | Gate di fase con approvazione formale a fine progetto | Phase gates with formal approval at the end of the project |
| D | Pianificazione dettagliata e definitiva di tutto il progetto all’inizio | Detailed, final planning of the whole project at the start |
| Spiegazione | Il pair programming è una delle pratiche XP, insieme a test-first e integrazione continua. | Pair programming is one of the XP practices, together with test-first and continuous integration. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag033 · FA-1.2.1 · K1 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | In Scrum, chi gestisce e ordina il product backlog? | In Scrum, who manages and orders the product backlog? |
| A | Lo Scrum Master | The Scrum Master |
| B | Il tester del team | The team’s tester |
| C | Il team di sviluppo, senza un responsabile | The development team, with nobody in charge |
| D ✔ | Il product owner | The product owner |
| Spiegazione | Il product owner rappresenta il cliente e decide l’ordine del backlog. | The product owner represents the customer and decides the order of the backlog. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag034 · FA-1.2.2 · K3 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | La storia dice: “Come cliente voglio pagare velocemente”. Quale riscrittura è più testabile? | The story says: “As a customer I want to pay quickly”. Which rewrite is most testable? |
| A | Come sistema voglio usare il database dei pagamenti | As the system I want to use the payments database |
| B | Come cliente voglio un pagamento migliore di quello dei concorrenti | As a customer I want a better payment than the competitors offer |
| C ✔ | Come cliente registrato voglio pagare con una carta salvata in al massimo due passaggi, per non reinserire i dati | As a registered customer I want to pay with a saved card in no more than two steps, so I do not re-enter my details |
| D | Il pagamento deve essere veloce e intuitivo | Payment must be fast and intuitive |
| Spiegazione | Ruolo, azione e beneficio sono chiari e “due passaggi con carta salvata” si può verificare con un esempio concreto. | Role, action and benefit are clear, and “two steps with a saved card” can be checked with a concrete example. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag035 · FA-1.2.2 · K3 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Storia: “Come bibliotecaria voglio prorogare un prestito”. Quale criterio di accettazione la completa in modo testabile? | Story: “As a librarian I want to extend a loan”. Which acceptance criterion completes it in a testable way? |
| A | La proroga va implementata con una stored procedure | The extension must be implemented with a stored procedure |
| B ✔ | Un prestito non scaduto e senza prenotazioni si proroga di 14 giorni una sola volta; altrimenti il sistema mostra il motivo del rifiuto | A loan that is not overdue and has no reservations can be extended by 14 days, once; otherwise the system shows the reason for refusal |
| C | La proroga deve funzionare correttamente | The extension must work correctly |
| D | Il sistema deve essere facile da usare per le bibliotecarie | The system must be easy for librarians to use |
| Spiegazione | Condizioni, durata, limite e comportamento in caso di rifiuto permettono di ricavare test positivi e negativi. | Conditions, duration, limit and behaviour on refusal let you derive positive and negative tests. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag036 · FA-1.2.2 · K3 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Nel refinement una storia è troppo grande per un’iterazione e nessuno concorda sul significato di “cliente affidabile”. Quale azione del tester è più utile? | In refinement, a story is too big for one iteration and nobody agrees on what “reliable customer” means. Which action by the tester is most useful? |
| A ✔ | Proporre esempi di clienti affidabili e non, e suggerire di dividere la storia in parti verificabili singolarmente | Propose examples of reliable and unreliable customers, and suggest splitting the story into parts that can be tested separately |
| B | Accettare la storia e chiarire il significato durante l’esecuzione dei test | Accept the story and clarify the meaning during test execution |
| C | Scrivere subito casi di test dettagliati senza coinvolgere il business | Write detailed test cases at once without involving the business |
| D | Chiedere un documento dei requisiti completo prima di qualsiasi discussione | Ask for a complete requirements document before any discussion |
| Spiegazione | Gli esempi rendono testabile il termine ambiguo e storie più piccole si possono completare e verificare in un’iterazione. | Examples make the ambiguous term testable, and smaller stories can be completed and tested within one iteration. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag037 · FA-1.2.3 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | In retrospettiva il tester propone di discutere i difetti trovati tardi nell’iterazione. Perché è appropriato? | In a retrospective, the tester proposes discussing the defects found late in the iteration. Why is this appropriate? |
| A | Serve a individuare il responsabile dei difetti | It serves to find who is responsible for the defects |
| B | La retrospettiva sostituisce la review del codice | A retrospective replaces code review |
| C | Non è appropriato: il testing è escluso dalle retrospettive | It is not appropriate: testing is excluded from retrospectives |
| D ✔ | La retrospettiva riguarda processo, persone, relazioni e strumenti, e può portare a miglioramenti del testing | Retrospectives cover process, people, relationships and tools, and can lead to testing improvements |
| Spiegazione | Il syllabus cita fra i temi processo, persone, organizzazione, relazioni e strumenti, e prevede decisioni di miglioramento legate al testing: i difetti tardivi sono un buon spunto. | The syllabus lists process, people, organisations, relationships and tools among the topics, and expects test-related improvement decisions: late defects are a good starting point. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag038 · FA-1.2.3 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Quale condizione rende efficace una retrospettiva? | Which condition makes a retrospective effective? |
| A | Tenerla solo alla fine del progetto | Holding it only at the end of the project |
| B | Discutere soltanto i successi | Discussing only successes |
| C ✔ | Un clima di fiducia in cui si possono segnalare problemi senza timore di colpe | A climate of trust in which problems can be raised without fear of blame |
| D | Usare il verbale per valutare le prestazioni individuali | Using the minutes to assess individual performance |
| Spiegazione | Senza fiducia i problemi reali non emergono e il miglioramento resta superficiale. | Without trust, real problems do not surface and improvement stays superficial. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag039 · FA-1.2.3 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Dopo una retrospettiva il team introduce una checklist per le storie pronte. Che cosa mostra se il miglioramento funziona? | After a retrospective the team introduces a checklist for stories that are ready. What shows whether the improvement works? |
| A | Il fatto che nessuno ne parli più | Nobody mentioning it any more |
| B ✔ | Verificare nelle iterazioni successive se calano le storie bloccate per informazioni mancanti | Checking in later iterations whether fewer stories are blocked by missing information |
| C | L’approvazione unanime della checklist | The checklist being approved unanimously |
| D | Il numero di voci della checklist | The number of items on the checklist |
| Spiegazione | Un miglioramento va verificato sull’effetto atteso, con dati delle iterazioni successive. | An improvement must be checked against its expected effect, with data from later iterations. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag040 · FA-1.2.4 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Quale rischio rimane anche con una continuous integration ben configurata? | Which risk remains even with well-configured continuous integration? |
| A ✔ | Sfuggono i difetti che nessun controllo automatico verifica | Defects that no automated check covers can slip through |
| B | Le modifiche non vengono integrate di frequente | Changes are not integrated frequently |
| C | Il feedback arriva solo alla fine del rilascio | Feedback arrives only at the end of the release |
| D | La build non viene mai compilata automaticamente | The build is never compiled automatically |
| Spiegazione | La CI dà feedback solo su ciò che i controlli automatici coprono: il resto richiede altri test. | CI only gives feedback on what the automated checks cover: the rest needs other tests. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag041 · FA-1.2.4 · K2 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Quale attività fa parte tipicamente di un processo di continuous integration? | Which activity is typically part of a continuous integration process? |
| A | Integrare il codice una volta al mese dopo un collaudo manuale | Integrating code once a month after manual acceptance testing |
| B | Rilasciare in produzione ogni modifica senza controlli | Releasing every change to production with no checks |
| C | Sostituire le review con l’integrazione automatica | Replacing reviews with automated integration |
| D ✔ | A ogni integrazione: compilare, eseguire test automatici e analisi statica, notificare il risultato al team | At every integration: compile, run automated tests and static analysis, and notify the team of the result |
| Spiegazione | Build, test automatici, analisi statica e notifica del risultato sono le attività tipiche descritte dal syllabus. | Build, automated tests, static analysis and notification of the result are the typical activities described in the syllabus. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag042 · FA-1.2.5 · K1 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Quale attività del tester appartiene soprattutto alla release planning? | Which tester activity belongs mainly to release planning? |
| A | Eseguire la regressione sulla build di oggi | Running regression testing on today’s build |
| B | Correggere il codice difettoso | Fixing the faulty code |
| C ✔ | Contribuire a definire l’approccio di test e i rischi di qualità del rilascio | Helping define the test approach and the quality risks of the release |
| D | Scomporre una storia in task di test dell’iterazione | Breaking a story down into test tasks for the iteration |
| Spiegazione | Nella release planning il tester aiuta a valutare rischi, approccio e sforzo a livello di rilascio. | In release planning the tester helps assess risks, approach and effort at release level. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag043 · FA-1.2.5 · K1 · Agile · Values and collaboration

| | Italiano | English |
|---|---|---|
| Domanda | Quale differenza fra release planning e iteration planning è corretta? | Which difference between release planning and iteration planning is correct? |
| A | La release planning si ripete ogni giorno | Release planning is repeated every day |
| B ✔ | La release planning guarda al rilascio nel suo insieme; l’iteration planning seleziona e dettaglia le storie della singola iterazione | Release planning looks at the release as a whole; iteration planning selects and details the stories of a single iteration |
| C | L’iteration planning guarda all’intero rilascio; la release planning alla singola iterazione | Iteration planning looks at the whole release; release planning at a single iteration |
| D | Sono la stessa attività con nomi diversi | They are the same activity with different names |
| Spiegazione | La release planning definisce backlog e obiettivi del rilascio; l’iteration planning sceglie e scompone il lavoro dell’iterazione. | Release planning defines the backlog and objectives of the release; iteration planning chooses and breaks down the work of the iteration. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag044 · FA-2-KW · K1 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Quando si esegue tipicamente un build verification test? | When is a build verification test typically run? |
| A ✔ | Subito dopo il deploy di una nuova build nell’ambiente di test | Right after a new build is deployed to the test environment |
| B | Solo alla fine del rilascio, prima della consegna | Only at the end of the release, before delivery |
| C | Prima di scrivere le user story | Before the user stories are written |
| D | Una volta all’anno, durante l’audit | Once a year, during the audit |
| Spiegazione | Il build verification test copre funzionalità critiche e punti di integrazione appena la build arriva in ambiente, così il team non perde tempo su una build instabile. | The build verification test covers critical functions and integration points as soon as the build arrives, so the team does not waste time on an unstable build. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag045 · FA-2-KW · K1 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Che cos’è un configuration item? | What is a configuration item? |
| A | Un parametro di produzione che chiunque può modificare liberamente | A production setting anyone can change freely |
| B | Un difetto registrato nel sistema di tracciamento | A defect logged in the tracking system |
| C | Una user story già completata | A user story that has been completed |
| D ✔ | Un elemento identificato e gestito sotto configuration management, come codice, test o dati di test versionati | An item identified and managed under configuration management, such as versioned code, tests or test data |
| Spiegazione | Codice, test automatici, casi di test manuali e dati di test possono essere configuration item: versionati e tracciati nel tempo. | Code, automated tests, manual test cases and test data can be configuration items: versioned and tracked over time. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag046 · FA-2-KW · K1 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Qual è lo scopo del configuration management? | What is the purpose of configuration management? |
| A | Misurare la velocità del team | Measuring the team’s velocity |
| B | Approvare formalmente i requisiti | Formally approving the requirements |
| C ✔ | Identificare gli elementi e controllarne versioni e modifiche, conservandone la storia | Identifying items and controlling their versions and changes, while keeping their history |
| D | Pianificare le iterazioni del rilascio | Planning the iterations of the release |
| Spiegazione | Con il configuration management test e risultati restano allineati alle build: si sa che cosa è stato testato su quale versione. | With configuration management, tests and results stay aligned with the builds: you know what was tested on which version. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag047 · FA-2.1.1 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Quale differenza fra un modello sequenziale e un progetto Agile riguarda il momento del testing? | Which difference between a sequential model and an Agile project concerns when testing happens? |
| A | Nel progetto Agile gli stakeholder di business non testano | In an Agile project business stakeholders do not test |
| B ✔ | Nel progetto Agile il testing si svolge durante tutta l’iterazione, non come attività finale | In an Agile project testing takes place throughout the iteration, not as a final activity |
| C | Nel progetto Agile il testing inizia solo dopo l’ultima iterazione | In an Agile project testing starts only after the last iteration |
| D | Nel modello sequenziale non esistono livelli di test | Sequential models have no test levels |
| Spiegazione | Le iterazioni sono brevi e sviluppo, integrazione e test avvengono in parallelo e in sovrapposizione. | Iterations are short, and development, integration and testing happen in parallel and overlap. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag048 · FA-2.1.1 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Rispetto a un modello sequenziale, che cosa accade ai livelli di test in molti progetti Agile? | Compared with a sequential model, what happens to test levels in many Agile projects? |
| A ✔ | Si sovrappongono, perché requisiti, design e codice possono cambiare durante l’iterazione | They overlap, because requirements, design and code can change during the iteration |
| B | Ognuno deve chiudersi formalmente prima che inizi il successivo | Each must be formally closed before the next one starts |
| C | I criteri di uscita vengono aboliti | Exit criteria are abolished |
| D | Resta un solo livello: l’accettazione | Only one level remains: acceptance testing |
| Spiegazione | Nei modelli sequenziali l’uscita da un livello è spesso l’ingresso nel successivo; nei progetti Agile i livelli tendono a sovrapporsi. | In sequential models the exit from one level is often the entry to the next; in Agile projects levels tend to overlap. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag049 · FA-2.1.2 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Durante un’iterazione, quale sequenza di attività di test attraversa tipicamente una user story? | During an iteration, which sequence of test activities does a user story typically go through? |
| A | Prima il collaudo utente, poi gli unit test | First user acceptance testing, then unit testing |
| B | Un solo test di sistema alla fine del rilascio | A single round of system testing at the end of the release |
| C | Feature validation prima di scrivere il codice | Feature validation before writing the code |
| D ✔ | Unit test dello sviluppatore, poi feature verification sui criteri di accettazione e feature validation con gli stakeholder | Developer unit testing, then feature verification against the acceptance criteria and feature validation with stakeholders |
| Spiegazione | La storia passa dagli unit test alla verifica sui criteri di accettazione, spesso automatizzata, e alla validazione collaborativa della sua utilità. | The story moves from unit testing to verification against the acceptance criteria, often automated, and to collaborative validation of its usefulness. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag050 · FA-2.1.2 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Una tester lavora in coppia con uno sviluppatore sulla stessa funzionalità. Quale beneficio è più probabile? | A tester pairs with a developer on the same feature. Which benefit is most likely? |
| A | Lo sviluppatore smette di scrivere unit test | The developer stops writing unit tests |
| B | L’indipendenza del testing aumenta al massimo | Independence of testing is maximised |
| C ✔ | Sviluppo e test della funzionalità procedono insieme, con feedback immediato | Development and testing of the feature move forward together, with immediate feedback |
| D | La tester non deve più progettare test | The tester no longer needs to design tests |
| Spiegazione | Il pairing, citato dal syllabus, integra sviluppo e test: i problemi emergono mentre la funzionalità prende forma. | Pairing, cited by the syllabus, integrates development and testing: problems surface while the feature takes shape. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag051 · FA-2.1.2 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Secondo la buona pratica citata dal syllabus, quando una funzionalità è “done”? | According to the good practice cited by the syllabus, when is a feature “done”? |
| A | Quando la storia è stata stimata | When the story has been estimated |
| B ✔ | Quando è stata integrata e testata con il sistema | When it has been integrated and tested with the system |
| C | Quando il codice compila | When the code compiles |
| D | Quando passano gli unit test dello sviluppatore | When the developer’s unit tests pass |
| Spiegazione | Una funzionalità non si considera completata finché non è integrata e testata nel sistema. | A feature is not considered complete until it has been integrated and tested with the system. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag052 · FA-2.1.3 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Un tester inserito stabilmente nel team Agile collabora ogni giorno con gli sviluppatori. Quale rischio va gestito? | A tester embedded long-term in the Agile team works with the developers every day. Which risk must be managed? |
| A ✔ | La perdita di indipendenza e di valutazione oggettiva | Loss of independence and objective evaluation |
| B | L’impossibilità di automatizzare i test | Being unable to automate the tests |
| C | La mancanza di feedback rapido | Lack of quick feedback |
| D | La scarsa conoscenza del prodotto | Poor knowledge of the product |
| Spiegazione | Stare nel team favorisce conoscenza e rapidità, ma può ridurre distacco e obiettività. | Being in the team brings knowledge and speed, but can reduce detachment and objectivity. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag053 · FA-2.1.3 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Un team di test separato viene assegnato solo negli ultimi giorni di ogni sprint. Quale problema è tipico? | A separate test team is assigned only in the last days of each sprint. Which problem is typical? |
| A | Perdita totale di indipendenza | Total loss of independence |
| B | Eccessiva vicinanza agli sviluppatori | Being too close to the developers |
| C | Impossibilità di eseguire test manuali | Being unable to run manual tests |
| D ✔ | Pressione dei tempi e scarsa conoscenza delle nuove funzionalità | Time pressure and little understanding of the new features |
| Spiegazione | L’indipendenza è preservata, ma arrivare tardi porta pressione, poca conoscenza delle novità e relazioni difficili. | Independence is preserved, but arriving late brings pressure, little knowledge of what is new and difficult relationships. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag054 · FA-2.1.3 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Quale organizzazione combina indipendenza e buona conoscenza del prodotto? | Which organisation combines independence with good knowledge of the product? |
| A | Solo test automatici scritti dagli sviluppatori | Only automated tests written by developers |
| B | Nessun tester: il product owner verifica tutto | No testers: the product owner checks everything |
| C ✔ | Un team di test indipendente con tester assegnati ai team Agile a lungo termine, fin dall’inizio | An independent test team whose testers are assigned to Agile teams long-term, from the start |
| D | Tester assegnati su richiesta negli ultimi giorni dello sprint | Testers assigned on demand in the last days of the sprint |
| Spiegazione | L’assegnazione stabile permette di conoscere il prodotto e costruire relazioni mantenendo l’appartenenza a un team indipendente. | A stable assignment lets testers learn the product and build relationships while still belonging to an independent team. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag055 · FA-2.2.1 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Quale mezzo mostra in modo immediato e dettagliato lo stato di tutto il team, test inclusi? | Which tool gives an immediate, detailed view of the whole team’s status, testing included? |
| A | Il contratto con il cliente | The contract with the customer |
| B ✔ | La task board con colonne come “da fare”, “in corso”, “verifica” e “fatto” | The task board with columns such as “to do”, “in progress”, “verify” and “done” |
| C | Il piano di test approvato a inizio progetto | The test plan approved at the start of the project |
| D | Il registro delle presenze | The attendance register |
| Spiegazione | Storie, task di sviluppo e di test si muovono sulla board: lo stato è visibile a tutti in ogni momento. | Stories, development tasks and test tasks move across the board: everyone can see the status at any time. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag056 · FA-2.2.1 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Come vanno usate le metriche di test in un team Agile? | How should test metrics be used in an Agile team? |
| A ✔ | Per supportare decisioni e miglioramento, non per premiare o punire singole persone | To support decisions and improvement, not to reward or punish individuals |
| B | Per classificare i membri del team | To rank team members |
| C | Per sostituire le conversazioni nello stand-up | To replace the conversations in the stand-up |
| D | Solo a fine progetto, in un report conclusivo | Only at the end of the project, in a final report |
| Spiegazione | Il syllabus chiede metriche pertinenti, utili alle decisioni e mai usate per premiare, punire o isolare qualcuno. | The syllabus asks for relevant metrics that help decisions and are never used to reward, punish or isolate anyone. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag057 · FA-2.2.1 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Un task di test è fermo da tre giorni sulla board. Qual è la risposta più coerente con il syllabus? | A test task has not moved on the board for three days. What is the response most consistent with the syllabus? |
| A | Attendere la retrospettiva di fine iterazione | Wait for the retrospective at the end of the iteration |
| B | Spostarlo in “fatto” per non rallentare il burndown | Move it to “done” so it does not slow the burndown |
| C | Risolverlo da soli senza informare nessuno | Solve it alone without telling anyone |
| D ✔ | Segnalarlo nello stand-up perché il team analizzi e rimuova il blocco | Raise it in the stand-up so the team can analyse and remove the blocker |
| Spiegazione | I blocchi, anche quelli del testing, si comunicano nello stand-up quotidiano così che il team possa intervenire subito. | Blockers, testing ones included, are raised in the daily stand-up so the team can act at once. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag058 · FA-2.2.2 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | A ogni iterazione il prodotto cresce e non c’è tempo per rieseguire tutti i test. Che cosa raccomanda il syllabus? | The product grows with every iteration and there is not enough time to re-run every test. What does the syllabus recommend? |
| A | Congelare la suite di regressione al primo rilascio | Freeze the regression suite at the first release |
| B | Rinunciare alla regressione e affidarsi al cliente | Give up regression testing and rely on the customer |
| C ✔ | Rivedere i test, scegliere i candidati alla regressione, automatizzarne il più possibile e ritirare quelli non più rilevanti | Review the tests, select candidates for regression testing, automate as many as possible and retire those no longer relevant |
| D | Eseguire solo i test dell’iterazione corrente | Run only the tests of the current iteration |
| Spiegazione | La suite va curata a ogni iterazione: selezione, automazione e ritiro dei test superati tengono sotto controllo il rischio di regressione. | The suite must be curated at every iteration: selection, test automation and retirement of tests keep regression risk under control. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag059 · FA-2.2.2 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Un test automatico di regressione fallisce dopo una modifica di comportamento voluta e concordata con il business. Che cosa fare? | An automated regression test fails after a behaviour change that was intended and agreed with the business. What should be done? |
| A | Ignorare il fallimento finché non passa da solo | Ignore the failure until it passes by itself |
| B ✔ | Aggiornare il test, e se serve la storia, ai nuovi criteri di accettazione | Update the test, and the story if needed, to the new acceptance criteria |
| C | Disattivare l’intera suite di regressione | Disable the whole regression testing suite |
| D | Aprire un difetto di massima gravità senza analisi | Open a defect of maximum severity without analysis |
| Spiegazione | Il team analizza il fallimento: se dipende da un cambiamento legittimo, il test va aggiornato o ritirato. | The team analyses the failure: if it comes from a legitimate change, the test is updated or retired. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag060 · FA-2.3.1 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Oltre alle competenze Foundation, quali competenze il syllabus attende da un tester Agile? | Beyond Foundation skills, which skills does the syllabus expect from an Agile tester? |
| A ✔ | Automazione dei test, TDD, ATDD e tecniche black-box, white-box ed esperienziali | Test automation, TDD, ATDD and black-box, white-box and experience-based techniques |
| B | Gestione del budget aziendale | Managing the company budget |
| C | Amministrazione dei contratti con i fornitori | Administering supplier contracts |
| D | Progettazione grafica dell’interfaccia | Graphic design of the user interface |
| Spiegazione | Il syllabus elenca proprio automazione, TDD, ATDD e tecniche black-box, white-box ed esperienziali. | The syllabus lists precisely test automation, TDD, ATDD and black-box, white-box and experience-based techniques. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag061 · FA-2.3.1 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Quale comportamento riflette le competenze interpersonali attese da un tester Agile? | Which behaviour reflects the interpersonal skills expected of an Agile tester? |
| A | Attendere specifiche complete prima di fare domande | Waiting for complete specifications before asking questions |
| B | Evitare il confronto per non rallentare il team | Avoiding discussion so as not to slow the team down |
| C | Comunicare soltanto tramite defect report | Communicating only through defect reports |
| D ✔ | Raccogliere attivamente informazioni dagli stakeholder, senza basarsi solo su specifiche scritte | Actively gathering information from stakeholders rather than relying only on written specifications |
| Spiegazione | Il tester Agile cerca attivamente le informazioni dalle persone. | The Agile tester actively seeks information from people. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag062 · FA-2.3.1 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Una tester è positiva e orientata alle soluzioni con il team, ma mette in dubbio una soluzione rischiosa. Quali competenze mostra? | A tester is positive and solution-oriented with the team, but challenges a risky solution. Which skills does this show? |
| A | Accettazione di ogni decisione per mantenere l’armonia | Accepting every decision to keep the peace |
| B | Conoscenza del dominio al posto delle competenze di test | Domain knowledge in place of testing skills |
| C ✔ | Orientamento alle soluzioni e pensiero critico e scettico sul prodotto | Solution orientation together with critical, sceptical thinking about the product |
| D | Indipendenza assoluta e rifiuto della collaborazione | Absolute independence and refusal to collaborate |
| Spiegazione | Il syllabus chiede insieme un atteggiamento positivo e uno sguardo critico, orientato alla qualità. | The syllabus asks for a positive attitude together with a critical, quality-oriented view. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag063 · FA-2.3.2 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Quale attività rientra nel ruolo del tester in un team Agile? | Which activity is part of the tester’s role in an Agile team? |
| A | Sostituire lo Scrum Master | Replacing the Scrum Master |
| B ✔ | Misurare e comunicare la copertura dei test in tutte le dimensioni pertinenti | Measuring and reporting test coverage across all relevant coverage dimensions |
| C | Decidere da solo l’ordine del product backlog | Deciding the order of the product backlog alone |
| D | Approvare il budget del rilascio | Approving the release budget |
| Spiegazione | La misura della copertura è fra le attività che il syllabus attribuisce al tester. | Measuring coverage is among the activities the syllabus assigns to the tester. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag064 · FA-2.3.2 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Il team trascura sistematicamente i test non funzionali. Quale azione rientra nel ruolo del tester? | The team consistently neglects non-functional testing. Which action is part of the tester’s role? |
| A ✔ | Fare coaching su quegli aspetti del testing e assicurare che i task siano pianificati | Coach the team on those aspects of testing and make sure the tasks are planned |
| B | Eseguire tutti i test non funzionali da solo, senza dirlo | Run all the non-functional tests alone, without saying so |
| C | Tacere per non creare tensioni | Stay quiet to avoid tension |
| D | Bloccare il rilascio senza discuterne | Block the release without discussing it |
| Spiegazione | Coaching sul testing e pianificazione dei task di test nelle iterazioni sono attività previste per il tester. | Coaching on testing and planning the test tasks in the iterations are activities expected of the tester. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag065 · FA-2.3.2 · K2 · Agile · Quality during the iteration

| | Italiano | English |
|---|---|---|
| Domanda | Quale rischio organizzativo per i tester Agile cita il syllabus? | Which organisational risk for Agile testers does the syllabus mention? |
| A | Avere troppo tempo libero nelle iterazioni | Having too much free time in the iterations |
| B | Non poter partecipare alle retrospettive | Not being able to attend retrospectives |
| C | Dover lavorare solo con test manuali | Having to work only with manual tests |
| D ✔ | Diventare tolleranti o silenziosi verso pratiche inefficienti o di bassa qualità | Becoming tolerant of, or silent about, inefficient or low-quality practices |
| Spiegazione | Il syllabus cita anche la perdita della mentalità del tester e la difficoltà di stare al passo con i cambiamenti. | The syllabus also mentions losing the tester mindset and struggling to keep pace with change. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag066 · FA-3-KW · K1 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Che cos’è un unit test framework? | What is a unit test framework? |
| A | L’insieme dei criteri di accettazione di una storia | The set of acceptance criteria of a story |
| B | Una tecnica di stima basata sul consenso | A consensus-based estimation technique |
| C ✔ | Uno strumento che supporta la scrittura e l’esecuzione automatica dei test di unità | A tool that supports writing and automatically running unit tests |
| D | Il documento che descrive la strategia di test del rilascio | The document describing the test strategy of the release |
| Spiegazione | Il framework fornisce struttura, asserzioni ed esecuzione automatica dei test di unità, come quelli scritti nel TDD. | The framework provides structure, assertions and automatic execution of unit tests, such as those written in TDD. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag067 · FA-3-KW · K1 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Che cos’è una test charter? | What is a test charter? |
| A | L’elenco dei difetti aperti | The list of open defects |
| B ✔ | Un documento che indica obiettivo e condizioni di test di una sessione esplorativa a tempo | A document stating the objective and test conditions of a time-boxed exploratory testing session |
| C | Il contratto firmato con il cliente | The contract signed with the customer |
| D | Il report finale di completamento dei test | The final test completion report |
| Spiegazione | La charter orienta la sessione esplorativa: che cosa esplorare, con quale scopo e in quale tempo. | The charter guides the exploratory testing session: what to explore, for what purpose and within what time. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag068 · FA-3-KW · K1 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Che cos’è un rischio di qualità (rischio di prodotto)? | What is a quality risk (product risk)? |
| A ✔ | Un possibile problema il cui effetto principale ricade sulla qualità del prodotto | A potential problem whose main effect is on the quality of the product |
| B | Il ritardo nella consegna dell’ambiente di test | The test environment being delivered late |
| C | Un elemento sotto configuration management | An item under configuration management |
| D | Una stima di sforzo in story point | An effort estimate in story points |
| Spiegazione | Quando l’effetto principale riguarda la qualità del prodotto si parla di rischio di qualità o di prodotto. | When the main effect concerns product quality, it is called a quality risk or product risk. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag069 · FA-3.1.2 · K1 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Che cosa rappresenta la piramide dei test? | What does the test pyramid represent? |
| A | Molti test di accettazione e pochi test di unità | Many acceptance tests and few unit tests |
| B | Lo stesso numero di test a ogni livello | The same number of tests at every level |
| C | La gerarchia dei ruoli nel team | The hierarchy of roles in the team |
| D ✔ | Molti test ai livelli bassi, come unità e integrazione, e via via meno salendo verso i livelli alti | Many tests at the lower levels, such as unit and integration, and progressively fewer towards the higher levels |
| Spiegazione | La base larga indica molti test di unità e integrazione; il numero diminuisce verso sistema e accettazione. | The wide base means many unit and integration tests; the number decreases towards system and acceptance. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag070 · FA-3.1.2 · K1 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Secondo il syllabus, con quali strumenti si automatizzano di solito i test alla base della piramide? | According to the syllabus, which tools are usually used to automate the tests at the base of the pyramid? |
| A | Nessuno: alla base si testa solo manualmente | None: the base is tested only manually |
| B | Strumenti di gestione dei contratti | Contract management tools |
| C ✔ | Strumenti basati su API | API-based tools |
| D | Strumenti basati sulla GUI | GUI-based tools |
| Spiegazione | Unit test e test di integrazione si automatizzano di solito con strumenti basati su API. | Unit and integration tests are usually automated with API-based tools. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag071 · FA-3.1.2 · K1 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Su quale principio si fonda la piramide dei test? | Which principle is the test pyramid based on? |
| A | L’automazione elimina ogni test manuale | Test automation eliminates every manual test |
| B ✔ | Anticipare QA e test, per eliminare i difetti il prima possibile | Early QA and testing, to remove defects as early as possible |
| C | Il testing esaustivo è possibile ai livelli bassi | Exhaustive testing is possible at the lower levels |
| D | I test di accettazione costano meno da mantenere | Acceptance testing is cheaper to maintain |
| Spiegazione | Il syllabus collega la piramide al principio del testing anticipato: rimuovere i difetti presto nel ciclo di vita. | The syllabus links the pyramid to the principle of early testing: removing defects early in the lifecycle. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag072 · FA-3.1.3 · K2 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Un team esegue test di carico e di sicurezza. In quale quadrante si collocano? | A team runs load and security tests. Which quadrant do they belong to? |
| A ✔ | Q4: orientati alla tecnologia, criticano il prodotto | Q4: technology-facing, critiquing the product |
| B | Q1: unit test a supporto degli sviluppatori | Q1: unit tests supporting the developers |
| C | Q2: test funzionali orientati al business | Q2: business-facing functional tests |
| D | Q3: test esplorativi e di usabilità | Q3: exploratory testing and usability tests |
| Spiegazione | Prestazioni, carico, stress, sicurezza e affidabilità tecnica sono test di Q4, spesso automatizzati. | Performance, load, stress, security and technical reliability tests are Q4 tests, often automated. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag073 · FA-3.1.3 · K2 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Quale descrizione corrisponde al quadrante Q2? | Which description matches quadrant Q2? |
| A | Livello di unità, orientato alla tecnologia, a supporto degli sviluppatori | Unit level, technology-facing, supporting the developers |
| B | Critica il prodotto con test di prestazioni e sicurezza | Critiquing the product with performance and security tests |
| C | Contiene user acceptance test, alpha e beta test | Containing user acceptance tests, alpha and beta tests |
| D ✔ | Livello di sistema, orientato al business, conferma il comportamento del prodotto con test funzionali, esempi e story test | System level, business-facing, confirming product behaviour with functional tests, examples and story tests |
| Spiegazione | Q2 verifica i criteri di accettazione, manualmente o in automatico, ed è utile per costruire la regressione automatica. | Q2 checks the acceptance criteria, manually or automatically, and is useful for building automated regression testing. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag074 · FA-3.1.3 · K2 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Una tester pianifica test esplorativi e di usabilità con utenti reali. Che cosa indica il modello dei quadranti? | A tester plans exploratory testing and usability tests with real users. What does the quadrant model say? |
| A | Non rientrano nei quadranti perché sono manuali | They are outside the quadrants because they are manual |
| B | Sono test statici e restano fuori dal modello | They are static tests and stay outside the model |
| C ✔ | Sono in Q3: orientati al business, criticano il prodotto e sono spesso manuali | They are in Q3: business-facing, critiquing the product and often manual |
| D | Sono in Q1 e vanno inseriti nella CI come unit test | They are in Q1 and must be added to CI as unit tests |
| Spiegazione | Q3 raccoglie test esplorativi, di usabilità, scenari e accettazione utente, con scenari e dati realistici. | Q3 includes exploratory, usability, scenario and user acceptance tests, with realistic scenarios and data. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag075 · FA-3.1.4 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Sprint zero di un nuovo progetto Scrum: come contribuisce la tester? | Sprint zero of a new Scrum project: how does the tester contribute? |
| A | Con il collaudo finale insieme al cliente | With final acceptance testing together with the customer |
| B ✔ | Con la strategia di test iniziale, una prima analisi dei rischi di qualità, le metriche di test e la definition of done | With the initial test strategy, a first quality risk analysis, test metrics and the definition of done |
| C | Con la regressione completa e il report di rilascio | With full regression testing and the release report |
| D | Scrivendo il codice delle prime storie | By writing the code of the first stories |
| Spiegazione | Nello sprint zero si preparano strategia, rischi, metriche, strumenti, task board e definition of done. | In sprint zero the team prepares the strategy, risks, metrics, tools, task board and definition of done. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag076 · FA-3.1.4 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Nello sprint planning compare il task “Testare il modulo pagamenti”, stimato 6 giorni. Che cosa propone la tester? | In sprint planning the task “Test the payments module” appears, estimated at 6 days. What does the tester propose? |
| A ✔ | Scomporlo in task da uno o due giorni, legati ai criteri di accettazione e visibili sulla task board | Breaking it into tasks of one or two days, linked to the acceptance criteria and visible on the task board |
| B | Accettarlo così e aggiornarlo a fine sprint | Accepting it as it is and updating it at the end of the sprint |
| C | Toglierlo dalla board per non rallentare il burndown | Removing it from the board so it does not slow the burndown |
| D | Chiedere al product owner di eseguirlo | Asking the product owner to do it |
| Spiegazione | Il syllabus indica task di uno o due giorni: avanzamento e blocchi diventano visibili ogni giorno. | The syllabus recommends tasks of one or two days: progress and blockers become visible every day. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag077 · FA-3.1.4 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Gli stakeholder non si fidano dei risultati dei test del team Scrum. Quale pratica risponde meglio al problema? | Stakeholders do not trust the Scrum team’s test results. Which practice best addresses the problem? |
| A | Ridurre il numero di test eseguiti | Reducing the number of tests run |
| B | Smettere di mostrare la task board | No longer showing the task board |
| C | Affidare tutto il test a un team esterno a fine progetto | Handing all testing to an external team at the end of the project |
| D ✔ | Rendere credibile la strategia di test, informando gli stakeholder sul processo di test | Making the test strategy credible by informing stakeholders about the test process |
| Spiegazione | Fra le buone pratiche dei team Scrum il syllabus cita la credibilità: senza informazioni sul processo, i risultati non convincono. | Among good practices for Scrum teams the syllabus cites credibility: without information about the process, the results do not convince. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag078 · FA-3.2.1 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Nell’iteration planning ci sono tre elementi: A) calcolo degli interessi di un mutuo, usato da tutti i clienti; B) nuovo colore di un pulsante; C) report mensile, già stabile, usato da due persone. Quale scelta è più giustificata? | Iteration planning has three items: A) interest calculation for a mortgage, used by every customer; B) a new button colour; C) a monthly report, already stable, used by two people. Which choice is most justified? |
| A | Tutti con la stessa profondità di test | The same depth of testing for all |
| B | C per primo perché è già stabile | C first because it is already stable |
| C ✔ | A per primo e con più test; B e C dopo, con meno test | A first and with the most testing; B and C later, with less testing |
| D | B per primo perché è il più rapido | B first because it is the quickest |
| Spiegazione | A unisce impatto alto (tutti i clienti, denaro) e probabilità rilevante: va iniziato prima e testato di più. | A combines high impact (every customer, money) with significant likelihood: it should start first and get the most testing. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag079 · FA-3.2.1 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Per la storia “ricerca prodotti” il team individua il rischio “risposte lente con molti utenti”. Come si classifica e che cosa lo mitiga meglio? | For the story “product search” the team identifies the risk “slow responses with many users”. How is it classified and what mitigates it best? |
| A | Rischio di usabilità: test esplorativo dell’interfaccia | A usability risk: exploratory testing of the interface |
| B ✔ | Rischio non funzionale di efficienza: test di prestazioni con carichi realistici | A non-functional efficiency risk: performance tests with realistic loads |
| C | Rischio funzionale di accuratezza: una tabella decisionale | A functional accuracy risk: a decision table |
| D | Rischio di progetto: rivedere il piano | A project risk: revise the plan |
| Spiegazione | La lentezza è un rischio di qualità legato a efficienza e tempi di risposta: va mitigata con test di prestazioni. | Slowness is a quality risk tied to efficiency and response time: it should be mitigated with non-functional testing, specifically performance testing. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag080 · FA-3.2.1 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Durante l’identificazione dei rischi il team scopre che molte storie hanno criteri di accettazione vaghi. Quale mitigazione è possibile già prima di eseguire test? | While identifying risks, the team finds that many stories have vague acceptance criteria. Which mitigation is possible even before running any test? |
| A ✔ | Rivedere a fondo le storie con il business per chiarire i criteri | Reviewing the stories thoroughly with the business to clarify the criteria |
| B | Allungare lo sprint | Making the sprint longer |
| C | Ignorare il problema e testare ciò che si può | Ignoring the problem and testing what can be tested |
| D | Rinviare l’analisi dei rischi al rilascio successivo | Postponing the risk analysis to the next release |
| Spiegazione | Il syllabus ricorda che alcuni rischi si mitigano prima dell’esecuzione, per esempio con una revisione accurata delle storie. | The syllabus notes that some risks can be mitigated before test execution, for example by a thorough review of the stories. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag081 · FA-3.2.2 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Nel planning poker le carte rivelate sono 3, 5, 5 e 21. Che cosa fa il team? | In planning poker the cards revealed are 3, 5, 5 and 21. What does the team do? |
| A | Usa la media, 8,5 | Use the average, 8.5 |
| B | Sceglie 21, il valore più prudente, senza discutere | Choose 21, the most cautious value, without discussion |
| C | Scarta il 21 e assegna 5 | Discard the 21 and assign 5 |
| D ✔ | Discute le differenze, partendo da chi ha scelto 3 e 21, e ripete la stima | Discuss the differences, starting with whoever chose 3 and 21, and estimate again |
| Spiegazione | Le stime divergenti si discutono, perché rivelano conoscenze o ipotesi diverse; poi si ripete il giro. | Diverging estimates are discussed, because they reveal different knowledge or assumptions; then the round is repeated. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag082 · FA-3.2.2 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Due storie richiedono lo stesso sforzo di sviluppo: una riguarda il calcolo delle commissioni (rischio alto), l’altra un testo informativo (rischio basso). Come si riflette il testing nella stima? | Two stories need the same development effort: one is about calculating commissions (high risk), the other an information text (low risk). How is testing reflected in the estimate? |
| A | La storia a basso rischio riceve la stima più alta | The low-risk story gets the higher estimate |
| B | Il test non entra nella stima e si stima a fine rilascio | Testing is not part of the estimate and is estimated at the end of the release |
| C ✔ | La storia ad alto rischio riceve una stima maggiore, per la maggiore profondità di test | The high-risk story gets a higher estimate, because it needs deeper testing |
| D | Stessa stima, perché lo sviluppo è uguale | The same estimate, because development is the same |
| Spiegazione | La stima comprende anche il test: un rischio più alto richiede test più approfonditi, quindi più sforzo. | The estimate also covers testing: higher risk needs more thorough tests, and therefore more effort. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag083 · FA-3.2.2 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Tutti gli stimatori mostrano valori molto alti, 55 e 89, per una storia. Che cosa indica di solito? | All the estimators show very high values, 55 and 89, for a story. What does this usually indicate? |
| A | La storia non richiede test | The story needs no testing |
| B ✔ | La storia non è ben compresa o va scomposta in storie più piccole | The story is not well understood or should be split into smaller stories |
| C | La storia è la più importante del backlog | The story is the most important in the backlog |
| D | Il team è poco produttivo | The team is not very productive |
| Spiegazione | Il syllabus spiega che una stima alta segnala di solito scarsa comprensione o una storia troppo grande. | The syllabus explains that a high estimate usually signals poor understanding or a story that is too big. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag084 · FA-3.3.1 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | La definition of done d’integrazione chiede che tutte le interfacce fra unità siano testate. Il report: 9 interfacce su 10 testate, nessun difetto maggiore aperto. Che cosa concludi? | The integration definition of done requires all interfaces between units to be tested. The report: 9 of 10 interfaces tested, no major defects open. What do you conclude? |
| A ✔ | L’integrazione non è ancora “done”: manca un’interfaccia | Integration is not “done” yet: one interface is missing |
| B | È “done”, perché non ci sono difetti maggiori | It is “done”, because there are no major defects |
| C | È “done”, perché il 90% basta | It is “done”, because 90% is enough |
| D | La definition of done non si applica all’integrazione | The definition of done does not apply to integration |
| Spiegazione | Ogni criterio va soddisfatto: l’assenza di difetti maggiori non compensa l’interfaccia non testata. | Every criterion must be met: having no major defects does not make up for the untested interface. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag085 · FA-3.3.1 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | La storia del checkout non dice nulla sui tempi di risposta, ma i profili utente mostrano picchi di accesso durante i saldi. Come usi questa informazione? | The checkout story says nothing about response times, but the user profiles show access peaks during the sales. How do you use this information? |
| A | La ignori, perché conta solo la storia | You ignore it, because only the story counts |
| B | La usi solo dopo il rilascio | You use it only after the release |
| C | La registri come difetto | You log it as a defect |
| D ✔ | Come base di test aggiuntiva: proponi un criterio e test di prestazioni per i picchi | As an additional test basis: propose a criterion and performance tests for the peaks |
| Spiegazione | I profili utente sono fra le basi di test citate dal syllabus: segnalano un rischio da discutere e coprire. | User profiles are among the test bases cited by the syllabus: they point to a risk to discuss and cover. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag086 · FA-3.3.1 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | A fine iterazione tutte le storie sono testate singolarmente, ma l’integrazione delle funzionalità non è stata testata e due difetti non critici non sono nel backlog. Secondo la definition of done d’iterazione del syllabus, che cosa manca? | At the end of the iteration every story has been tested individually, but the integration of the features has not been tested and two non-critical defects are not in the backlog. According to the iteration definition of done in the syllabus, what is missing? |
| A | Solo correggere subito tutti i difetti non critici | Only fixing all the non-critical defects immediately |
| B | Solo scrivere la documentazione | Only writing the documentation |
| C ✔ | Testare l’integrazione delle funzionalità e inserire i difetti non critici nel backlog con una priorità | Testing the integration of the features and adding the non-critical defects to the backlog with a priority |
| D | Niente: l’iterazione è completa | Nothing: the iteration is complete |
| Spiegazione | La DoD d’iterazione chiede integrazione testata e difetti non critici, non risolvibili nell’iterazione, aggiunti al backlog con priorità. | The iteration definition of done requires tested integration, and non-critical defects that cannot be fixed within the iteration added to the backlog with a priority. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag087 · FA-3.3.2 · K2 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Un product owner chiede come rendere testabili i criteri di accettazione. Quale indicazione è corretta? | A product owner asks how to make acceptance criteria testable. Which advice is correct? |
| A | Scrivere solo il titolo della storia | Write only the title of the story |
| B ✔ | Descrivere comportamenti osservabili, regole di business, dati e caratteristiche di qualità misurabili | Describe observable behaviour, business rules, data and measurable quality characteristics |
| C | Usare aggettivi come “rapido” e “semplice” | Use adjectives such as “fast” and “simple” |
| D | Lasciare i dettagli agli sviluppatori | Leave the details to the developers |
| Spiegazione | Il syllabus elenca fra gli aspetti da coprire comportamento, qualità, scenari, regole, interfacce, vincoli e dati. | The syllabus lists behaviour, quality, scenarios, rules, interfaces, constraints and data among the aspects to cover. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag088 · FA-3.3.2 · K2 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Quale criterio di accettazione è una definizione dei dati? | Which acceptance criterion is a data definition? |
| A ✔ | Il codice postale ha 5 cifre, è obbligatorio e non ha valore predefinito | The postcode has 5 digits, is mandatory and has no default value |
| B | La pagina si carica in meno di 2 secondi | The page loads in under 2 seconds |
| C | Solo i clienti con contratto attivo possono chiedere un rimborso | Only customers with an active contract can request a refund |
| D | Il sistema invia l’ordine al magazzino tramite API | The system sends the order to the warehouse through an API |
| Spiegazione | Formato, tipo, valori ammessi e valori predefiniti di un dato sono definizioni dei dati. | The format, type, allowed values and default values of a data item are data definitions. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag089 · FA-3.3.2 · K2 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Come spieghi al business che “il sistema deve essere affidabile” non è un criterio testabile? | How do you explain to the business that “the system must be reliable” is not a testable criterion? |
| A | Proponendo di eliminare il requisito | By proposing to drop the requirement |
| B | Lasciando la valutazione al giudizio del tester | By leaving the judgement to the tester |
| C | Rinviando il tema a dopo il rilascio | By postponing the topic until after the release |
| D ✔ | Proponendo un criterio misurabile, per esempio un numero massimo di errori ammessi su un certo numero di operazioni | By proposing a measurable criterion, for example a maximum number of errors allowed over a given number of operations |
| Spiegazione | Una soglia misurabile rende verificabile una caratteristica di qualità, come suggerisce il syllabus per l’affidabilità. | A measurable threshold makes a quality characteristic verifiable, as the syllabus suggests for reliability. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag090 · FA-3.3.3 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Storia: “Come cliente voglio usare un codice sconto valido per ottenere il 10% sul totale”. Con ATDD, quale esempio scrivi per primo? | Story: “As a customer I want to use a valid discount code to get 10% off the total”. With ATDD, which example do you write first? |
| A | La pagina del carrello regge 1000 utenti contemporanei | The cart page handles 1,000 concurrent users |
| B | Lo sconto si applica anche alle spese di spedizione | The discount also applies to shipping costs |
| C ✔ | Dato un carrello da 50 € e il codice valido SCONTO10, quando lo applico, allora il totale è 45 € | Given a €50 cart and the valid code SAVE10, when I apply it, then the total is €45 |
| D | Dato un codice scaduto, quando lo applico, allora compare un messaggio d’errore | Given an expired code, when I apply it, then an error message appears |
| Spiegazione | In ATDD si parte dagli esempi positivi, il percorso in cui tutto va come previsto; poi si aggiungono casi negativi e non funzionali. | In ATDD you start with the positive examples, the path where everything goes as expected; negative and non-functional cases follow. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag091 · FA-3.3.3 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Nel workshop di specifica emerge l’esempio “il codice sconto vale anche sui prodotti già scontati”, che la storia non prevede. Come procedi? | In the specification workshop the example “the discount code also works on products already on sale” comes up, but the story does not cover it. How do you proceed? |
| A | Lasci decidere lo sviluppatore | Let the developer decide |
| B ✔ | Chiarisci con il business e aggiorni la storia prima di farne un test | Clarify with the business and update the story before turning it into a test |
| C | Lo aggiungi come test senza modificare la storia | Add it as a test without changing the story |
| D | Lo scarti senza discuterne | Discard it without discussion |
| Spiegazione | Gli esempi non devono descrivere aspetti assenti dalla storia: la lacuna si risolve nella storia, con il business. | Examples must not describe aspects missing from the story: the gap is resolved in the story, with the business. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag092 · FA-3.3.3 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Due esempi ATDD verificano entrambi lo sconto del 10% con codice valido, su carrelli da 50 € e da 60 €, senza altre differenze. Che cosa fare? | Two ATDD examples both check the 10% discount with a valid code, on €50 and €60 carts, with no other difference. What should be done? |
| A ✔ | Sostituirne uno con un caso diverso, per esempio un codice scaduto, perché due esempi non devono descrivere la stessa caratteristica | Replace one of them with a different case, for example an expired code, because two examples must not describe the same characteristic |
| B | Tenerli: più esempi uguali aumentano la copertura | Keep both: more identical examples increase coverage |
| C | Trasformarli in unit test | Turn them into unit tests |
| D | Eliminarli entrambi | Delete both |
| Spiegazione | Secondo il syllabus nessuna coppia di esempi deve descrivere la stessa caratteristica: meglio usare l’esempio per un caso non coperto. | According to the syllabus no two examples should describe the same characteristic: better to use the example for a case not yet covered. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag093 · FA-3.3.4 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Storia: “Un cliente può ordinare da 1 a 10 biglietti per evento”. Con la BVA a due valori, quali quantità scegli? | Story: “A customer can order from 1 to 10 tickets per event”. With 2-value BVA, which quantities do you choose? |
| A | 1, 5 e 10 | 1, 5 and 10 |
| B | 0 e 10 | 0 and 10 |
| C | 2 e 9 | 2 and 9 |
| D ✔ | 0, 1, 10 e 11 | 0, 1, 10 and 11 |
| Spiegazione | Per ogni confine servono il valore limite e il vicino nella partizione adiacente: 0/1 e 10/11. | For each boundary you need the boundary value and its neighbour in the adjacent partition: 0/1 and 10/11. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag094 · FA-3.3.4 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Storia: “La spedizione è gratuita per ordini da 50 € in su e per i clienti Premium a qualsiasi importo”. Con una tabella decisionale completa, quante regole ci sono e quale caso paga la spedizione? | Story: “Shipping is free for orders of €50 or more and for Premium customers at any amount”. With a full decision table, how many rules are there and which case pays for shipping? |
| A | 4 regole; pagano i clienti Premium sotto 50 € | 4 rules; Premium customers under €50 pay |
| B | 3 regole; pagano gli ordini da 50 € in su | 3 rules; orders of €50 or more pay |
| C ✔ | 4 regole; paga solo il cliente non Premium con ordine sotto 50 € | 4 rules; only a non-Premium customer with an order under €50 pays |
| D | 2 regole; paga ogni ordine sotto 50 € | 2 rules; every order under €50 pays |
| Spiegazione | Due condizioni booleane danno 4 combinazioni; solo “non Premium e sotto 50 €” non soddisfa nessuna delle due. | Two Boolean conditions give 4 combinations; only “not Premium and under €50” meets neither. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag095 · FA-3.3.4 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Storia: “La ricerca risponde entro 2 secondi con fino a 200 utenti contemporanei”. Quali test ricavi applicando la BVA al carico? | Story: “Search responds within 2 seconds with up to 200 concurrent users”. Which tests do you derive by applying BVA to the load? |
| A | Verificare solo che la ricerca restituisca risultati | Only check that search returns results |
| B ✔ | Misurare i tempi con 200 e con 201 utenti contemporanei | Measure response times with 200 and with 201 concurrent users |
| C | Misurare solo con 1 utente | Measure with 1 user only |
| D | Misurare con 100 utenti, a metà dell’intervallo | Measure with 100 users, the middle of the range |
| Spiegazione | Le tecniche black-box valgono anche per i requisiti non funzionali: 200 è il limite, 201 il primo valore oltre. | Black-box techniques also apply to non-functional testing: 200 is the boundary, 201 the first value beyond it. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag096 · FA-3.3.5 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Una charter dice: “Attore: cliente registrato. Scopo: verificare la modifica degli indirizzi. Setup: account con due indirizzi. Attività: creare, leggere, modificare, cancellare indirizzi”. Quale elemento manca per capire se il comportamento osservato è corretto? | A test charter says: “Actor: registered customer. Purpose: check editing of addresses. Setup: account with two addresses. Activities: create, read, update, delete addresses”. Which element is missing to decide whether the observed behaviour is correct? |
| A ✔ | Le note per l’oracolo | The oracle notes |
| B | Il nome dello sviluppatore | The developer’s name |
| C | Il budget del progetto | The project budget |
| D | La data di rilascio | The release date |
| Spiegazione | Le oracle notes indicano come valutare i risultati, per esempio con quale riferimento confrontarli. | Oracle notes say how to evaluate the results, for example which reference to compare them with: they act as the test oracle of the session. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag097 · FA-3.3.5 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | In una sessione esplorativa sull’app di prenotazione applichi l’euristica “interruzioni”. Quale test la segue? | In an exploratory testing session on the booking app you apply the “interruptions” heuristic. Which test follows it? |
| A | Provare la prenotazione con 0 e con 1 posto | Trying a booking with 0 and with 1 seat |
| B | Creare, leggere, modificare e cancellare una prenotazione | Creating, reading, updating and deleting a booking |
| C | Cambiare la lingua del dispositivo | Changing the device language |
| D ✔ | Chiudere l’app durante il pagamento e riaprirla per controllare lo stato della prenotazione | Closing the app during payment and reopening it to check the status of the booking |
| Spiegazione | Disconnessioni, spegnimenti o riavvii a metà operazione sono l’euristica delle interruzioni. | Log-offs, shutdowns or restarts in the middle of an operation are the interruptions heuristic. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag098 · FA-3.3.5 · K3 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Una funzione appena consegnata non è ancora conosciuta da nessuno nel team. Quale sessione esplorativa conviene pianificare per prima? | A newly delivered function is not yet known to anyone in the team. Which exploratory testing session should be planned first? |
| A | Una sessione di regressione automatica | An automated regression testing session |
| B | Nessuna: prima servono script dettagliati | None: detailed scripts are needed first |
| C ✔ | Una sessione di survey, per capire come funziona | A survey session, to learn how it works |
| D | Una sessione di deep coverage sui casi limite | A deep coverage session on corner cases |
| Spiegazione | Nella gestione per sessioni si parte dalla survey per conoscere la funzione, poi analisi e deep coverage. | In session-based test management you start with a survey to learn the function, then analysis and deep coverage. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag099 · FA-3.4.1 · K1 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Quale strumento adottano spesso i team Agile al posto di strumenti separati per test, requisiti e difetti? | Which tool do Agile teams often adopt instead of separate tools for tests, requirements and defects? |
| A | Un antivirus | An antivirus |
| B ✔ | Un tool di application lifecycle management o di gestione dei task, con task board, burndown e user story | An application lifecycle management or task management tool, with task board, burndown and user stories |
| C | Un foglio di calcolo per le ferie | A spreadsheet for holidays |
| D | Un compilatore | A compiler |
| Spiegazione | Il syllabus cita strumenti “tutto in uno” con le funzioni tipiche dello sviluppo Agile. | The syllabus mentions all-inclusive tools with the features typical of Agile development. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ag100 · FA-3.4.1 · K1 · Agile · Methods, risks and tools

| | Italiano | English |
|---|---|---|
| Domanda | Perché gli strumenti di configuration management sono importanti per i tester Agile? | Why are configuration management tools important for Agile testers? |
| A ✔ | Per conservare e gestire i numerosi test automatici a tutti i livelli e i loro artefatti | To store and manage the many automated tests at all levels and their artefacts |
| B | Per stimare le storie nel planning poker | To estimate stories in planning poker |
| C | Per sostituire la task board | To replace the task board |
| D | Per scrivere i criteri di accettazione | To write the acceptance criteria |
| Spiegazione | Il grande numero di test automatici rende essenziale versionarli e gestirli insieme alle build. | The large number of automated tests makes it essential to version and manage them together with the builds. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita001 · ITA-STQB v5 · Q1 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale descrizione identifica un’ispezione? | Which description identifies an inspection? |
| A ✔ | Una review formale con processo definito per trovare difetti | A formal review with a defined process to find defects |
| B | Una review necessariamente svolta da un auditor esterno | A review that must be carried out by an external auditor |
| C | Una lettura informale senza processo definito | An informal read-through with no defined process |
| D | Un altro nome del test di accettazione | Another name for acceptance testing |
| Spiegazione | Formalità, ruoli e processo distinguono l’ispezione; lo scopo è rilevare anomalie nei prodotti di lavoro. | Formality, roles and process set the inspection apart; its purpose is to detect anomalies in work products. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita002 · ITA-STQB v5 · Q2 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale rischio riguarda soprattutto il progetto, anziché la qualità del prodotto? | Which risk concerns mainly the project rather than the quality of the product? |
| A | Un calcolo produce importi sbagliati | A calculation produces wrong amounts |
| B | Il prodotto risponde troppo lentamente | The product responds too slowly |
| C | Un guasto del dispositivo danneggia una persona | A device failure injures a person |
| D ✔ | Non riuscire a concordare i requisiti in tempo | Failing to agree the requirements in time |
| Spiegazione | Il problema minaccia organizzazione, tempi e capacità di realizzare il lavoro. Può anche avere conseguenze sulla qualità, ma la causa descritta è di progetto. | The problem threatens organisation, schedule and the ability to do the work. It may also affect quality, but the cause described is a project risk. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita003 · ITA-STQB v5 · Q3 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale tecnica usa le istruzioni eseguite per misurare la copertura? | Which technique uses the executed statements to measure coverage? |
| A | Testing di accettazione come livello | Acceptance testing as a test level |
| B | Testing di integrazione come livello | Integration testing as a test level |
| C ✔ | Testing delle istruzioni, una tecnica white-box | Statement testing, a white-box technique |
| D | Testing esplorativo come unica definizione | Exploratory testing as the only definition |
| Spiegazione | La misura confronta istruzioni eseguite e istruzioni eseguibili. È copertura strutturale, non una prova generale di efficacia o assenza di difetti. | The measure compares executed statements with executable statements. It is structural coverage, not general proof of effectiveness or of the absence of defects. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita004 · ITA-STQB v5 · Q4 · K3 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Un programma sceglie il ramo maschile o femminile. In ciascuno assegna una taglia diversa per 3 < età < 5 oppure 5 ≤ età < 7. Le quattro assegnazioni sono mutuamente esclusive. Quanti test servono almeno per eseguirle tutte? | A program chooses the male or female branch. In each, it assigns a different size for 3 < age < 5 or 5 ≤ age < 7. The four assignments are mutually exclusive. What is the minimum number of tests needed to execute them all? |
| A | 8 | 8 |
| B ✔ | 4 | 4 |
| C | 2 | 2 |
| D | 6 | 6 |
| Spiegazione | Ogni esecuzione raggiunge al massimo una delle quattro assegnazioni: servono almeno quattro test. Le combinazioni maschile/4, maschile/5, femminile/4 e femminile/5 le raggiungono tutte, quindi quattro sono anche sufficienti. | Each run reaches at most one of the four assignments, so at least four tests are needed. The combinations male/4, male/5, female/4 and female/5 reach them all, so four are also enough. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita005 · ITA-STQB v5 · Q5 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | In un progetto con ruoli distinti, quale attività è prevalentemente tecnico-operativa per il tester? | In a project with distinct roles, which activity is mainly technical and operational for the tester? |
| A ✔ | Preparare l’ambiente ed elaborare i test | Preparing the environment and developing the tests |
| B | Approvare da solo il budget del progetto | Approving the project budget alone |
| C | Assumere automaticamente tutta la responsabilità della strategia | Automatically taking full responsibility for the strategy |
| D | Decidere le priorità di business senza stakeholder | Deciding business priorities without stakeholders |
| Spiegazione | Preparazione e attività tecniche appartengono al lavoro di testing. La distribuzione concreta dei ruoli dipende dal contesto: il modello a V non impone da solo tutti i confini organizzativi. | Preparation and technical activities belong to the testing work. The actual distribution of roles depends on context: the V-model alone does not set every organisational boundary. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita006 · ITA-STQB v5 · Q6 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | A cosa serve un test harness? | What is a test harness for? |
| A | Essere soltanto la descrizione testuale di un caso | Being only the written description of a test case |
| B | Essere un capitolo del report finale | Being a chapter of the final report |
| C | Essere soltanto il file dei dati di input | Being only the input data file |
| D ✔ | Fornire supporti per eseguire test, come driver e stub | Providing support for running tests, such as drivers and stubs |
| Spiegazione | Il driver richiama il componente; lo stub sostituisce una dipendenza chiamata. Questi supporti consentono di eseguire e osservare test anche in isolamento. | The driver calls the component; the stub replaces a called dependency. These aids allow tests to be run and observed even in isolation. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita007 · ITA-STQB v5 · Q7 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Un salvataggio supera il limite richiesto di un secondo. Un controllo inutile nel ciclo ne è la causa. Che cosa è il ritardo osservato? | A save operation exceeds the required one-second limit. The cause is an unnecessary check in the loop. What is the observed delay? |
| A | L’errore umano che ha introdotto il controllo | The human error that introduced the check |
| B | Una prova che i requisiti non contano | Proof that the requirements do not matter |
| C ✔ | Un malfunzionamento (failure) | A failure |
| D | Il difetto nel codice stesso | The defect in the code itself |
| Spiegazione | Il comportamento osservato diverge da quello richiesto: è il malfunzionamento. Il controllo inutile è il difetto che lo causa; una decisione umana può averlo introdotto. | The observed behaviour differs from what is required: that is the failure. The unnecessary check is the defect that causes it; a human decision may have introduced it. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita008 · ITA-STQB v5 · Q8 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale associazione descrive uno strumento di monitoraggio del sistema, non di gestione dei test? | Which association describes a system monitoring tool rather than a test management tool? |
| A | Collegare requisiti, casi e difetti | Linking requirements, test cases and defects |
| B ✔ | Raccogliere consumo di memoria e comportamento durante l’esecuzione | Collecting memory usage and behaviour during execution |
| C | Organizzare casi e campagne di test | Organising test cases and test campaigns |
| D | Tracciare stato di esecuzione e risultati delle campagne | Tracking execution status and results of the campaigns |
| Spiegazione | Le misure del sistema sono monitoraggio tecnico. Un prodotto integrato può offrire più funzioni, ma lo scopo della funzione resta distinto. | Measuring the system is technical monitoring. An integrated product may offer several functions, but the purpose of each function stays distinct. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita009 · ITA-STQB v5 · Q9 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale attività NON è tipicamente un risultato specifico del completamento dei test? | Which activity is NOT typically a specific outcome of test completion? |
| A ✔ | Scrivere da zero tutta la documentazione del sistema | Writing all the system documentation from scratch |
| B | Archiviare il testware utile | Archiving useful testware |
| C | Condividere le lezioni apprese | Sharing lessons learned |
| D | Consegnare gli asset di test a chi li manterrà | Handing test assets over to whoever will maintain them |
| Spiegazione | Documentare l’intero sistema è un’attività più ampia del progetto. Il completamento del testing conserva evidenze, risorse riutilizzabili e apprendimento. | Documenting the whole system is a broader project activity. Test completion preserves evidence, reusable resources and learning. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita010 · ITA-STQB v5 · Q10 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Aggiungere log temporali rende più lento il programma misurato. Quale fenomeno si osserva? | Adding timing logs makes the measured program slower. Which phenomenon is this? |
| A | Prova che il programma originale è più difettoso | Proof that the original program is more defective |
| B | Perdita di efficacia dei test ripetuti | Tests losing effectiveness when repeated |
| C | Copertura completa delle istruzioni | Full statement coverage |
| D ✔ | Effetto sonda | The probe effect |
| Spiegazione | La misurazione perturba il fenomeno misurato: i log consumano tempo e risorse. Considerare overhead, buffering e condizioni di misura prima di attribuire tutto il ritardo al prodotto. | Measuring disturbs what is measured: the logs consume time and resources. Consider overhead, buffering and measurement conditions before blaming the product for all of the delay. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita011 · ITA-STQB v5 · Q11 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale descrizione rappresenta il ciclo TDD? | Which description represents the TDD cycle? |
| A | Definire TDD come qualsiasi automazione fatta da tester | Define TDD as any test automation done by testers |
| B | Attendere l’accettazione finale prima di ogni modifica | Wait for final acceptance before any change |
| C ✔ | Scrivere un test che fallisce, implementare il necessario e rifattorizzare con test verdi | Write a failing test, implement what is needed and refactor with the tests green |
| D | Scrivere test solo dopo tutto il codice | Write tests only after all the code |
| Spiegazione | Il test precede e guida piccoli incrementi del codice. Verificare il fallimento atteso evita un test apparentemente verde che non controlla il comportamento desiderato. | The test comes first and drives small increments of code. Checking the expected failure avoids a test that is green but does not check the desired behaviour. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita012 · ITA-STQB v5 · Q12 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | È corretto saltare sempre il testing statico perché si faranno test dinamici? | Is it right to always skip static testing because dynamic testing will be done? |
| A | Sì: un requisito non eseguibile non può contenere difetti | Yes: a requirement that cannot be executed cannot contain defects |
| B ✔ | No: lo statico può trovare presto difetti senza esecuzione | No: static testing can find defects early, without execution |
| C | Sì: il dinamico rende ridondante ogni review | Yes: dynamic testing makes every review redundant |
| D | No: lo statico è obbligatoriamente successivo al dinamico | No: static testing must always come after dynamic testing |
| Spiegazione | Ambiguità, contraddizioni e problemi nel codice possono emergere prima dell’esecuzione, riducendo rilavorazione. Statico e dinamico si completano. | Ambiguities, contradictions and problems in the code can surface before execution, reducing rework. Static testing and dynamic testing complement each other. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita013 · ITA-STQB v5 · Q13 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale insieme offre evidenze quantitative utili in un report di avanzamento del testing? | Which set provides useful quantitative evidence in a test progress report? |
| A ✔ | Difetti aperti/chiusi, effort effettivo, test eseguiti/falliti/bloccati | Defects open/closed, actual effort, tests run/failed/blocked |
| B | Soltanto il piano iniziale | Only the initial plan |
| C | Soltanto un elenco di nomi dei tester | Only a list of the testers’ names |
| D | Soltanto il numero di righe del report | Only the number of lines in the report |
| Spiegazione | Le tre misure descrivono stato del prodotto, consumo di risorse e progresso dei test. Vanno interpretate rispetto a piano, rischio e destinatari, senza ridurre la qualità al conteggio. | The three measures describe the state of the product, the resources used and test progress. They must be read against plan, risk and audience, without reducing quality to a count. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita014 · ITA-STQB v5 · Q14 · K3 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | L’80% degli esiti delle decisioni è stato esercitato. Ciò dimostra automaticamente almeno l’80% delle istruzioni eseguite? | 80% of decision outcomes have been exercised. Does this automatically prove that at least 80% of statements were executed? |
| A | Sì: le percentuali sono sempre uguali | Yes: the percentages are always equal |
| B | Sì: il 50% delle decisioni implica sempre il 100% delle istruzioni | Yes: 50% decision coverage always implies 100% statement coverage |
| C | No: invece l’80% delle istruzioni implica sempre l’80% delle decisioni | No: but 80% statement coverage always implies 80% decision coverage |
| D ✔ | No: gli esiti possono contenere quantità molto diverse di istruzioni | No: outcomes can contain very different numbers of statements |
| Spiegazione | Un esito non attraversato può contenere molte istruzioni. Per esempio, con cinque if indipendenti si possono coprire otto dei dieci esiti evitando due corpi molto lunghi: la percentuale di istruzioni resta bassa. Misurare il criterio richiesto. | An outcome not taken may contain many statements. For example, with five independent if statements you can cover eight of the ten outcomes while avoiding two very long bodies: statement coverage stays low. Measure the criterion that is required. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita015 · ITA-STQB v5 · Q15 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | A quali livelli si possono svolgere test di regressione? | At which levels can regression testing be performed? |
| A | Soltanto al sistema completo | Only on the complete system |
| B | Mai all’accettazione | Never at acceptance level |
| C ✔ | A tutti i livelli pertinenti alla modifica | At every level relevant to the change |
| D | Soltanto ai componenti | Only at component level |
| Spiegazione | Una modifica può danneggiare componenti, interfacce, sistema o comportamenti di accettazione. L’analisi d’impatto decide quali controlli ripetere. | A change can damage components, interfaces, the system or accepted behaviour. Impact analysis decides which checks to repeat. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita016 · ITA-STQB v5 · Q16 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale attività rappresenta il controllo del testing? | Which activity represents test control? |
| A | Archiviare un grafico senza decisioni | Archiving a chart without any decision |
| B ✔ | Ripianificare i test in risposta a un ritardo rilevato | Replanning the tests in response to a detected delay |
| C | Misurare il numero di casi eseguiti senza intervenire | Measuring the number of test cases run without taking action |
| D | Raccogliere tempi senza confrontarli o agire | Collecting timings without comparing them or acting |
| Spiegazione | Il monitoraggio produce informazioni; il controllo usa quelle informazioni per azioni correttive verso gli obiettivi. Non significa abbassare automaticamente i criteri per ottenere un verde. | Test monitoring produces information; test control uses that information for corrective actions towards the objectives. It does not mean automatically lowering the criteria to get a green result. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita017 · ITA-STQB v5 · Q17 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale descrizione è coerente con un caso d’uso? | Which description fits a use case? |
| A ✔ | Interazione verso un obiettivo, con precondizioni, risultati e possibili alternative | An interaction towards a goal, with preconditions, results and possible alternatives |
| B | Una semplice estensione delle partizioni numeriche | A simple extension of numeric partitions |
| C | Solo un elenco di istruzioni interne | Only a list of internal statements |
| D | Un unico scenario che esclude sempre errori e alternative | A single scenario that always excludes errors and alternatives |
| Spiegazione | Il caso d’uso descrive interazioni e risultati dal punto di vista degli attori. Flusso principale e varianti aiutano a ricavare scenari; questo è materiale integrativo, non una tecnica centrale della lista CTFL 4.0.1. | A use case describes interactions and results from the actors’ point of view. The main flow and its variants help derive scenarios; this is supplementary material, not a core technique of the CTFL 4.0.1 list. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita018 · ITA-STQB v5 · Q18 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale criterio è più oggettivo e verificabile per una decisione di completamento? | Which criterion is the most objective and verifiable for a completion decision? |
| A | Il tester si sente genericamente tranquillo | The tester feels generally confident |
| B | Il codice sembra elegante | The code looks elegant |
| C | Il report è abbastanza lungo | The report is long enough |
| D ✔ | Nessun difetto critico aperto e copertura concordata raggiunta | No open critical defects and the agreed coverage reached |
| Spiegazione | Soglie e misure concordate rendono la decisione valutabile. Anche tempo e budget possono essere vincoli, ma uscire per esaurimento risorse richiede accettare consapevolmente il rischio residuo. | Agreed thresholds and measures make the decision assessable. Time and budget can also be constraints, but stopping because resources ran out means consciously accepting the residual risk. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita019 · ITA-STQB v5 · Q19 · K3 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Programma Y: se D > E, esegui F_D; poi esegui sempre F_E e F_F. Qual è il minimo per coprire tutte e tre le chiamate? | Program Y: if D > E, call F_D; then always call F_E and F_F. What is the minimum to cover all three calls? |
| A | Due test sono sempre necessari anche per le sole istruzioni | Two tests are always needed, even for statements alone |
| B | Nessun insieme finito può riuscirci | No finite set can achieve it |
| C ✔ | Un test con D > E: ciascuna chiamata viene eseguita una volta | One test with D > E: each call is executed once |
| D | Un test con D ≤ E | One test with D ≤ E |
| Spiegazione | Con condizione vera si raggiungono F_D, F_E e F_F in una sola esecuzione. Per esercitare entrambi gli esiti della decisione serve anche una condizione falsa: F_E e F_F verranno allora eseguite due volte complessivamente. | With the condition true, F_D, F_E and F_F are reached in a single run. Exercising both outcomes of the decision also needs a false condition: F_E and F_F will then run twice in total. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita020 · ITA-STQB v5 · Q20 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale valutazione è utile prima di adottare uno strumento? | Which assessment is useful before adopting a tool? |
| A | Solo la promessa di eliminare ogni attività manuale | Only the promise of eliminating every manual activity |
| B ✔ | Bisogni e maturità, fornitore, costi/benefici e formazione | Needs and maturity, vendor, costs and benefits, and training |
| C | Solo il numero di aziende che lo usano | Only the number of companies using it |
| D | Solo il colore dell’interfaccia | Only the colour of the interface |
| Spiegazione | La scelta deve funzionare nel contesto reale: integrazione, competenze e costo totale possono rendere inadatto uno strumento tecnicamente valido. | The choice must work in the real context: integration, skills and total cost can make a technically sound tool unsuitable. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita021 · ITA-STQB v5 · Q21 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale descrizione richiede più precisazioni per essere utile in un defect report? | Which description needs the most clarification to be useful in a defect report? |
| A ✔ | L’interfaccia è confusa e non mi piace | The interface is confusing and I don’t like it |
| B | Il salvataggio restituisce 500 con i passi e dati allegati | Saving returns a 500 error, with steps and data attached |
| C | Il totale atteso è 10, quello osservato è 12, nella versione indicata | The expected total is 10, the observed total is 12, in the stated version |
| D | La lista impiega 13 secondi rispetto ai 10 richiesti, con condizioni documentate | The list takes 13 seconds instead of the required 10, under documented conditions |
| Spiegazione | Una valutazione di usabilità può segnalare un problema reale, ma servono compito, utenti o criteri, passi ed evidenze osservabili. Evitare di liquidare l’usabilità come mera opinione. | A usability judgement can point to a real problem, but it needs a task, users or criteria, steps and observable evidence. Avoid dismissing usability as mere opinion. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita022 · ITA-STQB v5 · Q22 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale elenco contiene soltanto rischi di prodotto? | Which list contains only product risks? |
| A | Ambiente consegnato tardi e budget insufficiente | Environment delivered late and insufficient budget |
| B | Contratto del fornitore in ritardo e team incompleto | Supplier contract late and incomplete team |
| C | Tester indisponibili e licenze non acquistate | Testers unavailable and licences not purchased |
| D ✔ | Funzionalità mancante, prestazioni scarse, conversione dati errata | Missing functionality, poor performance, incorrect data conversion |
| Spiegazione | Sono problemi del comportamento o delle proprietà del prodotto che possono danneggiare utenti e business. | These are problems in the behaviour or properties of the product that can harm users and the business. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita023 · ITA-STQB v5 · Q23 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Qual è lo scopo principale di un proof of concept per uno strumento di test? | What is the main purpose of a proof of concept for a test tool? |
| A | Dimostrare che il prodotto finale sarà senza difetti | Proving that the final product will be defect-free |
| B | Eliminare ogni successiva prova pilota | Eliminating any later pilot project |
| C ✔ | Verificare fattibilità e adeguatezza rispetto a bisogni concreti | Checking feasibility and fit against concrete needs |
| D | Giustificare comunque una decisione già presa | Justifying a decision already taken anyway |
| Spiegazione | Una prova circoscritta verifica ipotesi tecniche con casi rappresentativi. Può ridurre incertezza, non dimostrare tutti i benefici organizzativi di un’adozione su larga scala. | A limited trial checks technical assumptions with representative cases. It can reduce uncertainty, but it cannot prove all the organisational benefits of large-scale adoption. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita024 · ITA-STQB v5 · Q24 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale sequenza logica descrive lo sviluppo dei test? | Which logical sequence describes test development? |
| A | Risultati → procedure → condizioni, sempre | Results → procedures → conditions, always |
| B ✔ | Condizioni di test → casi di test → procedure di esecuzione | Test conditions → test cases → test procedures |
| C | Procedure → condizioni → casi | Procedures → conditions → test cases |
| D | Casi → procedure → bisogno da verificare | Test cases → procedures → the need to verify |
| Spiegazione | Le condizioni identificano cosa verificare; i casi precisano input e risultati; le procedure organizzano l’esecuzione. In pratica sono possibili iterazioni, non un divieto di tornare alle decisioni precedenti. | Test conditions identify what to verify; test cases specify inputs and results; procedures organise execution. In practice iteration is possible; going back to earlier decisions is not forbidden. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita025 · ITA-STQB v5 · Q25 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Dopo la correzione di un difetto, quali domande guidano conferma e regressione? | After a defect is fixed, which questions guide confirmation testing and regression testing? |
| A ✔ | La correzione risolve il problema? Ha danneggiato altre parti? | Does the fix solve the problem? Has it damaged other parts? |
| B | Entrambe chiedono solo se il difetto iniziale è risolto | Both ask only whether the original defect is fixed |
| C | La conferma cerca solo effetti collaterali | Confirmation testing looks only for side effects |
| D | La regressione sostituisce sempre la conferma | Regression testing always replaces confirmation testing |
| Spiegazione | La conferma verifica il difetto corretto; la regressione cerca conseguenze indesiderate della modifica, anche in componenti collegati. Sono complementari. | Confirmation testing checks the fixed defect; regression testing looks for unintended consequences of the change, including in related components. They are complementary. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita026 · ITA-STQB v5 · Q26 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | È stato installato un tool di configurazione. Quale controllo serve prima di dichiarare il testware sotto controllo di versione? | A configuration management tool has been installed. What must be checked before declaring the testware under version control? |
| A | Considerare l’installazione come prova sufficiente | Treat the installation as sufficient proof |
| B | Escludere dati e script dalla configurazione | Exclude data and scripts from configuration management |
| C | Imporre senza valutazione un tool diverso da quello dello sviluppo | Impose a tool different from development’s without assessment |
| D ✔ | Verificare che asset e versioni siano effettivamente identificati e gestiti | That assets and versions are actually identified and managed |
| Spiegazione | Possedere un tool non significa averne applicato il processo. Baseline, identificazione e gestione delle modifiche rendono riproducibile il test e possono sostenere criteri di ingresso. | Owning a tool does not mean its process has been applied. Baselines, identification and change management make testing reproducible and can support entry criteria. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita027 · ITA-STQB v5 · Q27 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Un report specifica esattamente il file dati usato e la sua versione. A cosa serve? | A report states exactly which data file was used and its version. What is this for? |
| A | Sostituire risultato atteso e osservato | Replacing the expected and observed results |
| B | Misurare da solo l’avanzamento del progetto | Measuring project progress on its own |
| C ✔ | Aiutare a riprodurre e isolare il problema | Helping reproduce and isolate the problem |
| D | Dimostrare automaticamente la causa del difetto | Automatically proving the cause of the defect |
| Spiegazione | Gli stessi dati riducono le differenze tra ambienti e tentativi. Conservare una versione identificabile evita che un file condiviso modificato renda la riproduzione impossibile. | The same data reduces differences between environments and attempts. Keeping an identifiable version prevents a modified shared file from making reproduction impossible. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita028 · ITA-STQB v5 · Q28 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale beneficio offrono le tecniche basate sull’esperienza? | Which benefit do experience-based techniques offer? |
| A | Garantire sempre più difetti di ogni altra tecnica | Always finding more defects than any other technique |
| B ✔ | Suggerire scenari difficili da ricavare con altre tecniche | Suggesting scenarios that are hard to derive with other techniques |
| C | Funzionare solo se si conosce tutto il codice | Working only if you know all the code |
| D | Rendere sempre inutili le specifiche | Always making specifications unnecessary |
| Spiegazione | Conoscenza di dominio, guasti passati e comportamento degli utenti orientano casi speciali. Sono complementari alle tecniche sistematiche, non una garanzia universale di superiorità. | Domain knowledge, past failures and user behaviour point to special cases. They complement systematic techniques; they are not universally superior. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita029 · ITA-STQB v5 · Q29 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Il lavoro previsto richiede circa 20 giornate ma il budget ne consente 12. Quale comportamento è corretto? | The planned work needs about 20 days, but the budget allows 12. Which behaviour is correct? |
| A ✔ | Rendere visibile il divario e negoziare ambito, risorse o rischio | Make the gap visible and negotiate scope, resources or risk |
| B | Dichiarare che la stima è 12 solo perché quello è il budget | Declare the estimate to be 12 just because that is the budget |
| C | Mantenere tutto l’ambito senza comunicare l’incertezza | Keep the full scope without communicating the uncertainty |
| D | Trattare la stima come una certezza senza assunzioni | Treat the estimate as a certainty with no assumptions |
| Spiegazione | Il budget è un vincolo; la stima descrive l’effort atteso sotto determinate ipotesi. Cambiare ambito può cambiare la stima, ma non basta cambiare il numero per eliminare il lavoro. | The budget is a constraint; the estimate describes the expected effort under certain assumptions. Changing the scope can change the estimate, but changing the number does not remove the work. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita030 · ITA-STQB v5 · Q30 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale affermazione sulla gestione delle anomalie è corretta? | Which statement about anomaly management is correct? |
| A | Ogni problema grave deve avere sempre la massima priorità | Every serious problem must always get the highest priority |
| B | Solo i tester possono segnalare anomalie | Only testers can report anomalies |
| C | Si registra una segnalazione solo dopo aver corretto la causa | A report is logged only after the cause has been fixed |
| D ✔ | Si possono registrare anomalie prima di confermare che siano difetti; severità e priorità sono distinte | Anomalies can be logged before they are confirmed as defects; severity and priority are distinct |
| Spiegazione | La severità descrive impatto, la priorità l’urgenza di intervento. Un problema grave in una funzionalità non rilasciata può avere urgenza diversa da un problema meno grave che blocca un evento imminente. | Severity describes impact, priority the urgency of action. A serious problem in an unreleased feature may be less urgent than a less serious problem that blocks an imminent event. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita031 · ITA-STQB v5 · Q31 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale attività appartiene soprattutto all’analisi, anziché all’esecuzione? | Which activity belongs mainly to test analysis rather than test execution? |
| A | Confrontare atteso e osservato | Comparing expected and observed results |
| B | Eseguire una procedura sulla build | Running a procedure on the build |
| C ✔ | Individuare e prioritizzare le condizioni da testare | Identifying and prioritising the test conditions |
| D | Registrare i risultati effettivi | Recording the actual results |
| Spiegazione | L’analisi stabilisce cosa verificare e quanto conta. Implementazione prepara testware e dati; esecuzione usa tali asset e produce risultati. Le attività possono ripetersi e sovrapporsi. | Test analysis establishes what to verify and how much it matters, which sets its priority. Implementation prepares testware and data; test execution uses those assets and produces results. The activities can repeat and overlap. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita032 · ITA-STQB v5 · Q32 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Come contribuisce il testing alla qualità? | How does testing contribute to quality? |
| A | Provando l’assenza di ogni difetto residuo | By proving the absence of any remaining defect |
| B ✔ | Fornendo evidenze per valutare il prodotto e decidere miglioramenti | By providing evidence to evaluate the product and decide on improvements |
| C | Eliminando sempre tutti i rischi | By always eliminating every risk |
| D | Correggendo automaticamente ogni difetto trovato | By automatically fixing every defect found |
| Spiegazione | Scoprire problemi e valutare caratteristiche informa decisioni e correzioni. Il testing può anche prevenire difetti attraverso feedback precoce, ma non garantisce perfezione. | Finding problems and evaluating characteristics informs decisions and fixes. Testing can also prevent defects through early feedback, but it does not guarantee perfection. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita033 · ITA-STQB v5 · Q33 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Si ricavano test da una lista di errori frequenti in progetti precedenti. Qual è la base prevalente? | Tests are derived from a list of common errors in previous projects. What is the prevailing basis? |
| A ✔ | Esperienza, ad esempio error guessing | Experience, for example error guessing |
| B | Specifiche, solo perché i test usano l’interfaccia esterna | Specifications, only because the tests use the external interface |
| C | Struttura, anche senza informazioni sul codice | Structure, even without information about the code |
| D | Nessuna tecnica: la storia dei difetti è sempre inutile | No technique: the defect history is always useless |
| Spiegazione | La classificazione dipende da come si ricavano i casi. Una lista di guasti passati usa esperienza; osservare l’esterno non trasforma automaticamente la derivazione in una tecnica basata sulle specifiche. | The classification depends on how the test cases are derived. A list of past failures uses experience; observing from outside does not automatically make it a specification-based technique. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita034 · ITA-STQB v5 · Q34 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale pratica è meno coerente con un’ispezione efficace? | Which practice is least consistent with an effective inspection? |
| A | Preparazione individuale del materiale | Individual preparation of the material |
| B | Registrazione delle anomalie | Recording the anomalies |
| C | Ruoli e processo definiti | Defined roles and process |
| D ✔ | Riunioni senza obiettivo o limite concordato | Meetings with no agreed goal or time limit |
| Spiegazione | Una sessione senza confini favorisce dispersione e stanchezza. Ambito, preparazione e gestione del tempo sostengono una review rigorosa e risultati verificabili. | A session without boundaries invites drifting and fatigue. Scope, preparation and time management support a rigorous review and verifiable results. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita035 · ITA-STQB v5 · Q35 · K3 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Il numero intero di visitatori ammesso è da 2 a 20 inclusi. Quali partizioni numeriche rispettano la regola? | The integer number of visitors allowed is from 2 to 20 inclusive. Which numeric partitions follow the rule? |
| A | Minore di 2; da 2 a 19; da 20 in su | Less than 2; from 2 to 19; from 20 upwards |
| B | Minore di 3; da 3 a 19; da 20 in su | Less than 3; from 3 to 19; from 20 upwards |
| C ✔ | Minore di 2; da 2 a 20; maggiore di 20 | Less than 2; from 2 to 20; greater than 20 |
| D | Solo negativi; da 2 a 20; maggiore di 20 | Negatives only; from 2 to 20; greater than 20 |
| Spiegazione | I tre gruppi separano il dominio numerico in non valido basso, valido e non valido alto. Sono disgiunti e coprono tutti gli interi; testo o campo vuoto richiederebbero altre condizioni se ammessi come input. | The three groups divide the numeric domain into invalid low, valid and invalid high. They are disjoint and cover all integers; text or an empty field would need other conditions if accepted as input. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita036 · ITA-STQB v5 · Q36 · K3 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Per x ≤ −100; −100 < x < 100; 100 ≤ x < 1000; x ≥ 1000, quale insieme copre tutte le partizioni? | For x ≤ −100; −100 < x < 100; 100 ≤ x < 1000; x ≥ 1000, which set covers all the partitions? |
| A | −99, 99, 101, 1001 | −99, 99, 101, 1001 |
| B ✔ | −500, 0, 100, 1000 | −500, 0, 100, 1000 |
| C | −1000, −100, 100, 1000 | −1000, −100, 100, 1000 |
| D | −100, 100, 1000, 1001 | −100, 100, 1000, 1001 |
| Spiegazione | −500 appartiene alla prima, 0 alla seconda, 100 alla terza e 1000 alla quarta. Non serve scegliere sempre confini: la copertura delle partizioni richiede rappresentanti di ciascun gruppo. | −500 belongs to the first, 0 to the second, 100 to the third and 1000 to the fourth. You do not always have to choose boundaries: partition coverage needs a representative of each group. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita037 · ITA-STQB v5 · Q37 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Quale tecnica NON è classificata come basata sull’esperienza? | Which technique is NOT classified as experience-based? |
| A ✔ | Analisi dei valori limite | Boundary value analysis |
| B | Error guessing | Error guessing |
| C | Testing esplorativo | Exploratory testing |
| D | Attacco ai difetti basato su guasti tipici | Fault attacks based on typical failures |
| Spiegazione | La BVA deriva sistematicamente valori dai confini delle partizioni ordinate. Conoscere bene il dominio aiuta, ma non cambia la base della tecnica. | BVA systematically derives values from the boundaries of ordered partitions. Knowing the domain well helps, but it does not change the basis of the technique. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita038 · ITA-STQB v5 · Q38 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Dopo aver testato un sistema isolato si verificano le interfacce con un altro sistema. È sensato? | After testing an isolated system, the interfaces with another system are tested. Does this make sense? |
| A | No: qualunque integrazione deve sempre precedere qualunque test di sistema | No: any integration must always precede any system testing |
| B | No: tutti i livelli hanno esattamente gli stessi obiettivi | No: all test levels have exactly the same objectives |
| C | Sì, perché il testing di componente rende inutili gli altri livelli | Yes, because component testing makes the other levels unnecessary |
| D ✔ | Sì: l’integrazione di sistemi può richiedere verifiche successive del collegamento | Yes: system integration testing may require later checks of the connection |
| Spiegazione | Livelli diversi hanno oggetti e obiettivi diversi. Distinguere integrazione tra componenti e tra sistemi evita di imporre un unico ordine rigido a ogni contesto. | Different levels have different objects and objectives. Distinguishing component integration from system integration avoids imposing a single rigid order on every context. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita039 · ITA-STQB v5 · Q39 · K3 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Età intere da 30 a 39 inclusi appartengono alla trentina. Quale insieme rappresenta le tre partizioni sotto/dentro/sopra? | Integer ages from 30 to 39 inclusive belong to the thirties. Which set represents the three partitions below/inside/above? |
| A | 20, 35, 39 | 20, 35, 39 |
| B | 30, 39, 45 | 30, 39, 45 |
| C ✔ | 25, 30, 40 | 25, 30, 40 |
| D | 30, 35, 25 | 30, 35, 25 |
| Spiegazione | 25 è sotto, 30 è dentro e 40 è sopra. Si coprono tre partizioni con tre rappresentanti; non è ancora una copertura completa dei valori limite. | 25 is below, 30 inside and 40 above. Three representatives cover the three partitions; this is not yet full coverage for boundary value analysis. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### ita040 · ITA-STQB v5 · Q40 · K2 · ITA-STQB questionnaire · Reviewed set

| | Italiano | English |
|---|---|---|
| Domanda | Il testing basato sulla struttura è limitato al solo livello di componente? | Is structure-based testing limited to component level only? |
| A | No: significa che ogni test di sistema è automaticamente strutturale | No: it means that system testing is always structural |
| B ✔ | No: si può applicare a livelli diversi se la struttura pertinente è disponibile | No: it can be applied at different levels if the relevant structure is available |
| C | Sì: non può riguardare interfacce o flussi più ampi | Yes: it cannot cover interfaces or wider flows |
| D | Sì: deve sempre precedere la costruzione dei componenti | Yes: it must always come before the components are built |
| Spiegazione | La struttura può essere codice, architettura o altri elementi pertinenti al livello. La possibilità di applicare la tecnica non significa che sia sempre la scelta più utile o economica. | The structure can be code, architecture or other elements relevant to the level. Being able to apply the technique does not mean it is always the most useful or economical choice. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q081 · FL-1.1.1 · K1 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale è un obiettivo tipico del testing? | Which is a typical objective of testing? |
| A | Correggere i difetti trovati nel codice | Fixing the defects found in the code |
| B | Garantire che il software sia privo di difetti | Guaranteeing that the software is defect-free |
| C | Sostituire la revisione dei requisiti da parte del cliente | Replacing the customer’s review of the requirements |
| D ✔ | Verificare se i requisiti specificati sono stati soddisfatti | Verifying whether specified requirements have been fulfilled |
| Spiegazione | Verificare il soddisfacimento dei requisiti specificati è uno degli obiettivi tipici elencati dal syllabus. | Verifying that specified requirements have been fulfilled is one of the typical objectives listed in the syllabus. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q082 · FL-1.1.1 · K1 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Un ente regolatore chiede prove che l’app rispetti una norma sulla privacy. Quale obiettivo del testing risponde a questa esigenza? | A regulator asks for evidence that the app complies with a privacy law. Which test objective meets this need? |
| A | Eseguire il debugging dei moduli | Debugging the modules |
| B | Stimare il budget del progetto | Estimating the project budget |
| C ✔ | Verificare la conformità del test object a requisiti contrattuali, legali e normativi | Verifying that the test object complies with contractual, legal and regulatory requirements |
| D | Ridurre il numero di righe di codice | Reducing the number of lines of code |
| Spiegazione | La verifica di conformità a requisiti legali e normativi è un obiettivo esplicito del testing. | Verifying compliance with legal and regulatory requirements is an explicit test objective. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q083 · FL-1.2.2 · K1 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale affermazione descrive la quality assurance (QA)? | Which statement describes quality assurance (QA)? |
| A | Riguarda solo il processo di sviluppo, non quello di test | It concerns only the development process, not the test process |
| B ✔ | È un approccio preventivo, orientato al processo, di cui è responsabile chiunque lavori al progetto | It is a preventive, process-oriented approach that is the responsibility of everyone on the project |
| C | È un approccio correttivo, orientato al prodotto, svolto solo dai tester | It is a corrective, product-oriented approach carried out only by testers |
| D | È un sinonimo di testing | It is a synonym for testing |
| Spiegazione | La QA lavora su implementazione e miglioramento dei processi, partendo dall’idea che un buon processo seguito correttamente produca un buon prodotto. | QA focuses on implementing and improving processes, on the basis that a good process followed correctly produces a good product. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q084 · FL-1.2.2 · K1 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Come usano i risultati dei test il testing e la QA? | How do testing and QA use test results? |
| A ✔ | Il testing li usa per correggere difetti; la QA come feedback su quanto funzionano i processi di sviluppo e di test | Testing uses them to get defects fixed; QA uses them as feedback on how well the development and test processes work |
| B | Li usa solo la QA | Only QA uses them |
| C | Il testing li usa per valutare i processi, la QA per correggere difetti | Testing uses them to assess processes, QA to fix defects |
| D | Nessuno dei due li usa dopo il rilascio | Neither uses them after release |
| Spiegazione | Gli stessi risultati servono a due scopi: correggere i difetti del prodotto e migliorare i processi. | The same results serve two purposes: fixing product defects and improving processes. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q085 · FL-1.5.2 · K1 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Nel whole team approach, chi può svolgere un’attività? | In the whole team approach, who can perform a task? |
| A | Solo chi ha il ruolo formale corrispondente | Only the person with the corresponding formal role |
| B | Solo il tester per i test e solo lo sviluppatore per il codice | Only the tester for tests and only the developer for code |
| C | Solo il product owner | Only the product owner |
| D ✔ | Qualsiasi membro del team con le conoscenze e le competenze necessarie | Any team member with the necessary knowledge and skills |
| Spiegazione | Nel whole team approach chiunque abbia le competenze può svolgere un compito, e tutti sono responsabili della qualità. | In the whole team approach anyone with the skills can do a task, and everyone is responsible for quality. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q086 · FL-1.5.2 · K1 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale è un vantaggio del whole team approach? | Which is an advantage of the whole team approach? |
| A | Elimina la necessità dei test di accettazione | It removes the need for acceptance testing |
| B | Rende inutile condividere lo spazio di lavoro | It makes sharing a workspace unnecessary |
| C ✔ | Migliora comunicazione e collaborazione e sfrutta le diverse competenze del team | It improves communication and collaboration and leverages the team’s various skills |
| D | Garantisce sempre il massimo livello di indipendenza del testing | It always guarantees the highest level of independence of testing |
| Spiegazione | Il syllabus cita dinamiche di team migliori, più comunicazione e collaborazione e sinergia fra le competenze. | The syllabus mentions better team dynamics, more communication and collaboration, and synergy between skill sets. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q087 · FL-1.1.2 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Il test di sistema provoca un crash. Quali attività seguono come parte del debugging? | System testing triggers a crash. Which activities follow as part of debugging? |
| A | Rivedere i requisiti con il cliente | Reviewing the requirements with the customer |
| B ✔ | Riprodurre il malfunzionamento, diagnosticare il difetto e correggerlo | Reproducing the failure, diagnosing the defect and fixing it |
| C | Progettare nuovi casi di test e stimare lo sforzo | Designing new test cases and estimating effort |
| D | Eseguire il confirmation testing e chiudere il report | Running confirmation testing and closing the report |
| Spiegazione | Il processo tipico di debugging dopo un malfunzionamento è riproduzione, diagnosi e correzione. | The typical debugging process after a failure is reproduction, diagnosis and fixing. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q088 · FL-1.1.2 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Una review del codice individua un difetto. Perché il debugging non richiede riproduzione né diagnosi? | A code review finds a defect. Why does debugging need no reproduction or diagnosis here? |
| A ✔ | Il testing statico trova direttamente il difetto: non c’è un malfunzionamento da riprodurre | Static testing finds the defect directly: there is no failure to reproduce |
| B | Perché i difetti trovati in review non vanno corretti | Because defects found in reviews are not fixed |
| C | Perché il debugging si applica solo ai requisiti | Because debugging applies only to requirements |
| D | Perché la review sostituisce il confirmation testing | Because the review replaces confirmation testing |
| Spiegazione | Quando il testing statico identifica un difetto, il debugging consiste solo nel rimuoverlo. | When static testing identifies a defect, debugging consists only of removing it. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q089 · FL-1.2.1 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | In che modo il testing rappresenta gli utenti nel progetto? | In what way does testing represent users in the project? |
| A | I tester sostituiscono gli utenti nel collaudo di accettazione | Testers replace users in acceptance testing |
| B | Il testing elimina la necessità di parlare con gli utenti | Testing removes the need to talk to users |
| C | I tester decidono le priorità di business al posto degli utenti | Testers decide business priorities instead of users |
| D ✔ | I tester fanno sì che la comprensione dei bisogni degli utenti sia considerata in tutto il ciclo di sviluppo | Testers make sure their understanding of users’ needs is considered throughout the development lifecycle |
| Spiegazione | Coinvolgere un campione rappresentativo di utenti è spesso troppo costoso: i tester ne portano la prospettiva nel progetto. | Involving a representative set of users is often too costly: testers bring their perspective into the project. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q090 · FL-1.2.1 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Perché il testing contribuisce alla decisione di rilascio? | Why does testing contribute to the release decision? |
| A | Perché corregge direttamente i difetti trovati | Because it fixes the defects found directly |
| B | Perché sostituisce la gestione del progetto | Because it replaces project management |
| C ✔ | Valuta direttamente la qualità del test object e fornisce misure usate nelle decisioni di progetto | It directly evaluates the quality of the test object and provides measures used in project decisions |
| D | Perché garantisce l’assenza di difetti | Because it guarantees the absence of defects |
| Spiegazione | Le misure ottenute dal testing entrano nelle decisioni di passaggio da una fase all’altra, compreso il rilascio. | The measures obtained from testing feed decisions on moving to the next phase, including release. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q091 · FL-1.2.3 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Un firmware si comporta male perché un campo elettromagnetico ha alterato la memoria. Che cosa mostra il caso? | Firmware misbehaves because an electromagnetic field altered its memory. What does this case show? |
| A | Il problema è un errore del tester | The problem is an error by the tester |
| B ✔ | Un malfunzionamento può essere causato da condizioni ambientali, non solo da errori e difetti | A failure can be caused by environmental conditions, not only by errors and defects |
| C | Ogni malfunzionamento nasce da un errore umano nel codice | Every failure comes from a human error in the code |
| D | Un difetto produce sempre un malfunzionamento | A defect always produces a failure |
| Spiegazione | Il syllabus cita proprio radiazioni e campi elettromagnetici come condizioni ambientali che causano malfunzionamenti. | The syllabus mentions exactly radiation and electromagnetic fields as environmental conditions that cause failures. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q092 · FL-1.2.3 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Un analista sotto forte pressione dei tempi fraintende una regola, nel codice nasce un difetto e il cliente vede un calcolo errato. Qual è la causa radice più plausibile? | An analyst under heavy time pressure misunderstands a rule, a defect appears in the code and the customer sees a wrong calculation. What is the most plausible root cause? |
| A ✔ | La pressione dei tempi che ha portato all’errore | The time pressure that led to the error |
| B | Il calcolo errato visto dal cliente | The wrong calculation seen by the customer |
| C | Il difetto nel codice | The defect in the code |
| D | Il defect report del problema | The defect report of the problem |
| Spiegazione | La causa radice è la ragione fondamentale del problema: intervenire su di essa può prevenire errori simili. | The root cause is the fundamental reason for the problem: addressing it can prevent similar errors. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q093 · FL-1.4.1 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale attività di test risponde alla domanda «come testare?» | Which test activity answers the question “how to test?” |
| A | L’analisi dei test | Test analysis |
| B | Il completamento dei test | Test completion |
| C | Il monitoraggio dei test | Test monitoring |
| D ✔ | La progettazione dei test | Test design |
| Spiegazione | La progettazione trasforma le condizioni di test in casi di test e altro testware. | Test design turns test conditions into test cases and other testware. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q094 · FL-1.4.1 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | In quale attività i casi di test vengono organizzati in procedure e suite e si verifica che l’ambiente di test sia configurato correttamente? | In which activity are test cases organised into test procedures and suites, and is the test environment checked to be set up correctly? |
| A | Analisi dei test | Test analysis |
| B | Esecuzione dei test | Test execution |
| C ✔ | Implementazione dei test | Test implementation |
| D | Pianificazione dei test | Test planning |
| Spiegazione | Nell’implementazione si crea il testware necessario all’esecuzione, si organizzano procedure e suite e si prepara l’ambiente. | Test implementation creates the testware needed for execution, organises procedures and suites and prepares the environment. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q095 · FL-1.4.2 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Il team ha poca esperienza di automazione e non dispone di strumenti adatti. Quale aspetto del test process ne è più influenzato? | The team has little test automation experience and no suitable tools. Which aspect of the test process is most affected? |
| A | I sette principi del testing | The seven testing principles |
| B ✔ | Il grado di automazione dei test | The degree of test automation |
| C | Gli obiettivi di business del cliente | The customer’s business objectives |
| D | La definizione di difetto | The definition of a defect |
| Spiegazione | Competenze del team e strumenti disponibili sono fattori di contesto che incidono sul grado di automazione. | Team skills and available tools are contextual factors that affect the degree of test automation. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q096 · FL-1.4.2 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Un progetto ha scadenza fissa e budget ridotto. Su quali aspetti del testing incide soprattutto questo vincolo? | A project has a fixed deadline and a small budget. Which aspects of testing does this constraint mainly affect? |
| A ✔ | Strategia di test, livello di copertura richiesto e dettaglio del testware | Test strategy, required level of coverage and level of detail of the testware |
| B | La definizione di errore, difetto e malfunzionamento | The definition of error, defect and failure |
| C | I sette principi del testing | The seven testing principles |
| D | Nessuno: il testing non dipende dal contesto | None: testing does not depend on context |
| Spiegazione | I vincoli di progetto influenzano strategia, tecniche, automazione, copertura, dettaglio del testware e reporting. | Project constraints influence strategy, techniques, test automation, coverage, testware detail and reporting. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q097 · FL-1.4.3 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale prodotto di lavoro è tipico della progettazione dei test? | Which work product is typical of test design? |
| A | Test log | Test logs |
| B | Test completion report | The test completion report |
| C | Test plan | The test plan |
| D ✔ | Casi di test e test charter, con i requisiti di dati e ambiente | Test cases and test charters, with test data and environment requirements |
| Spiegazione | La progettazione produce casi di test, test charter, coverage item e requisiti di dati e di ambiente. | Test design produces test cases, test charters, coverage items, and test data and environment requirements. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q098 · FL-1.4.3 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Stub, driver e simulatori sono prodotti di quale attività? | Stubs, drivers and simulators are work products of which activity? |
| A | Completamento dei test | Test completion |
| B | Monitoraggio e controllo dei test | Test monitoring and test control |
| C ✔ | Implementazione dei test, come elementi dell’ambiente di test | Test implementation, as test environment items |
| D | Analisi dei test | Test analysis |
| Spiegazione | Il syllabus li elenca fra gli elementi dell’ambiente di test creati nell’implementazione. | The syllabus lists them among the test environment items created during test implementation. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q099 · FL-1.4.4 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale valore offre la tracciabilità fra risultati dei test e rischi? | What value does traceability between test results and risks provide? |
| A | Elimina la necessità del configuration management | It removes the need for configuration management |
| B ✔ | Permette di valutare il livello di rischio residuo del test object | It allows the level of residual risk in the test object to be evaluated |
| C | Sostituisce il report di avanzamento | It replaces the test progress report |
| D | Riduce a zero il numero di test da eseguire | It reduces the number of tests to run to zero |
| Spiegazione | Il syllabus usa proprio questo esempio: tracciare i risultati sui rischi aiuta a valutare il rischio residuo. | The syllabus uses exactly this example: tracing results to risks helps evaluate residual risk. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q100 · FL-1.4.4 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Un auditor chiede quali requisiti sono coperti dai test. Che cosa permette di rispondere? | An auditor asks which requirements are covered by tests. What makes it possible to answer? |
| A ✔ | La tracciabilità fra casi di test e requisiti | Traceability between test cases and requirements |
| B | Il numero totale di test eseguiti | The total number of tests run |
| C | Un test log senza riferimenti ai requisiti | A test log with no references to requirements |
| D | La durata delle sessioni di test | The length of the test sessions |
| Spiegazione | Tracciare i casi di test sui requisiti verifica la copertura dei requisiti e facilita gli audit. | Tracing test cases to requirements verifies requirements coverage and facilitates audits. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q101 · FL-1.4.5 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Su quali attività si concentra il ruolo di testing? | Which activities does the testing role mainly focus on? |
| A | Pianificazione, monitoraggio, controllo e completamento dei test | Test planning, test monitoring, test control and test completion |
| B | Solo esecuzione dei test | Test execution only |
| C | Solo gestione dei difetti | Defect management only |
| D ✔ | Analisi, progettazione, implementazione ed esecuzione dei test | Test analysis, test design, test implementation and test execution |
| Spiegazione | Il ruolo di testing ha la responsabilità degli aspetti tecnici: analisi, progettazione, implementazione ed esecuzione. | The testing role is responsible for the engineering aspects: analysis, design, implementation and execution. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q102 · FL-1.4.5 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | In un team Agile senza test manager, chi svolge i compiti di gestione del test? | In an Agile team with no test manager, who handles the test management tasks? |
| A | Solo lo Scrum Master | Only the Scrum Master |
| B | Sempre un test manager dedicato in ogni team | Always a dedicated test manager in every team |
| C ✔ | In parte il team Agile stesso; i compiti che riguardano più team possono spettare a test manager esterni al team | Partly the Agile team itself; tasks spanning several teams may fall to test managers outside the team |
| D | Nessuno: in Agile non esistono | Nobody: they do not exist in Agile |
| Spiegazione | Il syllabus prevede che alcuni compiti di gestione siano svolti dal team e quelli trasversali da test manager fuori dal team. | The syllabus says some test management tasks may be handled by the team, and cross-team tasks by test managers outside it. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q103 · FL-1.5.1 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale competenza aumenta soprattutto l’efficienza del testing, per esempio scegliendo gli strumenti di test adatti? | Which skill mainly increases the efficiency of testing, for example by choosing suitable test tools? |
| A | La creatività | Creativity |
| B ✔ | La conoscenza tecnica | Technical knowledge |
| C | La conoscenza del dominio | Domain knowledge |
| D | L’ascolto attivo | Active listening |
| Spiegazione | Il syllabus collega la conoscenza tecnica all’efficienza del testing, ad esempio con strumenti appropriati. | The syllabus links technical knowledge to efficiency, for example by using appropriate test tools. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q104 · FL-1.5.1 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Perché le capacità di comunicazione sono cruciali per un tester? | Why are communication skills crucial for a tester? |
| A ✔ | Perché i risultati dei test possono essere percepiti come critiche al prodotto e all’autore, e vanno comunicati in modo costruttivo | Because test results may be perceived as criticism of the product and its author, and must be communicated constructively |
| B | Perché il tester deve convincere il team che il software è perfetto | Because the tester must convince the team that the software is perfect |
| C | Perché il tester decide da solo il rilascio | Because the tester decides the release alone |
| D | Perché i difetti non vanno mai discussi con gli sviluppatori | Because defects must never be discussed with developers |
| Spiegazione | Chi porta cattive notizie rischia di essere biasimato; anche il confirmation bias rende difficile accettarle. | The bearer of bad news risks being blamed; confirmation bias also makes such news hard to accept. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q105 · FL-1.5.3 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale è un possibile svantaggio dell’indipendenza del testing? | Which is a possible drawback of independence of testing? |
| A | Il tester riconosce tipi di difetti diversi | The tester recognises different kinds of defects |
| B | Il tester può mettere in discussione le assunzioni degli stakeholder | The tester can challenge stakeholders’ assumptions |
| C | Gli sviluppatori trovano molti difetti nel proprio codice | Developers find many defects in their own code |
| D ✔ | L’isolamento dal team di sviluppo, con problemi di comunicazione o rapporti conflittuali | Isolation from the development team, leading to communication problems or an adversarial relationship |
| Spiegazione | Il syllabus cita isolamento, problemi di comunicazione e rapporto conflittuale, oltre al rischio che gli sviluppatori si sentano meno responsabili. | The syllabus mentions isolation, communication problems and an adversarial relationship, and the risk that developers feel less responsible for quality. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q106 · FL-1.5.3 · K2 · Fundamentals of Testing

| | Italiano | English |
|---|---|---|
| Domanda | Un componente viene testato da un collega dello stesso team dell’autore. Quale livello di indipendenza c’è? | A component is tested by a peer from the author’s own team. What level of independence is this? |
| A | Indipendenza alta | High independence |
| B | Indipendenza molto alta | Very high independence |
| C ✔ | Una certa indipendenza | Some independence |
| D | Nessuna indipendenza | No independence |
| Spiegazione | I colleghi dello stesso team offrono una certa indipendenza. | Peers from the same team provide some independence. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q107 · FL-2.1.2 · K1 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Quale buona pratica di testing vale per qualsiasi ciclo di sviluppo? | Which good testing practice applies to any software development lifecycle? |
| A | I tester rivedono i prodotti di lavoro solo nella versione finale | Testers review work products only in their final version |
| B ✔ | A ogni attività di sviluppo corrisponde un’attività di test | For every development activity there is a corresponding test activity |
| C | Il testing inizia solo quando il codice è completo | Testing starts only when the code is complete |
| D | Tutti i livelli di test hanno gli stessi obiettivi | All test levels have the same objectives |
| Spiegazione | Così tutte le attività di sviluppo sono soggette a controllo di qualità. | This way every development activity is subject to quality control. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q108 · FL-2.1.2 · K1 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Secondo le buone pratiche indipendenti dal ciclo di vita, quando inizia l’analisi e progettazione dei test di un livello? | According to the good practices that apply to any lifecycle, when do test analysis and test design for a test level start? |
| A ✔ | Durante la corrispondente fase di sviluppo | During the corresponding development phase |
| B | Dopo il completamento di tutti i livelli precedenti | After all the previous levels are complete |
| C | Solo dopo il rilascio | Only after release |
| D | Quando il cliente approva il contratto | When the customer approves the contract |
| Spiegazione | Iniziare durante la fase di sviluppo corrispondente applica il principio del testing anticipato. | Starting during the corresponding development phase applies the principle of early testing. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q109 · FL-2.1.3 · K1 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Quale approccio esprime il comportamento atteso con casi di test in linguaggio naturale semplice, di solito nel formato Given/When/Then? | Which approach expresses the desired behaviour with test cases in simple natural language, usually in the Given/When/Then format? |
| A | Test-Driven Development (TDD) | Test-Driven Development (TDD) |
| B | Testing esplorativo | Exploratory testing |
| C | Analisi statica | Static analysis |
| D ✔ | Behavior-Driven Development (BDD) | Behavior-Driven Development (BDD) |
| Spiegazione | BDD usa scenari comprensibili agli stakeholder, poi tradotti in test eseguibili. | BDD uses scenarios that stakeholders understand, then translated into executable tests. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q110 · FL-2.1.3 · K1 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Quale approccio ricava i test dai criteri di accettazione, come parte della progettazione del sistema? | Which approach derives tests from acceptance criteria as part of the system design process? |
| A | Error guessing | Error guessing |
| B | Testing di regressione | Regression testing |
| C ✔ | Acceptance Test-Driven Development (ATDD) | Acceptance Test-Driven Development (ATDD) |
| D | Test-Driven Development (TDD) | Test-Driven Development (TDD) |
| Spiegazione | In ATDD i test nascono dai criteri di accettazione e sono scritti prima della parte di applicazione da sviluppare. | In ATDD tests come from the acceptance criteria and are written before the part of the application is developed. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q111 · FL-2.2.1 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Quale livello di test si concentra su validazione e disponibilità al rilascio, idealmente svolto dagli utenti previsti? | Which test level focuses on validation and readiness for deployment, ideally performed by the intended users? |
| A | Test di sistema | System testing |
| B ✔ | Test di accettazione | Acceptance testing |
| C | Test di componente | Component testing |
| D | Test di integrazione di componenti | Component integration testing |
| Spiegazione | Il test di accettazione dimostra che il sistema soddisfa i bisogni di business degli utenti. | Acceptance testing demonstrates that the system meets the users’ business needs. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q112 · FL-2.2.2 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Che cosa caratterizza il white-box testing? | What characterises white-box testing? |
| A ✔ | Ricava i test dalla struttura interna, come codice, architettura o flussi di dati, e mira a coprirla | It derives tests from the internal structure, such as code, architecture or data flows, and aims to cover it |
| B | Ricava i test solo dalla documentazione dei requisiti | It derives tests only from the requirements documentation |
| C | Valuta solo le caratteristiche non funzionali | It evaluates only non-functional characteristics |
| D | Si applica solo al livello di accettazione | It applies only at the acceptance testing level |
| Spiegazione | Il white-box testing è basato sulla struttura e punta a coprirla in misura accettabile. | White-box testing is structure-based and aims to cover the structure to an acceptable level. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q113 · FL-2.2.2 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Si verifica che una funzione di ricerca risponda entro due secondi mentre restituisce i risultati corretti. Che cosa mostra il caso? | A test checks that a search function responds within two seconds while returning the correct results. What does this show? |
| A | Il test è solo funzionale | The test is functional testing only |
| B | I test non funzionali si eseguono solo dopo il rilascio | Non-functional testing is run only after release |
| C | Il test è white-box perché misura un tempo | The test is white-box because it measures a time |
| D ✔ | Molti test non funzionali nascono da test funzionali, verificando anche un vincolo non funzionale | Many non-functional tests are derived from functional tests, also checking a non-functional constraint |
| Spiegazione | Il syllabus spiega che molti test non funzionali riusano test funzionali aggiungendo un vincolo, come un tempo massimo. | The syllabus explains that many non-functional tests reuse functional tests while adding a constraint, such as a maximum time. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q114 · FL-2.2.3 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Dopo la correzione di un difetto il tester riesegue il test che falliva e passa. Che cosa resta da fare per controllare effetti collaterali? | After a defect is fixed, the tester re-runs the test that failed and it passes. What remains to be done to check for side effects? |
| A | Ripetere solo lo stesso test più volte | Repeating the same test several times |
| B | Il debugging del modulo corretto | Debugging the fixed module |
| C ✔ | Testing di regressione, guidato dall’analisi d’impatto | Regression testing, guided by impact analysis |
| D | Nulla: il confirmation testing basta | Nothing: confirmation testing is enough |
| Spiegazione | La regressione cerca conseguenze indesiderate della modifica; l’analisi d’impatto aiuta a scegliere cosa ripetere. | Regression testing looks for unintended consequences of the change; impact analysis helps choose what to repeat. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q115 · FL-2.3.1 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Quale situazione è un trigger di testing di manutenzione? | Which situation is a trigger for maintenance testing? |
| A | La stima iniziale del progetto | The initial project estimate |
| B ✔ | La migrazione del sistema a una nuova piattaforma | Migrating the system to a new platform |
| C | La stesura dei primi requisiti di un nuovo prodotto | Writing the first requirements of a new product |
| D | La prima review del codice di un componente nuovo | The first code review of a new component |
| Spiegazione | Aggiornamenti e migrazioni dell’ambiente operativo sono trigger tipici della manutenzione. | Upgrades and migrations of the operational environment are typical maintenance triggers. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q116 · FL-2.3.1 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Un sistema viene dismesso. Che cosa può richiedere il testing di manutenzione? | A system is being retired. What may maintenance testing require? |
| A ✔ | Verificare l’archiviazione dei dati e le procedure di ripristino o recupero | Checking data archiving and the restore or retrieval procedures |
| B | Nulla: un sistema dismesso non si testa | Nothing: a retired system is not tested |
| C | Solo test di prestazioni | Only performance tests |
| D | Solo il test di componente | Only component testing |
| Spiegazione | Il ritiro di un sistema può richiedere test di archiviazione dei dati e delle procedure di recupero. | Retiring a system may require testing data archiving and retrieval procedures. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q117 · FL-2.1.1 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | In un modello di sviluppo sequenziale, che cosa fanno tipicamente i tester nelle fasi iniziali? | In a sequential development model, what do testers typically do in the early phases? |
| A | Test dinamici su tutto il sistema | Dynamic testing of the whole system |
| B | Test di accettazione con gli utenti | Acceptance testing with users |
| C | Testing di regressione automatizzato | Automated regression testing |
| D ✔ | Review dei requisiti, analisi e progettazione dei test | Requirements reviews, test analysis and test design |
| Spiegazione | Nei modelli sequenziali il codice eseguibile arriva più tardi: all’inizio si fanno review, analisi e progettazione. | In sequential models executable code comes later: early on, testers do reviews, analysis and design. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q118 · FL-2.1.1 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Perché nei progetti Agile si preferiscono documentazione leggera e ampia automazione dei test? | Why do Agile projects favour lightweight documentation and extensive test automation? |
| A | Perché la documentazione è vietata | Because documentation is forbidden |
| B | Perché le iterazioni non producono software funzionante | Because iterations do not produce working software |
| C ✔ | Perché il cambiamento può avvenire in tutto il progetto e la regressione va resa più facile | Because change can occur throughout the project and regression testing must be made easier |
| D | Perché nei progetti Agile non si fa testing manuale | Because Agile projects do no manual testing |
| Spiegazione | Il cambiamento continuo richiede documenti leggeri e automazione estesa per la regressione. | Continuous change needs lightweight documents and extensive test automation for regression testing. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q119 · FL-2.1.6 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Quale domanda fa parte di una retrospettiva? | Which question is part of a retrospective? |
| A | Quali test eliminare senza discuterne? | Which tests should be deleted without discussion? |
| B ✔ | Che cosa non ha funzionato e potrebbe essere migliorato? | What was not successful and could be improved? |
| C | Chi è il responsabile dei difetti trovati? | Who is responsible for the defects found? |
| D | Quale stipendio assegnare ai membri del team? | What salary should team members get? |
| Spiegazione | Le retrospettive chiedono cosa ha funzionato, cosa no e come portare i miglioramenti nel futuro. | Retrospectives ask what was successful, what was not, and how to carry improvements forward. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q120 · FL-2.1.6 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Quale beneficio tipico per il testing portano le retrospettive? | Which typical benefit for testing do retrospectives bring? |
| A ✔ | Migliore qualità del testware, per esempio rivedendo insieme i processi di test | Better quality of testware, for example by reviewing the test processes together |
| B | La garanzia che non ci saranno più difetti | A guarantee that there will be no more defects |
| C | L’eliminazione del report di completamento | Getting rid of the test completion report |
| D | La sostituzione della pianificazione dei test | Replacing test planning |
| Spiegazione | Il syllabus cita testware migliore, più efficacia ed efficienza, coesione del team, base di test migliore e collaborazione. | The syllabus mentions better testware, more effectiveness and efficiency, team bonding, a better test basis and cooperation. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q121 · FL-2.1.4 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Quale beneficio per il testing porta DevOps? | Which benefit for testing does DevOps bring? |
| A | L’eliminazione completa del testing manuale | Complete removal of manual testing |
| B | L’assenza di costi per gli strumenti CI/CD | No cost for CI/CD tools |
| C | La garanzia che la pipeline non richieda manutenzione | A guarantee that the pipeline needs no maintenance |
| D ✔ | Feedback rapido sulla qualità del codice e su eventuali impatti negativi delle modifiche | Fast feedback on code quality and on whether changes adversely affect existing code |
| Spiegazione | Feedback rapido, ambienti stabili e minor rischio di regressione sono benefici citati dal syllabus. | Fast feedback, stable environments and lower regression risk thanks to automated regression testing are benefits cited by the syllabus. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q122 · FL-2.1.4 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Quale è un rischio o una sfida di DevOps per il testing? | Which is a risk or challenge of DevOps for testing? |
| A | Il feedback sul codice diventa più lento | Feedback on the code becomes slower |
| B | Il rischio di regressione aumenta per l’automazione | Regression risk increases because of automation |
| C ✔ | L’automazione dei test richiede risorse aggiuntive e può essere difficile da mantenere | Test automation needs additional resources and may be difficult to maintain |
| D | La visibilità sulle caratteristiche non funzionali diminuisce | Visibility of non-functional characteristics decreases |
| Spiegazione | Il syllabus cita pipeline da definire, strumenti da mantenere e automazione costosa da creare e mantenere. | The syllabus mentions defining the pipeline, maintaining the tools and the cost of creating and maintaining test automation. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q123 · FL-2.1.5 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Quale pratica realizza lo shift left? | Which practice achieves shift left? |
| A | Scrivere i casi di test dopo il codice | Writing test cases after the code |
| B ✔ | Rivedere le specifiche dal punto di vista del tester prima che il codice esista | Reviewing the specification from the tester’s perspective before the code exists |
| C | Rinviare i test non funzionali al collaudo finale | Postponing non-functional testing to final acceptance |
| D | Eseguire l’analisi statica solo dopo il rilascio | Running static analysis only after release |
| Spiegazione | Le review delle specifiche fatte dai tester trovano presto ambiguità, incompletezze e incoerenze. | Specification reviews by testers find ambiguities, incompleteness and inconsistencies early. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q124 · FL-2.1.5 · K2 · Testing Throughout the Software Development Lifecycle

| | Italiano | English |
|---|---|---|
| Domanda | Che cosa NON significa lo shift left? | What does shift left NOT mean? |
| A ✔ | Trascurare il testing nelle fasi successive del ciclo di vita | Neglecting testing in the later phases of the lifecycle |
| B | Anticipare il testing senza aspettare il codice | Testing earlier without waiting for the code |
| C | Accettare più sforzo iniziale per risparmiarne dopo | Accepting more effort early to save effort later |
| D | Coinvolgere gli stakeholder perché sostengano l’approccio | Getting stakeholders to support the approach |
| Spiegazione | Il syllabus precisa che anticipare il testing non significa trascurare quello successivo. | The syllabus states that testing earlier does not mean neglecting later testing. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q125 · FL-3.1.1 · K1 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale di questi prodotti di lavoro può essere esaminato con il testing statico? | Which of these work products can be examined by static testing? |
| A | Solo il codice eseguibile in produzione | Only executable code in production |
| B | Solo l’interfaccia grafica in esecuzione | Only the running graphical interface |
| C | Nessuno: il testing statico richiede l’esecuzione | None: static testing requires execution |
| D ✔ | Una test charter | A test charter |
| Spiegazione | Qualsiasi prodotto di lavoro leggibile e comprensibile, comprese test charter, casi di test e backlog item, può essere esaminato staticamente. | Any work product that can be read and understood, including test charters, test cases and backlog items, can be examined statically. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q126 · FL-3.1.1 · K1 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale prodotto di lavoro è poco adatto al testing statico? | Which work product is not appropriate for static testing? |
| A | Un modello dell’architettura | An architecture model |
| B | Un elemento del product backlog | A product backlog item |
| C ✔ | Codice eseguibile di terze parti che non va analizzato per motivi legali | Third-party executable code that must not be analysed for legal reasons |
| D | Un contratto con il cliente | A contract with the customer |
| Spiegazione | Il syllabus esclude i prodotti difficili da interpretare per le persone e che non vanno analizzati con strumenti, come codice di terzi per vincoli legali. | The syllabus excludes work products that are hard for people to interpret and should not be analysed by tools, such as third-party code under legal constraints. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q127 · FL-3.2.1 · K1 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale beneficio porta un feedback precoce e frequente degli stakeholder? | Which benefit does early and frequent stakeholder feedback bring? |
| A | Sostituisce il testing dinamico | It replaces dynamic testing |
| B ✔ | Permette di comunicare presto possibili problemi di qualità e di evitare fraintendimenti sui requisiti | It allows early communication of potential quality problems and avoids misunderstandings about requirements |
| C | Garantisce che i requisiti non cambino più | It guarantees that requirements will never change again |
| D | Rende inutili le review | It makes reviews unnecessary |
| Spiegazione | Il feedback frequente fa emergere presto incomprensioni e problemi, quando correggerli costa meno. | Frequent feedback brings misunderstandings and problems to light early, when fixing them costs less. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q128 · FL-3.2.1 · K1 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Che cosa può succedere se gli stakeholder non danno feedback durante lo sviluppo? | What can happen if stakeholders give no feedback during development? |
| A ✔ | Il prodotto può non corrispondere alla loro visione, con rilavorazioni costose e scadenze mancate | The product may not match their vision, with costly rework and missed deadlines |
| B | Il prodotto risulta sempre conforme alle aspettative | The product always meets expectations |
| C | I difetti diminuiscono automaticamente | Defects automatically decrease |
| D | I test di accettazione diventano superflui | Acceptance testing becomes unnecessary |
| Spiegazione | Il syllabus cita prodotti lontani dalla visione degli stakeholder, rilavorazioni, ritardi e perfino il fallimento del progetto. | The syllabus mentions products that miss the stakeholders’ vision, rework, delays and even project failure. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q129 · FL-3.2.3 · K1 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale ruolo raccoglie le anomalie e registra le informazioni della review, come le decisioni? | Which role collates anomalies and records review information, such as decisions? |
| A | Il moderatore | The moderator |
| B | L’autore | The author |
| C | Il manager | The manager |
| D ✔ | Lo scriba (recorder) | The scribe (recorder) |
| Spiegazione | Lo scriba raccoglie le anomalie dei revisori e registra informazioni e decisioni. | The scribe collates the reviewers’ anomalies and records information and decisions. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q130 · FL-3.2.3 · K1 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale ruolo ha la responsabilità complessiva della review e decide chi coinvolgere, quando e dove? | Which role takes overall responsibility for the review and decides who is involved, when and where? |
| A | Lo scriba | The scribe |
| B | L’autore | The author |
| C ✔ | Il review leader | The review leader |
| D | Il revisore | The reviewer |
| Spiegazione | Il review leader organizza la review e ne ha la responsabilità complessiva. | The review leader organises the review and holds overall responsibility for it. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q131 · FL-3.2.5 · K1 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale fattore contribuisce al successo di una review? | Which factor contributes to a successful review? |
| A | Ridurre al minimo il tempo di preparazione | Keeping preparation time to a minimum |
| B ✔ | Obiettivi chiari e criteri di uscita misurabili | Clear objectives and measurable exit criteria |
| C | Usare la review per valutare le prestazioni dei partecipanti | Using the review to evaluate participants’ performance |
| D | Rivedere in una sola volta il documento intero, anche se molto lungo | Reviewing a very long document in one go |
| Spiegazione | Obiettivi chiari e criteri di uscita misurabili sono fra i fattori di successo citati. | Clear objectives and measurable exit criteria are among the success factors cited. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q132 · FL-3.2.5 · K1 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale altro fattore favorisce review efficaci? | Which other factor supports effective reviews? |
| A ✔ | Il supporto del management e una formazione adeguata dei partecipanti | Management support and adequate training for participants |
| B | L’assenza di feedback agli autori | Giving no feedback to authors |
| C | Scegliere sempre l’ispezione, qualunque sia il contesto | Always choosing an inspection, whatever the context |
| D | Tenere segreti i risultati della review | Keeping the review results secret |
| Spiegazione | Il syllabus cita supporto del management, formazione e reviews come parte della cultura dell’organizzazione. | The syllabus mentions management support, training and making reviews part of the organisation’s culture. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q133 · FL-3.1.2 · K2 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Perché il testing statico ha valore anche quando seguirà il testing dinamico? | Why does static testing add value even when dynamic testing will follow? |
| A | Perché garantisce l’assenza di malfunzionamenti in esecuzione | Because it guarantees there will be no failures at run time |
| B | Perché misura le prestazioni del sistema | Because it measures system performance |
| C | Perché sostituisce il test di accettazione | Because it replaces acceptance testing |
| D ✔ | Può trovare difetti che il testing dinamico non trova, come codice irraggiungibile o difetti in prodotti non eseguibili | It can find defects that dynamic testing cannot, such as unreachable code or defects in non-executable work products |
| Spiegazione | Il testing statico trova presto difetti diversi, anche in prodotti che non si possono eseguire. | Static testing finds different defects early, including in work products that cannot be executed. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q134 · FL-3.1.2 · K2 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale vantaggio del testing statico riguarda i costi? | Which advantage of static testing concerns costs? |
| A | Elimina i costi di manutenzione | It removes maintenance costs |
| B | Rende gratuiti gli strumenti di analisi | It makes analysis tools free |
| C ✔ | I difetti trovati presto sono di solito meno costosi da correggere | Defects found early are usually cheaper to fix |
| D | Il testing statico non richiede tempo | Static testing takes no time |
| Spiegazione | Trovare i difetti presto evita che si propaghino nei prodotti successivi e riduce i costi. | Finding defects early stops them spreading into later work products and reduces costs. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q135 · FL-3.1.3 · K2 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale differenza fra testing statico e dinamico è corretta? | Which difference between static testing and dynamic testing is correct? |
| A | Non c’è differenza negli obiettivi | There is no difference in objectives |
| B ✔ | Il testing statico trova direttamente i difetti; il testing dinamico provoca malfunzionamenti da cui si risale ai difetti | Static testing finds defects directly; dynamic testing causes failures from which defects are traced |
| C | Il testing statico richiede l’esecuzione del software | Static testing requires executing the software |
| D | Il testing dinamico si applica a prodotti non eseguibili | Dynamic testing applies to non-executable work products |
| Spiegazione | È la distinzione principale descritta dal syllabus. | This is the main distinction described in the syllabus. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q136 · FL-3.1.3 · K2 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale caratteristica di qualità si misura soprattutto con il testing dinamico? | Which quality characteristic is mainly measured with dynamic testing? |
| A ✔ | L’efficienza prestazionale | Performance efficiency |
| B | La manutenibilità del codice | Maintainability of the code |
| C | La coerenza fra requisiti | Consistency between requirements |
| D | La conformità del codice agli standard | Compliance of the code with standards |
| Spiegazione | Le prestazioni dipendono dall’esecuzione del codice. | Performance depends on executing the code. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q137 · FL-3.2.2 · K2 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | In quale attività del processo di review si definiscono scopo, prodotto da rivedere, caratteristiche di qualità e criteri di uscita? | In which review activity are the purpose, the work product to review, the quality characteristics and the exit criteria defined? |
| A | Review individuale | Individual review |
| B | Comunicazione e analisi | Communication and analysis |
| C | Correzione e reporting | Fixing and reporting |
| D ✔ | Pianificazione | Planning |
| Spiegazione | La pianificazione definisce l’ambito della review, i criteri di uscita, lo sforzo e i tempi. | Planning defines the scope of the review, exit criteria, effort and timeframes. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q138 · FL-3.2.2 · K2 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Che cosa avviene nella fase di comunicazione e analisi della review? | What happens in the communication and analysis activity of a review? |
| A | Si distribuiscono i materiali ai partecipanti | The materials are handed out to participants |
| B | Si chiude la review senza discussione | The review is closed without discussion |
| C ✔ | Le anomalie trovate vengono analizzate e si decidono stato, responsabilità e azioni | The anomalies found are analysed and their status, ownership and actions are decided |
| D | Si stabiliscono i criteri di uscita | The exit criteria are set |
| Spiegazione | Le anomalie non sono automaticamente difetti: vanno analizzate e decise, spesso in una riunione. | Anomalies are not automatically defects: they must be analysed and decided, often in a meeting. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q139 · FL-3.2.4 · K2 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale tipo di review è guidato dall’autore e può avere fra gli obiettivi anche formare i revisori? | Which type of review is led by the author and may also aim to educate the reviewers? |
| A | Review informale | Informal review |
| B ✔ | Walkthrough | Walkthrough |
| C | Ispezione | Inspection |
| D | Review tecnica | Technical review |
| Spiegazione | Il walkthrough, guidato dall’autore, può servire a formare, creare consenso, generare idee e trovare anomalie. | A walkthrough, led by the author, can serve to educate, build consensus, generate ideas and detect anomalies. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q140 · FL-3.2.4 · K2 · Static Testing

| | Italiano | English |
|---|---|---|
| Domanda | Quale affermazione sulla review tecnica è corretta? | Which statement about a technical review is correct? |
| A ✔ | È svolta da revisori tecnicamente qualificati e guidata da un moderatore, per creare consenso e prendere decisioni tecniche | It is performed by technically qualified reviewers and led by a moderator, to gain consensus and make technical decisions |
| B | È sempre guidata dall’autore | It is always led by the author |
| C | Non ha alcun obiettivo oltre alla formazione | Its only objective is education |
| D | È il tipo di review più formale | It is the most formal type of review |
| Spiegazione | Consenso e decisioni su problemi tecnici sono gli obiettivi tipici della review tecnica. | Consensus and decisions on technical problems are the typical objectives of a technical review. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q141 · FL-6.1.1 · K2 · Test Tools

| | Italiano | English |
|---|---|---|
| Domanda | Quale categoria di strumenti supporta lo sviluppo di dati di test e la progettazione dei test? | Which category of tools supports the creation of test data and the design of tests? |
| A | Strumenti di analisi statica | Static analysis tools |
| B | Strumenti di gestione dei difetti | Defect management tools |
| C | Strumenti di collaborazione | Collaboration tools |
| D ✔ | Strumenti di progettazione e implementazione dei test | Test design and test implementation tools |
| Spiegazione | Questi strumenti aiutano a generare casi di test, dati di test e procedure. | These tools help generate test cases, test data and test procedures. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

### q142 · FL-6.2.1 · K1 · Test Tools

| | Italiano | English |
|---|---|---|
| Domanda | Quale è un rischio dell’automazione dei test? | Which is a risk of test automation? |
| A | Avere valutazioni più oggettive, per esempio della copertura | More objective assessment, for example of coverage |
| B | Prevenire semplici errori umani grazie alla ripetibilità | Preventing simple human errors through repeatability |
| C ✔ | Affidarsi troppo allo strumento, trascurando il pensiero critico | Relying too much on the tool and neglecting critical thinking |
| D | Ridurre i tempi di esecuzione dei test | Reducing test execution times |
| Spiegazione | Il syllabus cita la dipendenza eccessiva dallo strumento fra i rischi. | The syllabus lists over-reliance on the tool among the risks. |

- [ ] Terminologia  - [ ] Significato  - [ ] Una sola risposta  - [ ] Stile

Note:

## Capitoli

| # | Italiano | English |
|---|---|---|
| 1 | Fondamenti del testing — Impara a ragionare da tester, prima di scegliere una tecnica. | Fundamentals of Testing — Learn to think like a tester before choosing a technique. |
| 2 | Testing nel ciclo di sviluppo — Scegli il test giusto nel momento giusto. | Testing Throughout the Software Development Lifecycle — Choose the right test at the right time. |
| 3 | Testing statico — Trova problemi prima ancora di eseguire il software. | Static Testing — Find problems before the software is even executed. |
| 4 | Analisi e progettazione dei test — Trasforma regole e scenari in casi di test motivati. | Test Analysis and Design — Turn rules and scenarios into well-reasoned test cases. |
| 5 | Gestione delle attività di test — Usa tempo, evidenze e rischi per prendere decisioni. | Managing the Test Activities — Use time, evidence and risks to make decisions. |
| 6 | Strumenti di test — Scegli gli strumenti in funzione del problema. | Test Tools — Choose tools according to the problem. |
| 7 | Agile · Valori e collaborazione — Syllabus CTFL-AT 2014, capitolo 1: Manifesto, whole-team approach, feedback, approcci Agile, user story testabili, retrospettive, CI e pianificazione. | Agile · Values and collaboration — Supplementary Agile Tester material: values, feedback and planning. Not part of the CTFL mock exam. |
| 8 | Agile · Qualità durante l’iterazione — Syllabus CTFL-AT 2014, capitolo 2: testing Agile e tradizionale, stato dei test, regressione, competenze e ruolo del tester. | Agile · Quality during the iteration — Continuous testing, regression, technical feedback and communicating risk. |
| 9 | Agile · Metodi, rischi e strumenti — Syllabus CTFL-AT 2014, capitolo 3: TDD/ATDD/BDD, piramide e quadranti, rischi e stime, tecniche, testing esplorativo e strumenti. | Agile · Methods, risks and tools — Tell TDD, ATDD and BDD apart, choose techniques and justify priorities. |
| 10 | Questionario ITA-STQB · Raccolta revisionata — 40 rielaborazioni del questionario fornito. Soluzioni editoriali, non chiave ufficiale. Solo allenamento, fuori dalla simulazione CTFL. | ITA-STQB questionnaire · Reviewed set — 40 adaptations of the supplied questionnaire. Editorial solutions, not an official answer key. Practice only, outside the CTFL mock exam. |

## Glossario

| Italiano | English |
|---|---|
| **Errore / Error** — Un’azione umana che produce un risultato sbagliato. | **Error** — A human action that produces an incorrect result. |
| **Difetto / Defect** — Un problema in un prodotto di lavoro, come una formula o un requisito errato. | **Defect** — A flaw in a work product, such as a wrong formula or an incorrect requirement. |
| **Malfunzionamento / Failure** — Un comportamento osservato che non soddisfa quanto richiesto. | **Failure** — Observed behaviour that does not meet what is required. |
| **Oracolo di test** — La fonte con cui stabilisci il risultato atteso: una regola, un modello o un riferimento affidabile. | **Test oracle** — The source you use to determine the expected result: a rule, a model or a trusted reference. |
| **Testware** — I prodotti di lavoro del testing, come casi, dati, script e risultati. | **Testware** — The work products of testing, such as test cases, test data, scripts and results. |
| **Base di test** — Le informazioni usate per analizzare e progettare i test. | **Test basis** — The information used to analyse and design tests. |
| **Tracciabilità** — I collegamenti tra elementi come requisiti, test, risultati e difetti. | **Traceability** — The links between items such as requirements, tests, results and defects. |
| **Confirmation testing** — La verifica che il problema originario sia stato corretto. | **Confirmation testing** — Checking that the original problem has been fixed. |
| **Regression testing** — La ricerca di effetti collaterali indesiderati dopo una modifica. | **Regression testing** — Looking for unintended side effects after a change. |
| **Partizione di equivalenza** — Un gruppo di valori che ci si aspetta venga trattato nello stesso modo. | **Equivalence partition** — A group of values that are expected to be handled in the same way. |
| **BVA** — Boundary Value Analysis: progettazione di test attorno ai confini delle partizioni ordinate. | **BVA** — Boundary value analysis: designing tests around the boundaries of ordered partitions. |
| **Copertura** — Quanto degli elementi identificati è stato esercitato, secondo una misura esplicita. | **Coverage** — How much of the identified items has been exercised, according to an explicit measure. |
| **Charter** — Un mandato sintetico che orienta una sessione di testing esplorativo. | **Test charter** — A short mission that guides an exploratory testing session. |
| **Rischio residuo** — La parte di rischio che rimane dopo le azioni di mitigazione. | **Residual risk** — The part of a risk that remains after mitigation actions. |
| **Gravità / Severity** — Quanto sono serie le conseguenze di un difetto. | **Severity** — How serious the consequences of a defect are. |
| **Priorità / Priority** — Quanto è urgente intervenire rispetto agli altri lavori. | **Priority** — How urgently action is needed compared with other work. |
| **Criterio di ingresso** — Una condizione usata per decidere se iniziare un’attività. | **Entry criteria** — Conditions used to decide whether to start an activity. |
| **Criterio di uscita** — Una condizione usata per decidere se completare un’attività. | **Exit criteria** — Conditions used to decide whether an activity can be completed. |
| **Baseline** — Una versione concordata di elementi di configurazione, modificabile tramite un processo controllato. | **Baseline** — An agreed version of configuration items, which can be changed only through a controlled process. |
| **ATDD** — Test di accettazione concordati prima dell’implementazione per guidare lo sviluppo. | **ATDD** — Acceptance tests agreed before implementation to guide development. |
| **TDD** — Sviluppo del codice guidato da piccoli test, con cicli di test, implementazione e refactoring. | **TDD** — Developing code driven by small tests, in cycles of test, implementation and refactoring. |
| **Shift left** — Anticipare opportunamente le attività di test nel ciclo di sviluppo. | **Shift left** — Moving test activities earlier in the development lifecycle where appropriate. |
| **Testing statico** — Esame di un prodotto di lavoro senza eseguire il software sotto test. | **Static testing** — Examining a work product without executing the software under test. |
| **Testing dinamico** — Verifica che richiede l’esecuzione del software sotto test. | **Dynamic testing** — Testing that requires executing the software under test. |
