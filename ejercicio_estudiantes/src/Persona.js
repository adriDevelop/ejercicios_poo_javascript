import NombreException from '../error/NombreException.js';
import ApellidosException from '../error/ApellidosException.js';
import EdadException from '../error/EdadException.js';
import CorreoException from '../error/CorreoException.js';
import DireccionException from '../error/DireccionException.js';
import TelefonoException from '../error/TelefonoException.js';

export default class Persona{
    // Propiedades privadas de la clase.
    _nombre;
    _apellidos;
    _edad;
    _correo;
    _direccion;
    _telefono;

    // Constructor de la clase.
    constructor(nombre, apellidos, edad, correo, direccion, telefono){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._correo = correo;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    // GETTERS Y SETTERS
    getNombre = () => {
        return this._nombre;
    }

    getApellidos = () => {
        return this._apellidos;
    }

    getEdad = () => {
        return this._edad;
    }

    getCorreo = () => {
        return this._correo;
    }

    getDireccion = () => {
        return this._direccion;
    }

    getTelefono = () => {
        return this._telefono;
    }

    setNombre = (nombre) => {
        try{
            if (nombre == ''){
                throw new NombreException("No hay un nombre definido");
            } else {
                this._nombre = nombre;
            }
        } catch (err){
            console.log(`El error es ${err.name}\nEl mensaje de error es: ${err.message}`);
        }
    }

    setApellidos = (apellidos) => {
        try{
            if (apellidos == ''){
                throw new ApellidosException("No hay unos Apellidos definidos");
            } else {
                this._apellidos = apellidos;
            }
        } catch (err){
            console.log(`El error es ${err.name}\nEl mensaje de error es: ${err.message}`);
        }
    }

    setEdad = (edad) => {
        try{
            if (edad == ''){
                throw new EdadException("No hay una edad definida");
            } else {
                this._edad = edad;
            }
        } catch (err){
            console.log(`El error es ${err.name}\nEl mensaje de error es: ${err.message}`);
        }
    }

    setCorreo = (correo) => {
        try{
            if (correo == ''){
                throw new CorreoException("No hay un correo definido");
            } else {
                this._correo = correo;
            }
        } catch (err){
            console.log(`El error es ${err.name}\nEl mensaje de error es: ${err.message}`);
        }
    }

    setDireccion = (direccion) => {
        try{
            if (direccion == ''){
                throw new DireccionException("No hay una direccion definida");
            } else {
                this._direccion = direccion;
            }
        } catch (err){
            console.log(`El error es ${err.name}\nEl mensaje de error es: ${err.message}`);
        }
    }

    setTelefono = (telefono) => {
        try{
            if (telefono == ''){
                throw new TelefonoException("No hay un telefono definido");
            } else {
                this._telefono = telefono;
            }
        } catch (err){
            console.log(`El error es ${err.name}\nEl mensaje de error es: ${err.message}`);
        }
    }
}