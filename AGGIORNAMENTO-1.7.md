# TestPilot 1.7 · Tutto in inglese (beta)

- Tradotte le 140 domande rimaste: le 100 Agile CTFL-AT 2014 e le 40 ITA-STQB, con le motivazioni di ogni alternativa.
- Tradotti i testi di tutti i 10 capitoli (sezioni, "attenzione a questo passaggio", esempi), compreso il laboratorio Agile, e il glossario Agile.
- In inglese ora funzionano anche il percorso Agile e la sua simulazione. Il contatore della beta mostra il totale tradotto e avvisa che le traduzioni non sono ancora state riviste.
- Le citazioni delle fonti italiane (PDF ITA-STQB, materiale Agile) restano in italiano e sono marcate `lang="it"`.
- Il capitolo Agile 1 non dice più "questo incremento non completa il syllabus", che dopo la 1.6 non era più vero.

## Come è fatto

- Le traduzioni Agile e ITA-STQB sono scritte nell'ordine originale delle alternative, con la corretta per prima.
- `content-en-rotate.js` applica a ogni traduzione la stessa rotazione della domanda italiana: le alternative restano allineate e un backup vale in entrambe le lingue.

## Verifica

- 50 test superati, in particolare:
  - ogni domanda ha la traduzione;
  - le alternative solo numeriche sono identiche nella stessa posizione in italiano e in inglese (controllo diretto della rotazione);
  - la terminologia ISTQB è vincolata anche sulle 140 domande nuove: 20 formulazioni corrette;
  - nessun residuo di italiano nei testi inglesi;
  - pagine generate in inglese, Agile compreso.
- Browser integrato:
  - 18 pagine dei due percorsi controllate in inglese, senza parole italiane fuori dalle citazioni delle fonti;
  - la simulazione Agile in inglese parte con 40 domande;
  - nessun errore in console.
- **Non verificato:** la qualità delle traduzioni, da parte di una persona certificata. Il materiale per la revisione è in [REVISIONE-EN.md](REVISIONE-EN.md).
