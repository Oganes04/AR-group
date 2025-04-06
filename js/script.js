function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;

    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);
  
    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }

  function MarqueeRight(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;

    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);
  
    setInterval(function () {
      firstElement.style.marginLeft = `${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }
  
  //after window is completed load
  //1 class selector for marquee
  //2 marquee speed 0.2
  window.addEventListener('load', MarqueeRight('.marquee', 0.2))
  window.addEventListener('load', MarqueeRight('.partners__marquee.right', 0.2))
  window.addEventListener('load', Marquee('.partners__marquee', 0.2))
  window.addEventListener('load', Marquee('.partners__marquee.last', 0.2))







const { ScrollObserver, valueAtPercentage } = aat

const cardsContainer = document.querySelector('.services__cards')
const cards = document.querySelectorAll('.services__card')
cardsContainer.style.setProperty('--cards-count', cards.length)
cardsContainer.style.setProperty(
  '--card-height',
  `${cards[0].clientHeight}px`
)
Array.from(cards).forEach((card, index) => {
  const offsetTop = 55 + index * 55 + 150
  card.style.top = `${offsetTop}px`
  if (index === cards.length - 1) {
    return
  }
  const toScale = 1 - (cards.length - 1 - index) * 0.1
  const nextCard = cards[index + 1]
  const cardInner = card

  // ScrollObserver.Element(nextCard, {
  //   offsetTop,
  //   offsetBottom: window.innerHeight - card.clientHeight
  // }).onScroll(({ percentageY }) => {
  //   cardInner.style.scale = valueAtPercentage({
  //     from: 1,
  //     to: toScale,
  //     percentage: percentageY
  //   })
  //   cardInner.style.filter = `brightness(${valueAtPercentage({
  //     from: 1,
  //     to: 0.6,
  //     percentage: percentageY
  //   })})`
  // })
})




if (document.querySelectorAll('.aboutSwiper').length) {
  const aboutSwiper= new Swiper('.aboutSwiper', {
    slidesPerView: 3,
    speed: 600,
    spaceBetween: 50,

    navigation: {
        nextEl: ".aboutSwiper-silder-next",
        prevEl: ".aboutSwiper-silder-prev",
    },


    breakpoints: {

      640: {
        slidesPerView: 3
      },

      320: {
        slidesPerView: 1
      }
    }

  })
}


if (document.querySelectorAll('.swiperWhy').length) {
  const swiperWhy= new Swiper('.swiperWhy', {
    slidesPerView: 3,
    speed: 600,

    navigation: {
      nextEl: ".swiperWhy-next",
      prevEl: ".swiperWhy-prev",
  },

    breakpoints: {

      640: {
        slidesPerView: 3
      },

      320: {
        slidesPerView: 'auto'
      }
    },


  })
}




$(".check-label").on("click", function () {
  let isChecked = $(this).children("input").prop("checked");
  if (isChecked) {
      $(this).find(".fakecheck").addClass("checked");
  } else {
      $(this).find(".fakecheck").removeClass("checked");
  }
});





  $(document).ready(function () {
    const $image = $(".mobius-animation");
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let offsetX = 0, offsetY = 0;
    const maxOffset = 30;
    let isMouseMoving = false;
    let idleTimer;

    $(document).mousemove(function (event) {
        const prevMouseX = mouseX;
        const prevMouseY = mouseY;
        mouseX = event.clientX;
        mouseY = event.clientY;
        isMouseMoving = true;
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => { isMouseMoving = false; }, 1000);

        // Изменено знак вычитания на сложение для создания эффекта отталкивания
        let moveX = mouseX - prevMouseX;
        let moveY = mouseY - prevMouseY;
        offsetX += moveX * 0.1;  // Изменено с -= на +=
        offsetY += moveY * 0.1;  // Изменено с -= на +=

        offsetX = Math.max(-maxOffset, Math.min(maxOffset, offsetX));
        offsetY = Math.max(-maxOffset, Math.min(maxOffset, offsetY));
    });

    function updatePosition() {
        if (!isMouseMoving) {
            $image.animate({ top: "+=20px" }, 1000, "swing")
                  .animate({ top: "-=20px" }, 1000, "swing");
        }
        $image.css("transform", `translate(${offsetX}px, ${offsetY}px)`);
    }

    setInterval(updatePosition, 50);
});



$(document).ready(function () {
  const $image = $(".mobius-contacts-animation");
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let offsetX = 0, offsetY = 0;
  const maxOffset = 30;
  let isMouseMoving = false;
  let idleTimer;

  $(document).mousemove(function (event) {
      const prevMouseX = mouseX;
      const prevMouseY = mouseY;
      mouseX = event.clientX;
      mouseY = event.clientY;
      isMouseMoving = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => { isMouseMoving = false; }, 1000);

      // Изменено знак вычитания на сложение для создания эффекта отталкивания
      let moveX = mouseX - prevMouseX;
      let moveY = mouseY - prevMouseY;
      offsetX += moveX * 0.1;  // Изменено с -= на +=
      offsetY += moveY * 0.1;  // Изменено с -= на +=

      offsetX = Math.max(-maxOffset, Math.min(maxOffset, offsetX));
      offsetY = Math.max(-maxOffset, Math.min(maxOffset, offsetY));
  });

  function updatePosition() {
      if (!isMouseMoving) {
          $image.animate({ top: "+=20px" }, 1000, "swing")
                .animate({ top: "-=20px" }, 1000, "swing");
      }
      $image.css("transform", `translate(${offsetX}px, ${offsetY}px)`);
  }

  setInterval(updatePosition, 50);
});




$(document).ready(function () {
  const $image = $(".callback-bg-img");
  let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
  let offsetX = 0, offsetY = 0;
  const maxOffset = 30;
  let isMouseMoving = false;
  let idleTimer;

  $(document).mousemove(function (event) {
      const prevMouseX = mouseX;
      const prevMouseY = mouseY;
      mouseX = event.clientX;
      mouseY = event.clientY;
      isMouseMoving = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => { isMouseMoving = false; }, 1000);

      // Изменено знак вычитания на сложение для создания эффекта отталкивания
      let moveX = mouseX - prevMouseX;
      let moveY = mouseY - prevMouseY;
      offsetX += moveX * 0.1;  // Изменено с -= на +=
      offsetY += moveY * 0.1;  // Изменено с -= на +=

      offsetX = Math.max(-maxOffset, Math.min(maxOffset, offsetX));
      offsetY = Math.max(-maxOffset, Math.min(maxOffset, offsetY));
  });

  function updatePosition() {
      if (!isMouseMoving) {
          $image.animate({ top: "+=20px" }, 1000, "swing")
                .animate({ top: "-=20px" }, 1000, "swing");
      }
      $image.css("transform", `translate(${offsetX}px, ${offsetY}px)`);
  }

  setInterval(updatePosition, 50);
});





// Создаем наблюдатель
const observer = new IntersectionObserver(
  (entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Добавляем класс visible когда элемент виден
              entry.target.classList.add('visible');
              // Отключаем наблюдение после показа
              observer.unobserve(entry.target);
          }
      });
  },
  {
      // Настройки наблюдателя
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  }
);

