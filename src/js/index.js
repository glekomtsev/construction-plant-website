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
});

// function randomizeHeight() {
//   const items = document.querySelectorAll(".graph__item");

//   for (const item of items) {
//     const height = Math.floor(Math.random() * 91 + 10); // От 10 до 100
//     item.style.height = `${height}%`;
//   }
// }

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
