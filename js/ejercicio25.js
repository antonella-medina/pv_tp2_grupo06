import { generarColorAleatorio, cambiarFondo } from './funciones25.js';

const botonColor = document.querySelector('#btn-color');

// Escuchamos el clic del botón
botonColor.addEventListener('click', () => {
    const nuevoColor = generarColorAleatorio();
    cambiarFondo(nuevoColor);
});