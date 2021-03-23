
const container = document.querySelector('.container');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

window.addEventListener('load', () =>{
    formulario.addEventListener('submit', obtenerClima);
});

function obtenerClima(e) {

    e.preventDefault();

    // Validar campos
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if(ciudad.trim() === '' || pais === '') {
        mostrarError('Ambos campos son obligatorios');
        return;
    }

    // consultat API
    consultarApi(ciudad.trim(),pais);

    formulario.reset();

}

function consultarApi(ciudad,pais) {
    const appId = 'd46e694c106db54fdec1f2bf3f1185b7';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

    mostrarSpinner();

    fetch(url)
        .then( respuesta => respuesta.json() )
        .then( datos => {
            limpiarHTML();

            if(datos.cod === '404') {
                
                const texto = document.createElement('p');
                texto.classList.add('text-center','text-white','mt-6');
                texto.textContent = 'Agrega tu ciudad y país, el resultado se mostrará aquí';
                resultado.appendChild(texto);

                mostrarError('Ciudad no encontrada');
                return;
            }

            mostrarClima(datos);
        } );

}

function mostrarClima(datos) {
    const { name, main: { temp, temp_min, temp_max } } = datos;

    const temperatura = kelvinACentigrados(temp);
    const temperatura_min = kelvinACentigrados(temp_min);
    const temperatura_max = kelvinACentigrados(temp_max);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.classList.add('font-bold','text-3xl');
    nombreCiudad.textContent = name;
    
    const actual = document.createElement('p');
    actual.classList.add('font-bold','text-6xl');
    actual.innerHTML = `${temperatura} &#8451;`;
    
    const tempMax = document.createElement('p');
    tempMax.classList.add('text-xl');
    tempMax.innerHTML = `Max: ${temperatura_max} &#8451;`;
    
    const tempMin = document.createElement('p');
    tempMin.classList.add('text-xl');
    tempMin.innerHTML = `Min: ${temperatura_min} &#8451;`;

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center','text-white');

    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(tempMax);
    resultadoDiv.appendChild(tempMin);
    resultado.appendChild(resultadoDiv);
}

const kelvinACentigrados = grados => parseInt(grados - 273.15);

function mostrarError(mensaje) {
    const alerta = document.querySelector('.alerta');

    if(!alerta) {
        const divError = document.createElement('div');
        divError.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-md','mx-auto','mt-6','text-center','alerta');

        divError.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block">${mensaje}</span>
        `;

        container.appendChild(divError);

        setTimeout(() => {
            divError.remove();
        }, 5000);
    }
}

function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner() {
    
    limpiarHTML();
    
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
    `;

    resultado.appendChild(spinner);
}