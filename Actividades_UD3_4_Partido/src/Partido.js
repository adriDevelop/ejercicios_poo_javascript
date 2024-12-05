class Partido{
    #jugadores;
    #sets;

    constructor(sets, jugador){
        this.#sets = [sets];
        this.#jugadores = [jugador];
    }

    get sets(){
        return this.#sets.map(set => set);
    }

    get jugadores(){
        return this.#jugadores.map(jugador => jugador);
    }

    set sets(arr){
        const regex = /[0-9]{1}-[0-9]{1}/
        if (Array.isArray(arr)){
            arr.forEach(value => {
                if (regex.match(value)){
                    this.#sets = value;
                }throw new Error("El set no tiene el tipo introducido");
            });
        }
    }
}