const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultadoDiv = document.querySelector('#resultado');

const objBusqueda = {
    moneda: '',
    criptomoneda: ''
}

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    formulario.addEventListener('submit', submitFormulario);
    criptomonedasSelect.addEventListener('change', leerDatos);
    monedaSelect.addEventListener('change', leerDatos);
});

// crear promesa para obtener las criptomonedas

const obtenerCriptomonedas = criptomonedas => new Promise( resolve => resolve(criptomonedas) );

function consultarCriptomonedas() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=mxn';

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( resultado => obtenerCriptomonedas(resultado.Data) )
        .then( criptomonedas => selectCriptomonedas(criptomonedas) )
}

function selectCriptomonedas(criptomonedas) {
    criptomonedas.forEach( cripto => {
        const { Name, FullName } = cripto.CoinInfo;

        const opcion = document.createElement('option');
        opcion.value = Name;
        opcion.textContent = FullName;

        criptomonedasSelect.appendChild(opcion);
    });
}

function leerDatos(e) {
    objBusqueda[e.target.name] = e.target.value;
}

function submitFormulario(e) {
    e.preventDefault();

    const { moneda,criptomoneda } = objBusqueda;

    // validar
    if(moneda === '' || criptomoneda === '') {
        limpiarHTML();
        mostrarAlerta('Ambos campos son obligatorios');
        return;
    }

    consultarAPI();
}

function consultarAPI() {

    const { moneda,criptomoneda } = objBusqueda;

    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( cotizacion => {
            imprimirCotizacion(cotizacion.DISPLAY[criptomoneda][moneda]);
        } )
}

function imprimirCotizacion(cotizacion) {
    const  { PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,LASTUPDATE } = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `Precio más alto del día: <span>${HIGHDAY}</span>`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `Precio más bajo del día: <span>${LOWDAY}</span>`;

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `Variación últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `Última Actualización: <span>${LASTUPDATE}</span>`;
    
    limpiarHTML();
    resultadoDiv.appendChild(precio);
    resultadoDiv.appendChild(precioAlto);
    resultadoDiv.appendChild(precioBajo);
    resultadoDiv.appendChild(ultimasHoras);
    resultadoDiv.appendChild(ultimaActualizacion);
}

function mostrarAlerta(msj) {
    const existeError = document.querySelector('.error');

    if(!existeError) {
        const divMsj = document.createElement('div');
        divMsj.textContent = msj;
        divMsj.classList.add('error');

        formulario.appendChild(divMsj);

        setTimeout(() => {
            divMsj.remove();
        }, 5000);
    }
}

function limpiarHTML() {
    while(resultadoDiv.firstChild) {
        resultadoDiv.removeChild(resultadoDiv.firstChild);
    }
}

function mostrarSpinner() {
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    limpiarHTML();
    resultadoDiv.appendChild(spinner);
}
