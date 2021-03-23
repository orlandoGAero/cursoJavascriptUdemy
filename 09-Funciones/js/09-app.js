// añadir funciones a objeto
const reproductor = {
    crearPlaylist: function(nombre) {
        return nombre;
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Playlist reproduciendo: ${nombre}`);
    }
}

const nombrePlaylist = reproductor.crearPlaylist('House 2020');

reproductor.reproducirPlaylist(nombrePlaylist);