import { actualizarCapital } from './funciones21.js';

// Capturamos los elementos del DOM (la pantalla)
const selectPaises = document.querySelector('#paises-select');
const selectCapitales = document.querySelector('#capitales-select');

// Escuchamos el evento 'change'
selectPaises.addEventListener('change', (e) => {
    const paisSeleccionado = e.target.value;
    actualizarCapital(paisSeleccionado, selectCapitales);
});