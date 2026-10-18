# CTFL-AT 2014 · Stato del percorso Agile

Ambito: solo CTFL-AT, syllabus v1.0 (2014), non CTAL-AT 2.0. Dati in `src/agile-2014.js`.

## Riferimenti ufficiali (scaricati e letti il 17 ottobre 2026, non inclusi nel repo)

- Syllabus CTFL-AT v1.0: 26 obiettivi FA-x.y.z con livello K.
- Exam Structures & Rules Tables v1.19 (19 agosto 2026):
  - 40 domande da 1 punto, soglia 26;
  - per livello K: 10 domande K1, 22 K2 e 8 K3;
  - per capitolo: 13, 12 e 15 domande;
  - quote per obiettivo o gruppo di obiettivi.
- Durata: 60 minuti secondo la pagina CTFL-AT delle tabelle e il sito ISTQB. La tabella riassuntiva delle stesse v1.19 indica invece 90 minuti: discrepanza segnalata, qui si usa 60 (75 con l'estensione).
- Sample exam v1.3: secondo la licenza è ammesso solo l'uso di estratti non commerciali con citazione, o in articoli e libri; ogni altro uso richiede l'autorizzazione scritta di ISTQB. **Non è incluso nell'app**: va usato come prova esterna.
- Dismissione del CTFL-AT: esami fino al 6 maggio 2027 in inglese e fino al 6 novembre 2027 nelle altre lingue.

## Regole della banca

- Ogni domanda ha un obiettivo FA-x.y.z. Le keyword K1 dei capitoli 2 e 3 sono FA-2-KW e FA-3-KW.
- In simulazione entra una domanda solo se il suo livello K è uguale a quello dell'obiettivo. Le domande K2 su obiettivi K3 restano come preparazione.
- Copertura minima per obiettivo: 4 domande se forma da solo un gruppo da 2 o più domande d'esame, altrimenti 3.
- ag008 (Scrum Guide 2020) è un approfondimento ed è esclusa dalla simulazione.
- Gli ID esistenti non cambiano. ag005 passa al capitolo 3 (FA-3.3.2), perché valuta i criteri di accettazione.

## Lotti

1. **Capitolo 1** — mappatura delle 27 domande esistenti e ag028–ag043 (16 domande). Copertura: 8 obiettivi su 8.
2. **Capitolo 2** — ag044–ag065 (22 domande, incluse 3 keyword: build verification test, configuration item, configuration management). Copertura: 8 obiettivi su 8, keyword incluse.
3. **Capitolo 3** — ag066–ag100 (35 domande, di cui 21 K3: rischi, planning poker, definition of done, esempi ATDD, BVA e tabelle decisionali da user story, charter ed euristiche esplorative). Copertura: 13 obiettivi su 13, keyword incluse.

**Totale: 100 domande Agile, 29 gruppi d'esame su 29 coperti.**

## Simulazione Agile (versione 1.6)

- 40 domande estratte con `planExam` (in `src/core.js`) secondo le quote per obiettivo o gruppo, solo fra domande con il livello K dell'obiettivo.
- 60 minuti (75 con l'estensione), soglia 26/40. Disponibile in italiano: le domande Agile non sono tradotte.
- La pagina linka il sample ufficiale v1.3 e i sample di ANZTB e ATSQA come prova esterna.

## Verifiche

- `npm test`, 49 test, tra cui:
  - quote delle tabelle ufficiali;
  - 100 simulazioni generate: 40 domande, quote per gruppo, K1/K2/K3 = 10/22/8, capitoli 13/12/15, ag008 esclusa;
  - copertura minima per ogni obiettivo;
  - validazione del backup con una simulazione Agile in corso;
  - scheda del revisore aggiornata.
- `npm run check:sample -- --track agile <pdf>` gira solo in locale, perché il sample non entra nel repo:
  - confronta numeri e sigle, perché il confronto fra parole non funziona fra italiano e inglese;
  - sul sample v1.3 segnala una sola coppia, ag093 ↔ #37 (numeri 10 e 11);
  - confrontata a mano: domande diverse (scegliere una tecnica contro calcolare i valori limite su un altro intervallo).
  - Le domande nuove sono state scritte dal syllabus, senza leggere il testo delle domande del sample.
- Browser integrato:
  - simulazione Agile avviata, con quote verificate sulle 40 domande estratte;
  - risposte salvate dopo il ricaricamento;
  - consegna, risultato per capitolo e revisione;
  - a 375 px nessuno scroll orizzontale; nessun errore in console.

## Da fare

- Revisione delle domande da parte di una persona certificata CTFL-AT: [REVISIONE-AGILE.md](REVISIONE-AGILE.md) (`npm run review:agile`).
- Prova esterna: i colleghi svolgono il sample ufficiale v1.3 dopo l'allenamento e confrontano il punteggio con quello della simulazione.
