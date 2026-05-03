import { actualizarEspejo } from './funciones22.js';

const inputTexto = document.querySelector('#input-texto');
const visorTexto = document.querySelector('#visor-texto');

// El evento 'input' se dispara CADA VEZ que presionás una tecla
inputTexto.addEventListener('input', (e) => {
    actualizarEspejo(e.target.value, visorTexto);
});