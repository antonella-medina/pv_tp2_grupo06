// Objeto que asocia cada país con su capital
export const mapaGeografico = {
    "Argentina": "Buenos Aires",
    "Bolivia": "Sucre",
    "Brasil": "Brasilia",
    "Chile": "Santiago",
    "Colombia": "Bogotá",
    "Uruguay": "Montevideo"
};

// Función flecha que actualiza el segundo selector
export const actualizarCapital = (pais, elementoDestino) => {
    const capital = mapaGeografico[pais];
    elementoDestino.value = capital;
    console.log(`Seleccionado: ${pais}. Capital automática: ${capital}`);
};