import saludar from "./saludoNomHoraGen.js";

const nom = document.querySelector("#nombre");
const genero = document.querySelector("#genero");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nom.value.trim(); // trim opcional para limpiar posibles espacios
  const gen = genero.value;

  div.innerHTML = "<p>" + saludar(nombre, gen) + "</p>";
});
