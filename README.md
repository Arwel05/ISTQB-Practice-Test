# TestPilot · CTFL Trainer

Applicazione locale in italiano per esercitarsi su ISTQB CTFL Foundation Level, con GUI responsive e dati conservati nel browser. Il file distribuito è autosufficiente: non richiede un server, dipendenze, account o chiamate API.

## Uso e condivisione

Distribuisci `TestPilot-v1.2.zip`. Dopo l'estrazione, apri `TestPilot.html` nel browser. Le istruzioni sono in `LEGGIMI.txt`. I progressi non sono incorporati nel file: ogni browser conserva il proprio profilo. Esegui regolarmente un backup dalle impostazioni.

La consegna è destinata ai browser desktop. La GUI è responsive, ma per l'uso comodo su iOS è preferibile ospitare il file tramite HTTPS. Non è stata effettuata alcuna pubblicazione online.

## Funzionalità

- 80 domande originali, distribuzione per capitolo 16/12/8/22/18/4, con riferimenti a 64 obiettivi del syllabus 4.0.1.
- Sei schede introduttive, 24 termini di glossario e programma indicativo di 14 giorni.
- Quiz per capitolo, ripasso di errori e domande in scadenza, preferiti.
- Sicurezza percepita e ripetizione con intervalli crescenti (1 giorno per risposte incerte; 2/4/8/16/30 per risposte sicure consecutive).
- Simulazioni di 40 domande con quote per capitolo 8/6/4/11/9/2, durata 60 o 75 minuti e soglia 26/40.
- Salvataggio di ogni risposta verificata e delle risposte d'esame. Timer assoluto recuperabile dopo ricaricamento o chiusura.
- Storico, analisi per capitolo, backup JSON con validazione, avvisi in caso di storage non disponibile o conflitto tra schede.

## Sviluppo

È sufficiente Node.js; non occorre `npm install`.

```text
npm test
npm run build
npm start
```

L'anteprima è su `http://127.0.0.1:4173`. Il server è vincolato al loopback e non espone i file del progetto. Il build genera `dist/TestPilot.html` e copia le istruzioni.

Struttura:

```text
src/content.js     Capitoli, domande, spiegazioni, glossario e fonti
src/core.js        Selezione, ripasso, punteggi, timer e validazione backup
src/app.js         Interfaccia, navigazione e persistenza
src/style.css      Tema responsive e accessibilità
src/index.html     Documento sorgente
scripts/build.js   Bundle HTML senza dipendenze esterne
scripts/serve.js   Anteprima locale
tests/core.test.js Test delle regole che influenzano risultati e dati
```

## Limiti didattici

Il materiale è originale, non ufficiale e non accreditato. Le schede non sostituiscono lo studio completo. La simulazione rispetta numero di domande, durata, soglia e quote per capitolo, ma non replica tutte le quote ufficiali per obiettivo e livello K. Gli scenari della banca sono limitati e possono ricomparire: un punteggio elevato non dimostra la capacità di risolvere domande mai viste. La banca non è stata validata da un docente CTFL né calibrata su candidati reali.

Aggiunte inoltre 40 rielaborazioni dal questionario ITA-STQB versione 5, in una raccolta separata dalla simulazione, con soluzioni editoriali e motivazioni delle alternative. Totale: 144 domande. Il PDF non contiene una chiave ufficiale.

Aggiunti 24 quesiti Agile revisionati e tre capitoli integrativi dai PDF forniti. Ogni quesito riporta la fonte e le ragioni delle quattro alternative. Si tratta di una selezione rielaborata, non di un’importazione integrale né di un corso CTFL-AT completo. La simulazione rimane CTFL e i progressi preesistenti sono conservati.

## Fonti

- [Pagina ufficiale CTFL e sample](https://www.istqb.org/certifications/certified-tester-foundation-level-ctfl-v4-0/).
- [Syllabus CTFL 4.0.1](https://istqb.org/wp-content/uploads/2024/11/ISTQB_CTFL_Syllabus_v4.0.1.pdf).
- [Exam Structure Tables 1.18](https://istqb.org/wp-content/uploads/2026/05/ISTQB_Exam-Structure-Tables_v1.18.pdf).
- [Glossario ufficiale](https://glossary.istqb.org/).

Consultati il 16 ottobre 2026. Syllabus © 2024 ISTQB e dei suoi autori, Foundation Level Working Group. Marchi dei rispettivi titolari. Il materiale ufficiale non è ridistribuito.
