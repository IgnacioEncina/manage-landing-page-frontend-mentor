
'use strict'
window.addEventListener('load', () => {

    const items = document.querySelector('.section3-content-testimonios-items');
    const btnsSlide = [...document.querySelectorAll('.section3-content-points-btn')];
    const btn1 = document.querySelector('#btn1');
    const btn2 = document.querySelector('#btn2');
    const btn3 = document.querySelector('#btn3');
    const btn4 = document.querySelector('#btn4');

    var widthScreen50 = 0;
    var m = 0;  // almacena el left
    var isTouch = false; // si el dispositivo es touch o no
    istouch();
    left();

    window.addEventListener('resize', () => {
        istouch();
        left();
    });

    function left() {
        if (window.screen.width > 1100) {
            widthScreen50 = -10.3;
            m = -10.3;
            items.style.left = `${widthScreen50 }vw`;
        } else {
            widthScreen50 = -100; 
            m = -100;
            items.style.left = `${widthScreen50 }vw`;
        }
    }

    // para saber si es touch .... No se utiliza!!
    function istouch(){
        if ("ontouchstart" in window || navigator.msMaxTouchPoints || 
        ( navigator.maxTouchPoints > 0 )) { isTouch = true; } else { isTouch = false; } 
    }

    var cliX = 0;  // almacena el pixel donde se clickea con el mouse
    var moving = 0;

    // movil touch
    items.addEventListener('touchstart', (event)=> {
        cliX = event.targetTouches[0].clientX;
    }, {passive: true});

    items.addEventListener('touchend',(event)=> {
            var moveWidth = event.changedTouches[0].clientX - cliX;
            moverSlider(moveWidth);
            m = moving;
    })

    // Click en botones del slide movil
    btn1.addEventListener('click', () => {
        cambiarColorPoints(0);
        items.style.left = '0vw';
        m = 0;
    })
    btn2.addEventListener('click', () => {
        cambiarColorPoints(1);
        items.style.left = '-100vw';
        m = -100;
    })
    btn3.addEventListener('click', () => {
        cambiarColorPoints(2);
        items.style.left = '-200vw';
        m = -200;
    })
    btn4.addEventListener('click', () => {
        cambiarColorPoints(3);
        items.style.left = '-300vw';
        m = -300;
    })

    function cambiarColorPoints( n ) {
        for (let i = 0; i < btnsSlide.length; i++) {
            if (n === i) {
                btnsSlide[i].style.backgroundColor = 'hsl(12deg, 100%, 61%)';
            } else {
                btnsSlide[i].style.backgroundColor = 'transparent';
            }
        }
    }

    // Descktop
    items.addEventListener('mousedown', (event)=> {
        cliX = event.clientX;
        items.style.cursor = 'grabbing';
        }, {passive: true}
        );

    items.onmouseup = function(event) {
        items.style.cursor = 'grab';
        var moveWidth = event.clientX - cliX;
        moverSlider(moveWidth);
        m = moving;
    }

    items.ondragstart = () => {
        return false;
    }

    function moverSlider( movePx ){
        if (window.screen.width <= 1100 ) {   // movil
            if (movePx <= -50 && movePx > -500 && m < 100 && m >= -200) { // a la derecha
                moving = -100 + m;
                    mover();
            }else {
                if (movePx > 50 && movePx < 500 && m < 0 && m >= -300)  { // a la izquierda
                    moving = 100 + m;
                    mover();
                }
            }
        } else { // desktop
            if (movePx < -100 && movePx > -500 && m < 30 && m > -50)  { // izquierda
                moving = -39.5 + m;
                mover();
            }else {
                if (movePx > 100 && movePx < 500 && m < -10 && m >= -120)  {
                    moving = 39.5 + m;
                    mover();
                }
            }
            
        }
    }

    function mover() {
        var point = (moving / -100);
        cambiarColorPoints(point);
        var move =  moving + "vw" ;
        items.style.left = move;
    }

});