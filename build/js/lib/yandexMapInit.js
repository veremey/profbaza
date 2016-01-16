
ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
            center: [43.238253, 76.945465],
            zoom: 17,
            controls: []
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

});
