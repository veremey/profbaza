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

	//accordion
	$('.action').on('mouseenter', function() {
		$(this).children('.accord').slideToggle();
		}).on('mouseleave', function() {
		$(this).children('.accord').slideToggle();
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



	function ui_slider() {
		$(".slid").each(function(){
			var slider = $(this).find(".js-ui-slider-main");
			slider.slider({
				range: 'min',
				min: 0,
				max: 10,
				step: 1,
				value: 4,
				slide: function( event, ui ) {
					$(this).find(".ui-slider-handle").html("<span></span>");
					var handle_0 = $(this).children(".ui-slider-handle").find("span")
					handle_0.text(ui.value);
				}
			});
		});
		$(".slid.green").each(function(){
			var slider = $(this).find(".js-ui-slider-main");
			slider.slider({
				value: 3,
			});
		});
		$(".slid.violet").each(function(){
			var slider = $(this).find(".js-ui-slider-main");
			slider.slider({
				value: 8,
			});
		});
		$(".slid.yellow").each(function(){
			var slider = $(this).find(".js-ui-slider-main");
			slider.slider({
				value: 0,
			});
		});

	}
	ui_slider();




});
