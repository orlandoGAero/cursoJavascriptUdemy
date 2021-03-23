/*
    Currying y partial

    Es dividir una funcion que toma mas de un parametro en argumentos de forma parcial 
*/

const suma = (a,b,c) => a + b + c;

const partial = a => b => c => suma(a,b,c);

// const primerNum = partial(5);
// const segundoNum = primerNum(5);
// const res = segundoNum(5);

const res = partial(5)(5)(2);

console.log(res);