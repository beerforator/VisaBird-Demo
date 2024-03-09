document.addEventListener('DOMContentLoaded', () => {
    const intro = document.querySelector(".intro");
    const header = document.querySelector(".header");
    const navLink = document.getElementsByClassName('nav__link');
    const vert = document.getElementsByClassName('vert');
    const logoTopHeader = document.getElementById('logoTopHeader');
    const logoScrollHeader = document.getElementById('logoScrollHeader');
    window.addEventListener('scroll', () => {
        let introCenter = intro.offsetHeight / 2;
        let scrollTop = window.scrollY;
        
        if (scrollTop >= introCenter) {
            header.classList.add('fixed');
            header.style.position = "fixed";
            
            for(i = 0; i < navLink.length; i++) {
                navLink[i].style.color = '#000'
            }
            
            for(i = 0; i < vert.length; i++) {
                vert[i].style.backgroundColor = '#4590D6'
            }
            
            logoScrollHeader.style.display = 'block';
            logoTopHeader.style.display = 'none';
        } else {
            header.classList.remove('fixed');
            header.style.position = "absolute";
            
            for(i = 0; i < navLink.length; i++) {
                navLink[i].style.color = '#fff'
            }
            
            for(i = 0; i < vert.length; i++) {
                vert[i].style.backgroundColor = '#fff'
            }
            
            logoScrollHeader.style.display = 'none';
            logoTopHeader.style.display = 'block';
        }
    });
});

let burger = document.getElementById('menu');
let nav = document.getElementById('nav');

burger.addEventListener('click', () => {
    if( nav.classList.contains('nav__active') ) {
        nav.classList.remove('nav__active');
    } else {
        nav.classList.add('nav__active');
    }
});
