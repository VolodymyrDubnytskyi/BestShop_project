document.addEventListener('DOMContentLoaded', function() {

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