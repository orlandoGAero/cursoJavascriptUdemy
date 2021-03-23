// Notification Api

const btnNotificar = document.querySelector('#notificar');
btnNotificar.addEventListener('click', () => {
    // preguntar si se desea permitir recibir notificaciones
    Notification
        .requestPermission()
        .then( res => console.log('El resultado es: ', res) )
});

const verNotificacionBtn = document.querySelector('#verNotificacion');
verNotificacionBtn.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Aprendiendo javascript con código con Juan'
        });

        notificacion.onclick = function() {
            window.open('http://codigoconjuan.com');
        }
    }
});


