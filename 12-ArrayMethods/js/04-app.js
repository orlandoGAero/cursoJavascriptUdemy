const carrito = [
    { nombre: 'Tablet', precio: 200.25 },
    { nombre: 'Monitor 27 Pulgadas', precio: 500.26 },
    { nombre: 'Televisión', precio: 100.00 },
    { nombre: 'Mouse', precio: 100.00 },
    { nombre: 'Audifonos', precio: 300.99 },
    { nombre: 'Teclado', precio: 400.00 },
    { nombre: 'Celular', precio: 700.45 },
]

// con foreach
let producto100 = [];
carrito.forEach( (producto,index) => {
    if(producto.precio === 100) {
        producto100.push(producto);
    }
});

console.table(producto100);


// con .filter
let resultado; 

resultado = carrito.filter( producto => producto.precio <= 400);
resultado = carrito.filter( producto => producto.precio >= 500);
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos' );
resultado = carrito.filter( producto => producto.nombre === 'Audifonos' );
resultado = carrito.filter( producto => producto.precio === 100 );


// console.log(resultado);
