# Verifica della versione 1.0

Eseguita il 16 ottobre 2026.

## Controlli automatici: 10 superati

- Integrità di 80 domande, identificativi unici, quattro alternative, spiegazioni e 64 riferimenti LO.
- 100 generazioni di esame: 40 domande uniche e distribuzione 8/6/4/11/9/2.
- Risposte dei principali esempi numerici e correttezza della rotazione delle opzioni.
- Priorità degli errori, intervalli di ripasso, filtro per capitolo e stato iniziale senza metriche inventate.
- Round-trip del backup con sessione in corso e scadenza invariata.
- Rifiuto di contatori incoerenti, ID sconosciuti, scelte impossibili e sessioni duplicate.
- Ricalcolo del punteggio storico in importazione.
- Scadenza prima/al/dopo il limite; consegna idempotente; risposte mancanti conteggiate una volta.
- Nessun doppio conteggio alla consegna di un allenamento già corretto.

## Verifiche nel browser integrato

- Dashboard a 1440 × 1050 e vista mobile a 390 × 844, senza overflow orizzontale sulla dashboard.
- Allenamento filtrato sul capitolo 6, riduzione automatica a 4 domande.
- Risposta errata e corretta, spiegazioni, sicurezza percepita e preferito.
- Ricaricamento alla domanda 2 e ripristino della sessione.
- Completamento con risultato verificato 3/4.
- Simulazione da 75 minuti con 40 pulsanti di navigazione, risposta e domanda segnata.
- Passaggio alla domanda 40 e ricaricamento, mantenendo timer e risposte.
- Nessuna spiegazione visualizzata prima della consegna.
- Consegna con 39 risposte mancanti e punteggio verificato 1/40.
- Ricerca nel glossario.
- Esportazione JSON su disco e reimportazione con dialogo di conferma, nel profilo di prova separato su localhost.
- Nessun errore/warning runtime rilevato nel controllo del flusso quiz/simulazione.

## Limiti della verifica

Il browser integrato consente soltanto HTTP/HTTPS e ha rifiutato la navigazione `file://`: l'apertura diretta del file locale non è stata verificata in quella superficie. È stato verificato tramite server locale lo stesso HTML autosufficiente distribuito, senza fetch, moduli ES, risorse CDN o dipendenze runtime. Le differenze di persistenza per file locali dipendono dal browser e sono segnalate nelle istruzioni.

Safari/iOS, Firefox e lettori di schermo non sono stati provati. La validità didattica non è certificata da questi controlli software; prima di un uso formativo formale è opportuna una revisione specialistica della banca.
