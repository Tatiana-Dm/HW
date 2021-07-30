// Функции

// 1.	Напишите функцию max, которая сравнивает два числа и возвращает большее: 
// console.log(max(0, -1));

function getNumMax (max, min) {
    
    if (max > min) {
        return max;
    } else if (max < min) {
        return min;
    } else {
        return 'Числа равны';
    };
}

console.log(getNumMax(0, -1));

// 2.	Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:
// console.log( min(0, -1, 100, 500, 100500) );  -1

function getMathMin (num) {
    let getMathMin = arguments[0];

    for (let i = 0; i < arguments.length; i++) {
        if (getMathMin > arguments[i]) {
            getMathMin = arguments[i];
        };
    }
    return getMathMin;
}

console.log(getMathMin(0, -1, 100, 500, 100500));

// 3.	Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:	
// a.	Отфильтруйте пользователей младше 18 лет
// b.	Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
// c.	Сформируйте новый массив, который содержит только полное имя пользователей


let users = [
    { firstName: 'Kate', lastName: 'Korh', age: 24 },
    { firstName: 'John', lastName: 'Phorm', age: 16 },
    { firstName: 'Poll', lastName: 'Banco', age: 37 },
    { firstName: 'Lena', lastName: 'Petrov', age: 12 },
    { firstName: 'Olga', lastName: 'Link', age: 17 },
    { firstName: 'Alise', lastName: 'Sat', age: 25 },
    { firstName: 'Tom', lastName: 'Rum', age: 21 },
    { firstName: 'Alex', lastName: 'Liplic', age: 24 },
    { firstName: 'Vin', lastName: 'Singl', age: 30 },
    { firstName: 'Chris', lastName: 'Qeen', age: 29 }
];

let ageList = users.filter((item) => item.age <= 18);
console.log(ageList);

users.forEach((item) => {
    item.fullName = item.firstName + ' ' + item.lastName;
});
console.log(users);

let usersFullName = users.map((item) => item.fullName);
console.log(usersFullName);

// 4.	Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент.

function getShift (arr) {
    arr.splice(0, 1);
    return arr;
}

console.log(getShift([1, 2, -2, -1]));

// 5.	Напишите функцию аналог метода массива push. Функция добавляет в конец переданного в параметре массив произвольное количество элементов.

function getPush (arr) {
    arr.splice(arr.length, 0, 'abc', 5, -7);
    return arr;
}

console.log(getPush([1, 2, 3]));

// 6.	Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект, поля которого будут изменены или расширены. Остальные параметры - объекты-источники, полями которых будет расширяться целевой объект.

// var source = {firstname: 'Tom', age: 10}
// var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
// console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

let obj = {firstName: 'John', age: 10};

function assign (obj, ...params) {

    for  (let param of params) {
        obj = {
            ...obj,
            ...param
        };
    }
    return obj;
}

let newObj = assign(obj, {lastName: 'Doe'});

console.log(newObj);

// 7.	Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том, что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоле текст в формате: 
// <имя_автора>, <дата>
// <текст_сообщения>

// setComment('2016-11-02', 'Everything is ok', 'John');

// John, 2016-12-22
// Everything is ok

// setComment('2016-11-02', 'You could do it better!');

// Anonymous, 2016-12-22
// You could do it better!

function setComment (date, message, author) {
    if (!date || !message) {
        alert('Данные переданные некорректно');
        return;
    };

    author = author || 'Anonymous';
    return `${author}, ${date}, \n${message}`;
}

console.log(setComment('2016-11-02', 'Everything is ok', 'John'));
console.log(setComment('2016-11-02', 'You could do it better!'));



// Замыкания
// 1.	Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() для получения текущей временной метки и служит для замера времени выполнения другого кода(код менять, видоизменять нельзя, как написан так и должен остаться):

function createTimer () {
    let now = performance.now();
    return function () {
        let x = performance.now();
        return (x - now);
    };
}

let timer = createTimer();
alert('!')  // код, время выполнения которого нужно измерить
alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()


// 2.	Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и возвращает функцию, которая добавляет к первому параметру второй. Функция работает по следующему принципу:

function createAdder (x) {
    return function (y) {
        return x + y;
    };
}

var hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

var plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10


