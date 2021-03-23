// variables
const form = document.querySelector('#agregar-gasto');
const listaGasto = document.querySelector('#gastos ul');
let presupuesto;

// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    form.addEventListener('submit', agregarGasto);
}


// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos,gasto];
        this.calcularRestante();
    }

    borrarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id );
        this.calcularRestante();
    }

    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad,0);
        this.restante = this.presupuesto - gastado;
    }
}

class UI {
    insertarPresupuesto(presupuestoObj) {
        const {presupuesto,restante} = presupuestoObj;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje,tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert');
        
        if(tipo === 'error')
            divMensaje.classList.add('alert-danger');
        else
            divMensaje.classList.add('alert-success');

        divMensaje.textContent = mensaje;

        document.querySelector('.primario').insertBefore(divMensaje,form);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    mostrarGastos(gastos) {

        this.limpiarHTML();

        gastos.forEach( gasto => {
            
            const {gastoNom,cantidad,id} = gasto;
            // crear un LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id;

            // agregar el html del gasto
            nuevoGasto.innerHTML = `${gastoNom} <span class="badge badge-primary badge-pill">$ ${cantidad}</span>`;

            // crear boton borrar gasto
            const botonBorrar = document.createElement('button');
            botonBorrar.classList.add('btn','btn-danger','btn-sm');
            botonBorrar.innerHTML = 'Borrar &times;';
            botonBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(botonBorrar);

            // agregar a HTML
            listaGasto.appendChild(nuevoGasto);
        });
    }

    limpiarHTML() {
        while(listaGasto.firstChild) {
            listaGasto.removeChild(listaGasto.firstChild);
        }
    }

    actualizarRestante(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj) {
        const {presupuesto,restante} = presupuestoObj;
        const restanteDiv = document.querySelector('.restante');
        
        if((presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success','alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if((presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-success','alert-danger');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger','alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        if(restante <= 0) {
            this.imprimirAlerta('Se ha agotado el presupuesto','error');
            form.querySelector('button[type="submit"]').disabled = true;
        } else {
            form.querySelector('button[type="submit"]').disabled = false;
        }
        
    }
}

// instanciar ui
const ui = new UI();

// Funciones
function preguntarPresupuesto() {

    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0) {
        window.location.reload();
    }
    
    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);

}

function agregarGasto(e) {
    e.preventDefault();

    const gastoNom = document.querySelector('#gasto').value;
    const cantidad = Number( document.querySelector('#cantidad').value );

    if(gastoNom.trim() === "" || cantidad === "") {
        ui.imprimirAlerta('Ambos campos son obligatorios','error');
        return;
    } else if(cantidad <= 0 || isNaN(cantidad)) {
        ui.imprimirAlerta('Cantidad no válida','error');
        return;
    }

    // crear objeto con gastos
    const gasto = {gastoNom,cantidad,id: Date.now()}
    
    // agregar nuevo gasto
    presupuesto.nuevoGasto(gasto);
    
    ui.imprimirAlerta('Gasto agregado correctamente');

    // imprimir gastos
    const {gastos, restante} = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    form.reset();
    
}

function eliminarGasto(id) {
    presupuesto.borrarGasto(id);
    const {gastos,restante} = presupuesto;
    ui.mostrarGastos(gastos);
    ui.actualizarRestante(restante);
    ui.comprobarPresupuesto(presupuesto);

}

