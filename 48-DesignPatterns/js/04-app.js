// Factory -Crea objetos basados en diferentes condiciones

class inputHTML {
    constructor(tipo,nombre) {
        this.tipo = tipo;
        this.nombre = nombre;
    }

    crearInput() {
        return `<input type="${this.tipo}" name="${this.nombre}" id="${this.nombre}">`;
    };
}

class HTMLFactory {
    crearElemento(tipo,nombre) {
        switch (tipo) {
            case 'text':
                return new inputHTML('text',nombre);
            case 'tel':
                return new inputHTML('tel',nombre);
            case 'email':
                return new inputHTML('email',nombre);
                
        
            default:
                return;
        }
    }
}

const elemento1 = new HTMLFactory();
const input1 = elemento1.crearElemento('text','cliente-nombre');
console.log(input1.crearInput());

const elemento2 = new HTMLFactory();
const input2 = elemento2.crearElemento('tel','cliente-telefono');
console.log(input2.crearInput());

const elemento3 = new HTMLFactory();
const input3 = elemento3.crearElemento('email','cliente-email');
console.log(input3.crearInput());