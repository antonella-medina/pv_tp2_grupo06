const nombres = ["Cristian", "Lucas", "Elias", "Carlos", "Sofia", "Guadalupe"];

let nombreMasLargo = nombres[0];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);

    if (nombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = nombres[i];
    }
}

console.log(`Nombre más largo: ${nombreMasLargo}`);