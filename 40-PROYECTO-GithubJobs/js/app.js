const formulario = document.querySelector('#formulario');
const resultadoDiv = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validarBusqueda);
});

function validarBusqueda(e) {
    e.preventDefault();

    const busqueda = document.querySelector('#busqueda').value;

    if(busqueda.trim() === '') {
        mostrarAlerta('Ingresa un término de búsqueda');
        return;
    }

    consultarAPI(busqueda);
}

function consultarAPI(busqueda) {
    const githubUrl = `https://jobs.github.com/positions.json?search=${busqueda}`;
    const url = `http://api.allorigins.win/get?url=${ encodeURIComponent(githubUrl) }`;

    axios.get(url)
        .then( respuesta => mostrarVacantes(JSON.parse(respuesta.data.contents)) )
}

function mostrarVacantes(vacantes) {
    while(resultadoDiv.firstChild) {
        resultadoDiv.removeChild(resultadoDiv.firstChild)
    }
    
    if(vacantes.length > 0) {

        vacantes.forEach( vacante => {
    
            const {title,company,type,url} = vacante;
    
            const divVacante = document.createElement('div');
            divVacante.innerHTML = `
                <div class="shadow bg-white p-6 rounded">
                    <h2 class="text-2xl font-light mb-4">${title}</h2>
                    <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
                    <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
                    <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
                </div>
            `;
            resultadoDiv.appendChild(divVacante);
            
        });

    } else {
        mostrarAlerta('No hay vacantes, intenta con otro término de búsqueda');
    }
}

function mostrarAlerta(msj) {
    const existeAlerta = document.querySelector('.alerta');

    if(!existeAlerta) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('bg-gray-100','text-red-600','p-3','mt-6','text-center','alerta');
        divMensaje.textContent = msj;

        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}
