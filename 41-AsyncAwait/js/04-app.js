function descargarClientes() {
    return new Promise( resolve => {
        console.log('Descargando Clientes...');

        setTimeout(() => {
            resolve('Clientes descargados');
        }, 5000);
        
    });
}

function descargarPedidos() {
    return new Promise( resolve => {
        console.log('Descargando Pedidos...');

        setTimeout(() => {
            resolve('Pedidos descargados');
        }, 5000);

    });
}


async function app() {
    try {
        const respuesta = await Promise.all([descargarClientes(),descargarPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);

    } catch (error) {
        console.log(error);
    }
}

app();