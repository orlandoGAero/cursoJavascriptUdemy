import { 
    formulario,
    mascotaInput,
    propietarioInput,
    telefonoInput,
    fechaInput,
    horaInput,
    sintomasInput
} from '../selectores.js';
import { datosCita, nuevaCita, leerStorage } from '../funciones.js';

class App {
    constructor() {
        this.iniciar();
    }

    iniciar() {
        mascotaInput.addEventListener('change', datosCita);
        propietarioInput.addEventListener('change', datosCita);
        telefonoInput.addEventListener('change', datosCita);
        fechaInput.addEventListener('change', datosCita);
        horaInput.addEventListener('change', datosCita);
        sintomasInput.addEventListener('change', datosCita);
        formulario.addEventListener('submit', nuevaCita);
        document.addEventListener('DOMContentLoaded', leerStorage);
    }
}

export default App;