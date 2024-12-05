class Jugador {
    #nombre;
    #age;

    constructor(nombre, edad){
        this.#nombre = nombre;
        this.#age = edad;
    }

    get nombre() {
        return this.#nombre;
    }

    get age() {
        return this.#age;
    }

    set nombre(nombre){
        const regex = /[A-Za-z]/;
        try{
            if (!(regex.test(nombre) && nombre.length > 3 && nombre.length < 50)){
                throw new Error("El nombre no tiene la longitud requerida o no es del tipo...");
            }
            this.#nombre = nombre;
        } catch(err){
            console.log(`Error: ${err.message}`);
        }
    }

    set age(edad){
        const regex = /[0-9]/;
        try{
            if (!(regex.test(edad) && edad > 10 && edad < 60)){
                throw new Error("La edad no se encuentra entre los valores estipulados o no es del tipo...");
            }
            this.#age = edad;
        } catch(err){
            console.log(`Error: ${err.message}`);
        }
    }

    toString = () => {
        return `Nombre: ${this.nombre}\nEdad: ${this.edad}`;
    }
}