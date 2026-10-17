# TestPilot sul cellulare

La distribuzione web è in `sites/testpilot-mobile`, separata dallo ZIP desktop. Include soltanto l’HTML autosufficiente e la configurazione del sito, non i PDF, i backup o i progressi.

Sito: https://testpilot-istqb-trainer.arwel05.chatgpt.site

Accesso privato del proprietario: usare lo stesso account sul telefono. Non è un link pubblico condivisibile con chiunque. La pubblicazione non modifica automaticamente il pubblico del sito.

I progressi restano nel browser del dispositivo e non sono sincronizzati. Per trasferirli dal computer: Impostazioni → Esporta backup; sul telefono: Impostazioni → Importa backup. L’importazione sostituisce i dati attuali dopo conferma.

Questa versione richiede una connessione per aprire la pagina. Non è una PWA con disponibilità offline garantita. L’HTML contiene tutte le risorse didattiche; i collegamenti alle fonti richiedono internet. Le funzionalità non sono state provate su un dispositivo fisico iOS/Android.

Per rigenerare dopo una modifica: `npm run build`, poi `node scripts/build-mobile.js`. Pubblicare dal checkout `sites/testpilot-mobile` usando il project_id già salvato in `.openai/hosting.json`; non creare un nuovo sito.

Adattamenti: campi a 16 px su mobile, spazio per l’area sicura inferiore, pulsanti di risposta di almeno 48 px e gestione delle stringhe lunghe nelle spiegazioni. Rimangono disponibili tutte le 144 domande.
