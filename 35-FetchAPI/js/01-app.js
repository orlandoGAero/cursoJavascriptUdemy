const btnCargarTxt = document.querySelector('#cargarTxt');

btnCargarTxt.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/datos.txt';
    fetch(url)
        .then( respuesta => respuesta.text())
        .then( datos => console.log(datos))
        .catch( error => console.log(error) )
}