// Implicit Binding

const persona = {
    nombre: 'Orlando',
    edad: 27,
    informacion() {
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    },
    mascota: {
        nombre: 'Hachi',
        edad: 2,
        informacion() {
            console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
        }
    }
}

persona.informacion();

persona.mascota.informacion();