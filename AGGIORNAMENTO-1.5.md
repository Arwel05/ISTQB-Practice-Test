# TestPilot 1.5 · Simulazione anche in inglese

## Cosa cambia per chi usa l'app

- In inglese sono tradotte **tutte le 80 domande CTFL** (q001–q080), non più solo le 10 domande pilota. Il contatore ora dice "80 of 144".
- **La simulazione funziona anche in inglese.** Usa solo domande tradotte e rispetta le quote per capitolo 8/6/4/11/9/2.
- Le domande Agile e ITA-STQB e le schede dei capitoli restano in italiano. Negli allenamenti in inglese non vengono proposte.
- Le 10 domande pilota sono invariate.
- In italiano il testo delle pagine è identico alla 1.4, tranne due righe in Impostazioni:
  - il testo del pannello Lingua, che ora descrive la nuova copertura;
  - la riga "Informazioni", con la versione 1.5.0.

## Come è fatto

- `src/content-en.js` contiene le 80 domande CTFL, ordinate per ID. Le alternative seguono l'ordine mostrato in italiano e `answer` non viene mai sovrascritto, quindi i backup restano validi.
- `src/core.js` espone le quote (`WEIGHTS`) e `examReady(bank)`.
- `src/app.js` usa `examReady` sul banco della lingua attiva:
  - in italiano la simulazione è sempre disponibile;
  - in inglese è disponibile solo se le domande tradotte coprono le quote;
  - la simulazione pesca dallo stesso banco, quindi in inglese solo da domande tradotte.
- `src/terms.js` passa da 36 a 75 regole, prese dalle liste "Keywords" e dal testo del syllabus CTFL 4.0.1. Il testo è stato estratto dal PDF ufficiale con pypdf il 17 ottobre 2026. Alcuni termini aggiunti:
  - tecniche: *equivalence partitioning*, *decision table testing*, *state transition testing*, *statement coverage*, *branch coverage*, *error guessing*, *checklist-based testing*, *exploratory testing*;
  - gestione: *test pyramid*, *testing quadrants*, *risk likelihood*, *test completion report*, *configuration management*;
  - ciclo di vita: *component integration testing*, *system integration testing*, *maintenance testing*, *individual review*, *moderator*.
- La regola sulla *absence-of-defects fallacy* ora scatta solo quando il testo italiano enuncia il principio. Un semplice "assenza di difetti" si traduce alla lettera.
- `npm run review:en` genera una scheda con tutte le 80 domande. Le 10 del pilota sono marcate «pilota».

## Verifica

- **`npm test`: 40 test superati.** Rispetto alla 1.4:
  - il controllo di parità copre esattamente q001–q080;
  - un nuovo test controlla le quote del banco inglese e che 20 simulazioni consecutive peschino solo domande tradotte;
  - i valori numerici sono confrontati su 14 domande di calcolo;
  - la terminologia viene controllata 156 volte sulle domande, più il glossario;
  - i test della beta ora si aspettano la simulazione attiva in inglese.
- **Interfaccia italiana confrontata con la 1.4**: 12 pagine generate dallo stesso stato. Il testo è identico, salvo le due righe di Impostazioni descritte sopra.
- **Browser (`npm run start:web`):**
  - la simulazione in inglese parte e propone 40 domande con quote 8/6/4/11/9/2, tutte tradotte e senza testo marcato come italiano;
  - consegna e risultati funzionano in inglese;
  - tornando all'italiano la simulazione resta disponibile.
- **Non verificato:** la revisione della traduzione da parte di una persona certificata CTFL. Al momento dell'estensione [REVISIONE-EN.md](REVISIONE-EN.md) non conteneva note del revisore. Le 80 domande vanno riviste prima di presentare l'inglese come definitivo.
