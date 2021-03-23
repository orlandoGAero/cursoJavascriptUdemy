// Scope -donde esta disponible una variable

const cliente = 'Yessi';

function mostrarCliente() {

    const cliente = 'Orlando';

    if(true) {
        const cliente = 'Fatima';
        console.log(cliente);
    }

}

mostrarCliente();

