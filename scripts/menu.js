$(function(){
    $('.hamburguer').click(function(){
        var menu = $('.mobile .nav');
        var icon = $('.mobile .icon');
        var body = $('body');
        if(menu.is(":hidden") == true){
            menu.slideDown();
            icon.removeClass('fa-bars');
            icon.addClass('fa-times');
        }else{
            menu.slideUp();
            icon.removeClass('fa-times');
            icon.addClass('fa-bars');
        }
    })
})