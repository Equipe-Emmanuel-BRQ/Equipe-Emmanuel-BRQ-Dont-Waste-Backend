$('.menu-icon').click(function(){
    console.log("clicou")
    $(".navbar-menu").css('right', '0px');
})

$('.navbar-menu-close').click(function(){
    console.log("close")
    $('.navbar-menu').css('right','-2000px');
});