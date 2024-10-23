const boton = document.getElementsByTagName("button")[0];
const cuadroTexto = document.getElementsByTagName("p")[0];
const titulo = document.getElementsByTagName("h2")[0];
let estadoAnterio;

// se llama a esta funcion aqui para presentar una cita al comienzo
nuevaCita();

// evento de click para en el boton "Cambiar Citas" para generar una nueva cita
boton.addEventListener("click", () => {
  nuevaCita();
});

// funcion para crear una cita aleatori y mostrarlo en pantalla
function nuevaCita() {
  let indice = Math.floor(Math.random() * 10);
  console.log("indice inicial:" + indice);

  if (estadoAnterio == indice) {
    indice++;
    console.log("indice de ahora es uno mayor:" + indice);
  }

  console.log(citas[indice].autor);
  console.log(citas[indice].texto);
  cuadroTexto.innerText = `"${citas[indice].texto}"`;
  titulo.innerText = citas[indice].autor;
  estadoAnterio = indice;
}