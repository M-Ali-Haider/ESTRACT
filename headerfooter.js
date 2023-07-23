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
