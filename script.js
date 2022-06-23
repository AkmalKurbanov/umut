$(document).ready(function () {
  $(".filter__item").on("click", function () {
      $(this).toggleClass("active"),
        $(".filter__item").not(this).removeClass("active")
    }),


    $(".all-objects").addClass("show"),

    $(".all-objects-js").on("click", function () {
      setTimeout(function () {
        $('.link').attr('href', $('.object__type.show .swiper-slide-active .hidden-link').data('value'));
      }, 500);
      $(".building-objects, .done-objects").removeClass("show"),
        $(".building-objects, .done-objects").css("display", "none"),
        $(".all-objects").css("display", "flex"),
        setTimeout(function () {
          $(".all-objects").addClass("show")
        }, 300)
    }),


    $(".building-objects-js").on("click", function () {
      setTimeout(function () {
        $('.link').attr('href', $('.object__type.show .swiper-slide-active .hidden-link').data('value'));
      }, 500);
      $(".all-objects, .done-objects").removeClass("show"),
        $(".all-objects, .done-objects").css("display", "none"),
        $(".building-objects").css("display", "flex"),
        setTimeout(function () {
          $(".building-objects").addClass("show")
        }, 300)
    }),

    $(".done-objects-js").on("click", function () {
      setTimeout(function () {
        $('.link').attr('href', $('.object__type.show .swiper-slide-active .hidden-link').data('value'));
      }, 500);
      $(".all-objects, .building-objects").removeClass("show"),
        $(".all-objects, .building-objects").css("display", "none"),
        $(".done-objects").css("display", "flex"),
        setTimeout(function () {
          $(".done-objects").addClass("show")
        }, 300)
    })


  var Swiper1 = new Swiper(".Swiper1", {
    speed: 1000,
    allowTouchMove: false,
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var Swiper2 = new Swiper(".Swiper2", {
    speed: 1000,
    allowTouchMove: false,
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var Swiper3 = new Swiper(".Swiper3", {
    speed: 1000,
    allowTouchMove: false,
    autoHeight: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $('.filter-select').on('click', function () {
    $(this).find('.select-dropdown').toggleClass('show');
  });
  $('.select-option').on('click', function () {
    $(this).parent().parent().find('.selected').text($(this).data('value'));
  });

  var linkOnLoad = $('.object__type.show .swiper-slide-active .hidden-link').data('value');
  $('.link').attr('href', linkOnLoad);

  $('.swiper-button-prev, .swiper-button-next').on('click', function () {
    $('.link').attr('href', $('.object__type.show .swiper-slide-active .hidden-link').data('value'));
  })







  $(".all-ducumentation").addClass("show"),

    $(".all-ducumentation-js").on("click", function () {
      $(".objects, .company").removeClass("show"),
        $(".objects, .company").css("display", "none"),
        $(".all-ducumentation").css("display", "block"),
        setTimeout(function () {
          $(".all-ducumentation").addClass("show")
        }, 300)
    }),


    $(".objects-js").on("click", function () {
      $(".all-ducumentation, .company").removeClass("show"),
        $(".all-ducumentation, .company").css("display", "none"),
        $(".objects").css("display", "block"),
        setTimeout(function () {
          $(".objects").addClass("show")
        }, 300)
    }),
    $(".company-js").on("click", function () {
      $(".all-ducumentation, .objects").removeClass("show"),
        $(".all-ducumentation, .objects").css("display", "none"),
        $(".company").css("display", "block"),
        setTimeout(function () {
          $(".company").addClass("show")
        }, 300)
    })



  var Swiper4 = new Swiper(".Swiper4", {
    speed: 500,
    allowTouchMove: false,
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var Swiper5 = new Swiper(".Swiper5", {
    speed: 500,
    allowTouchMove: false,
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var Swiper6 = new Swiper(".Swiper6", {
    speed: 500,
    allowTouchMove: false,
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var Swiper7 = new Swiper(".Swiper7", {
    speed: 500,
    slidesPerView: 4,
    spaceBetween: 50,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  $('.consultation-js').on('click', function (e) {
    e.preventDefault();
    $('.form--modal').addClass('open');
    $('body').addClass('no-scoll')
  });
  $('.form__close-btn').on('click', function () {
    $('.form--modal').removeClass('open');
    $('body').removeClass('no-scoll')
  });


  $('form input').on('keyup', function () {
    console.log($(this).val());
    if ($(this).parents('form').find('.name-js').val() != '' && $(this).parents('form').find('.phone-js').val() != '') {
      $(this).parents('form').find('button').removeClass('btn--empty');
    } else {
      $(this).parents('form').find('button').addClass('btn--empty');
    }
  });


  $(document).mouseup(function (e) {
    var div = $(".form__wrap");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $('.form--modal').removeClass('open');
      $('body').removeClass('no-scoll')
    }
  });
  $('.form__input').on('click', function () {
    $(this).find('input').focus();
  });

});