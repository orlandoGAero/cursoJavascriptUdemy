
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// crear prototype
Cliente.prototype.obtenerTipoCliente = function() {
    
    let tipo;

    if(this.saldo > 10000) {
        tipo = 'Gold';
    } else if(this.saldo > 5000 ){
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    
    return tipo;
}

Cliente.prototype.mostrarInfornacion = function() {
    return `El cliente ${this.nombre} tiene un saldo de $${this.saldo} y es tipo ${this.obtenerTipoCliente()}`;
}

Cliente.prototype.retirarDinero = function(cantidad) {
    this.saldo -= cantidad;
}

// instanciar
const orlando = new Cliente('Orlando',7000);

console.log(orlando);
console.log( 
    orlando.obtenerTipoCliente()
);

console.log(orlando.mostrarInfornacion());
orlando.retirarDinero(2000);
console.log(orlando.mostrarInfornacion());


