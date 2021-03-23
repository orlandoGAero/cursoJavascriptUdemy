const autenticado = false;
const puedePagar = true;

console.log(

    autenticado ?
    
        puedePagar ?
        'Esta autenticado y puede pagar'
        :
        'Esta autenticado pero no puede pagar'
    :
    'Inicia Sesión'

);
