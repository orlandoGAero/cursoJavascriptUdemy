
const reproductor = {
    cancion: '',
    reproducir: id => `Reproduciendo cancion número: ${id}`,
    pausar: id => `Pausar canción número ${id}`,
    crearPlaylist: nombre => `Creando playlist: ${nombre}`,
    reproducirPlaylist: nombre => `Playlist reproduciendo: ${nombre}`,

    set crearCancion(cancion)  {
        this.cancion = cancion;
        console.log( `Creando canción: ${cancion}` ); 
    },

    get obtenerCancion() { return `${this.cancion}` } 

}

const {
        reproducir,
        pausar,
        crearPlaylist,
        reproducirPlaylist,
    } = reproductor;


console.log(reproducir(40));
console.log(pausar(40));
console.log( crearPlaylist('House 2020') );
console.log(reproducirPlaylist('Hardstyle'));
console.log( crearPlaylist('Trance 2020') );
reproductor.crearCancion = 'Something Real';

console.log( reproductor.obtenerCancion );