// Ищем все элементы с классом fade-in и начинаем наблюдение
document.querySelectorAll('.fade-in').forEach(element => {
  observer.observe(element);
});

document.querySelectorAll('.fade-in-left').forEach(element => {
  observer.observe(element);
});

document.querySelectorAll('.fade-in-right').forEach(element => {
  observer.observe(element);
});




// Создаем наблюдатель для горизонтального скролла
const observerOptions = {
  root: null,
  threshold: 0.1,
  rootMargin: '0px'
};

function createHorizontalObserver() {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              requestAnimationFrame(() => {
                  entry.target.classList.add('visible');
              });
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  return observer;
}

// Инициализация наблюдателей для всех карточек
document.querySelectorAll('.cases__list li').forEach(card => {
  const observer = createHorizontalObserver();
  observer.observe(card);
});



const minScroll = $('.cases').offset().top;

$(window).on('scroll', function(e) {
  let y = $(this).scrollTop();

  if (y > (minScroll - 500)) {
    $('.header__inner').addClass('scroll');
  } else {
    $('.header__inner').removeClass('scroll');
  }
  
});






//========================== Реализация функционала popup окон ====================

function openPopup(popup) {
  $('.popup').hide();
  $('.overlay').show();
  $('html').css('overflow', 'hidden');
  popup.show();
}

function closePopup(closeBtn) {
  $('.overlay').hide();
  closeBtn.parent().hide();
  $('html').css('overflow-y', 'auto');
}
$(document).on('click', '.popup_close', function(e) {
  closePopup($(this));
});

$('.popup-callme-btn').click(function() {
  openPopup($('.popup-callme'));
});


$(document).ready(function() {
  $(document).mouseup(function(e) {
      var container = $('.popup');
      if (!container.is(e.target) && container.has(e.target).length === 0) {
          container.hide();
          $('.overlay').hide();
          $('html').css('overflow-y', 'auto');
      }
  });


  $(document).on('keydown', function(e) {
    if (e.key === 'Escape' || e.keyCode === 27) {
      $('.popup').hide();
      $('.overlay').hide();
      $('html').css('overflow-y', 'auto');
    }
  });
});








//========================== Реализация функционала аккордеона в карточках услуг ====================



$('.services__card-description-btn').click(function() {
  $(this).parent().find('.services__card-description').slideToggle(300);
});




//========================== Реализация функционала аккордеона бургер меню ====================


$("#burger_menu").click(function() {
  $(this).toggleClass('open');
  $("html").toggleClass("hidden");
});

$(".header-adaptive__nav nav ul li ").click(function() {
 $('#burger_menu').removeClass('open');
 $("html").removeClass("hidden");
});



// $(function() {
//   $('.marquee-1').marquee({
//       duration: 23000,
//       startVisible: true,
//       duplicated: true,
//       direction: 'left'
//   });
  
//   $('.marquee-2').marquee({
//       duration: 23000,
//       startVisible: true,
//       duplicated: true,
//       direction: 'right'
//   });
// });