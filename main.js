//question bank
const questions = [
  {
    question: "Who is the greatest footballer?", 
    id: 1,
    a: "Messi", 
    b: "Ronaldo", 
    c: "Benzema", 
    d: "Rooney", 
    correct: "a",
    },
    {
      question: "What is the most used programming language in 2019?",
       id: 2,
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        id: 3,
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        id: 4,
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        id: 5,
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    }];
//selecting elements
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const container = document.querySelector(".container");
const quiz = document.querySelector(".quiz");
const remark = document.querySelector(".remark");
const timeQuiz = document.querySelector(".time");
const questionNumber = document.querySelector(".question-number");

//initial score = 0 and initial question i = 0 and time
var score = 0;
var i = 0;
var time = 30;
//start button for starting the quiz
function start() {
deselectAnswers();
    i = 0;
    time = 30;
    startQuiz();
    score = 0;
				container.classList.add("hide");
				quiz.classList.remove("hide");				
};

//start quiz
function startQuiz() {
questionEl.innerText = questions[i].question;
    a_text.innerText = questions[i].a;
    b_text.innerText = questions[i].b;
    c_text.innerText = questions[i].c;
    d_text.innerText = questions[i].d;
    questionNumber.innerText = `${questions [i].id}/${questions.length}`
};

//get the answer id clicked by a user
function getAnswer() {
answerEls.forEach(answerEl => {
				if(answerEl.checked) {
						answer = answerEl.id;
				}
});
return answer;
}
//clearn answer before going to the next question
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

//return former answers selected
function selectedAnswers() {
				const answer = getAnswer();
				answerEls.forEach((answerEl) => {
        if (answerEl.id === answer) {
        				answerEl.checked = true;
        }
    });
}

	//move to the next question with next		
function next() {
const answer = getAnswer();
if (answer) {
				if (answer === questions[i].correct) {
				score++;													
				}		
				i++;
				if (i === questions.length) { 							
								container.classList.remove("hide");
    container.classList.add("show");   
				quiz.classList.add("hide");
				remark.innerText = `You score ${score} out of ${questions.length} questions`
				}	 else {		     	
								startQuiz();
				}		
  }		
  deselectAnswers();
}

	
//go back to the previous question with prev
function prev() {
   i--;
   score--;
  if (i < 0) {
    i = 0;
    score = 0;
    alert("This is the begining of the questions");
  }
  startQuiz();
  selectedAnswers();
}

//start button should appear first.
window.onload = function() {
				container.classList.add("show");
				quiz.classList.add("hide");
}

var inter = setInterval(function() {
				time--;
timeQuiz.innerHTML = `<i class="fa-solid fa-stopwatch"></i>${time}`;
				if(time === 0) {
							time = 0;							
							container.classList.remove("hide");
    container.classList.add("show");   
				quiz.classList.add("hide");
				remark.innerText = `You score ${score} out of ${questions.length} questions`
				}
}, 1000);
