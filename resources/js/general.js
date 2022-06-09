/*Sticky Nav Bar*/

let navStatic = document.querySelector('nav.static');
let navFixed = document.querySelector('nav.fixed');
let body = document.querySelector('body');

function updateNav() {
    let scrolled = window.scrollY;
    let navBot = navStatic.offsetTop + navStatic.offsetHeight + 400;
    if (scrolled >= navBot) {
        navFixed.style.top = '0';
        navFixed.style.opacity = '1';
    } else {
        navFixed.style.top = '-10rem';
        navFixed.style.opacity = '0';
    }
}

document.addEventListener('scroll', updateNav);