// ООП в функциональном стиле

// Создайте базовый класс Figure, который будет хранить координаты (x, y) и цвет фигуры. На базе класса Figure создайте три класса – Line, Rect, Circle, каждый из которых создает соответствующую фигуру. Пример создания экземпляров каждого класса и параметры фигур:

// Все три класса-наследника имеют метод draw для рисования фигуры с соответствующими параметрами (координаты, размеры, цвет).

// Фигуры рисуются на Canvas. Для рисования на канвасе создайте еще один класс – Canvas, в котором инициализируется элемент <canvas> из DOM. Класс Canvas – final, он не наследуется. В этом классе есть метод add, который и отображает созданные вами фигуры на странице. Обратите внимание, добавлять фигуры на канвас можно как по отдельности, так и списком.

function Figure (x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function Line (x1, y1, x2, y2, color) {
    Figure.call(this, x1, y1, color);

    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
    this.draw = function (ctx) {
        ctx = ctx.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(this.x2, this.y2);
        ctx.lineTo(this.x, this.y);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    };
}

function Circle (x, y, r, color) {
    Figure.call(this, x, y, color);

    this.r = r;
    this.draw = function (ctx) {
        ctx = ctx.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    };

}

function Rect (x, y, w, h, color) {
    Figure.call(this, x, y, color);

    this.w = w;
    this.h = h;
    this.draw = function (ctx) {
        ctx = ctx.getContext("2d");
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.color;
        ctx.fill();
    };
}

function Canvas (id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.add = function () {
        this.canvas = document.getElementById(id);
        for (let i = 0; i < arguments.length; i++) {
            arguments[i].draw(this.canvas);
        }
    };
}

let drawArea = new Canvas('canvasID');

let line = new Line(50, 360, 250, 300, 'grey');  // x1, y1, x2, y2, color
let line2 = new Line(60, 375, 260, 315, 'grey');

let circle = new Circle(120, 120, 50, 'rgba(135, 206, 235, .5)');  // x, y, r, color
let circle2 = new Circle(145, 180, 75, 'rgba(135, 206, 235, .5)');

let rect = new Rect(330, 200, 90, 180, 'rgba(0, 255, 127, .2)');  // x, y, w, h, color
let rect2 = new Rect(360, 180, 170, 80, 'rgba(255, 105, 180, .3)');
let rect3 = new Rect(480, 230, 100, 70, 'rgba(255, 215, 0, .2)');

for (let i = 0; i <= drawArea.canvas.offsetWidth; i++) {
    if (i % 2) {
        drawArea.add(new Line(i * 15 + 15, 0, i * 15, 15, '#FF7F50'));
    } else {
        drawArea.add(new Line(i * 15, 0, i * 15 + 15, 15, '#FF7F50'));
    }
}

drawArea.add(line, line2);
drawArea.add(circle, circle2);
drawArea.add(rect, rect2, rect3);