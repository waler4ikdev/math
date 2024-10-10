const inequalityElement = document.getElementById('inequality');
const answerElement = document.getElementById('answer');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');
const trueButton = document.getElementById('trueButton');
const falseButton = document.getElementById('falseButton');

let score = 0;
let total = 0;
let correctAnswer = false;

function generateInequality() {
    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 100) + 1;
    const operator = Math.random() > 0.5 ? '>' : '<';

    const correct = eval(`${a} ${operator} ${b}`);
    correctAnswer = Math.random() > 0.5 ? correct : !correct;

    inequalityElement.textContent = `${a} ${operator} ${b}`;
    answerElement.textContent = correctAnswer ? 'Истинно' : 'Ложно';
}

function updateScore(isCorrect) {
    total++;
    if (isCorrect) {
        score++;
    }
    scoreElement.textContent = score;
    totalElement.textContent = total;
}

trueButton.addEventListener('click', () => {
    updateScore(correctAnswer);
    generateInequality();
});

falseButton.addEventListener('click', () => {
    updateScore(!correctAnswer);
    generateInequality();
});

generateInequality();
