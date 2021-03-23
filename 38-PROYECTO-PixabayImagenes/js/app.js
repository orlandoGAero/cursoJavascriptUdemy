const formulario = document.querySelector('#formulario');
const resultadoDiv = document.querySelector('#resultado');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();

    paginaActual = 1;
    
    const termino = document.querySelector('#termino').value;

    if(termino.trim() === '') {
        mostrarAlerta('Debes ingresar un término de búsqueda');
        return;
    }

    buscarImagenes();

}

function buscarImagenes() {

    const termino = document.querySelector('#termino').value;

    const key = '19890564-53c558cac49b796a84bbd816a';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    fetch(url)
        .then( res => res.json() )
        .then( resultado => {
            const { hits, totalHits } = resultado;
            totalPaginas = calcularPaginas(totalHits);
            mostrarImagenes(hits);
        })
}

const calcularPaginas = total => parseInt(Math.ceil(total / registrosPorPagina));

function mostrarImagenes(imagenes) {

    limpiarHtml(resultadoDiv);
    // Limpiar el paginador previo
    limpiarHtml(paginacionDiv);

    if(totalPaginas > 0) {

        imagenes.forEach( imagen => {
            const { likes, views, previewURL, largeImageURL} = imagen;
            resultadoDiv.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">
                    <div class="p-4">
                        <p class="font-bold"> ${likes} <span class="font-light">Me gusta</span> </p>
                        <p class="font-bold"> ${views} <span class="font-light">Veces vista</span> </p>
    
                        <a 
                            class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                            href="${largeImageURL}" target="_blank" rel="noopener noreferrer"
                        >Ver imagen</a>
                    </div>
                </div>
            </div>
            `;
        });

        // Imprimir el paginador
        imprimirPaginador();
    } else {
        mostrarAlerta('No se encontraron resultados');
    }

}

// crear generador para registrar el total de páginas
function *crearPaginador(total) {
    for(let i = 1; i <= total; i++) {
        yield i;
    }
}

function imprimirPaginador() {
    iterador = crearPaginador(totalPaginas);

    while(true) {
        const {value, done} = iterador.next();
        if(done) return;

        // construir paginador
        const paginaBtn = document.createElement('a');
        paginaBtn.href = '#';
        paginaBtn.dataset.pagina = value;
        paginaBtn.textContent = value;
        paginaBtn.classList.add('siguiente','bg-yellow-400','px-4','py-1','mr-2','mb-4','font-bold','rounded');
        paginaBtn.onclick = () => {
            paginaActual = value;
console.log(paginaActual);
            buscarImagenes();
        }

        paginacionDiv.appendChild(paginaBtn);
    }
}

function mostrarAlerta(mensaje) {
    const existeAlerta = document.querySelector('.error');

    if(!existeAlerta) {
        const alerta = document.createElement('div');
        
        alerta.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','mt-6','rounded','mx-auto','max-w-lg','text-center','error');
        alerta.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="font-bold block sm:inline">${mensaje}</span>
        `;
        
        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 5000);

    }
}

function limpiarHtml(div) {
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}