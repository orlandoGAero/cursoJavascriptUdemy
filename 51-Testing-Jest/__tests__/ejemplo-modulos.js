import { suma } from '../js/funciones.js'

describe('Test a funcion suma', () => {
    test('Suma de 20 y 10 es 30', () => {
        expect( suma(20,10) ).toBe(30)
    })
});