const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// buscar si existe el mes de enero

// con un foreach
// meses.forEach( mes => {
//     if(mes === 'Enero') {
//         console.log('Si existe Enero');
        
//     }
// });

// para arrays tradicionales .include

const existe = meses.includes('Enero');
console.log(existe);

// para arrays de objetos se utiliza .some
const existe2 = carrito.some( producto => producto.nombre === 'Teclado' );
console.log(existe2);

// en un arreglo tradicional con .some
const existe3 = meses.some ( mes => mes === 'Abril');

const itExists = existe3 ? 'Si existe Abril' : 'No encuentro abril';
console.log(itExists);



