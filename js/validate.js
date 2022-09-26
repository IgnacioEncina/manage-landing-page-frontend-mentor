'use strict'
window.addEventListener('load',() => {

    // Input Validacion
    const emailInput = document.querySelector('#email');
    const emailSpan = document.querySelector('#spanEmail');

    // go.addEventListener('click',() => {
    //     validar();
    // });

    const validar = (e) => {
        e.preventDefault();
        var campo = emailInput.value;
        const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailRegex.test(campo) || campo == '') {
            emailSpan.textContent = 'please insert a valid email';
            emailSpan.style.display = 'block';
            emailInput.style.border = '2px solid hsl(12, 88%, 59%)';
            emailInput.style.color = 'hsl(12, 88%, 59%)'
            return false;
        } else {
            emailInput.style.border = '2px solid green';
            emailSpan.style.display = 'none';
            emailInput.style.color = 'hsl(227, 12%, 61%)'
            return true;
        }
    }
    document.querySelector('form').addEventListener('submit', validar);
});