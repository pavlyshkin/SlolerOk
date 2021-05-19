$(document).ready(function () {
  'use strict';

    $('.form').each(function(){
    $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Provide a name",
        minlength: "The name must not be shorter than 2 letters",
      },
      phone: {
        required: "Phone is required",
      },
    },
  });
  });
  $('.phone').mask('+7 (900)000-00-00', {placeholder: "Телефон"});

 var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.example__button--next',
        prevEl: '.example__button--prev',
      },
      keyboard: {
        pageLeftRight: true
      }
    });

    (function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if(window.pageYOffset > 50){
            header.classList.add('header__active');
        } else{
            header.classList.remove('header__active');
        }
    };
  }());
 

  $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});