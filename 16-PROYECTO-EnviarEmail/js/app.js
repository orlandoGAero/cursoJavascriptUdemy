// variables
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const form = document.querySelector('#enviar-mail');

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

eventListeners();

//funciones
function eventListeners() {
    // cuando arranca la app
    document.addEventListener('DOMContentLoaded', iniciarApp);
    
    email.addEventListener('blur', validarForm);
    asunto.addEventListener('blur', validarForm);
    mensaje.addEventListener('blur', validarForm);

    // resetear formulario
    btnReset.addEventListener('click', resetearForm);

    // submit a formulario
    form.addEventListener('submit', enviarEmail);
}

function iniciarApp(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

function validarForm(e) {
    const tipo = e.target.type;

    if(e.target.value.length > 0) {
        isValid(e);
    } else {
        notValid(e);
        mostrarError('Ingresa todos los datos');
    }

    if(tipo === 'email') {

        if (er.test( e.target.value )) {
            isValid(e);            
        } else {
            notValid(e);
            mostrarError('Email no valido');
            
        }
        
    }

    if(er.test( email.value ) && asunto.value !== "" && mensaje.value !== "") {
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50');
    } else {
        iniciarApp();
    }
    
}

function mostrarError(msj) {
    
    const msjError = document.createElement('p');
    msjError.textContent = msj;
    msjError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    
    if (errores.length === 0) {
        form.appendChild(msjError);
    }
    
}

function enviarEmail(e) {

    e.preventDefault();

    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'flex';

    setTimeout(() => {
        spinner.style.display = 'none';

        const p = document.createElement('p');
        p.textContent = 'Mensaje enviado correctamente';
        p.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

        form.insertBefore(p,spinner);

        resetearForm();

        setTimeout(() => {
            p.remove();
        }, 5000)

    }, 3000);
    
}

function resetearForm() {
    form.reset();
    removerError();
    removerClases();
    iniciarApp();
}

function isValid(e) {
    removerError();

    e.target.classList.remove('border','border-red-500');
    e.target.classList.add('border','border-green-500');
}

function notValid(e) {
    e.target.classList.remove('border','border-green-500');
    e.target.classList.add('border','border-red-500');
}

function removerError() {
    const error = document.querySelector('p.error');
        
    if (error)
        error.remove();
}

function removerClases() {
    const elementos = [email,asunto,mensaje];
    
    elementos.forEach( elem => {
        elem.classList.remove('border-red-500','border-green-500');
    });
}