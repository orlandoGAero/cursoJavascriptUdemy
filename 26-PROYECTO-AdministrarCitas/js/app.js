// Variables del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// variables ui
const form = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando = false;

const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: '',
}

// clases
class Citas {
    constructor() {
        this.citas = [];
    }

    crearCita(cita) {
        this.citas = [...this.citas,cita];
        this.sincronizarStorage();
    }

    eliminarCita(id) {
        this.citas = this.citas.filter( cita => cita.id !== id);
        this.sincronizarStorage();
    }

    editarCita(citaActualizada) {
        this.citas = this.citas.map( cita => cita.id === citaActualizada.id ? citaActualizada : cita);
        this.sincronizarStorage();
    }

    sincronizarStorage() {
        localStorage.setItem('citas',JSON.stringify(this.citas));
    }

}

class UI {
    imprimirAlerta(mensaje, tipo) {
        // crear div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center','alert','d-block','col-12');
        
        if(tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        // mensaje de error
        divMensaje.textContent = mensaje;

        // agregar al dom
        document.querySelector('#contenido').insertBefore(divMensaje,document.querySelector('.agregar-cita'));

        // quitar mensaje despues de 5s
        setTimeout(() => {
            divMensaje.remove();
        }, 5000);
    }

    imprimirCitas({citas}) {
        
        this.limpiarHTML();
        
        citas.forEach( cita => {
            const {mascota,propietario,telefono,fecha,hora,sintomas,id} = cita;
            
            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-2');
            divCita.dataset.id = id;

            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title','font-weight-bold');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span>${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Teléfono: </span>${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span>${fecha}
            `;

            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora: </span>${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Síntomas: </span>${sintomas}
            `;

            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn','btn-danger','mr-2');
            btnEliminar.innerHTML = 'Eliminar <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
            btnEliminar.onclick = () => eliminarCita(id);

            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn','btn-info');
            btnEditar.innerHTML = 'Editar <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>';
            btnEditar.onclick = () => cargarDatos(cita);

            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            contenedorCitas.appendChild(divCita);
        });
    }

    limpiarHTML() {
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }
}

// instanciar clases
const ui = new UI();

const administrarCitas = new Citas();

eventos();
function eventos() {
    mascotaInput.addEventListener('blur', datosCita);
    propietarioInput.addEventListener('blur', datosCita);
    telefonoInput.addEventListener('blur', datosCita);
    fechaInput.addEventListener('blur', datosCita);
    horaInput.addEventListener('blur', datosCita);
    sintomasInput.addEventListener('blur', datosCita);

    form.addEventListener('submit', agregarCita);

    document.addEventListener('DOMContentLoaded', () => {
        if(localStorage.getItem('citas')) {
            administrarCitas.citas = JSON.parse( localStorage.getItem('citas') );
            ui.imprimirCitas(administrarCitas);
        } else {
            ui.imprimirAlerta('No hay citas aún','error');
        }
    });
}

// funciones
function datosCita(e) {
    citaObj[e.target.name] = e.target.value.trim();
}

// Valida y agrega una nueva cita a la clase citas
function agregarCita(e) {

    e.preventDefault();
    // extraer la información del objeto de citas
    const {mascota,propietario,telefono,fecha,hora,sintomas} = citaObj;

    // validar
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === '') {
        ui.imprimirAlerta('Todos los campos son obligatorios','error');
        return;
    }

    if(editando) {
        // imprimir mensaje de agregado
        ui.imprimirAlerta('La cita se editó correctamente');
        
        // pasar el objeto de la cita a ediccion
        administrarCitas.editarCita({...citaObj});

        // regresar el botón a su estado original
        form.querySelector('button[type="submit"]').textContent = 'Crear cita';

        // quitar modo edición
        editando = false;
    } else {
        // crear id único
        citaObj.id = Date.now();

        // agregando una nueva cita
        administrarCitas.crearCita({...citaObj});

        // imprimir mensaje de agregado
        ui.imprimirAlerta('La cita se agregó correctamente');
    }

    
    
    // reiniciar objeto de validación
    reiniciarObjeto();

    // reiniciar formulario
    form.reset();

    // mostrar html de las citas
    ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto() {
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.sintomas = '';
}

function eliminarCita(id) {
    // eliminar la cita
    administrarCitas.eliminarCita(id);
    // mostrar mensaje
    ui.imprimirAlerta('La cita se eliminó correctamente');
    // mostrar html de citas
    ui.imprimirCitas(administrarCitas);
}

function cargarDatos(cita) {
    const {mascota,propietario,telefono,fecha,hora,sintomas,id} = cita;

    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    editando = true;

    form.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';
}

