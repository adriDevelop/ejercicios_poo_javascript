import FormularioException from '../error/FormularioException.js';

export default class Persona {
    // atributos propios de la persona.
    _nombre;
    _edad;
    _DNI;
    _sexo;
    _peso;
    _altura;

    // constructor de la clase.
    constructor(nombre, edad, sexo, peso, altura){
        this._nombre = nombre;
        this._edad = edad;
        this._sexo = sexo;
        this._peso = peso;
        this._altura = altura;
        this._DNI = this.generarDNI();
        // El valor de dni se va a auto generar mediante la función generaDNI().
    }

    // GETTERS y SETTERS.
    getNombre = () =>{
        return this._nombre;
    }

    getEdad = () => {
        return this._edad;
    }

    getSexo = () => {
        return this._sexo;
    }

    getPeso = () => {
        return this._peso;
    }

    getAltura = () => {
        return this._altura;
    }

    getDNI = () => {
        return this._DNI;
    }

    setNombre = (nombre) => {
        try {
            if (nombre = ''){
                throw new FormularioException("No se ha generado correctamente uno de los valores del formulario");
            }
            this._nombre = nombre;
        } catch(err){
                console.log(`${err.message}`);
        }
    }

    setEdad = (edad) => {
        try {
            if (edad = ''){
                throw new FormularioException("No se ha generado correctamente uno de los valores del formulario");
            }
            this._edad = edad;
        } catch(err){
                console.log(`${err.message}`);
        }
    }

    setSexo = (sexo) => {
        try {
            if (sexo = ''){
                throw new FormularioException("No se ha generado correctamente uno de los valores del formulario");
            }
            this._sexo = sexo;
        } catch(err){
                console.log(`${err.message}`);
        }
    }

    setPeso = (peso) => {
        try {
            if (peso = ''){
                throw new FormularioException("No se ha generado correctamente uno de los valores del formulario");
            }
            this._peso = peso;
        } catch(err){
                console.log(`${err.message}`);
        }
    }

    setAltura = (altura) => {
        try {
            if (altura = ''){
                throw new FormularioException("No se ha generado correctamente uno de los valores del formulario");
            }
            this._altura = altura;
        } catch(err){
                console.log(`${err.message}`);
        }
    }

    generarDNI = () =>{
        const arrLetras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let randomDNI = Math.floor(Math.random() * (99999999 - 11111111) + 11111111);
        let randomLetra = arrLetras[Math.floor(Math.random() * (arrLetras.length - 0) + 0)];
        return randomDNI.toString() + randomLetra;
    }

    calcularIMC = () => {
        const imcCalculado = this.getPeso()/(Math.pow(this.getAltura(), 2));
        if (imcCalculado < 20){
            return -1;
        } else if (imcCalculado >= 20 && imcCalculado <= 25){
            return 0;
        } else {
            return 1;
        }
    }

    esMayorEdad = () => {
        if (this.getEdad() >= 18){
            return `${this.getNombre} es mayor de edad.`;
        } else {
            return `${this.getNombre()} es menor de edad.`;
        }
    }

    toString = () => {
        return `Nombre: ${this.getNombre()}\nEdad: ${this.getEdad()}\nDNI: ${this.getDNI()}\nPeso: ${this.getPeso()}\nAltura: ${this.getAltura()}`;
    }
}