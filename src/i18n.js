/* Language layer: dictionaries come from locale-*.js; the choice is a per-device preference, separate from progress and backups. */
(function(root){
'use strict';
const KEY='testpilot.lang',LANGS=['it','en'],LOCALES={it:'it-IT',en:'en-GB'};
const dicts=root.TestPilotLocales||{};
let lang='it';
try{const saved=root.localStorage&&root.localStorage.getItem(KEY);if(LANGS.includes(saved))lang=saved;}catch(e){}
// Missing keys fall back to Italian, then to the key itself so gaps stay visible in tests. With n === 1, a `key.one` variant wins.
function t(key,params){
 if(params&&params.n===1&&((dicts[lang]&&dicts[lang][key+'.one'])??(dicts.it&&dicts.it[key+'.one']))!==undefined)key+='.one';
 const s=(dicts[lang]&&dicts[lang][key])??(dicts.it&&dicts.it[key]);if(s===undefined)return key;
 return params?s.replace(/\{(\w+)\}/g,(m,k)=>k in params?String(params[k]):m):s;
}
function setLang(next){if(!LANGS.includes(next))return;lang=next;try{root.localStorage.setItem(KEY,next);}catch(e){}if(root.document)root.document.documentElement.lang=next;}
if(root.document)root.document.documentElement.lang=lang;
root.TestPilotI18n={t,setLang,langs:LANGS,get lang(){return lang;},get locale(){return LOCALES[lang];}};
})(typeof globalThis!=='undefined'?globalThis:this);
