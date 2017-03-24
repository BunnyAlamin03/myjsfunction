$(document).ready(function($){
	"use strict";

	// Scroll To Top
	/* 
		How to Active scrollToTop('.clasName'); 
	*/
	function scrollToTop($topClass){   
	    var top_0 = {scrollTop:0};
	    var topClass = $($topClass);
	    topClass.on("click" , function(e){
	        $("html,body").animate(top_0,1000);
	        return false;
	    });
	    $(window).scroll(function(){
	        if($(this).scrollTop() > 400) {
	            topClass.fadeIn(500);
	        }
	        else {
	            topClass.fadeOut(500);
	        }
	    });
	}

	// Smooth Scroll
	/*
		How To Active smoothScroll('.className');
	*/
	function smoothScroll($smoothclass){
		$($smoothclass+'[href*="#"]:not([href="#"])').on("click" , function() {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
				  $('html, body').animate({
				      scrollTop: target.offset().top
				  }, 1000);
				  return false;
				}
			}
		});
	}

	// Preloader
	/*
		How To Active preloader();
	*/
	function preloader(){
		$('body').addClass('preloader-active');
		$(window).on('load', function() { 
		  $('.preloader').fadeOut();
		  $('.preloader-spinner').delay(350).fadeOut('slow');
		  $('body').removeClass('preloader-active');
		});
	}



})(jQuery);