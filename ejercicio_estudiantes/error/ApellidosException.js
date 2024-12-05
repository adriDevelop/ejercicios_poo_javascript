export default class ApellidosException extends Error{
    // Generamos constructor heredado de la clase padre.
    constructor(message){
        super(message);
        // Cambiamos el nombre por defecto de la clase padre al nombre de nuestra excepción propia.
        this.name = "ApellidosException";
    }
}