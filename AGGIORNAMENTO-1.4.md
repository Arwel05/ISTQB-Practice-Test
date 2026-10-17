# TestPilot 1.4 · Inglese in beta

## Cosa cambia per chi usa l'app

- Nuovo selettore della lingua: pulsante **EN/IT** nella barra in alto e pannello "Lingua · Language" in Impostazioni. La scelta vale per il dispositivo e non tocca progressi né backup.
- In inglese l'interfaccia è completa. Sono tradotti tutti i titoli dei capitoli, il glossario e **10 domande pilota** su 144 (q002, q006, q024, q028, q035, q040, q044, q062, q067, q080), che coprono i 6 capitoli CTFL.
- In inglese gli allenamenti usano solo le domande tradotte, con un contatore "10 of 144" sempre visibile. La simulazione resta disponibile solo in italiano, perché servono 40 domande con le quote per capitolo.
- Una domanda non ancora tradotta, ad esempio in una sessione iniziata in italiano, compare in italiano con l'etichetta "Italian only". Anche le sintesi dei capitoli restano in italiano, con un avviso.
- In italiano il testo delle pagine è identico alla 1.3. Unica differenza: i conteggi pari a 1 ora sono al singolare ("1 domanda", "1 termine").

## Come è fatto

- `src/i18n.js` contiene la funzione `t('chiave', {parametri})`. I dizionari sono `src/locale-it.js` e `src/locale-en.js`, con le stesse chiavi e gli stessi segnaposto.
- `src/content-en.js` sovrappone l'inglese ai contenuti, indicizzato per ID. Le alternative seguono l'ordine mostrato in italiano: un backup salva la *posizione* della risposta, quindi resta valido in entrambe le lingue.
- `src/terms.js` è la tabella IT→EN dei termini, presa dalle liste "Keywords" e dai titoli del syllabus CTFL 4.0.1, verificata il 17 ottobre 2026. Ad esempio: *Absence-of-defects fallacy*, *2-value BVA*, *three-point estimation* con E = (a + 4*m + b) / 6.
- `npm run review:en` genera [REVISIONE-EN.md](REVISIONE-EN.md) per il revisore.

## Verifica

- **38 test superati.** Gli 11 nuovi controllano:
  - le chiavi e i segnaposto dei dizionari;
  - che ogni chiave usata dall'interfaccia esista;
  - la parità tra le domande italiane e quelle inglesi;
  - i valori numerici delle risposte;
  - la terminologia ISTQB (oltre 30 controlli);
  - i residui di italiano nei testi inglesi;
  - la generazione di 11 pagine in entrambe le lingue senza chiavi mancanti;
  - il comportamento della beta;
  - che la scheda del revisore sia aggiornata.
- **Interfaccia italiana confrontata con la 1.3** sulle stesse 11 pagine: testo identico, a parte il pulsante EN e il pannello Lingua.
- **Browser integrato:**
  - cambio di lingua e allenamento in inglese sulle 10 domande;
  - simulazione disattivata in inglese;
  - ritorno all'italiano a sessione aperta;
  - ricerca nel glossario;
  - barra di aggiornamento in inglese;
  - 9 pagine a 375 px senza scroll orizzontale.
- **Non verificato:** la qualità della traduzione da parte di una persona certificata CTFL. Serve prima di estendere la traduzione oltre il pilota.
