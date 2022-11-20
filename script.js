const quizData = [{
        question: "Q1: Documents, Movies, Images and Photographs etc are stored at a?",
        a: "application server",
        b: "web server",
        c: "print server",
        d: "file server",
        correct: "d",
    },
    {
        question: "Q2:Technology used to provide internet by transmitting data over wires of telephone network is ?",
        a: "transmitter",
        b: "DSL",
        c: "HHL",
        d: "Diodes",
        correct: "b",
    },
    {
        question: "Q3:In which of the following form, data is stored in computer ?",
        a: "Binary",
        b: "Decimal",
        c: "Hectadecimal",
        d: "octadecimal",
        correct: "a",
    },
    {
        question: "Q4:  Where is RAM located ?",
        a: "expansion board",
        b: "External drive",
        c: "Mother board",
        d: "All the above",
        correct: "c",
    },
    {
        question: "Q5: Who was the founder of Bluetooth? ",
        a: "Ecrison",
        b: "Martin Cooper",
        c: "Steeve",
        d: "Apple",
        correct: "a",
    },
    {
        question: "Q6:AD,EH,IL,__,QT,UX?",
        a: "MP",
        b: "MN",
        c: "MO",
        d: "MQ",
        correct: "a",
    },
    {
        question: "Q7: mechanic:wrench::surgeon",
        a: "probes",
        b: "stethoscope",
        c: "scalpel",
        d: "x-ray",
        correct: "c",
    },
    {
        question: "Q8:Find the odd one out of the series 53,59,61,87",
        a: "53",
        b: "59",
        c: "61",
        d: "87",
        correct: "d",
    },
    {
        question: "Q9:What does LG stands for in LG Electronics",
        a: "Lucky goldster",
        b: "Lucky goldstar",
        c: "Luck goldster",
        d: "Lucky golden",
        correct: "b",
    },
    {
        question: "Q10:If Computer-QSTRVYUP and Science-XQZUWQU then rest-?",
        a: "RUXY",
        b: "RUXT",
        c: "PUXY",
        d: "PXYU",
        correct: "c",
    },
];

const quiz = document.getElementById('.quiz');
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if (answer) {
        if (answer == quizData[currentQuiz].correct) {
            let charecter = document.getElementById('charecter');
            console.log("Moved")
            charecter.style.left = charecter.getBoundingClientRect().left + 50 + 'px';
        }
    }
    currentQuiz++

    if (currentQuiz < quizData.length) {
        loadQuiz()

    }


})