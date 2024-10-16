// Получаем элементы с нашей страницы (где показывается неравенство, решение, очки и кнопки)
const inequalityElement = document.getElementById('inequality'); // Поле с неравенством
const answerElement = document.getElementById('answer');         // Поле с решением (ответом)
const scoreElement = document.getElementById('score');           // Поле, где показываются очки
const totalElement = document.getElementById('total');           // Поле, где показывается общее количество задач
const trueButton = document.getElementById('trueButton');        // Кнопка "Верю"
const falseButton = document.getElementById('falseButton');      // Кнопка "Не верю"

let score = 0;    // Счёт правильных ответов
let total = 0;    // Общее количество задач
let correctAnswer = 0;   // Правильное решение (левая часть неравенства)
let displayedAnswer = 0; // Показанное пользователю решение (может быть правильным или ошибочным)

// Функция для генерации неравенства
function generateInequality() {
    let inequality = ''; // Сюда запишем само неравенство
    let xValue = Math.floor(Math.random() * 21) - 10; // Генерируем случайное значение x от -10 до 10

    // Выбираем, будет ли неравенство линейным или квадратным
    if (Math.random() > 0.5) {
        // Линейное неравенство: ax + b > c
        const a = Math.floor(Math.random() * 10) - 5 || 1; // a — это число от -5 до 5 (не должно быть 0)
        const b = Math.floor(Math.random() * 21) - 10;     // b — это случайное число от -10 до 10
        const c = Math.floor(Math.random() * 21) - 10;     // c — это случайное число от -10 до 10

        // Собираем строку неравенства, например: "3x + (-4) > 5"
        inequality = `${a}x + (${b}) > ${c}`;

        // Вычисляем левую часть (a * x + b) при случайном значении x
        correctAnswer = a * xValue + b;
    } else {
        // Квадратное неравенство: ax^2 + bx + c > d
        const a = Math.floor(Math.random() * 10) - 5 || 1; // a — это случайное число от -5 до 5
        const b = Math.floor(Math.random() * 21) - 10;     // b — это случайное число от -10 до 10
        const c = Math.floor(Math.random() * 21) - 10;     // c — это случайное число от -10 до 10
        const d = Math.floor(Math.random() * 21) - 10;     // d — это случайное число от -10 до 10

        // Собираем строку неравенства, например: "2x^2 + (-3)x + 1 > 4"
        inequality = `${a}x^2 + (${b})x + (${c}) > ${d}`;

        // Вычисляем левую часть (a * x^2 + b * x + c) при случайном значении x
        correctAnswer = a * xValue * xValue + b * xValue + c;
    }

    // Отображаем неравенство на экране
    inequalityElement.textContent = inequality;

    // Сгенерируем правильное или случайное решение
    if (Math.random() > 0.5) {
        displayedAnswer = correctAnswer; // Показываем правильное решение
    } else {
        // Показываем неправильное решение (случайно увеличенное или уменьшенное)
        displayedAnswer = correctAnswer + Math.floor(Math.random() * 21) - 10;
    }

    // Отображаем результат на экране
    answerElement.textContent = `Решение: ${displayedAnswer}`;
}

// Функция для обновления счёта
function updateScore(isCorrect) {
    total++; // Увеличиваем общее количество задач
    if (isCorrect) {
        score++; // Если ответ правильный — увеличиваем счёт
    }
    // Обновляем счёт и количество задач на экране
    scoreElement.textContent = score;
    totalElement.textContent = total;
}

// Когда пользователь нажимает "Верю"
trueButton.addEventListener('click', () => {
    // Проверяем, совпадает ли показанное решение с правильным
    if (displayedAnswer === correctAnswer) {
        updateScore(true); // Если да — засчитываем правильный ответ
    } else {
        updateScore(false); // Если нет — ответ неверный
    }
    generateInequality(); // Генерируем новое неравенство
});

// Когда пользователь нажимает "Не верю"
falseButton.addEventListener('click', () => {
    // Проверяем, НЕ совпадает ли показанное решение с правильным
    if (displayedAnswer !== correctAnswer) {
        updateScore(true); // Если не совпадает — засчитываем правильный ответ
    } else {
        updateScore(false); // Если совпадает — ответ неверный
    }
    generateInequality(); // Генерируем новое неравенство
});

// Сразу создаём первое неравенство
generateInequality();
