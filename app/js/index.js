document.addEventListener('DOMContentLoaded', function() {
    const hamb = document.querySelector("#burger");
    const popup = document.querySelector("#popup");
    const body = document.body;
    
    // Клонируем меню, чтобы задать свои стили для мобильной версии
    const menu = document.querySelector("#menu").cloneNode(1);
    
    // При клике на иконку hamb вызываем ф-ию hambHandler
    hamb.addEventListener("click", hambHandler);
    
    // Выполняем действия при клике ..
    function hambHandler(e) {
      e.preventDefault();
      // Переключаем стили элементов при клике
      popup.classList.toggle("open");
      hamb.classList.toggle("active");
      body.classList.toggle("noscroll");
      renderPopup();
    }
    
    // Здесь мы рендерим элементы в наш попап
    function renderPopup() {
      popup.appendChild(menu);
    }
    
    // Код для закрытия меню при нажатии на ссылку
    const links = Array.from(menu.children);
    
    // Для каждого элемента меню при клике вызываем ф-ию
    links.forEach((link) => {
      link.addEventListener("click", closeOnClick);
    });
    
    // Закрытие попапа при клике на меню
    function closeOnClick() {
      popup.classList.remove("open");
      hamb.classList.remove("active");
      body.classList.remove("noscroll");
    }

  // Swiper
  const slider = new Swiper('.slider__slides-container', {
    slidesPerGroup: 1,
    slidesPerView: 3,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 50,
    navigation: {
      nextEl: ".slider__swiper-btn-next",
      prevEl: ".slider__swiper-btn-prev"
    },

    breakpoints: {
      0: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 37,
      },

      530: {
        slidesPerView: 2,
        spaceBetween: 37,
      },

      1000: {
        slidesPerView: 3,
        spaceBetween: 37,
      },

      1415: {
        slidesPerView: 3,
        spaceBetween: 37,
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },

    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  })
  })
  