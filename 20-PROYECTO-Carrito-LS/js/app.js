// variables
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const carrito = document.querySelector('#carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

crearEventosListener();

// funciones
function crearEventosListener() {
    // para agregar curso
    listaCursos.addEventListener('click', agregarCurso);

    // para eliminar un curso del carrito
    carrito.addEventListener('click', eliminarCurso);

    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || [];
        carritoHtml();
    });

    //vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];

        limpiarHTML();
        sincronizarStorage();
    });
}

function agregarCurso(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')){
        const datosCurso = e.target.parentElement.parentElement;

        leerCurso(datosCurso);
    }
    
}

function eliminarCurso(e) {
    e.preventDefault();
    
    if(e.target.classList.contains('borrar-curso')) {
        
        const cursoId = e.target.getAttribute('data-id');

        // buscar en el array articulosCarrito el indice del curso a eliminar
        const index = articulosCarrito.findIndex( curso => curso.id === cursoId);
        
        // extraer la cantidad segun el indice devuelto
        const cantidad = articulosCarrito[index].cantidad;
        
        // si la cantidad es mayor a uno restar uno a la cantidad
        // si la cantidad es igual a uno eliminar el curso del carrito
        if(cantidad > 1) {
            
            // crear una copia del array articulosCarrito e iterarlo
            const cursos = articulosCarrito.map( curso => {
                if(curso.id === cursoId) {
                    console.log(curso.precio);
                    
                    curso.cantidad--;
                    return curso;
                } else {
                    return curso;
                }
            });

            articulosCarrito = [...cursos];

        } else {
            articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
        }
        
        console.log(articulosCarrito);

        carritoHtml();
    }
    
}

function leerCurso(curso) {

    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    const existe = articulosCarrito.some( curso => curso.id === infoCurso.id );
        
    if(existe) {
        const cursos = articulosCarrito.map( curso => {
            if(curso.id === infoCurso.id){
                const precio = parseInt(infoCurso.precio.substring(1));
                
                curso.cantidad++;
                curso.precio = `$${precio * curso.cantidad}`;
                
                return curso;
            } else {
                return curso;
            }
        });

        articulosCarrito = [...cursos];
        
    } else {
        // Agregar elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito,infoCurso];
    }
    
    // console.log(articulosCarrito);

    carritoHtml();
}

function carritoHtml() {
    // limpiar html
    limpiarHTML();

    // Recorre el carrito y genera la fila
    articulosCarrito.forEach( curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
        `;
        
        // Agregar la fila la tabla HTML
        contenedorCarrito.appendChild(row)
    });

    sincronizarStorage();

}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function limpiarHTML() {
    // forma lenta
    // contenedorCarrito.innerHTML = '';

    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
    
}

