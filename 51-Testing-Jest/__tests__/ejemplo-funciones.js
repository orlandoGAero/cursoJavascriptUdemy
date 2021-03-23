function suma(a,b) {
    return a + b;
}

function resta(a,b) {
    return a - b;
}

describe('Testing a funciones de suma y resta', () => {
    test('Suma de 30 y 20, es 50', () => {
        expect( suma(30,20) ).toBe(50);
    })
    test('Resta de 10 y 5, es 5', () => {
        expect( resta(10,5) ).toBe(5)
    })
    test('Que la suma 10 y 10, no sea 10',() => {
        expect( suma(10,10) ).not.toBe(10)
    })
    test('Que la resta 10 y 5, no sea 10',() => {
        expect( resta(10,5) ).not.toBe(10)
    })
})