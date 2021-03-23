const btnCargarJSONArray = document.querySelector('#cargarJSONArray');
btnCargarJSONArray.addEventListener('click', getDatos);

function getDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( datos => mostrarEmpleados(datos) )
        .catch( error => console.log(error))
}

function mostrarEmpleados(datos) {
    const contenido = document.querySelector('#contenido');

    let html = '';

    datos.forEach( empleado => {
        const {id,nombre,empresa,trabajo} = empleado;
        html += `
            <p>id: ${id}</p>
            <p>nombre: ${nombre}</p>
            <p>empresa: ${empresa}</p>
            <p>trabajo: ${trabajo}</p>
        `;
    });

    contenido.innerHTML = html;

}