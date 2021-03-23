// Mediator- se comunica con diferentes objetos a la vez

function Vendedor(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    ofertar: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, con un precio de $${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    ofertar: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : $${cantidad}`);
    }
}

function Subasta() {
    const participantes = {};

    return {
        registrar: participante => {
            participantes[participante.nombre] = participante;
            participante.sala = this;
        },
        verParticipantes: () => {
            console.log(participantes);
        }
    }
}


const orlando = new Comprador('Orlando');
const jessica = new Comprador('Jessica');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();

subasta.registrar(orlando);
subasta.registrar(jessica);
subasta.registrar(vendedor);

subasta.verParticipantes();

vendedor.ofertar('Ferrari Testarosa', 500);

orlando.ofertar(550,orlando);
jessica.ofertar(600,jessica);
orlando.ofertar(650,orlando);
jessica.ofertar(700,jessica);

vendedor.vendido('Orlando');