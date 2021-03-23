// Composition

const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
})

const guardarEmail = info => ({
    agregarEmail(email) {
        console.log(`Guardando email en ${info.nombre}`);
        info.email = email;
    }
});

const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(`Email: ${info.email}`);
    }
})

const obtenerEmpresa = info => ({
    mostrarEmpresa() {
        console.log(`Empresa: ${info.empresa}`);
    }
})

const obtenerPuesto = info => ({
    mostrarPuesto() {
        console.log(`Puesto: ${info.puesto}`);
    }
})

function Cliente(nombre, email, empresa) {
    const info = {
        nombre,
        email,
        empresa
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    );
}

function Empleado(nombre, email, puesto) {
    const info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    );
}

const cliente = Cliente('Orlando', null, 'OGnr');

cliente.mostrarNombre();
cliente.agregarEmail('cliente@cliente.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

const empleado = Empleado('Natalia', null, 'Desarrollador web');

console.log("==========================");
empleado.mostrarNombre();
empleado.agregarEmail('empleado@empleado.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();
