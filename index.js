
const boton = document.getElementsByTagName("button")[0];
const cuadroTexto = document.getElementsByTagName("p")[0];
const titulo = document.getElementsByTagName("h2")[0];

boton.addEventListener("click", () => {
  let indice = Math.floor(Math.random() * 10);

  console.log(citas[indice].autor);
  console.log(citas[indice].texto);

  cuadroTexto.innerText = citas[indice].texto;
  titulo.innerText = citas[indice].autor;
});