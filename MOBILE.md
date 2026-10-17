# TestPilot sul telefono

Dalla versione 1.3 TestPilot si può pubblicare come app web installabile (PWA) su GitHub Pages. Il link è unico e pubblico: chiunque lo conosca può aprirlo, senza account. Dopo la prima apertura l'app funziona anche offline.

## Come funziona

- `npm run build:web` genera `sites/web/`: l'HTML autosufficiente, `manifest.webmanifest`, le icone PNG e `sw.js`. La cartella è generata e non va versionata.
- Il service worker mette in cache tutti i file. Il nome della cache deriva dall'hash del contenuto, quindi ogni modifica produce una nuova versione.
- Una nuova versione non si attiva da sola: compare la barra "È disponibile una nuova versione". Non compare mai durante una simulazione cronometrata. Toccando **Aggiorna** la pagina si ricarica e una simulazione in corso riprende con lo stesso timer.
- Lo ZIP desktop (`dist/TestPilot.html`) non contiene né il service worker né il manifest e resta invariato.

## Progressi e backup

- I progressi restano nel browser di ciascun dispositivo e non sono sincronizzati.
- Per trasferirli dal computer: Impostazioni → Esporta backup; sul telefono: Impostazioni → Importa backup.
- L'app chiede al browser lo spazio di archiviazione persistente. Se l'ultimo backup ha più di 14 giorni, la Panoramica ricorda di esportarne uno nuovo.
- **iPhone/iPad:** Safari può cancellare i dati di un sito non visitato per circa 7 giorni. L'eccezione sono le app aggiunte alla schermata Home. Per questo l'app mostra le istruzioni di installazione (Condividi → Aggiungi alla schermata Home).

## Pubblicazione

Il workflow `.github/workflows/pages.yml` parte a ogni push su `main`: esegue `npm test`, che genera anche `sites/web/`, e pubblica la cartella solo se tutti i test sono verdi.

Prima configurazione su GitHub:

1. creare un repository pubblico e fare push del branch `main`;
2. in Settings → Pages scegliere **Source: GitHub Actions**.

L'indirizzo sarà `https://<utente>.github.io/<repository>/`. Tutti i percorsi sono relativi, quindi la sottocartella funziona senza configurazioni.

## Anteprima locale

```text
npm run build:web
npm run start:web
```

Apre `http://127.0.0.1:4174`, accessibile solo da questo computer. Il service worker funziona anche su localhost.

La versione precedente, pubblicata su un sito privato (`sites/testpilot-mobile`), è esclusa dal repository e non viene più aggiornata.

La checklist di verifica su dispositivi reali è in [VERIFICA-MOBILE.md](VERIFICA-MOBILE.md).
