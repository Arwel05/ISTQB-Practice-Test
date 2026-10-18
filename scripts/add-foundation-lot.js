'use strict';
// Maintenance helper: appends an Italian lot to src/foundation-plan.js and its English rows to src/content-en-foundation.js.
// Usage: node scripts/add-foundation-lot.js <italian-lot.txt> <english-rows.txt>
const fs=require('node:fs'),path=require('node:path');
const [itFile,enFile]=process.argv.slice(2);
const plan=path.join(__dirname,'../src/foundation-plan.js'),en=path.join(__dirname,'../src/content-en-foundation.js');
let s=fs.readFileSync(plan,'utf8');if(!s.includes('// LOTS'))throw Error('marker // LOTS missing');
fs.writeFileSync(plan,s.replace('// LOTS',()=>fs.readFileSync(itFile,'utf8')+'// LOTS'));
let e=fs.readFileSync(en,'utf8');const anchor='\n};\nroot.TestPilotEnAuthored';if(!e.includes(anchor))throw Error('English anchor missing');
fs.writeFileSync(en,e.replace(anchor,()=>',\n'+fs.readFileSync(enFile,'utf8').trim()+anchor));
console.log('Lotto aggiunto.');
