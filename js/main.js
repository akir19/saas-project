document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('#burger');
    const mobileMenu = document.querySelector('#mobile-menu');
    const body = document.body;

    burger.addEventListener('click', () => {
        const isOpened = burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        
        if (isOpened) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    });

    // Закрытие при клике на ссылку
    const menuLinks = document.querySelectorAll('.nav__link');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
});