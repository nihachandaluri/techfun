const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector("option-container");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];

function setAvailableQuestions(){
    const totalQuestion = quiz.length;
    for(let i=0;i<totalQuestion;i++){
        availableQuestions.push(quiz[i])
    }
}
function getNewQuestion(){
    questionNumber.innerHTML = "Question" + (questionCounter + 1) + "of" + quiz.length;
}
window.onload = function(){
    setAvailableQuestions();
    getNewQuestion();
}
