$(function(){

      $('.header__hamburger-menu').on('click', function(){
          $('.header__hamburger-menu').toggleClass('header__hamburger-menu--active');
          $('.header__menu-list').toggleClass('header__menu-list--active');
      });

      $('.header__menu-list-link').on('click', function(){
          $('.header__hamburger-menu').removeClass('header__hamburger-menu--active');
          $('.header__menu-list').removeClass('header__menu-list--active');
      });

      $('.about-content__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
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
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.reviews-text__slider'
      });
      $('.reviews-text__slider').slick({
        asNavFor: '.reviews-content__slider',
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/prev.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/prev.png" alt=""></button>',
        responsive: [
          {
            breakpoint: 500,
            settings: {
              arrows: false
            }
          }
        ]
      });

      $(".rate-star").rateYo({
        rating: 5,
        starWidth: "14px",
        readOnly: true,
        ratedFill: "#f2da3b",
        spacing: "7px"
      });
});