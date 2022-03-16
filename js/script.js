$("#menu").load("menu.html");
$("#footer").load("footer.html");


$('.menu-button').click(function(){
    $('.sidebar').addClass('sidebar-open');
    $('.menu-close').addClass('sidebar-open');

});

$('.menu-close').click(function(){
    $('.sidebar').removeClass('sidebar-open');
    $('.menu-close').removeClass('sidebar-open');
});