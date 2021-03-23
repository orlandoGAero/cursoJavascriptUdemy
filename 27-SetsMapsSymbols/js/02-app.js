/* 
    WeakSet
    diferencias con set:
    solo acepta objetos
    no es iterable
    no tiene size
*/

const weakset = new WeakSet();

const cliente = {
    nombre: 'Orlando',
    saldo: 100,
    edad: 27
}

weakset.add(cliente);

console.log(weakset.has(cliente));

console.log(weakset);
