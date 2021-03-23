const abrirPantalla = document.querySelector('#abrir-pantalla-completa');
const salirPantalla = document.querySelector('#salir-pantalla-completa');

abrirPantalla.addEventListener('click', pantallaCompleta);
salirPantalla.addEventListener('click', cerrarPantallaCompleta);

function pantallaCompleta() {
    document.documentElement.requestFullscreen();
}

function cerrarPantallaCompleta() {
    document.exitFullscreen();
}

