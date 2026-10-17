/* Italian → English ISTQB terminology used to check translations (tests and reviewer sheet only, not bundled).
   English terms are taken from the CTFL 4.0.1 syllabus keyword lists and headings (checked on 17 October 2026). */
'use strict';
const terms=[
// [Italian pattern, required English pattern, English term as written in the syllabus]
['\\bdebugging\\b','\\bdebugging\\b','debugging'],
['\\bdifett[oi]\\b','\\bdefects?\\b','defect'],
['\\bmalfunzionament[oi]\\b|\\bfailure\\b','\\bfailures?\\b','failure'],
['\\berror[ei]\\b','\\berrors?\\b','error'],
['assenza di difetti','absence-of-defects fallacy','absence-of-defects fallacy'],
['test esaustiv','exhaustive testing','exhaustive testing'],
['test di accettazione','acceptance testing','acceptance testing'],
['analisi statica','static analysis','static analysis'],
['pianificazione dei test','test planning','test planning'],
['non funzional','non-functional testing','non-functional testing'],
['\\bfunzionale\\b','functional testing','functional testing'],
['prestazion','performance','performance efficiency'],
['confirmation testing','confirmation testing','confirmation testing'],
['regression testing|regressione','regression testing','regression testing'],
['ispezion','inspection','inspection'],
['walkthrough','walkthrough','walkthrough'],
['review informale','informal review','informal review'],
['\\bBVA\\b|valori limite','\\bBVA\\b|boundary value analysis','boundary value analysis'],
['2 valori','2-value','2-value BVA'],
['partizion','partition','equivalence partitioning'],
['copertura','coverage','coverage'],
['stima|stime','estimat','three-point estimation'],
['rischio di progetto','project risk','project risk'],
['rischio di prodotto','product risk','product risk'],
['rischio residuo','residual risk','residual risk'],
['automazione','test automation','test automation'],
['oracolo','test oracle','test oracle'],
['base di test','test basis','test basis'],
['tracciabilit','traceability','traceability'],
['criterio di ingresso','entry criteria','entry criteria'],
['criterio di uscita','exit criteria','exit criteria'],
['charter','test charter','test charter'],
['gravit','severity','severity'],
['priorit','priority','priority'],
['testing statico','static testing','static testing'],
['testing dinamico','dynamic testing','dynamic testing']
].map(([it,en,term])=>({it:new RegExp(it,'i'),en:new RegExp(en,'i'),term}));
module.exports={terms};
