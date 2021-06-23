// Переменные и выражения

// 1.	Создайте три переменные. Присвойте первой переменной числовое значение. Вторая переменная равна первой переменной, увеличенной в три раза. Третья переменная равна сумме двух первых. Выведите на экран все три.

let x = +prompt('Введите любое число');
let y = x * 3;
let z = x + y;

alert(`${x}, ${y}, ${z}`);

// 2.	Создайте переменные firstName и lastName для хранения имени и фамилии, запишите в них значения из модального окна prompt. Выведите на экран приветствие “What’s up (firstName) (lastName)”.

let firstName = prompt('Как Вас зовут?');
let lastName = prompt('Ваша фамилия?');

alert(`What’s up ${firstName} ${lastName}`);

// 3.	Создайте переменные x и y для хранения числа. Значения переменные получают из prompt. Рассчитайте произведение, частное, разность и сумму этих значений. Результат последовательно отобразите в модальном окне.

let x = +prompt('Введите любое число');
let y = +prompt('Введите любое число');

let sum = x + y;
let multi = x * y;

if (x >= y) {
    dif = x - y;
    div = x / y;
} else if (x < y) {
    dif = y - x;
    div = y / x;  
}

alert(`Произведение = ${multi}, Деление = ${div}, Разность = ${dif}, Сумма = ${sum}`);

// 4.	Напишите в переменных формулу для расчета з/п за июль с учетом, что количество рабочий часов, количество рабочих дней в неделе и рейт за час – значения читаются из prompt. (Просчитывать какой это месяц, 30 или 31 день не нужно).

let time = +prompt('Колличество рабочих часов');
let day = +prompt('Колличество рабочих дней в недели');
let many = +prompt('Рейт за час');

let salary = +time * many * day * 4;
alert(`Ваша зарплата составляет ${salary} грн за месяц`);

// 5.	Напишите программу, которая определяет, является ли число, введенное пользователем, нечётным.

let odd = +prompt('Введите любое число');

if (odd % 2 === 0) {
    alert('Введенное число является четным');
} else {
    alert('Введенное число является нечетным');
}

// 6.	Напишите программу, которая проверяет является ли значение, введенное пользователем, числом.

let checkNum = +prompt('Введите любое число');

if (!isNaN(checkNum)) {  // пробелы принимает за число
    alert('Вы ввели число');
} else {
    alert('Вы ввели не число');
}

// 7.	Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. Получите второе число из окна prompt. Сравните и отобразите в модальном окне: первое число меньше второго или нет, а также оба значения.

let num1 = Math.floor(Math.random()*100);
let num2 = +prompt('Введите любое число');

if (num1 > num2) {
    alert(`Первое значение = ${num1}, второе значение = ${num2}, ${num1} больше ${num2}`);
} else if (num1 < num2) {
    alert(`Первое значение = ${num1}, второе значение = ${num2}, ${num1} меньше ${num2}`);
}

// 8.	Создайте переменную str и запишите в нее из prompt такое предложение «Мне нравится изучать Front-end». Также создайте еще одну переменную и запишите в нее из prompt то, что вам нравится изучать. С помощью методов строки определите существует ли то что вам нравится изучать в исходной строке str. Также возьмите подстроку «Мне нравится изучать » из исходной переменной str сохраните ее в отдельной переменной. Создайте еще одну переменную result куда запишите результирующую строку объединяющую «Мне нравится изучать » и то что вам нравится изучать (примените для этого обратные кавычки ` `). Отобразите результат в модальном окне.

let str1 = prompt('Мне нравится изучать Front-end');
let str2 = prompt('Что вам нравится изучать?');

let checkStr = str1.includes(str2);
let str3 = str1.slice(0, 21);

let result = `${str3} ${str2}`;

alert(result);