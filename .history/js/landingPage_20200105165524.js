document.addEventListener('DOMContentLoaded', function() {

    // toggle menu 
    const toggleMenu = document.querySelector(".toggle-menu");

    toggleMenu.addEventListener('click', function(){
        if(toggleMenu.className === 'toggle-menu active-toggle'){
            toggleMenu.classList.remove('active-toggle');
            
        }else{
            toggleMenu.classList.add('active-toggle');
            let toggleMobile = document.createElement('div');
            toggleMobile.classList.add('toggle-mobil-active');
            let menuToggleMobile = document.createElement('ul');
            menuToggleMobile.classList.add('toggle-list');
            let liToggleMenu = document.createElement('li');
            liToggleMenu.innerText = 'why us'.toUpperCase();
            let liToggleMenu = document.createElement('li');
            liToggleMenu.innerText = 'benefits'.toUpperCase();
            let liToggleMenu = document.createElement('li');
            liToggleMenu.innerText = 'pricing'.toUpperCase();
            let liToggleMenu = document.createElement('li');
            liToggleMenu.innerText = 'contact'.toUpperCase();
            
            
        }
        
    })

});