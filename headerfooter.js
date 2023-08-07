document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const menuBar = document.querySelector('.menu-bar');
    const closeButton = document.querySelector('.close-button');
    let isOpen = false;

    function openMenuBar() {
        isOpen = true;
    }

    function closeMenuBar() {
        isOpen = false;
    }

    burgerMenu.addEventListener('click', function () {
        if (!isOpen) {
            menuBar.classList.add('active');
            openMenuBar();
        }
    });

    closeButton.addEventListener('click', function () {
        if (isOpen) {
            closeMenuBar();
            menuBar.classList.remove('active');
        }
    });
});
var swiper = new Swiper(".swiper", {
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
