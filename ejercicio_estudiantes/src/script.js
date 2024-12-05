import Estudiante from "./Estudiante.js";
{
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const edad = document.getElementById("edad");
  const direccion = document.getElementById("direccion");
  const email = document.getElementById("email");
  const telefono = document.getElementById("telefono");
  const botonCrear = document.getElementById("enviar");

  // Creamos una funcion que nos cree la ventana.
  const creaVentana = () => {
    const alumno = new Estudiante(
      nombre.value,
      apellidos.value,
      edad.value,
      direccion.value,
      email.value,
      telefono.value,
      [2,4,5]
    );
    const ventana = window.document.open("", "", "heigth=800px, width=800px");

    ventana.alumnos = alumno;

    ventana.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Alumnos</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        margin: 20px;
                        background-color: #f4f4f9;
                    }

                    h1, h2 {
                        color: #333;
                    }

                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                    }

                    th, td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: left;
                    }


                    input[type="number"] {
                        width: 100%;
                        padding: 8px;
                        margin-bottom: 10px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                    }

                    

                    
                    tbody {
                        height: 200%; /* Added height to tbody */
                        width: 100%;
                    }

                    table thead, table tbody tr {
                        display: table;
                        width: 100%;
                        table-layout: fixed;
                    }
                </style>
            </head>
            <body>
                <h1>Nombre: ${alumno.getNombre()}</h1>
                <h2>Apellidos: ${alumno.getApellidos()}</h2>
                <h2>Edad: ${alumno.getEdad()}</h2>
                <h2>Direccion: ${alumno.getDireccion()}</h2>
                <h2>Telefono: ${alumno.getTelefono()}</h2>
                <h2>Correo: ${alumno.getCorreo()}</h2>

                <table>
                    <thead>
                        <tr>
                            <th>Calificaciones</th>
                        </tr>
                    </thead>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th id='oculto'>
                                
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id='oculto'>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </body>
            <script src='./src/scriptVentana.js'></script>
            </html>
            `);
  };

  // Creamos nuestra ventana mediante el boton.
  botonCrear.addEventListener("click", creaVentana);
}
