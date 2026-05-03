// Esta función muestra el texto y cambia el color si supera los 20 caracteres
export const controlarLargoTexto = (valor, elementoDestino) => {
    elementoDestino.textContent = valor;

    if (valor.length > 20) {
        elementoDestino.style.backgroundColor = "#ff4d4d"; // Rojo suave
        elementoDestino.style.color = "white";
    } else {
        elementoDestino.style.backgroundColor = "#e9ecef"; // Gris claro original
        elementoDestino.style.color = "black";
    }
};