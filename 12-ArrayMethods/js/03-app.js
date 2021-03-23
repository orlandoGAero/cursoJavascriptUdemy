const carrito = [
    { nombre: 'Tablet', precio: 200.25 },
    { nombre: 'Monitor 27 Pulgadas', precio: 500.26 },
    { nombre: 'Televisión', precio: 100.10 },
    { nombre: 'Audifonos', precio: 300.99 },
    { nombre: 'Teclado', precio: 400.25 },
    { nombre: 'Celular', precio: 700.45 },
]

// con un .forEach
let total = 0;
carrito.forEach( producto => total += producto.precio );
console.log(total);

const res = carrito.reduce( (total, p) => total + p.precio,0 )
console.log(res);


