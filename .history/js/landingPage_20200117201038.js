document.addEventListener('DOMContentLoaded', function() {

    // toggle menu 
    const toggleMenu = document.querySelector(".toggle-menu");
    const toggleMenuMobileActive = document.querySelector(".toggle-mobil-active");
    const links = document.querySelectorAll(".toggle-list li a");
    const body = document.querySelector("body");
    const btn = document.querySelector(".btn-send");

    toggleMenu.addEventListener('click', function(e){
              e.stopPropagation()
        if(toggleMenu.className === 'toggle-menu active-toggle'){
            toggleMenu.classList.remove('active-toggle');
            toggleMenuMobileActive.style.top = '-999px';
            
        }else{
            toggleMenu.classList.add('active-toggle');
            toggleMenuMobileActive.style.top = '70px';
        }
        
    })
     body.addEventListener('click', function(){
        toggleMenu.classList.remove('active-toggle');
        toggleMenuMobileActive.style.top = '-999px';
     })
});