// Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
let age = +prompt("Скільки вам років?", "");
if (age >= 0 && age <= 11) {
    console.log("Ви ще дитина");
} else if (age >= 12 && age <= 17) {
    console.log("Ви ще підліток");
} else if (age >= 18 && age <= 59) {
    console.log("Ви вже дорослий");
} else if (age >= 60) {
    console.log("Здається, ви пенсіонер");
} else {
    console.log("Нe корректно введений вік");
}

// Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
let number = +prompt("Введіть число від 0 до 9", "");
switch (number) {
    case 1:
        console.log('!');
        break;
    case 2:
        console.log('@');
        break;
    case 3:
        console.log('#');
        break;
    case 4:
        console.log('$');
        break;
    case 5:
        console.log('%');
        break;
    case 6:
        console.log('^');
        break;
    case 7:
        console.log('&');
        break;
    case 8:
        console.log('*');
        break;
    case 9:
        console.log('(');
        break;
    case 0:
        console.log(')');
        break;
    default:
        console.log('Число вказано не вірно')
}

// Підрахуй суму всіх чисел в заданому користувачем діапазоні.
let x = 0;
let y = 0;
let sum = 0;

do {
    if (y <= x) 
    x = +prompt("Введіть перше число", "");
    y = +prompt("Введіть друге число та дізнайтесь суму всіх чисел у заданому діапазоні", "");
}

while (y < x);

for (let i = x; i <= y; i++) {
    sum = sum + i;
}

let answerSumOfNumbers = `Сума всіх чисел у проміжку ` + y + `+` + x + `=` + sum;
console.log(answerSumOfNumbers);

// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
let firstNumber = +prompt("Введіть перше число ", "");
const secondNumber = +prompt("Введіть друге число та дізнайтесь найбільший спільний дільник цих чисел", "");

let digitOne = firstNumber;
let digitTwo = secondNumber;
do {
    if (digitOne > digitTwo) {
        digitOne = digitOne - digitTwo;
    } else {
        digitTwo = digitTwo - digitOne;
    }
}
while (digitOne !== digitTwo);

let answerString = "Найбільший спільний дільник чисел " + firstNumber + " та " + secondNumber + " : " + digitTwo;
console.log(answerString);


// Запитай у користувача число і виведи всі дільники цього числа.
let thirdNumber = +prompt("Введіть число та побачите всі дільники цього числа", "");
let answer = 'Дільники числа ' + thirdNumber + ': ';
for (let i = 1; i <= thirdNumber; i++) {
    if (!(thirdNumber % i)) { answer = answer + i + ' ' };
}
console.log(answer);

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
let count = 0;
let weekDay = "";
do {
    switch (count) {
        case 0:
            weekDay = 'Понеділок';
            break;
        case 1:
            weekDay = 'Вівторок';
            break;
        case 2:
            weekDay = 'Середа';
            break;
        case 3:
            weekDay = 'Четвер';
            break;
        case 4:
            weekDay = 'П\'ятниця';
            break;
        case 5:
            weekDay = 'Субота';
            break;
        case 6:
            weekDay = 'Неділя';
            break;
    }

    count++;
    if (count > 6) {
        count = 0;
    }
}
while (confirm(weekDay + '. Хочеш побачити наступний день?'));