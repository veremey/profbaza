$(document).ready(function() {

	$('.js_lang_acardion').on('click', function() {
		$(this).toggleClass('is_active').children('.js_lang_item').slideToggle();
		return false;
	});



	$('.programm__name span').readmore({
		speed: 75,
		collapsedHeight: 200,
		embedCSS: false,
		moreLink: '<a class="read__more" href="#"><span>Читать полностью </span></a',
		lessLink: '<a class="read__more" href="#"><span>Скрыть </span></a>'
	});

});