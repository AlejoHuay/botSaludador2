import saludar from "./saludoNomHora.js";

const nom = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = nom.value.trim(); // trim opcional para limpiar posibles espacios

  div.innerHTML = "<p>" + saludar(nombre) + "</p>";
});
