const inequalityElement = document.getElementById('inequality');
const answerElement = document.getElementById('answer');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');
const trueButton = document.getElementById('trueButton');
const falseButton = document.getElementById('falseButton');

let score = 0;
let total = 0;
let correctAnswer = false;

// Генерация случайного линейного или квадратного неравенства
function generateInequality() {
    const type = Math.random() > 0.5 ? 'linear' : 'quadratic';  // Линейное или квадратное
    let inequality = '';
    let xValue = Math.floor(Math.random() * 20) - 10; // Случайное значение x от -10 до 10

    if (type === 'linear') {
        // Генерация линейного неравенства: ax + b > c
        const a = Math.floor(Math.random() * 10) - 5;
        const b = Math.floor(Math.random() * 20) - 10;
        const c = Math.floor(Math.random() * 20) - 10;
        inequality = `${a}x + ${b} > ${c}`;
        
        // Решение
        correctAnswer = (a * xValue + b) > c;
    } else {
        // Генерация квадратного неравенства: ax^2 + bx + c > d
        const a = Math.floor(Math.random() * 10) - 5;
        const b = Math.floor(Math.random() * 20) - 10;
        const c = Math.floor(Math.random() * 20) - 10;
        const d = Math.floor(Math.random() * 20) - 10;
        inequality = `${a}x^2 + ${b}x + ${c} > ${d}`;
        
        // Решение
        correctAnswer = (a * xValue * xValue + b * xValue + c) > d;
    }

    inequalityElement.textContent = `${inequality}, при x = ${xValue}`;
    
    // Определяем правильный или неправильный ответ
    const randomChoice = Math.random();
    const displayedAnswer = randomChoice > 0.5 ? correctAnswer : !correctAnswer;
    
    answerElement.textContent = displayedAnswer ? 'Истинно' : 'Ложно';
}

// Обновляем счет
function updateScore(isCorrect) {
    total++;
    if (isCorrect) {
        score++;
    }
    scoreElement.textContent = score;
    totalElement.textContent = total;
}

// Обработчики событий для кнопок
trueButton.addEventListener('click', () => {
    updateScore(correctAnswer);
    generateInequality();
});

falseButton.addEventListener('click', () => {
    updateScore(!correctAnswer);
    generateInequality();
});

// Инициализация первой задачи
generateInequality();
