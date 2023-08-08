var swiper = new Swiper("#swiper1", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView:1.5,
    initialSlide:1,
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true
    },
    spaceBetween:25,
    loop: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true
    },
});
var swiper2 = new Swiper("#swiper2", {
    slidesPerView: 2.5,
    spaceBetween: 45,
    breakpoints: {
        500: {
          spaceBetween: 10,
        },
        400: {
          spaceBetween: 10,
        },
        1000:{
            spaceBetween:45,
        }
      },
  });
swiper.on('slideChange', function () {
document.querySelectorAll('.swiper-pagination-bullet').forEach(function (bullet) {
    bullet.classList.remove('swiper-pagination-bullet-active');
});
var activeIndex = swiper.realIndex;
var activeBullet = document.querySelector(
    '.swiper-pagination-bullet:nth-child(' + (activeIndex % 3 + 1) + ')'
);
if (activeBullet) {
    activeBullet.classList.add('swiper-pagination-bullet-active');
}
});
