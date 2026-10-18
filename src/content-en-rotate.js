/* Moves the authored-order English overlays (content-en-agile.js, content-en-ita.js) into D.en.questions, in the order shown in Italian.
   The Italian bank rotates each question so that the authored first option lands at q.answer; the same cyclic shift applied to the English
   arrays keeps every option, and every saved answer index, aligned between the two languages. */
(function(root){
'use strict';
const D=root.TrainerData,rows=root.TestPilotEnAuthored||{};
for(const [id,[prompt,options,reasons,suffix]] of Object.entries(rows)){
 const q=D.questions.find(x=>x.id===id);if(!q)continue;
 const s=(4-q.answer)%4,rotate=a=>a.slice(s).concat(a.slice(0,s));
 D.en.questions[id]={prompt,options:rotate(options),reasons:rotate(reasons),explanation:reasons[0]+(suffix?' '+suffix:'')};
}
delete root.TestPilotEnAuthored;
})(typeof globalThis!=='undefined'?globalThis:this);
