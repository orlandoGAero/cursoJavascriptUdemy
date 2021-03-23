const paises = [];

function mostrarPaises() {
    console.log(paises);
}

const nuevoPais = pais => new Promise( resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve(`Agregado: ${pais}`);
    }, 3000);
} );

nuevoPais('Italia')
    .then(res => {
        console.log(res);
        mostrarPaises();
        return nuevoPais('México');
    })
    .then( res => {
        console.log(res);
        mostrarPaises();
        return nuevoPais('Alemania');
    })
    .then( res => {
        console.log(res);
        mostrarPaises();
        return nuevoPais('Francia');
    })
    .then( res => {
        console.log(res);
        mostrarPaises();
        return nuevoPais('Suiza');
    })
    .then( res => {
        console.log(res);
        mostrarPaises();
        return nuevoPais('Nueva Zelanda');
    })
    .then( res => {
        console.log(res);
        mostrarPaises();
        return nuevoPais('Inglaterra');
    })
    .then( res => {
        console.log(res);
        mostrarPaises();
    })
