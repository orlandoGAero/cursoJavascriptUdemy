const aplicarDescuento = new Promise((resolve,reject) => {
    const descuento = true;

    if(descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se aplico el descuento');
    }
})

console.log(aplicarDescuento);

aplicarDescuento
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))

// una promesa nos puede devolver tres tipos de respuesta
// - fulfilled: El promise se cumplio
// - rejected: El promise no se cumplio
// - pending: No se ha cumplido y tampoco se ha rechazado