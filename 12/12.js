// Техническое задание

// Необходимо написать страницу поиска и отображения видео-клипов.
// Страница должна содержать заголовок страницы, инпут для поиска, карусель на сладе которой будет находится один клип.

// Требования к карусели:
// 1.	Карусель должна иметь возможность переключения слайдов по кликам на стрелочки вправо/влево. При переключении слайда видео, которое проигрывалось, должно быть остановлено, чтобы не допустить воспроизведения сразу двух видео.
// 2.	При переключении слайда должно появиться следующее видео.

// URL для получения видео: https://itunes.apple.com/search
// Параметры которые необходимо передать в get запросе: “limit=10&entity=musicVideo&term=” 
// В term= должно содержатся то что ввел пользователь в инпуте

const $form = $('#search-form');
const $input = $('[name="video-name"]');
const $carouselInner = $('.carousel-inner');
const $prev = $('.carousel-control-prev');
const $next = $('.carousel-control-next');
let videos = [];

const getVideo = (url, term) => {
    $.get({
        url: 'https://itunes.apple.com/search',
        data: `limit=10&entity=musicVideo&term=${term}`,
        dataType: 'json'
    })
        .done((response) => createContent(response.results))
        .fail((error) => console.log('error', error));
};

const createContent = (videos) => {
    $carouselInner.empty();

    videos.forEach((item) => {
        $('<div>')
            .addClass('carousel-item')
            .appendTo($carouselInner);
    });

    let $carouselItem = $('.carousel-item');
    $('.carousel-item:first').addClass('active');

    videos.forEach((item, i, videos) => {
        $('<video>')
            .attr('src', videos[i].previewUrl)
            .attr('controls', true)
            .attr('width', '100%')
            .attr('height', '600px')
            .appendTo($carouselItem[i]);

        $next.on('click', function () {
            $('video')[i].pause();
        });

        $prev.on('click', function (){
            $('video')[i].pause();
        });
    });
};

$form.on('submit', (event) => {
    event.preventDefault();
    const text = $input.val().replaceAll(' ', '+');
    if(text) {
        getVideo(text);
    }
});