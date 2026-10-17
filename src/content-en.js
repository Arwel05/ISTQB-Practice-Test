/* English overlay (beta), keyed by stable question/chapter IDs. Options follow the order shown in Italian, so saved answer indexes mean the same in both languages.
   Terminology follows the ISTQB CTFL 4.0.1 syllabus; wording is original. Pilot set pending review by a CTFL-certified reviewer. */
(function(root){
'use strict';
const D=root.TrainerData;
const questions={
q002:{prompt:'A test reveals an incorrect total. The developer finds a wrong formula and fixes it. What is this second activity called?',options:['Acceptance testing','Automated static analysis','Test planning','Debugging'],explanation:'Finding the cause in the code and fixing it is debugging. The test revealed the problem; a subsequent test can confirm the fix.'},
q006:{prompt:'A system meets all its specifications, but users cannot get their work done. Which principle best explains the problem?',options:['Defects are always distributed evenly','Exhaustive testing is always possible','Every defect always causes a failure','Absence-of-defects fallacy'],explanation:'Even a product that conforms to its specifications may not meet users’ real needs. Verifying the requirements is not enough without also considering use and value.'},
q024:{prompt:'You measure response time with 500 concurrent users. What type of testing are you performing?',options:['Informal review','Non-functional testing (performance)','Functional testing only','Confirmation testing only'],explanation:'Performance describes how well the system behaves. The test type does not, on its own, determine the test level at which it is performed.'},
q028:{prompt:'The login fix might affect password recovery. Which activity looks for this side effect?',options:['Removing tests that have already passed','Regression testing','Confirmation testing of the login only','Analysis of the initial requirements only'],explanation:'Regression testing looks for unintended consequences of changes. Re-testing only the original defect does not check the related functionality.'},
q035:{prompt:'Which review type is normally the most formal, with defined criteria, roles and collection of metrics?',options:['An ad hoc chat exchange','Any walkthrough without preparation','Inspection','Informal review'],explanation:'An inspection follows a formalised process. A walkthrough is generally led by the author and is not automatically equivalent to an inspection.'},
q040:{prompt:'A field accepts integers from 10 to 20 inclusive. Which set achieves 2-value BVA coverage of both boundaries?',options:['8, 10, 20, 22','9, 10, 20, 21','10, 15, 20','9, 11, 19, 21'],explanation:'Each boundary separates two partitions: 9/10 at the lower boundary and 20/21 at the upper one. 2-value BVA needs the two values on either side of each boundary.'},
q044:{prompt:'An account changes from Active to Locked after three consecutive wrong passwords; a correct login resets the count. Starting from Active, which sequence locks it?',options:['Wrong, wrong, correct','Wrong, wrong, wrong','Wrong, correct, wrong','Correct, wrong, correct'],explanation:'Locking depends on three consecutive login errors. A successful login resets the count and breaks the sequence.'},
q062:{prompt:'Most optimistic estimate 4 hours, most likely 7, most pessimistic 16. Using three-point estimation, E = (a + 4*m + b) / 6, what is the estimate?',options:['9 hours','7 hours','27 hours','8 hours'],explanation:'(4 + 4×7 + 16) / 6 = 48 / 6 = 8. The simple average of the three values would give 9, but that is not the weighted formula required.'},
q067:{prompt:'Which of these is a project risk, as distinct from a product risk?',options:['A user can read other users’ data','Checkout charges a payment twice','The test environment will not be ready on time','The system calculates taxes incorrectly'],explanation:'A late test environment threatens the plan and the delivery. The other examples concern problematic characteristics or behaviour of the product.'},
q080:{prompt:'Which of these is a risk of test automation?',options:['Reducing repetitive work','Underestimating the maintenance and reliability of the tests','Having repeatable checks','Getting faster feedback'],explanation:'Brittle suites, underestimated costs and over-reliance can reduce the value of test automation. The other options are potential benefits.'}
};
const chapters={
1:{title:'Fundamentals of Testing',short:'Fundamentals',intro:'Learn to think like a tester before choosing a technique.'},
2:{title:'Testing Throughout the Software Development Lifecycle',short:'Development lifecycle',intro:'Choose the right test at the right time.'},
3:{title:'Static Testing',short:'Static testing',intro:'Find problems before the software is even executed.'},
4:{title:'Test Analysis and Design',short:'Test techniques',intro:'Turn rules and scenarios into well-reasoned test cases.'},
5:{title:'Managing the Test Activities',short:'Test management',intro:'Use time, evidence and risks to make decisions.'},
6:{title:'Test Tools',short:'Tools',intro:'Choose tools according to the problem.'},
7:{title:'Agile · Values and collaboration',short:'Agile: development',intro:'Supplementary Agile Tester material: values, feedback and planning. Not part of the CTFL mock exam.'},
8:{title:'Agile · Quality during the iteration',short:'Agile: practices',intro:'Continuous testing, regression, technical feedback and communicating risk.'},
9:{title:'Agile · Methods, risks and tools',short:'Agile: techniques',intro:'Tell TDD, ATDD and BDD apart, choose techniques and justify priorities.'},
10:{title:'ITA-STQB questionnaire · Reviewed set',short:'ITA-STQB v5',intro:'40 adaptations of the supplied questionnaire. Editorial solutions, not an official answer key. Practice only, outside the CTFL mock exam.'}
};
const glossary=[
['Error','A human action that produces an incorrect result.'],
['Defect','A flaw in a work product, such as a wrong formula or an incorrect requirement.'],
['Failure','Observed behaviour that does not meet what is required.'],
['Test oracle','The source you use to determine the expected result: a rule, a model or a trusted reference.'],
['Testware','The work products of testing, such as test cases, test data, scripts and results.'],
['Test basis','The information used to analyse and design tests.'],
['Traceability','The links between items such as requirements, tests, results and defects.'],
['Confirmation testing','Checking that the original problem has been fixed.'],
['Regression testing','Looking for unintended side effects after a change.'],
['Equivalence partition','A group of values that are expected to be handled in the same way.'],
['BVA','Boundary value analysis: designing tests around the boundaries of ordered partitions.'],
['Coverage','How much of the identified items has been exercised, according to an explicit measure.'],
['Test charter','A short mission that guides an exploratory testing session.'],
['Residual risk','The part of a risk that remains after mitigation actions.'],
['Severity','How serious the consequences of a defect are.'],
['Priority','How urgently action is needed compared with other work.'],
['Entry criteria','Conditions used to decide whether to start an activity.'],
['Exit criteria','Conditions used to decide whether an activity can be completed.'],
['Baseline','An agreed version of configuration items, which can be changed only through a controlled process.'],
['ATDD','Acceptance tests agreed before implementation to guide development.'],
['TDD','Developing code driven by small tests, in cycles of test, implementation and refactoring.'],
['Shift left','Moving test activities earlier in the development lifecycle where appropriate.'],
['Static testing','Examining a work product without executing the software under test.'],
['Dynamic testing','Testing that requires executing the software under test.']
];
D.en={questions,chapters,glossary};
})(typeof globalThis!=='undefined'?globalThis:this);
