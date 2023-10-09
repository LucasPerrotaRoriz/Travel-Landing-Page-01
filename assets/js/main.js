/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navOpen = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/* MENU SHOW  */
/* Validate if constant exists */
if(navOpen) {
    navOpen.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* MENU HIDDEN */
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/


/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY ? header.classList.add('blur-header')
                : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
