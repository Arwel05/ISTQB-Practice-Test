# TestPilot 1.8 · Foundation allo standard d'esame

## Cosa cambia per chi usa l'app

- **192 domande Foundation** al posto di 80: 112 domande originali nuove, in italiano e in inglese, con la motivazione di ogni alternativa. Ognuno dei 64 obiettivi del syllabus CTFL 4.0.1 ora ha almeno 3 domande al proprio livello K.
- **Simulazione Foundation con le quote ufficiali** delle Exam Structure Tables v1.19 (19 agosto 2026):
  - 28 gruppi di obiettivi, ciascuno con il suo numero di domande;
  - 8 domande K1, 24 K2 e 8 K3;
  - per capitolo 8/6/4/11/9/2.

  Prima contavano solo le quote per capitolo.
- **"Segnala un problema"** sotto ogni domanda, dopo la risposta in allenamento e nella revisione dei risultati. Apre una issue GitHub già compilata con ID, obiettivo, livello K, lingua e testo della domanda. Non contiene nome, progressi né backup.
- **Prova esterna**: nella pagina della simulazione ci sono i link ai sample exam ufficiali CTFL 4.0 (set A–D).
- Il link alle tabelle d'esame ora punta alla v1.19.
- q004 è riclassificata K1, il livello che ha FL-1.2.2 nel syllabus.
- Sotto le domande originali, anche quelle Agile della 1.6, non compare più la legenda delle fonti Agile ("Graner = …"); l'etichetta è "Origine" invece di "Fonte rielaborata".

## Verifica

- **`npm test`: 58 test superati.** Fra i nuovi:
  - quote ufficiali e totali (40 domande; K 8/24/8; capitoli 8/6/4/11/9/2; 64 obiettivi in 28 gruppi);
  - 100 simulazioni generate rispettano tutti i gruppi;
  - copertura minima per ogni obiettivo;
  - livelli K coerenti con il syllabus;
  - il link di segnalazione non contiene dati personali;
  - scheda del revisore aggiornata.
- **`npm run check:terms`**: terminologia ISTQB allineata su tutte le 332 domande tradotte.
- **`npm run check:sample`**: gira solo in locale e confronta il testo inglese con i sample ufficiali, che non entrano nel repo.
  - **Foundation**, sui 4 set (160 domande): nessuna sequenza di 5 parole in comune. 5 coppie segnalate per i soli numeri, tutte su domande della banca originale e confrontate a mano: scenari diversi.
  - **Agile**, sul sample v1.3: nessuna segnalazione.
- **Browser integrato**, in italiano e in inglese:
  - simulazione Foundation con quote verificate sulle 40 domande estratte;
  - pulsanti di segnalazione corretti;
  - a 375 px nessuno scroll orizzontale; nessun errore in console.

## Da fare

- La revisione delle domande nuove da parte di una persona certificata CTFL: [REVISIONE-FOUNDATION.md](REVISIONE-FOUNDATION.md).
- Il confronto fra i punteggi dei colleghi in TestPilot e quelli su un sample ufficiale mai visto.
