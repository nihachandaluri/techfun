const  quizDB = [
    {
        question: "Q1: Documents, Movies, Images and Photographs etc are stored at a?",
        a:"application server",
        b:"web server",
        c:"print server",
        d:"file server",
        ans: "ans4"
    },
    {
        question: "Q2:Technology used to provide internet by transmitting data over wires of telephone network is ?",
        a:"transmitter",
        b:"DSL",
        c:"HHL",
        d:"Diodes",
        ans: "ans2"
    },
    {
        question: "Q3:In which of the following form, data is stored in computer ?",
        a:"Binary",
        b:"Decimal",
        c:"Hectadecimal",
        d:"octadecimal",
        ans: "ans1"
    },
    {
        question: "Q4:  Where is RAM located ?",
        a:"expansion board",
        b:"External drive",
        c:"Mother board",
        d:"All the above",
        ans: "ans3"
    },
    {
        question: "Q5: Who was the founder of Bluetooth? ",
        a:"Ecrison",
        b:"Martin Cooper",
        c:"Steeve",
        d:"Apple",
        ans: "ans1"
    },
    {
        question: "Q6:AD,EH,IL,__,QT,UX?",
        a:"MP",
        b:"MN",
        c:"MO",
        d:"MQ",
        ans: "ans1"
    },
    {
        question: "Q7: mechanic:wrench::surgeon",
        a:"probes",
        b:"stethoscope",
        c:"scalpel",
        d:"x-ray",
        ans: "ans3"
    },
    {
        question: "Q8:Find the odd one out of the series 53,59,61,87",
        a:"53",
        b:"59",
        c:"61",
        d:"87",
        ans: "ans4"
    },
    {
        question: "Q9:What does LG stands for in LG Electronics",
        a:"Lucky goldster",
        b:"Lucky goldstar",
        c:"Luck goldster",
        d:"Lucky golden",
        ans: "ans2"
    },
    {
        question: "Q10:If Computer-QSTRVYUP and Science-XQZUWQU then rest-?",
        a:"RUXY",
        b:"RUXT",
        c:"PUXY",
        d:"PXYU",
        ans: ""
    }
];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

let questionCount = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    
}

loadQuestion();
