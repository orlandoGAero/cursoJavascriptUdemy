// self - se refiere a la ventana global, es igual a window

self.onload = () => {
    console.log('Ventana lista');
}

self.nombre = 'Tablet';

const producto = {
    precio: 4000,
    mostrarInfo: function() {
        console.log(`Producto ${self.nombre}`);
    }    
}

producto.mostrarInfo();