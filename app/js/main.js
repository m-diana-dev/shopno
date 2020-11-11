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

      $('.reviews-content__slider').slick({
        arrows: false,
        dots: true,
        asNavFor: '.reviews-text__slider'
      });
      $('.reviews-text__slider').slick({
        asNavFor: '.reviews-content__slider',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/prev.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/prev.png" alt=""></button>'
      });

      $(".rate-star").rateYo({
        rating: 5,
        starWidth: "14px",
        readOnly: true,
        ratedFill: "#f2da3b",
        spacing: "7px"
      });
});