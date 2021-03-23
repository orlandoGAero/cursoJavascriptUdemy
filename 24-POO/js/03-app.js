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

class Empresa extends Cliente {
    constructor(nombre,saldo,telefono,categoria) {
        super(nombre,saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() { // sobrescribe metodo
        return 'Bienvenido al cajero de empresa';
    }
}

const cecy = new Cliente('Ceci', 2343);
const empresa = new Empresa('Orce', 40000,3297297232,'Tecnologia');
console.log(empresa);
console.log(empresa.mostrarInformacion());

console.log(Empresa.bienvenida());
console.log(Cliente.bienvenida());
