// callback hell
const paises = [];

function nuevoPais(pais,callback) {
    paises.push(pais);
    callback();
}

function mostrarPaises() {
    console.log(paises);
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Italia', mostrarPaises);
        setTimeout(() => {
            nuevoPais('España', mostrarPaises);
            setTimeout(() => {
                nuevoPais('México', mostrarPaises);
                setTimeout(() => {
                    nuevoPais('Suiza', mostrarPaises);
                    setTimeout(() => {
                        nuevoPais('Alemania', mostrarPaises);
                        setTimeout(() => {
                            nuevoPais('Australia', mostrarPaises);
                            setTimeout(() => {
                                nuevoPais('Brasil', mostrarPaises);
                                setTimeout(() => {
                                    nuevoPais('Hungria', mostrarPaises);
                                    setTimeout(() => {
                                        nuevoPais('Monaco', mostrarPaises);
                                        setTimeout(() => {
                                            nuevoPais('Rusia', mostrarPaises);
                                            setTimeout(() => {
                                                nuevoPais('Bahrein', mostrarPaises);
                                            }, 3000);
                                        }, 3000);
                                    }, 3000);
                                }, 3000);
                            }, 3000);
                        }, 3000);
                    }, 3000);
                }, 3000);
            }, 3000);
        }, 3000);
    }, 3000);
}

iniciarCallbackHell();