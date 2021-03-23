const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// Encontrar el indice de Mayo
// con un .forEach
meses.forEach((mes,i) => {
    if(mes === 'Mayo')
        console.log(`El mes de Mayo se encuentra en el indice ${i}`);
    
});

// con .findIndex
const indice = meses.findIndex( mes => mes === 'Mayo');
console.log(indice);

// buscar en el carrito el indice del producto tablet con .findIndex
const index = carrito.findIndex ( producto => producto.nombre === 'Tablet');

// si no existe devuelve -1
if(index >= 0)
    console.log(`La Tablet esta en el indice ${index}`);
    

