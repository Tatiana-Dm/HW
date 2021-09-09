// ДЗ 11. Работа с запросом и данными

// Необходимо получить данные с сервера по урлу https://trevadim.github.io/vue/data/data.json , и отобразить информацию о планетах.
// Необходимо отобразить кнопку и по нажатию на нее делать запрос на сервер для получения данных.
// После того как данные получены, кнопку скрыть и отобразить контент который содержится в свойстве planets
// Сделайте по возможности красиво

const btn = document.createElement('button');
const div = document.createElement('div');

btn.innerHTML = "To see the Planets, click on me";
btn.style.width = "300px";
btn.style.height = "150px";
btn.style.backgroundColor = "LightSkyBlue";
btn.style.fontSize = "27px";
btn.style.fontStyle = "italic";
btn.style.fontWeight = "400";
btn.style.cursor = "pointer";
btn.style.marginTop = "200px";

div.style.textAlign = "center";
div.style.marginTop = "30px";

document.body.appendChild(div);
div.appendChild(btn);

btn.addEventListener('click', elem => {
    btn.hidden = true;

    let body = document.querySelector('body');
    body.style.backgroundColor = "black";

    let getFetch = fetch('https://trevadim.github.io/vue/data/data.json');

    function createTitle({title}, elem) {
        body.querySelector(elem).innerHTML += `<header style="font-size: 35px; font-weight: 700; text-align: center; margin: 30px; color: white; font-style: italic;">${title}</header>`;            
    }

    function createInfo({info}, elem) {
        let infoHtml = info.map(paragraph => `<p style="margin: 15px 50px; font-size: 20px; text-indent: 40px; font-style: italic;">${paragraph}</p>`);
        body.querySelector(elem).innerHTML += infoHtml.join(''); 
    }

    function createImg({url, title}, elem) {
        body.querySelector(elem).innerHTML += `<img src="${url}" alt="{title}" style="width: 500px; height: 450px; display: block; margin: 0 auto; margin-bottom: 40px; border-radius: 50px;">`;
    }

    getFetch.then(response => response.json())
        .then(({planets}) => {
            let count = 0;

            for (planet in planets) {
                body.innerHTML += `<div class="section-${count}" style="width: 100%; color: Grey;" ></div>`;
                createTitle(planets[planet], `.section-${count}`);
                createImg(planets[planet], `.section-${count}`);
                createInfo(planets[planet], `.section-${count}`);
            }
        });
});