
$(function(){

  // スムーススクロール
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  $('.menu-trigger').on('click',function(){

    $('.nav-sp-menu').fadeIn("slow");
    $(this).toggleClass('active');
    $('.header').toggleClass('nav-sp-open-header');

    if($(this).hasClass('active')) {
      $('.nav-sp-menu').fadeIn("slow");
    } else {
      $('.nav-sp-menu').fadeOut("slow");
    }

  });

  $('.nav-sp-menu a').on('click',function(){

    $('.menu-trigger').removeClass('active');
    $('.header').removeClass('nav-sp-open-header');
    $('.nav-sp-menu').fadeOut();

  });

});
