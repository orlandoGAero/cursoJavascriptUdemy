const descargarClientes = () => new Promise( (resolve,reject) => {
    const error = false;

    setTimeout(() => {
        
        if(!error)
            resolve('Lista de clientes descargada');
        else
            reject('Error de conexion');

    }, 4000);
});


// async -await
// await: detiene la ejecucion hasta que se resuelva la promesa
const ejecutar = async () => {
    try {
        console.log(10+10);
        const respuesta = await descargarClientes();
        console.log(respuesta);
        console.log(5 + 5);
    } catch (error) {
        console.log(error);
    }
}

ejecutar();