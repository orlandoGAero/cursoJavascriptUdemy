// funciones como argumentos

const sumar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;

const sumarOMultiplicar = fn => fn(10,20);

console.log( sumarOMultiplicar( sumar ) );
console.log( sumarOMultiplicar( multiplicar ) );