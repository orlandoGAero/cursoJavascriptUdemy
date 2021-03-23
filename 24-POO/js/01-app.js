// class declaration
class Cliente {
    constructor(nombre,saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es ${this.saldo}`;
    }

    static bienvenida() {
        return 'Bienvenido al cajero';
    }
}

const orlando = new Cliente('Orlando',5000);

// los metodos estaticos se deben llamar sin ser instanciados
console.log(Cliente.bienvenida());
console.log(orlando);
console.log(orlando.mostrarInformacion());

// class expresion
const Cliente2 = class {
    constructor(nombre,saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const cecy = new Cliente('Cecy',4000);
console.log(cecy);



