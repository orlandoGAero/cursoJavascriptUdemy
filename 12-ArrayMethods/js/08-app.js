const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const carrito2 = [
    { nombre: 'Mouse', precio: 100 },
    { nombre: 'USB', precio: 20 },
    { nombre: 'Iphone', precio: 2000 },
]

const producto = {nombre: 'Disco Duro', precio: 250};

// spread operator con arreglo de indices
const meses2 = [...meses, 'Agosto'];
console.log(meses2);

// spread operator con arreglo de objetos
const carritos = [...carrito,producto];
console.log(carritos);

const productos = [...carrito,...carrito2];
console.log(productos);



