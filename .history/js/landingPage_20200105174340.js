document.addEventListener('DOMContentLoaded', function() {

    // toggle menu 
    const toggleMenu = document.querySelector(".toggle-menu");
    const toggleMenuMobileActive = document.querySelector(".toggle-mobil-active");
    const links = document.querySelectorAll(".toggle-list li a");

    toggleMenu.addEventListener('click', function(){
        if(toggleMenu.className === 'toggle-menu active-toggle'){
            toggleMenu.classList.remove('active-toggle');
            toggleMenuMobileActive.style.top = '-999px';
            
        }else{
            toggleMenu.classList.add('active-toggle');
            toggleMenuMobileActive.style.top = '70px';
        }
        
    })

});