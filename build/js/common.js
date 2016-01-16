$(document).ready(function() {

	$('.js_lang_acardion').on('click', function() {
		$(this).toggleClass('is_active').next('.js_lang_item');
		return false;
	});


	//Читать больше
	$('.programm__name span').readmore({
		speed: 75,
		collapsedHeight: 200,
		embedCSS: false,
		moreLink: '<a class="read__more" href="#"><span>Читать полностью </span></a',
		lessLink: '<a class="read__more is_active" href="#"><span>Скрыть </span></a>'
	});


	$('.cycle').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		adaptiveHeight: true,
		// speed: 600,
		// centerMode: true,
		// variableWidth: true,
		autoplay: true,
		autoplaySpeed: 200000,
		// prevArrow: $('.js-slider__back'),
		// nextArrow: $('.js-slider__next'),
		// responsive: [
		// 	{
		// 		breakpoint: 765,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			variableWidth: false
		// 		}
		// 	},
		// ]
	});

	//akcii
	$('.sale').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 200000,
		prevArrow: $('.js-sale__back'),
		nextArrow: $('.js-sale__next'),
		// responsive: [
		// 	{
		// 		breakpoint: 765,
		// 		settings: {
		// 			slidesToShow: 1,
		// 			variableWidth: false
		// 		}
		// 	},
		// ]
	});

	//fotki
	$('.gallery').slick({
		// infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		adaptiveHeight: true,
		autoplay: true,
		autoplaySpeed: 200000,
		prevArrow: $('.js-gallery__back'),
		nextArrow: $('.js-gallery__next')
	});
	//если фоток или видео в .gallery меньше 4 удаляем кнопки управления слайдером
	if($('.gallery__item').length <= 4){
		$('.js-nextSlider4').find('.caption__btn').remove();
		};



});