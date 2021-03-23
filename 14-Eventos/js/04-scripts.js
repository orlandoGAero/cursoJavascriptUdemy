const form = document.querySelector('#formulario');

form.addEventListener('submit', validarForm);

function validarForm(e) {
    e.preventDefault();
    console.log('buscando en la api');
    console.log(e.target.action);
    
    
}