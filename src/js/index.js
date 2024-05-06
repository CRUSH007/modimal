// Галерея и лайтбоксы от Fancybox
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

// Мобильная навигация
import mobileNav from "./modules/mobile-nav.js";
mobileNav();

import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:
const swiper0 = new Swiper(".best-sellers__slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  autoplay: true,

  pagination: {
    el: ".pagination-bullets",
    bulletActiveClass: "bullet-Active",
    bulletClass: "bullet",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    
    788: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
	320: {
		slidesPerView: 2,
		spaceBetween: 16,
	  },
  },
});
