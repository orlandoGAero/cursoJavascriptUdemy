// Closure

// Los closure van acompañados del scope

// Es una forma de acceder a una funcion o valor desde el exterior
/* 
Los closures son funciones que manejan funciones independientes. 
Es decir dentro de una función podemos implementar otra función.
*/

const mostrarPersona = () => {
    const nombre = 'Orlando';

    return function imprimirNombre() {
        console.log(nombre);
    }

}

const persona = mostrarPersona();

persona();

// function crearSumador(x) {
//     return function(y) {
//         return x + y;
//     }
// }

const crearSumador = x => y => x + y;

const suma3 = crearSumador(3);
const suma20 = crearSumador(20);

console.log(suma3(19));
console.log(suma20(20));