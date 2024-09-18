// Галерея и лайтбоксы от Fancybox
// import { Fancybox } from '@fancyapps/ui';
// import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Fancybox.bind('[data-fancybox]', {
// 	// Your custom options
// });

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

const swiperMain = new Swiper(".swiper-main", {
  direction: "vertical",
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    slideChange: function() {
      if (swiperMain.activeIndex === 2) {
        randomizeHeight();
      }
    },
  },
});

function randomizeHeight() {
  const items = document.querySelectorAll(".graph__item");
  const styleSheet = document.createElement("style");
  document.head.appendChild(styleSheet);

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // Генерация случайной высоты для основного элемента
    const height = Math.floor(Math.random() * 91 + 10);
    item.style.height = height + "%";

    // Генерация случайной высоты для ::before
    const beforeHeight = height - 0.95;

    // Добавление динамического класса для каждого элемента
    const className = `graph__item--${i}`; // Исправлено использование шаблонной строки
    item.classList.add(className);

    // Добавление стилей для псевдоэлемента ::before
    styleSheet.sheet.insertRule(
      `
      .${className}::before {
        height: ${beforeHeight}px;
      }`,
      styleSheet.sheet.cssRules.length
    );
  }
}

const swiperDown = new Swiper(".swiper-down", {
  slidesPerView: "auto",
  spaceBetween: 8,
  loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  speed: 10000,
  slidesPerGroup: 1,
  freeMode: true,
  // Navigation arrows
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
});

const swiperProd = new Swiper(".swiper-prod", {
  // Optional parameters
  slidesPerView: "auto",
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
