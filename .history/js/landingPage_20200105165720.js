document.addEventListener('DOMContentLoaded', function() {

    // toggle menu 
    const toggleMenu = document.querySelector(".toggle-menu");

    toggleMenu.addEventListener('click', function(){
        if(toggleMenu.className === 'toggle-menu active-toggle'){
            toggleMenu.classList.remove('active-toggle');
            
        }else{
            toggleMenu.classList.add('active-toggle');
            // let toggleMobile = document.createElement('div');
            // toggleMobile.classList.add('toggle-mobil-active');
            // let menuToggleMobile = document.createElement('ul');
            // menuToggleMobile.classList.add('toggle-list');
            // let liToggleMenu1 = document.createElement('li');
            // liToggleMenu1.innerText = 'why us'.toUpperCase();
            // let liToggleMenu2 = document.createElement('li');
            // liToggleMenu2.innerText = 'benefits'.toUpperCase();
            // let liToggleMenu3 = document.createElement('li');
            // liToggleMenu3.innerText = 'pricing'.toUpperCase();
            // let liToggleMenu4 = document.createElement('li');
            // liToggleMenu4.innerText = 'contact'.toUpperCase();
            // menuToggleMobile.appendChild(liToggleMenu1);
            // menuToggleMobile.appendChild(liToggleMenu2);
            // menuToggleMobile.appendChild(liToggleMenu3);
            // menuToggleMobile.appendChild(liToggleMenu4);
            
            
        }
        
    })

});