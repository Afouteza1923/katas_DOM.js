//? 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click
const button = document.createElement ('button');
button.id = 'brnToClick';
button.addEventListener ('click', function (event) {
    console.log ('Evento de click', event);
});
document.body.appendChild (button);

//? 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusInput = document.querySelector ('.focus');
focusInput.addEventListener ('focus', function () {
    console.log ('Valor del input (focus):', focusInput.value);
});

//? 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.   
const newInput = document.createElement ('input');
newInput.id = 'newInput';
newInput.placeholder = 'Escriba usted aquí'
document.body.appendChild (newInput);
newInput.addEventListener ('input', function () {
    console.log ('Valor del input nuevo (input):', newInput.value);
});
