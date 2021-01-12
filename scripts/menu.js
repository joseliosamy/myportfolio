$(function(){
    $('.hamburguer').click(function(){
        var menu = $('.mobile .nav');
        var icon = $('.mobile .icon');
        var ul_a = $('.ul a');
        if(menu.is(":hidden") == true){
            menu.slideDown();
            icon.removeClass('fa-bars');
            icon.addClass('fa-times');
                $(ul_a).click(function(){
                    menu.slideUp();
                    icon.removeClass('fa-times');
                    icon.addClass('fa-bars');
                })
        }else{
            menu.slideUp();
            icon.removeClass('fa-times');
            icon.addClass('fa-bars');
        }
    })
})
$(function(){
    $('.ul a').click(function(){
        var header = $("header");
        header.slideUp();
        header.slideDown();
    })
})

