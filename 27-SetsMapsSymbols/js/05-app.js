/* Symbol
    - no hay symbol no son iguales nunca
    - no son iterables
*/

// como se crean
const sym1 = Symbol();
const sym2 = Symbol();

// console.log(sym1 === sym2);
// definiendo una descripción del symbol
const nombre = Symbol('nombre');
const apellido = Symbol();

console.log(nombre);

const persona = {}
// agregar nombre y appellido como llaves del objeto
persona[nombre] = 'Orlando';
persona[apellido] = 'Reyes';
persona.tipo = 'Premium';
persona.saldo = 500;

console.log(persona);

console.log(persona.nombre);
// Para acceder a una propiedad como symbol
console.log(persona[nombre]);

// Las propiedades que utilizan un symbol no son iterables
for(let i in persona) {
    console.log(i);
}