import { controlarLargoTexto } from './funciones23.js';

const inputEj23 = document.querySelector('#input-ej23');
const visorEj23 = document.querySelector('#visor-ej23');

// Usamos el evento 'input' para que sea en tiempo real
inputEj23.addEventListener('input', (e) => {
    controlarLargoTexto(e.target.value, visorEj23);
});