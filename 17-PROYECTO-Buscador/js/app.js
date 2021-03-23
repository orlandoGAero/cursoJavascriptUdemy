// variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const res = document.querySelector('#resultado');
const anioMax = new Date().getFullYear();
const anioMin = anioMax - 10;

const datosBusqueda = {
    marca : '',
    year : '',
    minimo : '',
    maximo : '',
    puertas : '',
    transmision : '',
    color : '',
}
// eventos
document.addEventListener('DOMContentLoaded', () => {
    // mostrar lista de autos
    mostrarAutos(autos); 

    // llenar select de año
    llenarAnio();
});

// eventos para selects

marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);

    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;

    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;

    filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);

    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    // console.log(datosBusqueda);
    
    filtrarAuto();
});


// funciones
function mostrarAutos(autos) {

    limpiarHTML();

    autos.forEach( auto => {

        const {marca,modelo,year,precio,puertas,color,transmision} = auto;

        pAuto = document.createElement('p');

        pAuto.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} puertas - $${precio} - ${color} - transmisión: ${transmision}
        `;

        res.appendChild(pAuto);

    });
    
}

function limpiarHTML() {
    while(res.firstChild) {
        res.removeChild(res.firstChild);
    }
}

function llenarAnio() {
    
    for(let i = anioMax; i >= anioMin; i--) {
        
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;

        year.appendChild(option);
        
    }
    
}

function filtrarAuto() {
    
    const resultado = autos.filter( filtrarMarca )
    .filter( filtrarAnio )
    .filter( filtrarMinimo )
    .filter( filtrarMaximo )
    .filter( filtrarPuerta )
    .filter( filtrarTransmision )
    .filter( filtrarColor )

    if(resultado.length == 0) {
        noResultado();
    } else {
        mostrarAutos(resultado);
    }
    
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;

    if(marca) {
        return auto.marca === marca
    }

    return auto
}

function filtrarAnio(auto) {
    const { year } = datosBusqueda;

    if(year) {
        return auto.year === year
    }

    return auto
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;

    if(minimo) {
        return auto.precio >= minimo;
    }

    return auto;
}

function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;

    if(maximo) {
        return auto.precio <= maximo;
    }

    return auto;
}

function filtrarPuerta(auto) {
    const { puertas } = datosBusqueda;

    if(puertas) {
        return auto.puertas === puertas;
    }

    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;

    if(transmision) {
        return auto.transmision === transmision;
    }

    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;

    if(color) {
        return auto.color === color;
    }

    return auto;
}

function noResultado() {

    limpiarHTML(); 

    const div = document.createElement('div');
    div.classList.add('alerta','error');
    div.textContent = 'No hay resultados, intenta con otros términos de busqueda'
    res.appendChild(div);
}