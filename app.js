const quizData = [
    {
        question: "1.Who is the founder of Microsoft?",
        a: "Steve Jobs",
        b: "Bill Gates",
        c: "Elon Musk",
        d: "Mark Zuckerberg",
        correct: "b"

    },
    {
        question: "2.Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "3.What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    },
    {
        question: "4.What is the capital of France?",
        a: "Paris",
        b: "Delhi",
        c: "Berlin",
        d: "Madrid",
        correct: "a"
    },
    {
        question: "5.What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Central Simple Sheets",
        correct: "b"
    },
    {
        question: "6.Where was India’s first national Museum opened??",
        a: "Delhi",
        b: "Hyderabad",
        c: "Rajasthan",
        d: "Mumbai",
        correct: "d"
    },
    {
        question: "7.Which of these is the small-scale industry in India?",
        a: "Jute Industry",
        b: "Textile Industry",
        c: "Handloom Industry",
        d: "Paper Industry",
        correct: "c"
    },
    {
        question: "8.Which of the following is a scalar quantity?",
        a: "Force",
        b: "Pressure",
        c: "Momentum",
        d: "Acceleration",
        correct: "b"
    },
    {
        question: "9.Musi is a tributary of which of the given rivers?",
        a: "Ganga",
        b: "Krishna",
        c: "Kaveri",
        d: "Chambal",
        correct: "b"
    },
    {
        question: "10.Which of the given is a disease caused by protozoa?",
        a: "Cancer",
        b: "Typhoid",
        c: "Kala-azar",
        d: "Chicken Pox",
        correct: "c"
    }
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const results = document.getElementById('results');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quiz.innerHTML = `
        <h2>${currentQuizData.question}</h2>
        <label><input type="radio" name="answer" value="a"> ${currentQuizData.a}</label>
        <label><input type="radio" name="answer" value="b"> ${currentQuizData.b}</label>
        <label><input type="radio" name="answer" value="c"> ${currentQuizData.c}</label>
        <label><input type="radio" name="answer" value="d"> ${currentQuizData.d}</label>
    `;
}

submitBtn.addEventListener('click', () => {
    const answer = document.querySelector('input[name="answer"]:checked');
    if (!answer) {
        alert('Please select an answer!');
        return;
    }

    if (answer.value === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        quiz.innerHTML = '';
        results.innerHTML = `You scored ${score} out of ${quizData.length}!`;
    }
});
