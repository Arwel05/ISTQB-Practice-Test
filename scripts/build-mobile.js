// Build a separate deployable directory; never include backups or source PDFs.
const fs=require("node:fs"),path=require("node:path");
const root=path.resolve(__dirname,"..");
const html=fs.readFileSync(path.join(root,"dist/TestPilot.html"),"utf8");
const mobile=html.replace("</style>",`\n@media(max-width:580px){input,select{font-size:16px!important}.sidebar{height:calc(64px + env(safe-area-inset-bottom));padding-bottom:env(safe-area-inset-bottom)}.main{padding-bottom:calc(90px + env(safe-area-inset-bottom))}.option{min-height:48px}.book-btn{min-height:44px}.feedback,.review-item{overflow-wrap:anywhere}.topbar .pill{display:none}.question-meta{flex-wrap:wrap}.footer{flex-wrap:wrap}}\n</style>`)
 .replace("Offline-ready · nessun account","Progressi sul dispositivo")
 .replace("TESTPILOT · Allenamento indipendente", "TESTPILOT MOBILE · Allenamento indipendente");
fs.mkdirSync(path.join(root,"sites/testpilot-mobile/dist"),{recursive:true});
fs.writeFileSync(path.join(root,"sites/testpilot-mobile/dist/index.html"),mobile);
console.log("Build mobile: 144 domande, nessun dato personale incluso.");
