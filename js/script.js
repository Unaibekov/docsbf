
$( () => {

    // <div id="header"></div>
    // $("#header").load("header.html");
    // $("#footer").load("footer.html");
	
	//On Scroll Functionality
	$(window).scroll( () => {
		var windowTop = $(window).scrollTop();
		windowTop > 150 ? $('.header').addClass('header-shadow') : $('.header').removeClass('header-shadow');
		windowTop > 150 ? $('.logoName').addClass('logoName-scroll') : $('.logoName').removeClass('logoName-scroll');
        windowTop > 150 ? $('.nav-link').addClass('nav-link-scroll') : $('.nav-link').removeClass('nav-link-scroll');
        windowTop > 150 ? $('.contacts').addClass('contacts-scroll') : $('.contacts').removeClass('contacts-scroll');
        windowTop > 250 ? $('#top-second').addClass('top-second-open') : $('#top-second').removeClass('top-second-open');
	});
	
	//Click Logo To Scroll To Top
	$('#top, #top-second').on('click', () => {
		$('html,body').animate({
			scrollTop: 0
		},100);
	});
	
    // slick slider
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
      
    // smooth scroll
    $('a.nav-menu-link').click(function(){
        var _href = $(this).attr('href')
        $('html, body').animate({scrollTop: $(_href).offset().top + 'px'}, {
            duration: 500,
            easing: 'swing'
        })
    })

    // mobile menu
    $('.menu-button').click(function(){
        $('.nav-menu').addClass('is-active');
        $('.menu-close').addClass('is-active');
    });

    $('.menu-close').click(function(){
        $('.nav-menu').removeClass('is-active');
        $('.menu-close').removeClass('is-active');
    });

    $('#search').hideseek({
      highlight: true,
      nodata: 'Результаты не найдены',
      ignore_accents: true,
  });
});

//accordeon
const accOpen = document.querySelectorAll('.doc'); 
    accOpen.forEach(doc => {
        doc.addEventListener('click', () => {
            doc.classList.toggle('active');
        });
    });

// //mobile menu
// const menuButton = document.querySelector('.menu-button');
// const menu = document.querySelector('.nav-menu');
// const menuClose = document.querySelector('.menu-close');
// const linksClose = document.querySelectorAll('.nav-menu-link');
// const links = document.querySelectorAll('.nav-menu-link');

// menuButton.addEventListener('click', () => {
//     menu.classList.add('is-active');
//     menuClose.classList.add('is-active');
// });
// menuClose.addEventListener('click', () => {
//     menu.classList.remove('is-active');
//     menuClose.classList.remove('is-active');
// });
// linksClose.forEach(linkClose => {
//     linkClose.addEventListener('click', () => {
//         menu.classList.remove('is-active');
//         menuClose.classList.remove('is-active');
//     });
// });

// добавление класса при наведении

// $('#main').hover(
//     function () {
//       $('#projects').addClass('megaMenu-active');
//     },
//     function () {
//       $('#projects').removeClass('megaMenu-active');
//     }
// );