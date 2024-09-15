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


})(window.jQuery);