// Namespace

const restauranteApp = {};

restauranteApp.platillos = [
    {
        nombre: 'Pizza',
        precio: 30
    },
    {
        nombre: 'Hamburguesa',
        precio: 20
    },
    {
        nombre: 'Hot Dog',
        precio: 20
    },
];

restauranteApp.funciones = {
    mostrarMenu: platillos => {
        console.log('Bienvenidos al restaurante');

        platillos.forEach((platillo, index) => {
            console.log(`${index}: ${platillo.nombre} $${platillo.precio}`);
        });
    },
    ordenar: id => {
        console.log(`Tu platillo: ${restauranteApp.platillos[id].nombre} se esta preparando`);
    },
    agregarPlatillo: (nombre, precio) => {
        const nuevo = {
            nombre,
            precio
        }

        restauranteApp.platillos.push(nuevo);
    }
}

const {platillos} = restauranteApp;

restauranteApp.funciones.agregarPlatillo('Taco',15);
restauranteApp.funciones.agregarPlatillo('Torta',25);

restauranteApp.funciones.mostrarMenu(platillos);
restauranteApp.funciones.ordenar(2);