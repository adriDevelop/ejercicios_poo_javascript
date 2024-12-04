export default class Escenario {
    // Atributos privados
    #nombre;
    #ubicacion;
    #clima;

    // Constructor propio de la clase
    constructor(nombre, ubicacion, clima) {
        this.#nombre = nombre;
        this.#ubicacion = ubicacion;
        this.#clima = clima;
    }

    // GETTERS
    get nombre() {
        return this.#nombre;
    }

    get ubicacion() {
        return this.#ubicacion;
    }

    get clima() {
        return this.#clima;
    }

    toString() {
        return `Nombre: ${this.nombre} Ubicación: ${this.ubicacion} Clima: ${this.clima}`;
    }
}
