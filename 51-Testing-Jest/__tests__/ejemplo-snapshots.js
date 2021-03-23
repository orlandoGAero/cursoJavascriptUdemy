const cliente = {
    nombre: 'Sinai',
    balance: 500,
    tipo: 'Premium'
}

describe('Testing al cliente', () => {
    test('Es Orlando', () => {
        expect(cliente).toMatchSnapshot();
    })
})