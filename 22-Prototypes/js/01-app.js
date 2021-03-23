// objeto literal , menos dinamico
const cliente = {
    nombre: 'Juan',
    edad: 25
}

console.log(cliente);
console.log(typeof cliente);

// objeto construtor, mas dinamico
function Cliente(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

const orlando = new Cliente('Orlando',27);
const cecy = new Cliente('Cecy',27);

console.log(orlando);
console.log(cecy);

