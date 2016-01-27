$(document).ready(function() {

	//клонирую Количество курсов в сайдбар при < 1000px
	if($(document).width() < 1000){
		var languages = $('.js-clone').remove();
		$('.telephone').before(languages);
	};
	$('.js_lang_acardion').on('click', function() {
		$(this).toggleClass('is_active').next('.js_lang_item');
		return false;
	});


	// открыть окно меню
	$('.menu__small').on('click', function() {
		$('.butter__menu').slideDown('300');
	});
	// закрыть окно меню
		$('.btn-close').on('click', function() {
			$('.butter__menu').slideUp('300');
		});

	//Читать больше
	$('.programm__name span').readmore({
		speed: 75,
		collapsedHeight: 200,
		embedCSS: false,
		moreLink: '<a class="read__more" href="#"><span>Читать полностью </span></a>',
		lessLink: '<a class="read__more is_active" href="#"><span>Скрыть </span></a>'
	});
	// больше Курсов
	$('.js-more_course').readmore({
		speed: 75,
		collapsedHeight: 310,
		embedCSS: false,
		moreLink: '<a class="read__more" href="#"><i class="icon-bottom"></i><span>Все курсы </span></a>',
		lessLink: '<a class="read__more is_active" href="#"><i class="icon-top"></i><span>Скрыть </span></a>'
	});
	if ($(document).width() < 1020) {
		$('.js-more_course').readmore('destroy');
	};

	//Больше репетиторов
	$('.js-more_teacher').readmore({
		speed: 75,
		collapsedHeight: 260,
		embedCSS: false,
		moreLink: '<a class="read__more" href="#"><i class="icon-bottom"></i><span>Все репетиторы </span></a>',
		lessLink: '<a class="read__more is_active" href="#"><i class="icon-top"></i><span>Скрыть </span></a>'
	});
	if ($(document).width() < 1020) {
		$('.js-more_teacher').readmore('destroy');
	};

	// footer > 760
	if($(document).width() <= 1020){
		$('.benefit').addClass('action');
		$('.benefit__list').addClass('accord');
	};


	//accordion
	$('.action').on('mouseenter', function() {
		$(this).children('.accord').slideToggle();
		}).on('mouseleave', function() {
		$(this).children('.accord').slideToggle();
	});

	//icon-heart
	$('.icon-heart').on('click', function() {
		$(this).toggleClass('is_active');
		return false;
	});


	/* Скрипт для рейтинга */

	$('.stars').each(function(){

		var rating = $(this);
		var rating_input = rating.parents('form').find('input[name="rating"]');
		var stars = $('.star > span', rating);

		rating.find('.descr').hover(function(){
			stars.removeClass('active');
			rating_input.val(0);
		});

		stars.each(function(index){
			var current = index + 1;

			$(this).hover (
				function(){
					stars.removeClass('active').slice(0, current).addClass('active');
				},
				function(){
					rating_input.val(parseFloat($('.active', rating).length/2));
				}
			);
		});
	});


	// check select

	function select() {
		$(".js-select").each(function(){
			var select_list = $(this).parent().find(".js-select-list");
			var text = select_list.find("li").first().text();
			$(this).find(".js-select-text").text(text);
			$(this).click(function(event){
				if ($(this).hasClass("is-active")) {
				    $(this).removeClass("is-active");
				    select_list.slideUp("fast");
				}
				else {
				    $(".js-select").removeClass("is-active");
				    $(".js-select-list").hide();
				    select_list.slideDown("fast");
				    $(this).addClass("is-active");
				}
				event.stopPropagation();
			});
			select_list.find("li").click(function(event) {
				var id = $(this).attr("data-id");
				var text = $(this).text();
				$(this).parent().parent().find(".js-select-text").text(text);
				$(this).parent().parent().find(".js-select-input").val(id);
				$(this).parent().hide();
				$(this).parents(".js-select").removeClass("is-active");
				event.stopPropagation();
			});
		});
	}
	select();

	$('.js-select').click(function(event){
	    event.stopPropagation();
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
