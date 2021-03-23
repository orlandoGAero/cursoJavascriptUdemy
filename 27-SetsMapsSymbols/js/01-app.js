// SET - No acepta duplicados y es iterable

const carrito = new Set();

// agregar elementos al set
carrito.add('Guitarra');
carrito.add('Vinilo 1');
carrito.add('Vinilo 2');
carrito.add('Vinilo 3');
carrito.add('Vinilo 4');

// eliminar elemento del set
carrito.delete('Vinilo 4');

// eliminar todos los elementos del set
// carrito.clear();

// verificar si existe un elemento en el set
console.log(carrito.has('Guitarra'));

// obtener tamaño del set
console.log('Size: ',carrito.size);

// iterar set
carrito.forEach( (producto) => console.log(producto) )

console.log(carrito);

// ejemplo donde utilizar un set
// eliminar los duplicados del siguiete arreglo
const numeros = [10,20,30,40,50,10,20,30];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);

noDuplicados.forEach(n => 
    console.log(n)
);

