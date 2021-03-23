(function() {
    const listadoClientes = document.querySelector('#listado-clientes');

    window.onload = function() {
        crearDB();

        if(window.indexedDB.open('crmPro',1)) {
            obtenerClientes();
        }

        listadoClientes.addEventListener('click', eliminarCliente);
    }

    function eliminarCliente(e) {
        if(e.target.classList.contains('eliminar')) {

            const idCliente = Number(e.target.dataset.cliente);

            const confirmar = confirm('Deseas eliminar el cliente?');
            
            if(confirmar) {
                const transaction = DB.transaction(['crmPro'],'readwrite');
                const objectStore = transaction.objectStore('crmPro');

                objectStore.delete(idCliente);

                transaction.onerror = function() {
                    console.log('Ocurrio un error, al intentar eliminar el cliente', 'error');
                }

                transaction.oncomplete = function() {
                    console.log('Cliente eliminado correctamente');

                    e.target.parentElement.parentElement.remove();
                }

            }
        }
    }

    function crearDB() {
        const crmDb = window.indexedDB.open('crmPro',1);
        
        crmDb.onsuccess = function() {
            DB = crmDb.result;
        }

        crmDb.onerror = function() {
            console.log('Ocurrio un error');
        }

        crmDb.onupgradeneeded = function(e) {
            const db = e.target.result;

            const objectStore = db.createObjectStore('crmPro', { keyPath: 'id', autoIncrement: true});

            objectStore.createIndex('nombre', 'nombre', {unique: false });
            objectStore.createIndex('email', 'email', {unique: true });
            objectStore.createIndex('telefono', 'telefono', {unique: false });
            objectStore.createIndex('empresa', 'empresa', {unique: false });
            objectStore.createIndex('id', 'id', {unique: true });

            console.log('Columnas creadas');
        }

    }

    function obtenerClientes() {
        const abrirConexion = window.indexedDB.open('crmPro',1);

        abrirConexion.onerror = function() {
            console.log('Ocurrio un error');
        }

        abrirConexion.onsuccess = function(e) {

            DB = abrirConexion.result;

            const objectStore = DB.transaction(['crmPro'],'readonly').objectStore('crmPro');
            
            objectStore.openCursor().onsuccess = function(e) {
                const cursor = e.target.result;
                
                if(cursor) {
                    const { id, nombre, email, telefono, empresa  } = cursor.value;

                    const tr = document.createElement('tr');

                    const tdNombre = document.createElement('td');
                    tdNombre.className = 'px-6 py-4 whitespace-no-wrap border-b border-gray-200';
                    
                    const pNombre = document.createElement('p');
                    pNombre.className = 'text-sm leading-5 font-medium text-gray-700 text-lg  font-bold';
                    pNombre.textContent = nombre;
                    
                    const pEmail = document.createElement('p');
                    pEmail.className = 'text-sm leading-10 text-gray-700';
                    pEmail.textContent = email;
                    
                    tdNombre.appendChild(pNombre);
                    tdNombre.appendChild(pEmail);

                    const tdTel = document.createElement('td');
                    tdTel.className = 'px-6 py-4 whitespace-no-wrap border-b border-gray-200';

                    const pTel = document.createElement('p');
                    pTel.className = 'text-gray-700';
                    pTel.textContent = telefono;

                    tdTel.appendChild(pTel);

                    const tdEmpresa = document.createElement('td');
                    tdEmpresa.className = 'px-6 py-4 whitespace-no-wrap border-b border-gray-200';

                    const pEmpresa = document.createElement('p');
                    pEmpresa.className = 'text-gray-600';
                    pEmpresa.textContent = empresa;

                    tdEmpresa.appendChild(pEmpresa);

                    const tdBotones = document.createElement('td');
                    tdBotones.className = 'px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5';

                    const btnEditar = document.createElement('a');
                    btnEditar.classList.add('text-teal-600', 'hover:text-teal-900', 'mr-5');
                    btnEditar.textContent = 'Editar';
                    btnEditar.href = `editar-cliente.html?id=${id}`;

                    const btnEliminar = document.createElement('a');
                    btnEliminar.classList.add('text-red-600', 'hover:text-red-900', 'mr-5', 'eliminar');
                    btnEliminar.textContent = 'Eliminar';
                    btnEliminar.href = '#';
                    btnEliminar.dataset.cliente = id;

                    tdBotones.appendChild(btnEditar);
                    tdBotones.appendChild(btnEliminar);

                    tr.appendChild(tdNombre);
                    tr.appendChild(tdTel);
                    tr.appendChild(tdEmpresa);
                    tr.appendChild(tdBotones);

                    listadoClientes.appendChild(tr);

                    // Ir al siguiente elemento
                    cursor.continue();
                } else {
                    console.log('No hay más registros');
                }
            
            }
        }
    }
})();
