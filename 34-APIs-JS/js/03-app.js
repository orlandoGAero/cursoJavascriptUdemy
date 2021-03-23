window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if(navigator.online) {
        console.log('Estas conectado');
    } else {
        console.log('No tienes Conexión');
    }
}