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

// Heredar atributos de otro prototype
function Persona(nombre,saldo,telefono) {
    Cliente.call(this,nombre,saldo);
    this.telefono = telefono;
}

// Heredar metodos de otro prototype
Persona.prototype = Object.create(Cliente.prototype);

Persona.prototype.constructor = Cliente;

Persona.prototype.mostrarTelefono = function() {
    return `El telefono de esta persona es ${this.telefono}`;
}
// instanciar
const ceci = new Persona('Ceci',2324,543643633);

console.log(ceci);
console.log(ceci.mostrarInfornacion());
console.log(ceci.mostrarTelefono());

