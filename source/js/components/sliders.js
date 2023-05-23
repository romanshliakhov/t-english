import Swiper from '../vendor/swiper.js';

// // Dynamic row
let testSlider = new Swiper(".block__slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
  loop: true,
  // loopedSlides: 5,
  observer: true,
  // speed: 4000,
  direction: "vertical",

  autoplay: {
    delay: 2000,
    // speed: 1000,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  },

});



