import Citas from '../js/classes/Citas';

describe('Testing a citas', () => {

    const citas = new Citas();

    const id = Date.now();

    test('Agregar cita', () => {
        const citaObj = {
            id,
            mascota: 'Hachi',
            propietario: 'Orlando',
            telefono: '7224514568',
            fecha: '10-03-2021',
            hora:'18:00',
            sintomas: 'no bebe'
        }

        citas.agregarCita(citaObj);

        // prueba
        expect(citas).toMatchSnapshot();
    });

    test('Editar Cita', () => {
        const citaObj = {
            id,
            mascota: 'Rabito',
            propietario: 'Irving',
            telefono: '7224514568',
            fecha: '10-03-2021',
            hora:'18:00',
            sintomas: 'no corre'
        }

        citas.editarCita(citaObj);

        expect(citas).toMatchSnapshot();
    });

    test('Eliminar cita', () => {
        citas.eliminarCita(id);

        expect(citas).toMatchSnapshot();
    })
})