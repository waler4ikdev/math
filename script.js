const inequalityElement = document.getElementById('inequality');
const answerElement = document.getElementById('answer');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');
const trueButton = document.getElementById('trueButton');
const falseButton = document.getElementById('falseButton');

let score = 0;
let total = 0;
let correctAnswer = false; // Фактический правильный ответ
let displayedAnswer = 0; // Показанное пользователю решение

// Функция для генерации случайного линейного или квадратного неравенства
function generateInequality() {
    const type = Math.random() > 0.5 ? 'linear' : 'quadratic';  // Линейное или квадратное неравенство
    let inequality = '';
    let xValue = Math.floor(Math.random() * 21) - 10; // Случайное значение x от -10 до 10

    if (type === 'linear') {
        // Генерация линейного неравенства: ax + b > c
        const a = Math.floor(Math.random() * 10) - 5 || 1; // a не должно быть равно 0
        const b = Math.floor(Math.random() * 21) - 10;
        const c = Math.floor(Math.random() * 21) - 10;
        inequality = `${a}x + (${b}) > ${c}`;
        
        // Решение: вычисляем значение выражения при данном x
        const leftSide = a * xValue + b;
        correctAnswer = leftSide > c;
        displayedAnswer = Math.random() > 0.5 ? leftSide : leftSide + Math.floor(Math.random() * 21) - 10; // Показать либо правильное решение, либо случайное число
    } else {
        // Генерация квадратного неравенства: ax^2 + bx + c > d
        const a = Math.floor(Math.random() * 10) - 5 || 1; // a не должно быть равно 0
        const b = Math.floor(Math.random() * 21) - 10;
        const c = Math.floor(Math.random() * 21) - 10;
        const d = Math.floor(Math.random() * 21) - 10;
        inequality = `${a}x^2 + (${b})x + (${c}) > ${d}`;
        
        // Решение: вычисляем значение выражения при данном x
        const leftSide = a * xValue * xValue + b * xValue + c;
        correctAnswer = leftSide > d;
        displayedAnswer = Math.random() > 0.5 ? leftSide : leftSide + Math.floor(Math.random() * 21) - 10; // Показать либо правильное решение, либо случайное число
    }

    inequalityElement.textContent = `${inequality}`;
    answerElement.textContent = `Решение: ${displayedAnswer}`;
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
    // Если пользователь выбирает "Верю", проверяем, совпадает ли показанное решение с фактическим правильным
    const isCorrect = correctAnswer === (displayedAnswer === parseFloat(answerElement.textContent.split(': ')[1]));
    updateScore(isCorrect);
    generateInequality();
});

falseButton.addEventListener('click', () => {
    // Если пользователь выбирает "Не верю", проверяем, не совпадает ли показанное решение с правильным
    const isCorrect = correctAnswer !== (displayedAnswer === parseFloat(answerElement.textContent.split(': ')[1]));
    updateScore(isCorrect);
    generateInequality();
});

// Инициализация первой задачи
generateInequality();
