import nuevaFuncion,{ nombreCliente, ahorro, mostrarInformacion, tieneAhorro, Cliente } from './cliente.js';
import { Empresa } from './empresa.js';

nuevaFuncion();
console.log(nombreCliente);
console.log(ahorro);
console.log(mostrarInformacion());

tieneAhorro();

const cliente = new Cliente(nombreCliente,ahorro);

console.log(cliente);
console.log(cliente.mostrarInformacion());

const empresa = new Empresa('EspaceCode',30000,'tecnología');

console.log(empresa);
console.log(empresa.mostrarInformacion());


