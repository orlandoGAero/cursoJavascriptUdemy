/*
Map: listas ordenadas en llave - valor
*/

const cliente = new Map();

cliente.set('nombre', 'Orlando');
cliente.set('tipo','Premium');
cliente.set('saldo',5000);

// obtener tamaño
console.log(cliente.size);

// verificar si existe
console.log(cliente.has('nombre'));

// eliminar elemento
cliente.delete('saldo');

// eliminar todos los elementos
// cliente.clear();

// obtener un valor
console.log(cliente.get('nombre'));

console.log(cliente);

const pacientes = new Map([['nombre','anonimo'],['cuarto',8]]);

// agregar nuevo elemento
pacientes.set('dr','Dr Lalo');
// sobrescribe si ya existe
pacientes.set('nombre','Luis');

console.log(pacientes);

// iterar map
pacientes.forEach((paciente,index) => console.log(index,paciente));