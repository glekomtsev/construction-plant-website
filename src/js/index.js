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
  // Optional parameters
  direction: "vertical",
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

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
});
