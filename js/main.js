'use strict'

window.addEventListener('load', () => {

    const open = document.querySelector('.header-content-burger-Open');
    const close = document.querySelector('.header-content-burger-Close');
    const nav = document.querySelector('.header-content-nav');
    const ul = document.querySelector('.header-content-nav-ul');


    // Open Close Menu
    open.addEventListener('click',() => {
        open.style.display = 'none';
        close.style.display = 'block';
        nav.style.visibility = 'visible';
        ul.style.visibility = 'visible';
        ul.style.filter = 'opacity(1)';
        nav.style.height = '290px';
        nav.style.boxShadow =  'rgb(29 30 37 / 39%) 0px 100vh 220px 615px';
    });

    close.addEventListener('click',() => {
        open.style.display = 'block';
        close.style.display = 'none';
        nav.style.visibility = 'hidden';
        ul.style.visibility = 'hidden';
        ul.style.filter = 'opacity(0)';
        nav.style.height = '0px';
        nav.style.boxShadow =  'none';
    });

    window.addEventListener('resize', ()=> {
        open.style.display = 'block';
        close.style.display = 'none';
        nav.style.visibility = 'hidden';
        ul.style.visibility = 'hidden';
        ul.style.filter = 'opacity(0)';
        nav.style.height = '0px';
        nav.style.boxShadow =  'none';
    })


});