import Electrodomestico from './Electrodomestico.js';
class Lavadora extends Electrodomestico{
    #carga;

    constructor(precioBase, color, consumoEnergetico, peso, carga){
        super(precioBase, color, consumoEnergetico, peso);
        this.carga = carga;
    }

    get carga(){
        return this.#carga;
    }

    set carga(carga){
        this.#carga = carga;
    }

    precioFinal(){
        const precioBaseFinal = super.precioFinal();
        if (this.carga > 30){
            precioBaseFinal += 50;
            this.precioFinalE = precioBaseFinal;
        }
        return precioBaseFinal;
    }
    

    toString(){
        return `${super.toString()} Carga: ${this.carga} Precio Final: ${this.precioFinal()}`;
    }
}