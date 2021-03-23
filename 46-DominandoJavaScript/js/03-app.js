// Coersion - conversión automatica ya sea implicita o explicita de tipo de dato a otro

// implicita: sin especificar
// explicita: se especifica

const num1 = 20;
const num2 = "30";

console.log(num1 + num2); // implicita

console.log(Number(num2)); // explicita

console.log(num1.toString()); // explicita


const numeros = [1,2,3,4,5,6];

// explicita
console.log(numeros.toString());
console.log(JSON.stringify(numeros));