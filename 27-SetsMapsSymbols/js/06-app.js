// creando un iterador

function crearIterador(carrito) {
    // definimos un contador en cero
    let i = 0;

    return {
        siguiente: () => {
            // definimos el fin
            const fin = (i >= carrito.length);
            /* si no se ha llegado al fin
                obtener valor*/
            const valor = !fin ? carrito[i++] : undefined ;
            return {
                fin,
                valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3','Producto nuevo'];

const recorrerIterador = crearIterador(carrito);

console.log(recorrerIterador.siguiente());
console.log(recorrerIterador.siguiente());
console.log(recorrerIterador.siguiente());
console.log(recorrerIterador.siguiente());