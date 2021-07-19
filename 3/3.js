// Массивы и объекты

// 1.	Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];

let sum = arr.reduce((acc, item) => {
    if (!isNaN(+item)) {
        return acc + +item;
    } else {
    return acc;
    }
}, 0);

console.log(sum);

// 2.	Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень, не используя функцию Math.pow().

let n = +prompt('Введите случайное число');
let arr = [];
let j = 0;

for (let i = 0; i < n; i++) {
    j = (Math.random() * 10).toFixed(2);
    arr.push(j ** 5);
}

console.log(arr);

// 3.	Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// a.	Добавьте в начало массива значение ‘Backbone.js’
// b.	Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// c.	Добавьте в массив значение ‘CommonJS’ вторым элементом
// d.	Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”

let arr = ['AngularJS', 'jQuery'];

arr.unshift('Backbone.js');
console.log(arr);

arr.push('ReactJS', 'Vue.js');
console.log(arr);

arr.splice(1, 0, 'CommonJS');
console.log(arr);

let arr1 = arr.indexOf('jQuery');
arr.splice(arr1, 1);

console.log(arr);

// 4.	Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’. Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь однажды сломал головой фонарь’ с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

let str = 'Как однажды Жак звонарь сломал фонарь головой';
let arr = str.split(' ');

arr.splice(4, 0, 'однажды')
arr.splice(6, 0, 'головой');
arr.splice(1, 1);
arr.pop();
let str1 = arr.join(' ');

alert(`${str}
${str1}`);

// 5.	Создайте ассоциативный массив person, описывающий персону, с произвольным количеством произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.

let person = {
    name : 'John', 
    gender: 'm', 
    age: 24
};

let answer = prompt('Напишите свойство о себе');

if (answer in person) {
    alert(person[answer])
} else {
    person[answer] = prompt('Введите значение свойства');
}

console.log(person);

// 6.	Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...), не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.

let phoneModel = {};

phoneModel.brand = prompt('Введите фирму Вашего телефона');
phoneModel.model = prompt('Введите модель Вашего телефона');
phoneModel.resolution = prompt('Введите разрешение экрана Вашего телефона');
phoneModel.color = prompt('Введите цвет Вашего телефона');

person.phoneModel = phoneModel;

console.log(person);

// 7.	Создайте объект dates для хранения дат. Первая дата – текущая, new Date. Вторая дата – текущая дата минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

let dates = {};

dates.now = new Date();
dates.pastNow = new Date(new Date().setDate(dates.now.getDate() - 365));

let answerDate = new Date (prompt('Введите дату в формате: yyyy-MM-dd'));  

if (dates.pastNow <= answerDate && answerDate <= dates.now) {
    console.log('Попал');
} else {
    console.log('Мимо, попробуй еще раз');
}

console.log(dates);

// 8.	Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.

let arr = [];

for (let i = 0; ; i++) {
	let n = +prompt('Введите какое-нибудь число');

	if (!isNaN(n) && n) {
		arr.push(parseInt(n));
    } else {
    	break;
    }
}

let sum = arr.reduce((acc, item) => {
	return acc += item;
  }, 0);

alert(`Сумма чисел массива: ${sum}`);

// 9.	Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:

let arr = [[]];

for (let i = 1; i < 10; i++) {
    arr[i - 1] = [];

    for (let j = 1; j < 10; j++) {
        arr[i - 1].push(`${i} x ${j} = ${i * j}`);
    }
}

console.log(arr);

// 10.	Создайте структуру данных, полностью описывающую html-разметку картинки.

let img = {
    src: 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    alt: '',
    style: 'border: 1px solid #ccc',
    width: '200'
}