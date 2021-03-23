import * as UI from './interfaz.js';

class API {
    constructor(artista,cancion) {
        this.artista = artista;
        this.cancion = cancion;
    }

    consultarApi() {
        const url = `https://api.lyrics.ovh/v1/${this.artista}/${this.cancion}`;

        fetch(url)
            .then( respuesta => respuesta.json() )
            .then( resultado => {
                if(resultado.lyrics) {
                    const { lyrics } = resultado;
                    UI.divLetra.textContent = `Letra de: ${this.cancion} - ${this.artista}`;
                    UI.divResultado.textContent = lyrics;
                } else {
                    UI.divLetra.textContent = '';
                    UI.divResultado.textContent = '';
                    UI.divMensajes.textContent = 'Canción no encontrada, intenta otra busqueda';
                    UI.divMensajes.classList.add('error');
                    
                    setTimeout(() => {
                        UI.divMensajes.textContent = '';
                        UI.divMensajes.classList.remove('error');
                    }, 5000);
                }
            })
    }
}

export default API;