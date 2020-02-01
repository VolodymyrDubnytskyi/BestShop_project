document.addEventListener('DOMContentLoaded', function() {

    // toggle menu 
    const toggleMenu = document.querySelector(".toggle-menu");
    const toggleMenuMobileActive = document.querySelector(".toggle-mobil-active");
    const links = document.querySelectorAll(".toggle-list li a");
    const body = document.querySelector("body");
    const btn = document.querySelector(".btn-send");
    const form = document.querySelector(".footer-form")
       
    window.addEventListener('resize', function(){
        
    })

      
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
    //  form.addEventListener('submit', function(e){
    //      e.preventDefault();
    //      btn.setAttribute('disabled', true);
    //      btn.style.background = 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 4%, rgba(8, 166, 228, 1) 100%)'
    //      let loadingSpan = btn.querySelector('.btn-loading');
    //      loadingSpan.classList.add('loading');
    //  })
});