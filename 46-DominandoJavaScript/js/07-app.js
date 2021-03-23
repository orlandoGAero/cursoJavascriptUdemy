/*
Event loop

como se va ejecutando el código, ¿Que tiene mas prioridad?
*/

console.log('Primero');

setTimeout(() => {
    console.log('Segundo');
}, 0);

console.log('Tercero');

setTimeout(() => {
    console.log('Cuarto');
}, 0);

new Promise(resolve => resolve('Desconocido...'))
    .then(console.log)

console.log('Ultimo');

function saludar() {
    console.log('Hola event loop');
}

saludar();
