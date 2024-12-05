import Personaje from './Personaje.js';
import Escenario from './Escenario.js';
{
    // Botones
    const buttonAgregarPersonaje = document.getElementById('agregarPersonaje');
    const buttonAgregarEscenario = document.getElementById('agregaEscenario');
    // Propiedades del personaje
    const nombrePersonaje = document.getElementById('nombrePersonaje');
    const tipoPersonaje = document.getElementById('tipo');
    const edadPersonaje = document.getElementById('edad');
    const cualidadPersonaje = document.getElementById('cualidad');
    // Propiedades del escenario
    const nombreEscenario = document.getElementById('nombreEscenario');
    const ubicacionEscenario = document.getElementById('ubicacion');
    const climaEscenario = document.getElementById('clima');
    const cuento = window.cuento;

    const agregarEscenario = () => {
        const escenario = new Escenario(nombreEscenario.value, ubicacionEscenario.value, climaEscenario.value);
        cuento.introducirEscenario(escenario);
    }

    buttonAgregarEscenario.addE