export default class FormularioException extends Error{
    constructor(message){
        super(message);
        this.name = "FormularioException";
    }
}