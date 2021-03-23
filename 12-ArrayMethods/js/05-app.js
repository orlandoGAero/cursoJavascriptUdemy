const carrito = [
    { nombre: 'Tablet', precio: 200.25 },
    { nombre: 'Monitor 27 Pulgadas', precio: 500.26 },
    { nombre: 'Televisión', precio: 100.00 },
    { nombre: 'Mouse', precio: 100.00 },
    { nombre: 'Audifonos', precio: 300.99 },
    { nombre: 'Teclado', precio: 400.00 },
    { nombre: 'Celular', precio: 700.45 },
]

// con un foreach
let tablet = '';
carrito.forEach( (producto, i) => {
    if(producto.nombre === 'Tablet') {
        tablet = carrito[i];
    }
});

console.log(tablet);

// con .find solo retorna uno
const resultado = carrito.find( producto => producto.nombre === 'Tablet');
console.log(resultado);


