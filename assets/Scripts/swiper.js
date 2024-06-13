import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper__projects', {
  effect: "coverflow",
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    
  },
  breakpoints: {
    481:{
      grid: {
        fill:"row",
        rows: 2,
      },
    }
  }
});