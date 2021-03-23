const carrito = [
    { nombre: 'Tablet', precio: 200.25 },
    { nombre: 'Monitor 27 Pulgadas', precio: 500.26 },
    { nombre: 'Televisión', precio: 100.00 },
    { nombre: 'Mouse', precio: 100.00 },
    { nombre: 'Audifonos', precio: 300.99 },
    { nombre: 'Teclado', precio: 400.00 },
    { nombre: 'Celular', precio: 700.45 },
]

// .every en cada iteracion se debe cumplir la condicion para retornar true
// es como un AND
const resultado = carrito.every( producto => producto.precio < 1000);
console.log(resultado);

// .some como si fuera un OR
const resultado2 = carrito.some( producto => producto.precio < 50);
console.log(resultado2);

