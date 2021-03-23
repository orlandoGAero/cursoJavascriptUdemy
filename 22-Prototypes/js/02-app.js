function Cliente(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

function Empresa(nombre, fundacion, categoria) {
    this.nombre = nombre;
    this.fundacion = fundacion;
    this.categoria = categoria;
}


function formatearCliente(cliente) {
    const {nombre, edad} = cliente;
    return `El cliente ${nombre} tienes ${edad} años`;
}

function formatearEmpresa(empresa) {
    const {nombre, fundacion, categoria} = empresa;
    return `La empresa ${nombre} tiene la categoria de ${categoria} y se fundo hace ${fundacion} años`;
}


const orlando = new Cliente('Orlando',27);

const fifa = new Empresa('FIFA', 100, 'Futbol');

console.log(formatearCliente(orlando));
console.log(formatearEmpresa(fifa));

