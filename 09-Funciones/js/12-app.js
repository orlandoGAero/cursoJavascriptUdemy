const carrito = [
    {nombre: 'Pantalla', precio: 500},
    {nombre: 'Teclado', precio: 80},
    {nombre: 'Mouse', precio: 50},
    {nombre: 'Laptop', precio: 1000},
    {nombre: 'Tablet', precio: 800},
    {nombre: 'Celular', precio: 700}
];

const productos = carrito.map ( producto => `${producto.nombre} - Precio: $${producto.precio}` );

console.table(productos);
