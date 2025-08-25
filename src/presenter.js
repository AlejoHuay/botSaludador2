import saludar from "./saludoNomHoragenEdad.js";

const nom = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const edad = document.querySelector("#edad");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nom.value.trim(); // trim opcional para limpiar posibles espacios
  const gen = genero.value;
  const anios = Number.parseInt(edad.value);

  div.innerHTML = "<p>" + saludar(nombre, gen, anios) + "</p>";
});
