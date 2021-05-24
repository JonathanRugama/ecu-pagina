const ipad = window.matchMedia('screen and (max-width:768px)');
const menu = document.querySelector('.header__navigation');
const burgerButton = document.querySelector('#burguer-menu');




ipad.addEventListener('change',validation);
function validation (event) {
    if (event.matches) {
        burgerButton.addEventListener('click',hideShow)
    } else {
        burgerButton.removeEventListener('click',hideShow)
    }
}
validation(ipad)
function hideShow() {
    
        if(menu.classList.contains('is-active')) {
            menu.classList.remove('is-active');
        }else {
            menu.classList.add('is-active');
        }
}