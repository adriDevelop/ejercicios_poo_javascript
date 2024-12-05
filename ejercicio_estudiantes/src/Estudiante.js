import Persona from './Persona.js';
import CalificacionException from '../error/CalificacionException.js';

export default class Estudiante extends Persona{
    // Propiedades propias de la clase Estudiante.
    _calificaciones = [];

    constructor(nombre, apellidos, edad, correo, direccion, telefono, calificaciones){
        super(nombre, apellidos, edad, correo, direccion, telefono);
        this._calificaciones = calificaciones;
    }

    // Metodo getCalificaciones que devuelve todas las calificaciones que tiene el Estudiante.
    getCalificaciones = () => {
        this._calificaciones.forEach(calificacion => {
            console.log(calificacion);
        });
    }

    // Metodo setCalificacion que introduce en el array de calificaciones del Estudiante una nueva
    // calificacion.
    setCalificaciones = (calificacion) => {
        try{
            if (!calificacion){
                throw new CalificacionException("No ha introducido una calificacion correcta");
            }
            this._calificaciones.push(calificacion);
        }catch(err){
            console.log(`El error es: ${err.name}\nY el mensaje de error es: ${err.message}`);
        }
    }
}