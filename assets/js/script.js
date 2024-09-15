(function($) {
	
	"use strict";

	/*=====================
	Preloader area start
	========================*/
	
	$(window).on('load',function () {
		$('#preloaderInner').fadeOut();
		$('#preloader')
			.delay(350)
			.fadeOut('slow');
		$('body')
			.delay(350)
	});

	/*=====================
	Preloader area End
	========================*/

	
	/*=======================
	animate menu area start
	========================*/

	AOS.init();

	/*=======================
	animate menu area end
	========================*/

	$(window).scroll(function() {
		var windscroll = $(window).scrollTop();
		if (windscroll >= 100) {
			$('.scroll-section').each(function(i) {
				if ($(this).position().top <= windscroll - 0) {
					$('.bd-social-nav-maintop a.active').removeClass('active');
					$('.bd-social-nav-maintop a').eq(i).addClass('active');
				}
			});

		} else {

			$('.bd-social-nav-maintop a.active').removeClass('active');
			$('.bd-social-nav-maintop a:first').addClass('active');
		}

	}).scroll();


})(window.jQuery);