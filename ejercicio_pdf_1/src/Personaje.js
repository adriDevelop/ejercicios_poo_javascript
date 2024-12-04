export default class Personaje{
    // Propiedades privadas propias de la clase
    _nombre;
    _tipo;
    _edad;

    // Generamos constructor propio de la clase
    constructor(nombre, tipo, edad){
        this._nombre = nombre;
        this._tipo = tipo;
        this._edad = edad;
    }

    // GETTERS Y SETTERS
    get nombre(){
        return this._nombre;
    }

    get tipo(){
        return this._tipo;
    }

    get edad(){
        return this._edad;
    }

    set nombre(nombre){
        
    }

    set tipo(tipo){

    }

    set edad(edad){

    }

    toString(){
        return `Nombre: ${this.nombre} Tipo: ${this.tipo} Edad: ${this.edad}`;
    }
}