function sumar(a ,b) {
    return a + b;
}

function restar(a ,b) {
    return a - b;
}

let resultado = sumar(1,2);
let esperado = 3;

expected(esperado).toBe(resultado);

resultado = restar(10,5);
esperado = 5;

expected(esperado).toBe(resultado);
expected(esperado).toEqual(resultado);


function expected(esperado) {
    return {
        toBe(resultado) {
            if(resultado !== esperado){
                console.error(`El ${resultado} es diferente a lo esperado, la prueba no paso`);
            } else {
                console.log('La prueba paso correctamente');
            }
        },
        toEqual(resultado) {
            if(resultado !== esperado){
                console.error(`El ${resultado} no es igual a lo esperado, la prueba no paso`);
            } else {
                console.log('La prueba paso correctamente');
            }
        }
    }
}