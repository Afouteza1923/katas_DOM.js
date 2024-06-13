//? 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const button = document.querySelector ('.showme');
console.log (button);

//? 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1 = document.querySelector ('#pillado');
console.log (h1);

//? 1.3 Usa querySelector para mostrar por consola todos los p
const paragraphs = document.querySelectorAll ('p');
console.log (paragraphs);

//? 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemonElements = document.querySelectorAll ('.pokemon');
console.log (pokemonElements);

//? 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const testMeElements = document.querySelectorAll ('[data-function="testMe"]');
console.log (testMeElements);

//? 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const thirdTestMe = document.querySelectorAll ('[data-function="testMe"]') [2];
console.log (thirdTestMe);

