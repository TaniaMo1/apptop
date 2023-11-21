window.onload = function (){

    var root = document.getElementsByTagName( 'html' )[0];

    var is_opera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    var is_Edge = navigator.userAgent.indexOf("Edge") > -1;
    var is_chrome = !!window.chrome && !is_opera && !is_Edge;
    var is_explorer= typeof document !== 'undefined' && !!document.documentMode && !is_Edge;
    var is_firefox = typeof window.InstallTrigger !== 'undefined';
    var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var nua = navigator.userAgent;
    var is_android = ((nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 &&     nua.indexOf('AppleWebKit') > -1) && !(nua.indexOf('Chrome') > -1));
    
    root.setAttribute( 'class','webp');

}

$(document).ready(function(){
    $('.menu-item').on('click', function(){
           $(this).closest('.open-menu').removeClass('open-menu'); 
    });
	    $('.header__burger').on('click', function(){
           $(this).closest('.for__mobile-menu').addClass('open-menu'); 
    });
	
    let width = $(window).width();
    console.log(width);

    $('[data-dropdown]').on('click', function(){
        $(this).closest('[data-parent]').toggleClass('open');
    });
        $('.header__menu-close').on('click', function(){
        $(this).closest('.open-menu').toggleClass('open-menu');
    });

    
    

    // HEADER

    if (($(window).scrollTop() > 50)&&!$('.header__wrapper').hasClass('scrolled')) {
        $('.header__wrapper').addClass('scrolled')
    } 

    $(window).on('scroll', function (e) {
        if ($(window).scrollTop() > 50) {
            $('.header__wrapper').addClass('scrolled')
        } else {
            $('.header__wrapper').removeClass('scrolled')
        }
    });
    
    // btn-up
    $(".btn-up").on("click",function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, {
            duration: 1000,
            easing: "linear"
        });
    })

});
