// Методы объектов и контекст исполнения функции

// 1.	Создайте объект calculator с методами:
// a.	read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// b.	sum() возвращает сумму этих двух значений
// c.	multi() возвращает произведение этих двух значений
// d.	diff() возвращает разницу
// e.	div() возвращает частное

let calculator = {
    read () {
        let x = +prompt('Введите значение x');
        let y = +prompt('Введите значение y');
        this.x = x;
        this.y = y;
    },

    sum () {
        return this.x + this.y;
    },

    multi () {
        return this.x * this.y;
    },

    diff () {
        return this.x - this.y;
    },

    div () {
        return this.x / this.y;
    }
};

calculator.read();
alert( calculator.sum());
alert( calculator.multi());

// 2.	Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.

let coffeeMachine = {
    message: 'Your coffee is ready!',
    start () {
        setTimeout(() => alert(this.message), 3000);
    }
};

coffeeMachine.start();

// 3.	Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения. Используйте концепцию chaining для создания цепочки вызовов.

let counter = {
    count: 0,
    inc () {
        this.count++;
        return this;
    },

    dec () {
        this.count--;
        return this;
    },

    getValue () {
        return this.count;
    }
};

let current = counter.inc().inc().dec().inc().dec().getValue();
alert(current); // 1

// 4.	Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал ранее созданного калькулятора.

let me = {
    getSum (x, y) {
        this.x = x;
        this.y = y;
        return (`${x} + ${y} = ${calculator.sum.call(this)}`);
    },

    getDiff (x, y) {
        this.x = x;
        this.y = y;
        return (`${x} - ${y} = ${calculator.diff.call(this)}`);
    },

    getMulti (x, y) {
        this.x = x;
        this.y = y;
        return (`${x} x ${y} = ${calculator.multi.call(this)}`);
    },

    getDiv (x, y) {
        this.x = x;
        this.y = y;
        return (`${x} / ${y} = ${calculator.div.call(this)}`);
    }
};

alert(me.getSum(1, 1));
alert(me.getDiv(1, 0));

// 5.	Есть следующий код:

let country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

format.call(format.call(country, '', '')); // Ukraine
format.apply(format.apply(country, ['[', ']'])); // [Ukraine]
format.call(format.call(country.capital, '', '')); // Kyiv
format.apply(format.apply(country.capital, ['', ''])); // Kyiv
format.apply(format.apply(undefined , ['', ''])); // undefined

// 6.	Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

let user = { name: 'John' };

function format(start, end) {
    console.log(start + this.name + end);
}

// Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя
// userFormat('<<<', '>>>'); // <<<John>>>
// Реализуйте решение текущего задания используя метод bind().

let formatUserName = format.bind(user, '<<<', '>>>');

console.log(formatUserName());

// 7.	Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:

// hello('World'); // Hello World
// hello('John'); // Hello John

function concat (str1, x, str2) {
    return str1 + x + str2;
}

let hello = concat.bind(null, 'Hello', ' ');

console.log(hello('world'));


// Level Up
// Рекурсия

// 1.	Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:

function cube (num) {
    let rest = num;

    for (let i = 1; i < 3; i++) {
        rest *= num;
    }
    return rest;
}

console.log( cube(2) ); // 8

// 2.	Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:

function sum(a, b, ...rest) {
    let result = a + b;
    if (arguments.length >= 2) {
        return sum(result, ...rest)
    } else if (arguments.length === 0) {
        return 0;
    } else if (!b) {
        return a;
    }
}

console.log( sum(1, 2, 3, 4, 5) ); // 15