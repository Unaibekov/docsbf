
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



//accordeon
const accOpen = document.querySelectorAll('.doc'); 
    accOpen.forEach(doc => {
        doc.addEventListener('click', () => {
            doc.classList.toggle('active');
        });
    });

    
//mobile menu
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const menuClose = document.querySelector('.menu-close');
const linksClose = document.querySelectorAll('.nav-menu-link');
const links = document.querySelectorAll('.nav-menu-link');


menuButton.addEventListener('click', () => {
    menu.classList.add('is-active');
    menuClose.classList.add('is-active');
});
menuClose.addEventListener('click', () => {
    menu.classList.remove('is-active');
    menuClose.classList.remove('is-active');
});
linksClose.forEach(linkClose => {
    linkClose.addEventListener('click', () => {
        menu.classList.remove('is-active');
        menuClose.classList.remove('is-active');
    });
});

// //smooth scroll
// const anchors = document.querySelectorAll('a.scroll-to')

// for (let anchor of anchors) {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault()
    
//     const blockID = anchor.getAttribute('href')
    
//     document.querySelector(blockID).scrollIntoView({
//       behavior: 'smooth',
//       block: 'start'
//     })
//   })
// }

//fixed header 
window.onscroll = () => {
    const header = document.querySelector('.header');
    const Y = window.scrollY; 

    if (Y > 300) {
        header.classList.add('header-fixed')
    } else if (Y < 300) {
        header.classList.remove('header-fixed')
    }
}

//on top
window.onscroll = () => {
    const header = document.querySelector('.top-second');
    const Y = window.scrollY; 

    if (Y > 300) {
        header.classList.add('top-second-open')
    } else if (Y < 300) {
        header.classList.remove('top-second-open')
    }
}


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