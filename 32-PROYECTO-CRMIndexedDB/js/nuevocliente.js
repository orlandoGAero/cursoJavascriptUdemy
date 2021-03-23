(function() {

    const formulario = document.querySelector('#formulario');

    window.onload = function() {
        conectarDb();
        formulario.addEventListener('submit', validarCliente);
    }

    function validarCliente(e) {
        e.preventDefault();

        // leer datos del formulario
        const nombre = document.querySelector('#nombre').value.trim();
        const email = document.querySelector('#email').value.toLowerCase();
        const telefono = document.querySelector('#telefono').value.trim();
        const empresa = document.querySelector('#empresa').value.trim();

        if(nombre === '' || email === '' || telefono === '' || empresa === '') {
            imprimirAlerta('Todos los campos son obligatorios','error');
            return;
        }

        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        cliente.id = Date.now();

        crearCliente(cliente);
    }

    function crearCliente(cliente) {
        const transaction = DB.transaction(['crmPro'],'readwrite');

        const objectStore = transaction.objectStore('crmPro');

        objectStore.add(cliente);

        transaction.onerror = function(eror) {
            imprimirAlerta('Ocurrió un error','error');
        }

        transaction.oncomplete = function() {
            imprimirAlerta('El cliente se agregó correctamente');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }

        
    }

})();