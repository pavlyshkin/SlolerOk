$(document).ready(function () {
  
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
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      keyboard: {
        pageLeftRight: true
      }
    });
});