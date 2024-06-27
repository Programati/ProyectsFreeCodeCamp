const parrafoFechaActual = document.getElementById("fecha-actual");
const selectTipoFecha = document.getElementById("date-options");

const date = new Date();
const dia = date.getDate();
const mes = date.getMonth() + 1;
const año = date.getFullYear();
const hora = date.getHours();
const minutes = date.getMinutes();

const formatoFecha = `${dia}-${mes}-${año}`;
parrafoFechaActual.textContent = formatoFecha;

selectTipoFecha.addEventListener("change", () => {
    switch (selectTipoFecha.value) {
    case "yyyy-mm-dd":
      parrafoFechaActual.textContent = formatoFecha
        .split("-")
        .reverse()
        .join("-");
      break;
    case "mm-dd-yyyy-h-mm":
      parrafoFechaActual.textContent = `${mes}-${dia}-${año} ${hora}:${minutes}`;
      break;
    
  }
});