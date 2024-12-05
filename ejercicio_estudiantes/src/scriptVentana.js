
    const oculto = document.getElementById('oculto');

    oculto.addEventListener('mouseover', (event) => {
        alumnos._calificaciones.forEach(calificacion => {
            document.write(`<h1>calificaciones: ${calificacion}</h1>`);
        });
        event.target.style.backgrounColor = "red";
    })
