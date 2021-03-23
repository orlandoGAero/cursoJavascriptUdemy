// Singleton
// previene que se puedan crear multiples instancias

let instancia = null;

class Persona {
    constructor(nombre,email) {
        if(!instancia) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

const persona = new Persona('Orlando','orlando@orlando.gnr');
console.log(persona);

const persona2 = new Persona('Maria','maria@maria.gnr');
console.log(persona2);