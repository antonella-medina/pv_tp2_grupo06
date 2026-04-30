// Función para generar un color hexadecimal aleatorio
export const generarColorAleatorio = () => {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Función que aplica el color al fondo del body
export const cambiarFondo = (color) => {
    document.body.style.backgroundColor = color;
    console.log(`Color de fondo cambiado a: ${color}`);
};