document.addEventListener('DOMContentLoaded', function () {

    const toggleMenu = document.querySelector(".toggle-menu");
    const toggleMenuMobileActive = document.querySelector(".toggle-mobil-active");
    const body = document.querySelector("body");

    window.addEventListener('resize', function () {
        if (window.innerWidth > 800) {
            toggleMenu.classList.remove('active-toggle');
            toggleMenuMobileActive.style.top = '-999px';
        }
    })
    toggleMenu.addEventListener('click', function (e) {
        e.stopPropagation()
        if (toggleMenu.className === 'toggle-menu active-toggle') {
            toggleMenu.classList.remove('active-toggle');
            toggleMenuMobileActive.style.top = '-999px';
        } else {
            toggleMenu.classList.add('active-toggle');
            toggleMenuMobileActive.style.top = '68px';
        }
    })
    body.addEventListener('click', function () {
        toggleMenu.classList.remove('active-toggle');
        toggleMenuMobileActive.style.top = '-999px';
    })
});