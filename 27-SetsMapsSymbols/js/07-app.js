// un generador es una funcion que retorna un iterador
function *crearGenerador() {
    yield 1;
    yield 'Orlando';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next());
console.log(iterador.next());

// ejemplo de donde utilizar generador para carrito

function *generadorCarrito(carrito) {
    for (let i = 0; i <= carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['Producto 1','Producto 2','Producto 3', 'Producto 4'];

const iteradorCarrito = generadorCarrito(carrito);

console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());
console.log(iteradorCarrito.next());