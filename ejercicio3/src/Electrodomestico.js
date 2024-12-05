export default class Electrodomestico {
    // Atributos propios de la clase.
    #precioBase;
    #color;
    #consumoEnergetico;
    #peso;
    precioFinalE;

    // Constructor propio de la clase.
    constructor(precioBase, color, consumoEnergetico, peso){
        this.precioBase = precioBase;
        this.color = color;
        this.consumoEnergetico = consumoEnergetico;
        this.peso = peso;
        this.precioFinalE = 0;
    }

    // Metodos propios de la clase.

    // GETTERS Y SETTERS
    get precioBase(){
        return this.#precioBase;
    }

    get color(){
        return this.#color;
    }

    get consumoEnergetico(){
        return this.#consumoEnergetico;
    }

    get peso(){
        return this.#peso;
    }

    get precioBase(){
        return this.#precioBase;
    }

    set precioBase(precioBase){
        this.#precioBase = precioBase;
    }

    set color(color){
        const colores = ['blanco', 'negro', 'rojo', 'azul', 'gris'];
        try{
            if (!colores.some(colorArray => colorArray === color.toLowerCase())){
                throw new Error("El color introducido no se correspone con ninguno de los disponibles.");
            }
            this.#color = color;
        }catch(err){
            console.log(err.message);
        }
    }

    set consumoEnergetico(consumoEnergetico){
        const letras = ['A', 'B', 'C', 'D', 'E', 'F'];
        try{
            if (!letras.some(letraArray=> letraArray === consumoEnergetico.toUpperCase())){
                throw new Error("El consumo energético introducido no existe");
            }   else {
                this.#consumoEnergetico = consumoEnergetico;
            }
        }catch(err){
            console.log(err.message);
        }
    }

    set peso(peso){
        this.#peso = peso;
    }

    // Metodo precioFinalE, segun el consumo, aumenta o disminuye
    precioFinal = () =>{

        if (this.consumoEnergetico == 'A'){
            this.precioFinalE += this.precioBase + 100;
        } else if (this.consumoEnergetico == 'B'){
            this.precioFinalE += this.precioBase + 80;
        }else if (this.consumoEnergetico == 'C'){
            this.precioFinalE += this.precioBase + 60;
        }else if (this.consumoEnergetico == 'D'){
            this.precioFinalE += this.precioBase + 50;
        }else if (this.consumoEnergetico == 'E'){
            this.precioFinalE += this.precioBase + 30;
        }else if (this.consumoEnergetico == 'F'){
            this.precioFinalE += this.precioBase + 10;
        }

        if (this.peso >= 0 && this.peso <=19){
            this.precioFinalE += 10;
        } else if (this.peso >= 20 && this.peso <=49){
            this.precioFinalE += 50;
        } else if (this.peso >= 50 && this.peso <=79){
            this.precioFinalE += 80;
        } else if (this.peso >= 80){
            this.precioFinalE += 100;
        }

        return this.precioFinalE;
    }

    toString(){
        return `Precio Base: ${this.precioBase}, Color: ${this.color}, Consumo energetico: ${this.consumoEnergetico}, Peso: ${this.peso}`;
    }

}