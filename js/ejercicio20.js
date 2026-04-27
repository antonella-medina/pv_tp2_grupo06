
document.querySelector("button").addEventListener("click", () => {
  const nombre = document.querySelector("#nom").value;
  const apellido = document.querySelector("#ape").value;
  const libreta = document.querySelector("#lu").value;

  alert(
    "Los datos ingresados son:\n" +
    "Nombre: " + nombre + "\n" +
    "Apellido: " + apellido + "\n" +
    "Libreta Universitaria: " + libreta
  );
});
