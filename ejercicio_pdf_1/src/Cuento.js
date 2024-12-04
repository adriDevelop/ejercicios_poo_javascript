import Escenario from './Escenario.js';
import Personaje from './Personaje.js';
import Protagonista from './Protagonista.js';

class Cuento {
    // Propiedades propias de la clase
    _titulo;
    _autor;
    _moraleja;
    _descripcion;
    _aEscenarios;
    _aPersonajes;

    // Constructor propio de la clase
    constructor(titulo, autor, moraleja, descripcion){
        this._titulo = titulo;
        this._autor = autor;
        this._moraleja = moraleja;
        this._descripcion = descripcion;
        this._aEscenarios = [];
        this._aPersonajes = [];
    }

    // GETTERS Y SETTERS
    get titulo(){
        return this._titulo;
    }

    get autor(){
        return this._autor;
    }

    get moraleja(){
        return this._moraleja;
    }

    get descripcion(){
        return this._descripcion;
    }

    set titulo(titulo){

    }

    set autor(autor){

    }

    set moraleja(moraleja){

    }

    set descripcion(descripcion){

    }

    // Metodos propios de la clase
    introducirNuevoPersonaje = (personaje) => {
        try{
            // Comprobacion de que el personaje pasado sea de tipo personaje o protagonista
            if (!(personaje instanceof Personaje || personaje instanceof Protagonista)){
                throw new Error("No has pasado un objeto personaje o protagonista");
            }

            // Comprobamos que el personaje introducido no existe en el array.
            const existe = this._aPersonajes.some(personajeArray => 
                personajeArray.nombre === personaje.nombre &&
                personajeArray.tipo === personaje.tipo &&
                personajeArray.edad === personaje.edad
            );

            // Hacemos la comprobacion para saber si ha encontrado o no un elemento con los valores
            // de busqueda proporcionados.
            if(existe){
                throw new Error("El elemento que me has pasado ya existe en el array");
            }

            // Si no se ha encontrado ningun elemento en el array de personajes, lo creamos.
            this._aPersonajes.push(personaje);

        }catch(err){
            console.log(err.message);
        }
    }

    introducirEscenario = (nuevoEscenario) =>{
        try{
            if (!nuevoEscenario instanceof Escenario){
                throw new Error("No se ha pasado un objeto de tipo Escenario");
            }
                // Recorrer los escenarios que tenemos para comprobar que el escenario no exista.
                const existe = this._aEscenarios.some(escenario => 
                    escenario.nombre === nuevoEscenario.nombre &&
                    escenario.ubicacion === nuevoEscenario.ubicacion &&
                    escenario.clima === nuevoEscenario.clima
                );

                if (existe){
                    throw new Error("Escenario ya existe");
                }

                this._aEscenarios.push(nuevoEscenario);
                console.log("Escenario creado correctamente!");
        }catch(err){
            console.log(err.message);
        }
    }

    eliminarEscenario = (nombre) => {
        try{
            
                const indiceEscenario = this._aEscenarios.findIndex(escenario => escenario.nombre === nombre);

                if (indiceEscenario == -1){
                    throw new Error("No existe ningun escenario con ese nombre!"); 
                }

                this._aEscenarios.splice(indiceEscenario, 1);
                console.log("El escenario se ha eliminado correctamente!");
                
        }catch(err){
            console.log(err.message);
        }
    }

    toString(){
        return `Titulo: ${this.titulo}, Autor: ${this.autor}, Moraleja: ${this.moraleja}, Descripcion: ${this.descripcion}, Escenarios: ${this._aEscenarios}, Personajes: ${this._aPersonajes}`;
    }
}

let cuento = new Cuento("Pulgarcita", "Pulgarcito", "No hay que ser tna pulgarcito", "Hay que ver con los purlarcitos y las pulgarcitas");
console.log(cuento.toString());

const escenario = new Escenario("Escenario1", "Bujalance", "Soleado que te cagas");
const escenario2 = new Escenario("Escenario2", "Bujalance", "Soleado que te cagas");
cuento.introducirEscenario(escenario);
cuento.introducirEscenario(escenario2);

cuento.eliminarEscenario("Escenario2");

const personaje1 = new Personaje("Pulgarcito", "Tipo minion", 23);
const protagonista1 = new Protagonista("Pulrgarcita", "Tipo minion", 24, "Es muy bajita");

cuento.introducirNuevoPersonaje(personaje1);
cuento.introducirNuevoPersonaje(protagonista1);

console.log(cuento.toString());