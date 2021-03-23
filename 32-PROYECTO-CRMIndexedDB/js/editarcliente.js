(function() {
    let idCliente;
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');

    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {

        formulario.addEventListener('submit', actualizarCliente);

        conectarDb();
        // Leer id
        const parametros = new URLSearchParams(window.location.search);

        idCliente = parametros.get('id');
        
        if(idCliente) {
            setTimeout(() => {
                obtenerCliente(idCliente);
            }, 100);
        }
    });

    function actualizarCliente(e) {
        e.preventDefault();

        if(nombreInput.value.trim() === '' || emailInput.value === '' || telefonoInput.value.trim() === '' || empresaInput.value.trim() === '') {
            imprimirAlerta('Todos los datos son obligatorios','error');
            return;
        }

        const clienteActualizado = {
            nombre: nombreInput.value.trim(),
            email: emailInput.value.toLowerCase(),
            telefono: telefonoInput.value.trim(),
            empresa: empresaInput.value.trim(),
            id: Number(idCliente)
        }

        const transaction = DB.transaction(['crmPro'],'readwrite');

        const objectStore = transaction.objectStore('crmPro');

        objectStore.put(clienteActualizado);

        transaction.onerror = function() {
            imprimirAlerta('Ocurrió un error','error');
        }

        transaction.oncomplete = function() {
            imprimirAlerta('El cliente se actualizó correctamente');

            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        }
    }

    function obtenerCliente(id) {
        const transaction = DB.transaction(['crmPro'],'readonly');
        const objectStore = transaction.objectStore('crmPro');
    
        const cliente = objectStore.openCursor();

        cliente.onsuccess = function(e) {
            const cursor = e.target.result;

            if(cursor) {

                if(cursor.value.id === Number(id)) {
                    llenarInformacion(cursor.value);
                }

                cursor.continue();
            }
        }

    }

    function llenarInformacion(datosCliente) {
        const { nombre, email, telefono, empresa } = datosCliente;

        nombreInput.value = nombre
        emailInput.value = email
        telefonoInput.value = telefono
        empresaInput.value = empresa
    }

})();