# Revisione della traduzione inglese (beta)

Generato da `npm run review:en`. 80 domande tradotte su 147 (tutte le CTFL, q001–q080), più titoli dei capitoli e glossario. Le 10 domande del pilota 1.4 sono marcate «pilota»: conviene partire da quelle.

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

### q004 · FL-1.2.2 · K2 · Fundamentals of Testing

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

## Capitoli

| # | Italiano | English |
|---|---|---|
| 1 | Fondamenti del testing — Impara a ragionare da tester, prima di scegliere una tecnica. | Fundamentals of Testing — Learn to think like a tester before choosing a technique. |
| 2 | Testing nel ciclo di sviluppo — Scegli il test giusto nel momento giusto. | Testing Throughout the Software Development Lifecycle — Choose the right test at the right time. |
| 3 | Testing statico — Trova problemi prima ancora di eseguire il software. | Static Testing — Find problems before the software is even executed. |
| 4 | Analisi e progettazione dei test — Trasforma regole e scenari in casi di test motivati. | Test Analysis and Design — Turn rules and scenarios into well-reasoned test cases. |
| 5 | Gestione delle attività di test — Usa tempo, evidenze e rischi per prendere decisioni. | Managing the Test Activities — Use time, evidence and risks to make decisions. |
| 6 | Strumenti di test — Scegli gli strumenti in funzione del problema. | Test Tools — Choose tools according to the problem. |
| 7 | Agile · Valori e collaborazione — CTFL-AT 2014 · Primo modulo in ampliamento. Obiettivi FA-1.1.1, FA-1.1.2 e FA-1.1.3: valori, responsabilità condivisa e feedback. Gli altri argomenti restano introduttivi. | Agile · Values and collaboration — Supplementary Agile Tester material: values, feedback and planning. Not part of the CTFL mock exam. |
| 8 | Agile · Qualità durante l’iterazione — Test continui, regressione, feedback tecnico e comunicazione del rischio. | Agile · Quality during the iteration — Continuous testing, regression, technical feedback and communicating risk. |
| 9 | Agile · Metodi, rischi e strumenti — Distinguere TDD, ATDD e BDD, scegliere tecniche e motivare le priorità. | Agile · Methods, risks and tools — Tell TDD, ATDD and BDD apart, choose techniques and justify priorities. |
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
