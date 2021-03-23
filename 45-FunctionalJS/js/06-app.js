
/* Pure Function o funciones puras
caracteristicas: 
- retornan un dato pero no modican lo valores de las variables
- si toma una entrada debe retornar una salida
*/

const numero = 20;
const duplicar = num => num * 2;

const resultado = duplicar(numero);

console.log(resultado);
console.log(numero);