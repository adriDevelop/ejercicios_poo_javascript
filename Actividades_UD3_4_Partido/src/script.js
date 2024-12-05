{
    const nombreJugador1 = document.getElementById('nombreJugador1');
    const nombreJugador2 = document.getElementById('nombreJugador2');
    
    const edadJugador1 = document.getElementById('edadJugador1');
    const edadJugador2 = document.getElementById('edadJugador2');

    const set1 = document.getElementById('set1');
    const set2 = document.getElementById('set2');
    const set3 = document.getElementById('set3');

    const mensajeError = document.getElementById('mensajeError');


    nombreJugador1.addEventListener('input', ()=>{
        if (!nombreJugador1.checkValidity()){
            mensajeError.innerText("El nombre no tiene los valores necesarios");
            nombreJugador1.style.background = "red";
        }
    })

    
}