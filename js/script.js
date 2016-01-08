$(function() {

    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop: 0}, 1000);
    });

    $('.smoothScroll').click(function(event) {
        event.preventDefault();
        var href=$(this).attr('href');
        var target=$(href);
        var top=target.offset().top;
        $('html,body').animate({
            scrollTop: top
        }, 1000);
    });
});


        

jQuery(document).ready(function ($) {
  var swiper_arr = [];
  var swiper = new Swiper('.swiper-container', {
        scrollbar: '.swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: 'auto',
        centeredSlides: false,
        grabCursor: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
  
  var swiper_new = new Swiper('.samples-swiper-container', {
        scrollbar: '.new-swiper-scrollbar',
        scrollbarHide: false,
        slidesPerView: 'auto',
        centeredSlides: false,
        grabCursor: true,
        nextButton: '.new-swiper-button-next',
        prevButton: '.new-swiper-button-prev'
    });

  $('.menu__ready').hover(
    function() {
        $('.menu__ready--open').css("display", "block");
    },
    function() {
        if (!$('.menu__ready--open').is(":hover")) {
            $('.menu__ready--open').css("display", "none");
        }
         //$('.menu__ready--open').delay( 800 ).css("display", "none");
    }
    );
    $('.menu__ready--open').hover(
        function() {},
        function() {
            $('.menu__ready--open').css("display", "none");
        }
    );
});

  $(window).scroll(function() {
    if ($(".navigation").offset().top > 99) {
        $(".navigation").addClass("navigation--onScroll"); 
        //$(".header--onScroll").removeClass(".header");       
    } else {
       // $(".header--onScroll").addClass("header"); 
        $(".navigation").removeClass("navigation--onScroll");        
    }
});







