(function(root){
const course=q=>q.chapter>=7&&q.chapter<=9?'agile':'foundation';
const session=s=>{const set=new Set(s.ids.map(id=>course(root.TrainerData.questions.find(q=>q.id===id))));return set.size===1?[...set][0]:'legacy';};
root.TrainerTracks={course,session,view(id){const d=root.TrainerData;return {...d,questions:d.questions.filter(q=>course(q)===id),chapters:d.chapters.filter(ch=>course({chapter:ch.id})===id),glossary:id==='agile'?[
['Whole-team approach','La qualità è una responsabilità condivisa fra business, sviluppo e testing.'],['User story','Un bisogno espresso dal punto di vista di un utente, discusso e confermato con esempi.'],['Acceptance criteria','Condizioni verificabili per accettare una storia.'],['TDD','Test che fallisce, implementazione minima, refactoring con test verdi.'],['ATDD','Esempi di accettazione concordati prima dell’implementazione.'],['BDD','Comprensione condivisa del comportamento attraverso esempi.'],['Continuous integration','Integrazione frequente delle modifiche con controlli automatici e feedback.'],['Retrospective','Ispezione del processo e scelta di miglioramenti verificabili.'],['WIP limit','Limite al lavoro contemporaneamente in corso.'],['Test charter','Missione e ambito di una sessione esplorativa.']
]:d.glossary};}};
})(globalThis);
