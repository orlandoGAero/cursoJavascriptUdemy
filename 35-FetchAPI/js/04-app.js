const btncargarAPI = document.querySelector('#cargarAPI');
btncargarAPI.addEventListener('click', getData);

function getData() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( datos => mostrarPerfiles(datos) )
        .catch( error => console.error('Error: ', error) )
}

function mostrarPerfiles(datos) {

    const contenido = document.querySelector('#contenido');

    let html = '';

    datos.forEach( perfil => {
        const { author,post_url } = perfil;

        html += `
            <hr>
            <p>Autor: ${author}</p>
            <a href="${post_url}" target="_blank">Ver Imagen</a>
            <hr>
        `;

    });

    contenido.innerHTML = html;
}