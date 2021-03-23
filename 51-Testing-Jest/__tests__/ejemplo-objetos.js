const cliente = {
    nombre: 'Orlando',
    balance: 500
}

describe('Testing a Cliente', () => {
    test('Es Premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    })
    test('Es Orlando',() => {
        expect(cliente.nombre).toBe('Orlando')
    })
    test('No es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Cecy')
    })
    test('No tiene 400', () => {
        expect(cliente.balance).not.toBe(400)
    })
})