const password = "123456";

describe('Valida que el password tenga seis caracteres y no este vacio', () => {

    test('El password tiene 6 caracteres', () => {
        expect(password).toHaveLength(6);
    });

    test('El password no esta vacio', () => {
        expect(password).not.toHaveLength(0);
    });

});