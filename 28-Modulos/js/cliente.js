export const nombreCliente = 'Liz';
export const ahorro = 500;

// exportar funcion
export function mostrarInformacion() {
    return `Cliente: ${nombreCliente} - Ahorro: ${ahorro}`;
}

export function tieneAhorro() {
    if(ahorro > 0) {
        console.log('Si tiene ahorro');
    } else {
        console.log('No tiene ningún ahorro');
    }
}

export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    }
}

export default function nuevaFuncion() {
    console.log('Desde un export default');
}
    