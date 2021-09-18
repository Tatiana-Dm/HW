const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

let startBtn = document.querySelector('#start');
let stopBtn = document.querySelector('#stop');

let score = 0;
let arrSquares = [];

startBtn.style.width = "80px";
startBtn.style.height = "30x";
startBtn.style.padding = "6px 20px";
startBtn.style.fontSize= "17px";
startBtn.style.borderRadius = "5px";
startBtn.style.cursor = "pointer";
startBtn.style.backgroundColor = "lime";


stopBtn.style.width = "80px";
stopBtn.style.height = "30x";
stopBtn.style.marginLeft = "10px";
stopBtn.style.padding = "6px 20px";
stopBtn.style.fontSize= "17px";
stopBtn.style.borderRadius = "5px";
stopBtn.style.cursor = "pointer";
stopBtn.style.backgroundColor = "red";

function Square(x, y, w, h, speed, color) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.speed = speed;
  this.color = color;

  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
    this.y += this.speed;
    ctx.closePath();
  };
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createGame() {
  let x = Math.random() * 620;
  let speed = Math.random() * 0.5 + 0.3;
  let color = getRandomColor();
  let gameSquare = new Square(x, -20, 20, 20, speed, color);

  arrSquares.push(gameSquare);
  document.querySelector('#score').textContent = 	score;
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  arrSquares = arrSquares.filter((el) => {
    el.draw();
    return el.y < canvas.width;
  });
  requestAnimationFrame(animate);
}

let infinitySqueres;

startBtn.addEventListener('click', () => {
	if (arrSquares.length === 0) {
		  let randomTimeInterval = Math.random() * 1200 + 200;
		  infinitySqueres = setInterval(createGame, randomTimeInterval);
		  score = 0;
	}
});

stopBtn.addEventListener('click', () => {
  arrSquares = [];
  clearInterval(infinitySqueres);
});

canvas.addEventListener('click', (event) => {
  for (let square of arrSquares) {
    if (square.x <= event.offsetX && 
      square.y <= event.offsetY && 
      (square.h + square.x) >= event.offsetX && 
      (square.w + square.y) >= event.offsetY) {
        arrSquares.splice(arrSquares.indexOf(square), 1);
        score += 1;
      }
  }
});

document.body.onload = animate;