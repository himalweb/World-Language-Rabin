
const navbarmenu = document.querySelector('.navbar-menu')
const mobileMenu = document.querySelector('.mobile-menu');

navbarmenu.addEventListener('click', ()=> mobileMenu.classList.toggle('mobile-menu-active'));