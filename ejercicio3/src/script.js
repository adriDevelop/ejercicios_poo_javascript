{
    const crearCookie = document.getElementById('crearCookie');
    const eliminarCookie = document.getElementById('eliminarCookie');

    const creacionCookie = () =>{
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        document.cookie = `nombre=antonio;expires=${expires};path=/`;
    }

    const eliminarLaCookie = () =>{
        const expires = new Date(0);
        document.cookie = `nombre=;expires=${expires};path=/`;
    }

    crearCookie.addEventListener('click', creacionCookie);
    eliminarCookie.addEventListener('click', eliminarLaCookie);
}