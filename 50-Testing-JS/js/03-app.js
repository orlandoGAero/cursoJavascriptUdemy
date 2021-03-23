function sumar(a ,b) {
    return a + b;
}

async function sumarAsync(a, b) {
    return Promise.resolve(sumar(a,b));
}

test('Suma 10 + 20 y el resultaldo debe ser 20', async () => {
    const resultado = await sumarAsync(10,20);
    const esperado = 230;
    expected(esperado).toBe(resultado);
});

async function test(mensaje, callback) {
    try {
        await callback();
        console.log(`El test ${mensaje} se ejecutó correctamente`);
    } catch (error) {
        console.error('Error:');
        console.error(error);
    }
}

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