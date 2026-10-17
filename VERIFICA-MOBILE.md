# Verifica della versione web 1.3

## Già verificato (17 ottobre 2026)

### Test automatici: 26 superati (`npm test`)

- Nell'output web ci sono solo HTML, manifest, icone e service worker: nessun PDF, backup o progresso.
- Il manifest è installabile; ogni icona PNG ha le dimensioni dichiarate (192, 512, maskable 512, Apple 180).
- Il service worker mette in cache esattamente i file generati, con percorsi relativi validi nella sottocartella di GitHub Pages.
- La versione della cache è stabile se il contenuto non cambia e cambia per ogni modifica.
- I file su disco coincidono con un build nuovo.
- Lo ZIP desktop non contiene service worker né manifest.
- Il promemoria del backup scatta solo dopo 14 giorni e solo se esistono sessioni.
- Il service worker si registra solo su https o localhost; su `file://` non si registra.

### Browser integrato (Chromium) su `http://localhost:4174`

- Service worker attivo e pagina controllata; 7 file in cache.
- Server spento e pagina ricaricata: l'app si apre, l'allenamento parte, la risposta viene verificata e salvata.
- Nuova versione pubblicata: la barra di aggiornamento compare. Durante una simulazione è nascosta e ricompare sulla Panoramica.
- **Aggiorna** ricarica la pagina, elimina la vecchia cache e mantiene la simulazione in corso (stesso ID, scadenza e risposte). Provato anche con il passaggio reale 1.2 → 1.3.
- A 375 × 812 nessuna delle 9 pagine principali ha scroll orizzontale. Ho controllato in screenshot la Panoramica e il pannello di installazione nella variante iOS.

### Non verificato

- Il prompt nativo di installazione (Android/Chrome): il browser integrato non lo mostra.
- Android su un dispositivo fisico.
- Lighthouse: va eseguito sul sito pubblicato (vedi sotto).

## Da fare sui telefoni veri

Servono almeno un iPhone con Safari e un Android con Chrome. Chi esegue la verifica annota dispositivo, versione del sistema e data.

- **iPhone:** iPhone 16 Pro, iOS 26.6.2, Safari. 17 ottobre 2026, sito `arwel05.github.io/ISTQB-Practice-Test`. Esito riferito dal proprietario: funziona. Il passo 5 non è stato provato; l’8 richiede un rilascio successivo all’installazione.
- **Android:** da fare.

| # | Passo | Atteso | iPhone | Android |
|---|-------|--------|--------|---------|
| 1 | Aprire il link pubblico | La Panoramica si carica senza zoom e la barra di navigazione inferiore non copre i contenuti | ok | |
| 2 | Impostazioni → "Usa TestPilot sul telefono" | iOS: istruzioni Condividi → Aggiungi a Home. Android: pulsante Installa o istruzioni dal menu | ok | |
| 3 | Installare e aprire dall'icona | Si apre a schermo intero con icona verde e nome TestPilot | ok | |
| 4 | Attivare la modalità aereo e riaprire l'app | Funziona: allenamento, glossario e capitoli | ok | |
| 5 | Sul PC: Esporta backup. Sul telefono: Importa backup | Nome, sessioni e domande affrontate corrispondono | non provato | |
| 6 | Avviare una simulazione, rispondere a 3 domande, chiudere l'app e riaprirla | Riprende con timer e risposte | ok | |
| 7 | Toccare le risposte e il segnalibro | Area di tocco comoda, nessuna doppia selezione | ok | |
| 8 | Dopo un nuovo rilascio, riaprire l'app | Compare "È disponibile una nuova versione"; Aggiorna non perde dati | in attesa di un nuovo rilascio | |
| 9 | Ruotare in orizzontale | Nessun testo tagliato | ok | |

## Lighthouse sul sito pubblicato

Da Chrome desktop: DevTools → Lighthouse → Mobile, categorie Prestazioni, Accessibilità e Best practice. Allegare qui i punteggi e gli eventuali avvisi. In alternativa, se Node è installato:

```text
npx lighthouse https://<utente>.github.io/<repository>/ --only-categories=performance,accessibility,best-practices --view
```
