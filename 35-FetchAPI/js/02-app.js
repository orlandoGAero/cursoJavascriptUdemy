const btnCargarJSON = document.querySelector('#cargarJSON');
btnCargarJSON.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json';
    fetch(url)
        .then( res => res.json())
        .then( datos => mostrarHtml(datos))
}

function mostrarHtml({id,nombre,empresa,trabajo}) {
    const contenido = document.querySelector('#contenido');

    contenido.innerHTML = `
        <p>id: ${id}</p>
        <p>nombre: ${nombre}</p>
        <p>empresa: ${empresa}</p>
        <p>trabajo: ${trabajo}</p>
    `;
}