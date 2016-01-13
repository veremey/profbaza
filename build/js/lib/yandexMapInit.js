
ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [55.74630, 37.6105],
            zoom: 17
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'ул. Академика Янгеля 22 '
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [34, 48],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).

    }, {
      balloonShadow: false
    });
    myMap.geoObjects.add(myPlacemark);
     myMap.behaviors
         .disable(['scrollZoom']);



    $(document).ready(function() {
       // alert(3434);
       // console.log('width:' + screen.width);
      if( screen.width <= 760 ) {
        myMap.behaviors
            .disable(['rightMouseButtonMagnifier', 'drag']);
      };
    });


});




var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);
function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.746993, 37.608284], // Москва
        zoom: 17
    });

    // document.getElementById('destroyButton').onclick = function () {
    //     // Для уничтожения используется метод destroy.
    //     myMap.destroy();
    // };

  };

  // смотри js/yandexMapInit.js


  //  #####  Карта AND ######