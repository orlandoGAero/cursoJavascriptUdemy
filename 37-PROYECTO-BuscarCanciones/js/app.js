import * as UI from './interfaz.js';
import API from './api.js';

UI.formulario.addEventListener('submit', buscarCancion);

function buscarCancion(e) {
    e.preventDefault();
    // leer datos del formulario
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    // validar datos
    if(artista.trim() === '' || cancion.trim() === '') {
        UI.divMensajes.textContent = 'Ambos campos son obligatorios';
        UI.divMensajes.classList.add('error');
        
        setTimeout(() => {
            UI.divMensajes.textContent = '';
            UI.divMensajes.classList.remove('error');
        }, 5000);
        return;
    }

    const busqueda = new API(artista, cancion);
    busqueda.consultarApi();
    
    this.reset();
}