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
	/*=======================
	scroll menu area start
	========================*/

	$(window).scroll(function() {
		var windscroll = $(window).scrollTop();
		if (windscroll >= 100) {
			$('.scroll-section').each(function(i) {
				if ($(this).position().top <= windscroll - 1) {
					$('.bd-social-nav-maintop a.active').removeClass('active');
					$('.bd-social-nav-maintop a').eq(i).addClass('active');
				}
			});

		} else {

			$('.bd-social-nav-maintop a.active').removeClass('active');
			$('.bd-social-nav-maintop a:first').addClass('active');
		}

	}).scroll();

	/*=======================
	scroll menu area end
	========================*/

	/*=======================
	login menu area start
	========================*/

	$(document).ready(function () {

		$("#bd-social-login").click(function(){
			
			$(".bd-social-sing-up").addClass("intro-login-rotate");
			$(".bd-social-sing-up").removeClass("intro-sing-in-social");
			$(".bd-social-sing-in").addClass("intro-login-social");
			setTimeout(function() {
				$(".bd-social-sing-in").addClass("z-index-part");
			}, 1000);
			
		});

		$("#bd-social-sing-up").click(function(){
			$(".bd-social-sing-up").addClass("intro-sing-in-social");
			$(".bd-social-sing-up").removeClass("intro-login-rotate");
			$(".bd-social-sing-in").removeClass("intro-login-social");
			setTimeout(function() {
				$(".bd-social-sing-in").removeClass("z-index-part");
			}, 1000);
			setTimeout(function() {
				$(".bd-social-sing-up").addClass("z-index-part");
			}, 1000);
		});
	})

	/*=======================
	login menu area end
	========================*/


})(window.jQuery);