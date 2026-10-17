# Revisione della traduzione inglese (beta)

Generato da `npm run review:en`. 10 domande pilota su 144, più titoli dei capitoli e glossario.

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
| assenza di difetti | absence-of-defects fallacy | |
| test esaustiv | exhaustive testing | |
| test di accettazione | acceptance testing | |
| analisi statica | static analysis | |
| pianificazione dei test | test planning | |
| non funzional | non-functional testing | |
| funzionale | functional testing | |
| prestazion | performance efficiency | |
| confirmation testing | confirmation testing | |
| regression testing / regressione | regression testing | |
| ispezion | inspection | |
| walkthrough | walkthrough | |
| review informale | informal review | |
| BVA / valori limite | boundary value analysis | |
| 2 valori | 2-value BVA | |
| partizion | equivalence partitioning | |
| copertura | coverage | |
| stima / stime | three-point estimation | |
| rischio di progetto | project risk | |
| rischio di prodotto | product risk | |
| rischio residuo | residual risk | |
| automazione | test automation | |
| oracolo | test oracle | |
| base di test | test basis | |
| tracciabilit | traceability | |
| criterio di ingresso | entry criteria | |
| criterio di uscita | exit criteria | |
| charter | test charter | |
| gravit | severity | |
| priorit | priority | |
| testing statico | static testing | |
| testing dinamico | dynamic testing | |

## Domande pilota

### q002 · FL-1.1.2 · K2 · Fundamentals of Testing

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

### q006 · FL-1.3.1 · K2 · Fundamentals of Testing

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

### q024 · FL-2.2.2 · K2 · Testing Throughout the Software Development Lifecycle

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

### q028 · FL-2.2.3 · K2 · Testing Throughout the Software Development Lifecycle

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

### q035 · FL-3.2.4 · K2 · Static Testing

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

### q040 · FL-4.2.2 · K3 · Test Analysis and Design

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

### q044 · FL-4.2.4 · K3 · Test Analysis and Design

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

### q062 · FL-5.1.4 · K3 · Managing the Test Activities

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

### q067 · FL-5.2.2 · K2 · Managing the Test Activities

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

### q080 · FL-6.2.1 · K1 · Test Tools

| | Italiano | English |
|---|---|---|
| Domanda | Quale è un rischio dell’automazione? | Which of these is a risk of test automation? |
| A | Ridurre attività ripetitive | Reducing repetitive work |
| B ✔ | Sottovalutare manutenzione e affidabilità dei test | Underestimating the maintenance and reliability of the tests |
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
| 7 | Agile · Valori e collaborazione — Materiale integrativo Agile Tester: valori, feedback e pianificazione. Non entra nella simulazione CTFL. | Agile · Values and collaboration — Supplementary Agile Tester material: values, feedback and planning. Not part of the CTFL mock exam. |
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
