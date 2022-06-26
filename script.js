$(document).ready(function () {

  function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 700);
  }
  $('[data-scroll]').on('click', scrollToSection);
  $(".filter__item").on("click", function () {
      $(this).toggleClass("active"),
        $(".filter__item").not(this).removeClass("active")
    }),


    $(".all-objects").addClass("show"),

    $(".all-objects-js").on("click", function () {
      setTimeout(function () {
        $('.link-js').attr('href', $('.object__type.show .swiper-slide-active .hidden-link').data('value'));
      }, 500);
      $(".building-objects, .done-objects").removeClass("show"),
        $(".building-objects, .done-objects").css("display", "none"),
        $(".all-objects").css("display", "block"),
        setTimeout(function () {
          $(".all-objects").addClass("show")
        }, 300)
    }),


    $(".building-objects-js").on("click", function () {
      setTimeout(function () {
        $('.link-js').attr('href', $('.object__type.show .swiper-slide-active .hidden-link').data('value'));
      }, 500);
      $(".all-objects, .done-objects").removeClass("show"),
        $(".all-objects, .done-objects").css("display", "none"),
        $(".building-objects").css("display", "block"),
        setTimeout(function () {
          $(".building-objects").addClass("show")
        }, 300)
    }),

    $(".done-objects-js").on("click", function () {
      setTimeout(function () {
        $('.link-js').attr('href', $('.object__type.show .swiper-slide-active .hidden-link').data('value'));
      }, 500);
      $(".all-objects, .building-objects").removeClass("show"),
        $(".all-objects, .building-objects").css("display", "none"),
        $(".done-objects").css("display", "block"),
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
    $('.filter-select').not(this).find('.select-dropdown').removeClass('show');
  });
  $('.select-option').on('click', function () {
    $(this).parent().parent().find('.selected').text($(this).data('value'));
  });

  var linkOnLoad = $('.object__type.show .swiper-slide-active .hidden-link').data('value');
  $('.link-js').attr('href', linkOnLoad);

  $('.swiper-button-prev, .swiper-button-next').on('click', function () {
    $('.link-js').attr('href', $('.object__type.show .swiper-slide-active .hidden-link').data('value'));
  })

  $(document).mouseup(function (e) {
    var div = $(".filter-select");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $('.select-dropdown').removeClass('show');
    }
  });






  $(".all-ducumentation").addClass("show"),

    $(".all-ducumentation-js").on("click", function () {
      $(".muras-ducumentation, .jetigen-ducumentation").removeClass("show"),
        $(".muras-ducumentation, .jetigen-ducumentation").css("display", "none"),
        $(".all-ducumentation").css("display", "block"),
        setTimeout(function () {
          $(".all-ducumentation").addClass("show")
        }, 300)
    }),


    $(".muras-ducumentation-js").on("click", function () {
      $(".all-ducumentation, .jetigen-ducumentation").removeClass("show"),
        $(".all-ducumentation, .jetigen-ducumentation").css("display", "none"),
        $(".muras-ducumentation").css("display", "block"),
        setTimeout(function () {
          $(".muras-ducumentation").addClass("show")
        }, 300)
    }),
    $(".jetigen-ducumentation-js").on("click", function () {
      $(".all-ducumentation, .muras-ducumentation").removeClass("show"),
        $(".all-ducumentation, .muras-ducumentation").css("display", "none"),
        $(".jetigen-ducumentation").css("display", "block"),
        setTimeout(function () {
          $(".jetigen-ducumentation").addClass("show")
        }, 300)
    })



  var Swiper4 = new Swiper(".Swiper4", {
    speed: 500,
    allowTouchMove: false,
    spaceBetween: 25,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      "0": {
        slidesPerView: 1
      },
      "767": {
        slidesPerView: 2
      },
      "991": {
        slidesPerView: 3
      },
      "1200": {
        slidesPerView: 4,
      },
    }
  });
  var Swiper5 = new Swiper(".Swiper5", {
    speed: 500,
    allowTouchMove: false,
    spaceBetween: 25,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      "0": {
        slidesPerView: 1
      },
      "767": {
        slidesPerView: 2
      },
      "991": {
        slidesPerView: 3
      },
      "1200": {
        slidesPerView: 4,
      },
    }
  });
  var Swiper6 = new Swiper(".Swiper6", {
    speed: 500,
    allowTouchMove: false,
    spaceBetween: 25,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      "0": {
        slidesPerView: 1
      },
      "767": {
        slidesPerView: 2
      },
      "991": {
        slidesPerView: 3
      },
      "1200": {
        slidesPerView: 4,
      },
    }
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
  var apartmentSlider = new Swiper(".apartment-slider", {
    speed: 500,
    slidesPerView: 3,
    spaceBetween: 50,
    allowTouchMove: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      "0": {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      "575": {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      "767": {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    }
  });



  $('.consultation-js').on('click', function (e) {
    e.preventDefault();
    $('.consultation-window-js').addClass('open');
    $('body').addClass('no-scroll');
  });
  $('.close-btn').on('click', function () {
    $('.form--modal, .contacts, .apartment-filter, .mobile-popup--menu').removeClass('open');
    $('body').removeClass('no-scroll');
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
    var div = $(".form__wrap, .contacts__wrap");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $('.form--modal, .contacts').removeClass('open');
      $('body').removeClass('no-scroll');
      if ($('.apartment-filter').hasClass('open')) {
        $('body').addClass('no-scroll');
      }
      $('.form-fields').remove();
    }
  });
  $(document).mouseup(function (e) {
    var div = $(".apartment-filter__wrap, .fancybox-container, .form--application");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $('.apartment-filter').removeClass('open');
      $('body').removeClass('no-scroll')
    }
  });
  $('.form__input').on('click', function () {
    $(this).find('input').focus();
  });




  $('.contacts-js').on('click', function (e) {
    e.preventDefault();
    $('.contacts, .mobile-popup--contacts').addClass('open');
    $('body').addClass('no-scroll')
  });


  $(document).mouseup(function (e) {
    var div = $(".mobile-popup__wrap");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $('.mobile-popup').removeClass('open');
    }
  });














  $('.apartment .col').on('click', function (e) {
    e.preventDefault();
    $('.apartment-filter').addClass('open');
    $('body').addClass('no-scroll');
  });



  $('.apartment .one-room-js ').on('click', function () {
    $('.apartment-filter__item').removeClass('show');
    $('.select-room .selected').text('1 комнатная');
    $('.one-room').addClass('show');
    $('.two-room').removeClass('show');
    $('.three-room').removeClass('show');
  });

  $('.apartment .two-room-js ').on('click', function () {
    $('.apartment-filter__item').removeClass('show');
    $('.select-room .selected').text('2 комнатная');
    $('.two-room').addClass('show');
    $('.one-room').removeClass('show');
    $('.three-room').removeClass('show');
  });

  $('.apartment .three-room-js ').on('click', function () {
    $('.apartment-filter__item').removeClass('show');
    $('.select-room .selected').text('3 комнатная');
    $('.three-room').addClass('show');
    $('.one-room').removeClass('show');
    $('.two-room').removeClass('show');
  });






  $('.all-obj-js').on('click', function () {
    $('.apartment-filter__item').removeClass('show');
    if ($('.select-room .selected').text() === '1 комнатная' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.one-room.stage-building').addClass('show');
    } else if ($('.select-room .selected').text() === '2 комнатная' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.two-room.stage-building').addClass('show');
    } else if ($('.select-room .selected').text() === '3 комнатная' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.three-room.stage-building').addClass('show');
    } else if ($('.select-room .selected').text() === '1 комнатная' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.one-room.stage-completion').addClass('show');
    } else if ($('.select-room .selected').text() === '2 комнатная' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.two-room.stage-completion').addClass('show');
    } else if ($('.select-room .selected').text() === '3 комнатная' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.three-room.stage-completion').addClass('show');
    } else if ($('.select-room .selected').text() === '1 комнатная' && $('.select-condition .selected').text() === 'Завершен') {
      $('.one-room.stage-completed').addClass('show');
    } else if ($('.select-room .selected').text() === '2 комнатная' && $('.select-condition .selected').text() === 'Завершен') {
      $('.two-room.stage-completed').addClass('show');
    } else if ($('.select-room .selected').text() === '3 комнатная' && $('.select-condition .selected').text() === 'Завершен') {
      $('.three-room.stage-completed').addClass('show');
    }

  });


  $('.muras-js').on('click', function () {
    $('.apartment-filter__item').removeClass('show');
    if ($('.select-room .selected').text() === '1 комнатная' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.one-room.muras-obj.stage-building').addClass('show');
    } else if ($('.select-room .selected').text() === '2 комнатная' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.two-room.muras-obj.stage-building').addClass('show');
    } else if ($('.select-room .selected').text() === '3 комнатная' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.three-room.muras-obj.stage-building').addClass('show');
    } else if ($('.select-room .selected').text() === '1 комнатная' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.one-room.muras-obj.stage-completion').addClass('show');
    } else if ($('.select-room .selected').text() === '2 комнатная' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.two-room.muras-obj.stage-completion').addClass('show');
    } else if ($('.select-room .selected').text() === '3 комнатная' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.three-room.muras-obj.stage-completion').addClass('show');
    } else if ($('.select-room .selected').text() === '1 комнатная' && $('.select-condition .selected').text() === 'Завершен') {
      $('.one-room.muras-obj.stage-completed').addClass('show');
    } else if ($('.select-room .selected').text() === '2 комнатная' && $('.select-condition .selected').text() === 'Завершен') {
      $('.two-room.muras-obj.stage-completed').addClass('show');
    } else if ($('.select-room .selected').text() === '3 комнатная' && $('.select-condition .selected').text() === 'Завершен') {
      $('.three-room.muras-obj.stage-completed').addClass('show');
    }
  })
  $('.jetigen-js').on('click', function () {
    $('.apartment-filter__item').removeClass('show');
    if ($('.select-room .selected').text() === '1 комнатная' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.one-room.jetigen-obj.stage-building').addClass('show');
    } else if ($('.select-room .selected').text() === '2 комнатная' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.two-room.jetigen-obj.stage-building').addClass('show');
    } else if ($('.select-room .selected').text() === '3 комнатная' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.three-room.jetigen-obj.stage-building').addClass('show');
    } else if ($('.select-room .selected').text() === '1 комнатная' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.one-room.jetigen-obj.stage-completion').addClass('show');
    } else if ($('.select-room .selected').text() === '2 комнатная' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.two-room.jetigen-obj.stage-completion').addClass('show');
    } else if ($('.select-room .selected').text() === '3 комнатная' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.three-room.jetigen-obj.stage-completion').addClass('show');
    } else if ($('.select-room .selected').text() === '1 комнатная' && $('.select-condition .selected').text() === 'Завершен') {
      $('.one-room.jetigen-obj.stage-completed').addClass('show');
    } else if ($('.select-room .selected').text() === '2 комнатная' && $('.select-condition .selected').text() === 'Завершен') {
      $('.two-room.jetigen-obj.stage-completed').addClass('show');
    } else if ($('.select-room .selected').text() === '3 комнатная' && $('.select-condition .selected').text() === 'Завершен') {
      $('.three-room.jetigen-obj.stage-completed').addClass('show');
    }
  })


  $('.one-room-js').on('click', function () {
    $('.apartment-filter__item').removeClass('show');
    if ($('.select-obj .selected').text() === 'Все' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.one-room.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.one-room.muras-obj.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.one-room.jetigen-obj.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'Все' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.one-room.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.one-room.muras-obj.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.one-room.jetigen-obj.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'Все' && $('.select-condition .selected').text() === 'Завершен') {
      $('.one-room.stage-completed').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-condition .selected').text() === 'Завершен') {
      $('.one-room.muras-obj.stage-completed').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-condition .selected').text() === 'Завершен') {
      $('.one-room.jetigen-obj.stage-completed').addClass('show');
    }
  });
  $('.two-room-js').on('click', function () {
    $('.apartment-filter__item').removeClass('show');
    if ($('.select-obj .selected').text() === 'Все' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.two-room.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.two-room.muras-obj.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.two-room.jetigen-obj.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'Все' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.two-room.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.two-room.muras-obj.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.two-room.jetigen-obj.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'Все' && $('.select-condition .selected').text() === 'Завершен') {
      $('.two-room.stage-completed').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-condition .selected').text() === 'Завершен') {
      $('.two-room.muras-obj.stage-completed').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-condition .selected').text() === 'Завершен') {
      $('.two-room.jetigen-obj.stage-completed').addClass('show');
    }
  });
  $('.three-room-js').on('click', function () {
    $('.apartment-filter__item').removeClass('show');
    if ($('.select-obj .selected').text() === 'Все' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.three-room.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.three-room.muras-obj.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-condition .selected').text() === 'На стадии строительства') {
      $('.three-room.jetigen-obj.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'Все' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.three-room.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.three-room.muras-obj.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-condition .selected').text() === 'На стадии завершения') {
      $('.three-room.jetigen-obj.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'Все' && $('.select-condition .selected').text() === 'Завершен') {
      $('.three-room.stage-completed').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-condition .selected').text() === 'Завершен') {
      $('.three-room.muras-obj.stage-completed').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-condition .selected').text() === 'Завершен') {
      $('.three-room.jetigen-obj.stage-completed').addClass('show');
    }
  });


  $('.stage-building-js').on('click', function () {
    $('.apartment-filter__item').removeClass('show');
    if ($('.select-obj .selected').text() === 'Все' && $('.select-room .selected').text() === '1 комнатная') {
      $('.one-room.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'Все' && $('.select-room .selected').text() === '2 комнатная') {
      $('.two-room.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'Все' && $('.select-room .selected').text() === '3 комнатная') {
      $('.three-room.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-room .selected').text() === '1 комнатная') {
      $('.one-room.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-room .selected').text() === '2 комнатная') {
      $('.two-room.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-room .selected').text() === '3 комнатная') {
      $('.three-room.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-room .selected').text() === '1 комнатная') {
      $('.one-room.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-room .selected').text() === '2 комнатная') {
      $('.two-room.stage-building').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-room .selected').text() === '3 комнатная') {
      $('.three-room.stage-building').addClass('show');
    }
  });

  $('.stage-completion-js').on('click', function () {
    $('.apartment-filter__item').removeClass('show');
    if ($('.select-obj .selected').text() === 'Все' && $('.select-room .selected').text() === '1 комнатная') {
      $('.one-room.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'Все' && $('.select-room .selected').text() === '2 комнатная') {
      $('.two-room.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'Все' && $('.select-room .selected').text() === '3 комнатная') {
      $('.three-room.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-room .selected').text() === '1 комнатная') {
      $('.one-room.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-room .selected').text() === '2 комнатная') {
      $('.two-room.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-room .selected').text() === '3 комнатная') {
      $('.three-room.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-room .selected').text() === '1 комнатная') {
      $('.one-room.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-room .selected').text() === '2 комнатная') {
      $('.two-room.stage-completion').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-room .selected').text() === '3 комнатная') {
      $('.three-room.stage-completion').addClass('show');
    }

  });

  $('.stage-completed-js').on('click', function () {
    $('.apartment-filter__item').removeClass('show');
    if ($('.select-obj .selected').text() === 'Все' && $('.select-room .selected').text() === '1 комнатная') {
      $('.one-room.stage-completed').addClass('show');
    } else if ($('.select-obj .selected').text() === 'Все' && $('.select-room .selected').text() === '2 комнатная') {
      $('.two-room.stage-completed').addClass('show');
    } else if ($('.select-obj .selected').text() === 'Все' && $('.select-room .selected').text() === '3 комнатная') {
      $('.three-room.stage-completed').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-room .selected').text() === '1 комнатная') {
      $('.one-room.stage-completed').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-room .selected').text() === '2 комнатная') {
      $('.two-room.stage-completed').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Мурас»' && $('.select-room .selected').text() === '3 комнатная') {
      $('.three-room.stage-completed').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-room .selected').text() === '1 комнатная') {
      $('.one-room.stage-completed').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-room .selected').text() === '2 комнатная') {
      $('.two-room.stage-completed').addClass('show');
    } else if ($('.select-obj .selected').text() === 'ЖД «Жетиген»' && $('.select-room .selected').text() === '3 комнатная') {
      $('.three-room.stage-completed').addClass('show');
    }

  });



  $('form').submit(function () {
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize()
    }).done(function () {
      $('.modalWindowWrap').fadeIn();
    });
    return false;
  });
  $('.btn-application-js').on('click', function () {
    $('.form--application').addClass('open');
    let roomCount = $(this).parent().find('.apartment-filter__item-count').attr('data-count');
    let square = $(this).parent().find('.apartment-filter__item-square').attr('data-square');
    let object = $(this).parent().find('.apartment-filter__item-object').attr('data-object');
    let status = $(this).parent().find('.apartment-filter__item-status').attr('data-status');
    console.log(roomCount, square, object, status);
    $(`<div class="form-fields"><input type="hidden" name="Кол-во комнат" vaue="${roomCount}"/><input type="hidden" name="Площадь кв." vaue="${square}"/><input type="hidden" name="Жилой комплекс" vaue="${object}"/><input type="hidden" name="Статус комплекса" vaue="${status}"/></div>`).prependTo('.form--application form');
  });

  $('.header__phones-trigger').on('click', function () {
    $('.phone-list-js').toggleClass('open');
  });
  $(document).mouseup(function (e) {
    var div = $(".phone-list-js");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      div.removeClass('open');
    }
  });
  $('.hamburger').on('click', function () {
    $(this).toggleClass('open');
    $('.mobile-popup--menu').addClass('open');
  });
  $('.mobile-popup--menu .close-btn').on('click', function () {
    $('.hamburger').removeClass('open');
  });
  $(document).mouseup(function (e) {
    var div = $(".mobile-popup__wrap");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $('.mobile-popup--menu, .hamburger').removeClass('open');
    }
  });
  $('.mobile-popup .nav a').on('click', function () {
    $('.mobile-popup--menu, .hamburger').removeClass('open');
  })











  $(document).on("click", ".right", function () {
    $(".Swiper1 .swiper-button-next").trigger("click");
  });
  $(document).on("click", ".left", function () {
    $(".Swiper1 .swiper-button-prev").trigger("click");
  });

  $(document).on("click", ".right", function () {
    $(".apartment-slider .swiper-button-next").trigger("click");
  });
  $(document).on("click", ".left", function () {
    $(".apartment-slider .swiper-button-prev").trigger("click");
  });



  $('.footer__nav').clone().appendTo('.col-mobile-nav');
  $('.footer__phone').clone().appendTo('.col-mobile-contacts');
  $('.social').clone().appendTo('.col-mobile-contacts');

});