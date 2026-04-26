const notas = [8, 4, 10, 5, 6, 7, 3, 9, 6, 2];
const aprobadas = [];
const desaprobadas = [];
let sumaTotal = 0;

for (let i = 0; i < notas.length; i++)
    {
    console.log(`Nota: ${notas[i]}`);
    sumaTotal = sumaTotal + notas[i];

    if (notas[i] >= 6) {
        aprobadas.push(notas[i]);
    } else {
        desaprobadas.push(notas[i]);
    }
    }

console.log(`Notas aprobadas: ${aprobadas}`);
console.log(`Notas desaprobadas: ${desaprobadas}`);
console.log(`Promedio general: ${sumaTotal / notas.length}`);
console.log(`Cantidad de aprobadas: ${aprobadas.length}`);