
$( () => {
	
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

    // active link
    $('a.nav-menu-link').click(function(){
        $(this).addClass('link-active').siblings().removeClass('link-active')
    })

    $('.menu-button').click(function(){
        $('.nav-menu').addClass('is-active');
        $('.menu-close').addClass('is-active');
    });

    $('.menu-close').click(function(){
        $('.nav-menu').removeClass('is-active');
        $('.menu-close').removeClass('is-active');
    });

    // обрабатываем нажатие на кнопку
    $("#submit").click(function () {
        // очищаем переменную, в которой будет наш поисковый запрос
        var term = "";
        // и переменную, которая отвечает за количество найденных совпадений
        var n = "0";
        // убираем всю подсветку из прошлого поиска, если она была
        $('body').removeHighlight();
        // скрываем блок с текстом о количестве найденных результатов
        $("p.results").hide().empty();
        // с помощью магии jQuery берём текст из строки поиска и кладём его в переменную term
        term = $('#term').attr('value');
        // если строка поиска пустая — выводим сообщение
        if ($('#term').val() == "") {
          $("p.results").fadeIn().append("Вы ничего не ввели :(");
          return false;
          // иначе, если в строке поиска что-то было…
        } else {
          // в блоке content, где у нас находится весь текст, плагином подсвечиваем все найденные совпадения (если совпадений не будет — не будет и подсветки)
          $('.container').highlight(term);
          // берём количество совпадений
          n = $("span.highlight").length;
          // если совпадений нет — в разделе results пишем, что ничего не нашли
          if (n == 0) {
            $("p.results").fadeIn().append("Ничего такого в тексте нет");
            // иначе в том же разделе пишем число совпадений  
          } else {
            $("p.results").fadeIn().append('Найдено совпадений:' + n);
          }
          return false;
        }
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