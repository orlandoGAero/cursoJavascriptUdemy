let DB;
document.addEventListener('DOMContentLoaded',() => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    },5000)
});

function crmDB() {
    // crear la base de datos
    let crmDB = window.indexedDB.open('crm',1);

    // Si hay un error
    crmDB.onerror = function() {
        console.log('Ocurrió un error al crear en la base de datos');
    }

    // Si se creó bien
    crmDB.onsuccess = function() {
        console.log('Se creó correctamente la base de datos!');
        DB = crmDB.result;
    }

    // Configuración de la base de datos
    crmDB.onupgradeneeded = function (e) {
        const db = e.target.result;
        
        const objectStore = db.createObjectStore('crm',{
            keyPath: 'crm',
            autoIncrement: true
        });

        // Definir columnas
        objectStore.createIndex('nombre','nombre', {unique: false});
        objectStore.createIndex('correo','correo', {unique: true});
        objectStore.createIndex('telefono','telefono', {unique: false});

        console.log('Columnas creadas');
    }


}


function crearCliente() {
    const transaction = DB.transaction('crm','readwrite');

    transaction.oncomplete = function() {
        console.log('Transaccion completada');
    }

    transaction.onerror = function() {
        console.log('Ocurrió un error en la transaccion');
    }

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        nombre: 'Orlando',
        correo: 'orlando@orlando.gnr',
        telefono: 433423422
    }

    const peticion = objectStore.add(nuevoCliente);


    console.log(peticion);
}