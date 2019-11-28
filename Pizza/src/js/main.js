let burger = document.querySelector('.header-burger');
let  nav = document.querySelector('.header-nav');

burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    nav.classList.toggle('active');
})