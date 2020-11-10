$(function(){
    $('.header__hamburger-menu').on('click', function(){
        $('.header__menu-list').slideToggle();
        $('.header__hamburger-menu-line').toggleClass('color-change');
      });

      $('.about-content__slider').slick({
        arrows: false,
        dots: true
      });

      $('.services-content__item-link').on('click', function(){
        $(this).next().addClass('active');
      });

      $('.close-btn').on('click', function(){
        $(this).parent().removeClass('active');
      });
});