// detener loop cuando i se igual a 5
// for(let i = 0; i <= 10; i++) {
//     if (i === 5) {
//         console.log(`Es el numero ${i}`);
//         break;
//     }
//     console.log(`numero ${i}`);
    
// }

// mostrar numero 10 con letra
// for( let i = 1; i <= 20; i++){
//     if(i === 10) {
//         console.log('DIEZ');
//         continue;
//     }
//     console.log(`numero ${i}`);
// }

const carrito = [
    {nombre: 'Pantalla', precio: 500},
    {nombre: 'Teclado', precio: 80},
    {nombre: 'Mouse', precio: 50},
    {nombre: 'Laptop', precio: 1000, descuento: true},
    {nombre: 'Tablet', precio: 800},
    {nombre: 'Celular', precio: 700}
];

for(let i = 0; i < carrito.length; i++) {
    if(carrito[i].descuento) {
        console.log(`${carrito[i].nombre} tiene Descuento`);
        continue;
    }
    console.log(carrito[i].nombre);
    
}