'use strict';

document.addEventListener("DOMContentLoaded", function () {
  // try {
  //   if (window.innerWidth <= 500) {
  //     var elems = document.querySelectorAll(".marquee .open-basic-popup");
  //     elems.forEach(function (el) {
  //       el.classList.remove('open-basic-popup');
  //     });
  //   }
  // } catch (e) {
  //   console.log(e);
  // }

  try {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".pochet__notebook", {
      scrollTrigger: {
        trigger: ".pochet__notebook",
        scrub: 3
      },
      top: 300,
      ease: "linear",
      duration: 10
    });
  } catch(e) {
    console.log(e);
  }

  var popupTimeout = setTimeout(openPopup, 300000, 'popupTimer');
  clearTimeout(popupTimeout);
  var isOpenPopup = false;
  var main = document.getElementById('main');
  // main.addEventListener('click', function(e) {
  //     const target = e.target;
  //     console.log(target);
  //
  //     if(isOpenPopup) {
  //         closePopup();
  //     }
  // })

  var overlays = document.querySelectorAll(".overlay");
  overlays.forEach(function (overlay) {
    overlay.addEventListener("click", function (e) {
      var target = e.target;
      console.log(target);
      if (target.closest(".overlay") && target !== overlay) return;
      closePopup(overlay.id);
    });
  });
  function openPopup(id) {
    // clearTimeout(popupTimeout);
    if (isOpenPopup) {
      closePopup();
      return;
    }
    console.log('ok');
    var popup = document.getElementById(id);
    popup.classList.add("active");
    main.classList.add('blur');
    isOpenPopup = true;
    document.body.style.overflow = 'hidden';
  }
  function closePopup() {
    main.classList.remove('blur');
    document.querySelectorAll(".overlay").forEach(function (popup) {
      popup.classList.remove('active');
      if (popup.querySelector("iframe")) {
        popup.querySelector("iframe").contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });
    isOpenPopup = false;
    document.body.removeAttribute('style');
  }
  function validate(form) {
    var fields;
    try {
      fields = form.querySelectorAll(".required-field");
    } catch (e) {
      console.log('err');
      return true;
    }
    var arr = [];
    console.log(fields);
    fields.forEach(function (field) {
      if (!field.value || field.value === "") {
        field.classList.add("invalid");
        arr.push(false);
        return;
      }
      field.classList.remove("invalid");
      arr.push(true);
    });
    if (arr.find(function (el) {
      return el === false;
    }) === false) return false;
    console.log('ookkk');
    return true;
  }
  document.body.addEventListener('keydown', function (e) {
    if (e.which === 27) {
      closePopup('popupTimer');
      closePopup('popupBasic');
    }
  });
  var buttons = document.querySelectorAll(".open-basic-popup");
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      openPopup('popupBasic');
    });
  });
  try {
    var _buttons = document.querySelectorAll(".open-signup-popup");
    _buttons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupSignup');
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons2 = document.querySelectorAll(".open-signupclub-popup");
    _buttons2.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupSignupClub');
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons3 = document.querySelectorAll(".open-date-popup");
    _buttons3.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupDate');
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons4 = document.querySelectorAll(".open-tarifst-popup");
    _buttons4.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupTarifStandard');
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons5 = document.querySelectorAll(".open-tarifpro-popup");
    _buttons5.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupTarifPro');
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons6 = document.querySelectorAll(".open-tarifpremium-popup");
    _buttons6.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupTarifPremium');
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons7 = document.querySelectorAll(".open-credit-popup");
    _buttons7.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupCredit');
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var btn = document.getElementById("scroll-to-tarif");
    btn.addEventListener("click", function () {
      document.querySelector(".tarif").scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth"
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons8 = document.querySelectorAll(".open-corpclient-popup");
    _buttons8.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupCorpClient');
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var cookiePlate = document.getElementById("cookie-plate");
    var cookieBtn = document.getElementById("cookieBtn");
    cookieBtn.addEventListener("click", function () {
      cookiePlate.remove();
    });
  } catch (e) {
    console.log(e);
  }

  // const basicForm = document.getElementById('basicForm');
  var forms = document.querySelectorAll('.form-submit');
  console.log(forms);
  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      if (!validate(form)) {
        e.preventDefault();
        return;
      }
      console.log('ok');
    });
  });
  try {
    var _buttons9 = document.querySelectorAll(".open-timer-popup");
    _buttons9.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        openPopup('popupTimer');
      });
    });
  } catch (e) {
    console.log(e);
  }

  //
  // const timerForm = document.getElementById("timerForm");
  //
  //
  // timerForm.addEventListener("submit", function (e) {
  //     console.log('as')
  //     if (!validate(timerForm)) {
  //         e.preventDefault();
  //         return;
  //     }
  //     console.log('ok')
  // })

  var closePopupButtons = document.querySelectorAll(".popup__close");
  closePopupButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var parent = btn.closest(".overlay");
      closePopup(parent.id);
    });
  });
  try {
    var blocks = document.querySelectorAll('.lessons__lesson__topics__list');
    var toggles = document.querySelectorAll('.lessons__lesson__topics__toggle');
    toggles.forEach(function (toggle) {
      toggle.addEventListener('click', function () {
        var parent = toggle.closest('.lessons__lesson__body__topics');
        var block = parent.querySelector(".lessons__lesson__topics__list");
        if (toggle.innerText === 'Свернуть список') {
          toggle.innerText = 'Показать все темы урока';
        } else {
          toggle.innerText = 'Свернуть список';
        }
        block.classList.toggle("active");
      });
    });
  } catch (e) {
    console.log(e);
  }

  //
  // try {
  //     const wrapper = document.querySelector('.marquee-wrapper'),
  //         marquee = document.querySelector('.marquee'),
  //         wrapperWidth = wrapper.offsetWidth,
  //         marqueeWidth = marquee.scrollWidth;
  //
  //     let interval;
  //
  //     document.querySelector('button').onclick = function() {
  //         clearInterval(interval)
  //     }
  //
  //     document.querySelectorAll('.marquee span').forEach(function(el) {
  //         el.addEventListener("mouseover", function () {
  //             clearInterval(interval);
  //         });
  //
  //         el.addEventListener("mouseout", function () {
  //             interval = setInterval(move, 10);
  //         });
  //     })
  //
  //     function move() {
  //         let currentTX = getComputedStyle(marquee).transform.split(',');
  //         if( currentTX[4] === undefined ) {
  //             currentTX = -1;
  //         } else {
  //             currentTX = parseFloat(currentTX[4]) - 1;
  //         }
  //
  //         if(-currentTX >= marqueeWidth) {
  //             marquee.style.transform = 'translateX(' + wrapperWidth + 'px)';
  //
  //         } else {
  //             marquee.style.transform = 'translateX(' + currentTX + 'px)';
  //         }
  //     }
  //
  //     interval = setInterval(move, 10);
  // } catch(e) {
  //     console.log(e);
  // }

  try {
    var swiper = new Swiper('.teachers__swiper', {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next-1',
        prevEl: '.swiper-button-prev-1'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
      breakpoints: {
        501: {
          slidesPerView: 3
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var $counter = document.querySelector(".video-review__counter");
    var _swiper = new Swiper('.video-reviews__swiper', {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.video-review__next',
        prevEl: '.video-review__prev'
      },
      pagination: {
        el: ".video-review__counter",
        type: "fraction",
        renderFraction: function renderFraction(currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
        }
      },
      breakpoints: {
        501: {
          slidesPerView: 4
        }
      }

      // on: {
      //     init: function(){
      //         console.log(this);
      //         $counter.innerHTML = `${this.snapIndex + 4} из ${this.slides.length / 4}`
      //     },
      //     slideChange: function(){
      //         $counter.innerHTML = `${this.snapIndex + 4} из ${this.slides.length}`
      //     }
      // }
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _swiper2 = new Swiper('.reviews__swiper', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      breakpoints: {
        501: {
          slidesPerView: 3
        }
      }
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _btn = document.getElementById('instrument-btn');
    var block = document.getElementById('instrument-more-content');
    _btn.addEventListener("click", function () {
      block.classList.add("active");
      _btn.style.display = 'none';
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _btn2 = document.querySelector(".program__show-btn");
    var hiddens = document.querySelectorAll(".program__module-hidden");
    _btn2.addEventListener("click", function () {
      hiddens.forEach(function (elem) {
        elem.classList.add('active');
        document.querySelector(".scroll-to-tarif").classList.add("active");
      });
      _btn2.style.display = 'none';
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _btn3 = document.querySelector(".welcome__offer__guide__btn-2");
    _btn3.addEventListener("click", function () {
      document.querySelector('.program').scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth"
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var dots = document.querySelectorAll(".graphic-dot-1");
    var plates = document.querySelectorAll('.demand__graphic__plate-1');
    dots.forEach(function (dot) {
      dot.addEventListener("mouseover", function (e) {
        plates.forEach(function (plate) {
          if (dot.dataset.dot === plate.dataset.dot) {
            plate.classList.add("active");
          }
        });
      });
      dot.addEventListener("mouseout", function (e) {
        plates.forEach(function (plate) {
          if (dot.dataset.dot === plate.dataset.dot) {
            plate.classList.remove("active");
          }
        });
      });
      if (window.innerWidth >= 500) {
        dot.addEventListener("click", function (e) {
          document.querySelector(".structure").scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth"
          });
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _dots = document.querySelectorAll(".graphic-dot-2");
    var _plates = document.querySelectorAll('.demand__graphic__plate-2');
    _dots.forEach(function (dot) {
      dot.addEventListener("mouseover", function (e) {
        _plates.forEach(function (plate) {
          if (dot.dataset.dot === plate.dataset.dot) {
            plate.classList.add("active");
          }
        });
      });
      dot.addEventListener("mouseout", function (e) {
        _plates.forEach(function (plate) {
          if (dot.dataset.dot === plate.dataset.dot) {
            plate.classList.remove("active");
          }
        });
      });
      if (window.innerWidth >= 500) {
        dot.addEventListener("click", function (e) {
          document.querySelector(".structure").scrollIntoView({
            block: "start",
            inline: "nearest",
            behavior: "smooth"
          });
        });
      }
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons10 = document.querySelectorAll(".faq__buttons button");
    if (window.innerWidth > 500) {
      var _elems = document.querySelectorAll(".faq__text p");
      _buttons10.forEach(function (btn) {
        btn.addEventListener("click", function () {
          _buttons10.forEach(function (btn2) {
            return btn2.classList.remove('active');
          });
          _elems.forEach(function (el) {
            el.classList.remove('active');
            if (btn.dataset.id === el.dataset.id) {
              el.classList.add('active');
              btn.classList.add('active');
            }
          });
        });
      });
    } else {
      var _elems2 = document.querySelectorAll(".faq__buttons__text");
      _elems2.forEach(function (el) {
        el.dataset.height = Number(el.offsetHeight) + 15;
        el.style.height = '0px';
        el.style.padding = '0px';
      });
      _buttons10.forEach(function (btn) {
        btn.addEventListener("click", function () {
          if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            _elems2.forEach(function (el) {
              if (btn.dataset.id === el.dataset.id) {
                el.style.height = '0px';
                setTimeout(function () {
                  el.classList.remove('active');
                }, 200);
              }
            });
          } else {
            _buttons10.forEach(function (btn2) {
              return btn2.classList.remove('active');
            });
            _elems2.forEach(function (el) {
              el.style.height = '0px';
              el.classList.remove('active');
              if (btn.dataset.id === el.dataset.id) {
                el.style.height = el.dataset.height + 'px';
                el.classList.add('active');
                btn.classList.add('active');
              }
            });
          }
        });
      });
    }
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons11 = document.querySelectorAll(".reviews__btn");
    _buttons11.forEach(function (btn) {
      btn.addEventListener("click", function () {
        openPopup("popupReview-".concat(btn.dataset.id));
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    document.getElementById("toPrivateClub").addEventListener("click", function () {
      document.querySelector(".promo").scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth"
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var _buttons12 = document.querySelectorAll(".members__btn");
    _buttons12.forEach(function (btn) {
      btn.addEventListener("click", function () {
        document.querySelector(".start").scrollIntoView({
          block: "start",
          inline: "nearest",
          behavior: "smooth"
        });
      });
    });
  } catch (e) {
    console.log(e);
  }
  try {
    var slides = document.querySelectorAll(".video-reviews__swiper .swiper-slide");
    slides.forEach(function (el) {
      el.addEventListener("click", function () {
        var vid = el.querySelector("video");
        if (window.innerWidth < 500) {
          if (vid.paused) {
            vid.play();
          } else {
            vid.pause();
          }
        }
      });
    });
  } catch (e) {
    console.log(e);
  }

  try {
    var swiper = new Swiper('.free-events__slider', {
      speed: 400,
      spaceBetween: 20,
      slidesPerView: 1,
      navigation: {
        nextEl: '.free-events .swiper-button-next-2',
        prevEl: '.free-events .swiper-button-prev-2'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      },
      breakpoints: {
        501: {
          slidesPerView: 3
        }
      }
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const btn = document.querySelector(".courses__show-more");
    const accordion = document.querySelector(".courses__content-accordion");

    btn.addEventListener("click", function () {
      accordion.classList.toggle("active");
      if (accordion.classList.contains("active")) {
        btn.innerText = 'Скрыть';
      } else {
        btn.innerText = 'Показать все курсы';
      }
    })
  } catch (e) {
    console.log(e);
  }

  try {
    const btn = document.querySelector(".welcome__head__menu__courses");
    const dropdownMenu = document.querySelector(".menu-dropdown-courses");

    btn.addEventListener('click', function () {
      dropdownMenu.classList.toggle('active');
      btn.classList.toggle('active');
    });

    dropdownMenu.addEventListener('mouseleave', function (e) {
      dropdownMenu.classList.remove('active');
      btn.classList.remove('active');
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const btn = document.querySelector(".welcome__head__menu__point-free");
    const dropdownMenu = document.querySelector(".menu-dropdown-free");

    btn.addEventListener('mouseover', function () {
      dropdownMenu.classList.toggle('active');
      // btn.classList.toggle('active');
    });

    btn.addEventListener('mouseout', function () {
      dropdownMenu.classList.remove('active');
      // btn.classList.toggle('active');
    });

    dropdownMenu.addEventListener('mouseleave', function (e) {
      dropdownMenu.classList.remove('active');
      // btn.classList.remove('active');
    });

    dropdownMenu.addEventListener('mouseover', function (e) {
      dropdownMenu.classList.add('active');
      // btn.classList.remove('active');
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const btn = document.querySelector(".welcome__head__menu__graduates");
    const dropdownMenu = document.querySelector(".menu-dropdown-graduates");

    btn.addEventListener('mouseover', function () {
      dropdownMenu.classList.toggle('active');
      // btn.classList.toggle('active');
    });

    btn.addEventListener('mouseout', function () {
      dropdownMenu.classList.remove('active');
      // btn.classList.toggle('active');
    });

    dropdownMenu.addEventListener('mouseleave', function (e) {
      dropdownMenu.classList.remove('active');
      // btn.classList.remove('active');
    });

    dropdownMenu.addEventListener('mouseover', function (e) {
      dropdownMenu.classList.add('active');
      // btn.classList.remove('active');
    });
  } catch (e) {
    console.log(e);
  }

  try {
    const burger = document.querySelector(".welcome__head__burger");
    const menu = document.querySelector(".menu-mobile");
    const closeBtn = document.querySelector(".menu-mobile__close-btn");

    burger.addEventListener("click" ,function () {
      menu.classList.add("active");
      document.body.classList.add("blocked");
    });

    closeBtn.addEventListener("click" ,function () {
      menu.classList.remove("active");
      document.body.classList.remove("blocked");

    });

  } catch (e) {
    console.log(e);
  }

  try {
    const mobileDropdown = document.querySelectorAll(".menu-mobile-dropdown");
    const subMenus = document.querySelectorAll(".menu-mobile__nav__submenu");

    subMenus.forEach(function(menu) {
      menu.dataset.height = `${menu.clientHeight}`;
      menu.style.height = '0px';
    });

    mobileDropdown.forEach(function(elem) {
      elem.addEventListener("click", function (e) {
        e.preventDefault();
        const parent = elem.closest("li");
        const menu = parent.querySelector(".menu-mobile__nav__submenu");

        menu.classList.toggle("active");
        elem.classList.toggle("active");

        if (menu.classList.contains("active")) {
          menu.style.height = menu.dataset.height + 'px';
        } else {
          menu.style.height = '0px';
        }
      })
    });
  } catch (e) {
    console.log(e);
  }
});
