import { formatearSeleccion } from './funciones24.js';

// Seleccionamos todos los radios que se llamen 'lenguaje'
const opciones = document.querySelectorAll('input[name="lenguaje"]');
const visorRadio = document.querySelector('#visor-radio');

opciones.forEach(radio => {
    // Escuchamos el evento 'change' (cuando cambias de circulito)
    radio.addEventListener('change', (e) => {
        const mensaje = formatearSeleccion(e.target.value);
        visorRadio.textContent = mensaje;
        console.log(mensaje);
    });
});