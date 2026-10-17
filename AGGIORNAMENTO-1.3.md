# TestPilot 1.3 · Versione web installabile

- Nuovo build `npm run build:web` per GitHub Pages: app installabile (PWA), utilizzabile offline dopo la prima apertura.
- Aggiornamenti con barra di conferma, mai mostrata durante una simulazione cronometrata; la simulazione sopravvive all'aggiornamento.
- Le regole mobile sono ora nel CSS sorgente (anche nello ZIP desktop), con supporto all'area sicura di iPhone (`viewport-fit=cover`).
- Impostazioni → "Usa TestPilot sul telefono": istruzioni per iOS, pulsante di installazione su Android e data dell'ultimo backup.
- Panoramica: promemoria di backup dopo 14 giorni senza esportazioni e invito a installare l'app sui dispositivi touch.
- Richiesta di archiviazione persistente al browser.
- Workflow GitHub Actions: pubblica solo se `npm test` passa.
- Sostituito `build-mobile.js`; la vecchia cartella del sito privato è esclusa dal repository.
- 26 test automatici (8 nuovi). Domande e logica di punteggio sono invariate.
