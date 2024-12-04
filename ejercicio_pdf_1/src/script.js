import Cuento from './Cuento.js';
import Escenario from './Escenario.js';

const buttonCrearCuento = document.getElementById("crearCuento");
const titulo = document.getElementById("titulo");
const autor = document.getElementById("autor");
const descripcion = document.getElementById("descripcion");
const moraleja = document.getElementById("moraleja");

const crearVentana = () => {
    const cuento = new Cuento(
        titulo.value,
        autor.value,
        descripcion.value,
        moraleja.value
    );
    const ventana = window.open("", "", "height=800px, width=800px");
    ventana.cuento = cuento;

    const contenidoHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Cuento</title>
        </head>
        <body>
            <h1>${cuento.titulo}</h1>
            <h2>${cuento.autor}</h2>
            <p>${cuento.descripcion}</p>
            <p>${cuento.moraleja}</p>


            <section id="escenarios"></section>
            <section id="personajes"></section>
        </body>
        </html>
    `;
    ventana.document.write(contenidoHTML);
    ventana.document.close();

};

buttonCrearCuento.addEventListener("click", crearVentana);