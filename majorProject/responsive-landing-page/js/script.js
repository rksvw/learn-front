// Show menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu");
    })
}

// remove menu mobile
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// change background header
const scrollHeader = () => {
    const header = document.getElementById("header");
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener("scroll", scrollHeader);
