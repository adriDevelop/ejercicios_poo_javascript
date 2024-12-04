import Personaje from './Personaje.js';

export default class Protagonista extends Personaje{
    // Atributo propio de la clase protagonista
    _cualidad;

    // Construtor de la clase protagonista heredado de la clase personaje con atributos de la clase padre y propios
    constructor(nombre, tipo, edad, cualidad){
        super(nombre, tipo, edad);
        this._cualidad = cualidad;
    }

    // GETTERS Y SETTERS
    get cualidad(){
        return this._cualidad;
    }

    set cualidad(cualidad){

    }

    toString(){
        return `${super.toString()} Cualidad: ${this.cualidad}`;
    }
}