document.addEventListener('DOMContentLoaded', function() {

    // toggle menu 
    const toggleMenu = document.querySelector(".toggle-menu");

    toggleMenu.addEventListener('click', function(){
        if(toggleMenu.className === 'active-toggle toggle-menu'){
            toggleMenu.classList.remove('active-toggle');
            console.log('cos');
        }else{
            toggleMenu.classList.add('active-toggle');
            console.log('cos else');
        }
        
    })

});