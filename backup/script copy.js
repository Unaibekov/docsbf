// $("#menu").load("menu.html");
// $("#footer").load("footer.html");


$('.menu-button').click(function(){
    $('.sidebar').addClass('sidebar-open');
    $('.menu-close').addClass('sidebar-open');

});

$('.menu-close').click(function(){
    $('.sidebar').removeClass('sidebar-open');
    $('.menu-close').removeClass('sidebar-open');
});
$( () => {
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 150 ? $('.header').addClass('header-shadow') : $('.header').removeClass('header-shadow');
		windowTop > 150 ? $('.logoName').addClass('logoName-scroll') : $('.logoName').removeClass('logoName-scroll');
        windowTop > 150 ? $('.nav-link').addClass('nav-link-scroll') : $('.nav-link').removeClass('nav-link-scroll');
		windowTop > 150 ? $('#auth').addClass('auth-scroll') : $('#auth').removeClass('auth-scroll');
        windowTop > 150 ? $('.auth-mobile').addClass('auth-mobile-scroll') : $('.auth-mobile').removeClass('auth-mobile-scroll');
		
        windowTop > 150 ? $('.contacts').addClass('contacts-scroll') : $('.contacts').removeClass('contacts-scroll');
		// windowTop > 100 ? $('.nav').addClass('nav-scroll') : $('.nav').removeClass('nav-scroll');
        windowTop > 250 ? $('#top-second').addClass('top-second-open') : $('#top-second').removeClass('top-second-open');
	});
	
	//Click Logo To Scroll To Top
	$('#top, #top-second').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},100);
	});
	
	//Smooth Scrolling Using Navigation Menu
	$('#participant').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 50
		},100);
		e.preventDefault();
	});	

});

// добавление класса при наведении

// $('#main').hover(
//     function () {
//       $('#projects').addClass('megaMenu-active');
//     },
//     function () {
//       $('#projects').removeClass('megaMenu-active');
//     }
// );

$(document).ready(function(){
    $('.slider').slick({
        arrows:true, 
        dots:true,
        adaptiveHeight:true,
        speed:700,
        easing:'ease',
        autoplay:false,
        autoplaySpeed:5000,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotsHover:true,
    });
});

new WOW().init();