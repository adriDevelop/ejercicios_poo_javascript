import Persona from './Persona.js';

const botonEnviar = document.getElementById('crearPersona');
const nombre = document.getElementById('nombre');
const edad = document.getElementById('edad');
const sexo = document.getElementById('sexo');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');

const generarVentanaCookie = () => {
    const persona = new Persona(nombre.value, edad.value, sexo.value, peso.value, altura.value);
    const persona2 = new Persona("Antonio", edad.value, sexo.value, peso.value, altura.value);
    const persona3 = new Persona("Botella de agua", edad.value, sexo.value, peso.value, altura.value);
    const persona4 = new Persona("florecilla", edad.value, sexo.value, peso.value, altura.value);
    const persona5 = new Persona("teclado", edad.value, sexo.value, peso.value, altura.value);
    const persona6 = new Persona("farola", edad.value, sexo.value, peso.value, altura.value);
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    const ventana = window.open('', '', 'height=100px, width=100px');
    ventana.personas = Array(persona, persona2, persona3, persona4, persona5, persona6);
    document.cookie = `user=${persona.getNombre()}; expires=${expires.toUTCString()}; path=/;`;

    ventana.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Alumno</title>
        </head>
        <body>
    `);

    ventana.personas.forEach(element => {
        ventana.document.write(`
            <h1>${element.getNombre()}</h1>
        `);
    });

    ventana.document.write(`
        </body>
        </html>
    `);
};

botonEnviar.addEventListener('click', generarVentanaCookie);
