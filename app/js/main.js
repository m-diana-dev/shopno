$(function(){
    $('.header__hamburger-menu').on('click', function(){
        $('.header__menu-list').slideToggle();
        $('.header__hamburger-menu-line').toggleClass('color-change');
      });

      $('.about-content__slider').slick({
        arrows: false,
        dots: true
      });
});