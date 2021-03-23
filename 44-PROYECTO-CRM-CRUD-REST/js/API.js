const url = 'http://localhost:4000/clientes';

// Agregar un nuevo cliente
export const nuevoCliente = async cliente => {
    try {
        await fetch(url, {
            method: 'post',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';
        
    } catch (error) {
        console.log(error);
    }
}

// Obtener todos los clientes
export const obtenerClientes = async () => {
    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        return resultado; 
    } catch (error) {
        console.log(error);
    }
}

// Eliminar un cliente
export const eliminarCliente = async id => {
    try {
        await fetch(`${url}/${id}`,{
            method: 'delete'
        });
    } catch (error) {
        console.log(error);
    }
}

// obtener un cliente
export const obtenerCliente = async id => {
    try {
        const respuesta = await fetch(`${url}/${id}`);
        const cliente = await respuesta.json();
        return cliente;
    } catch (error) {
        console.log(error);
    }
}

// editar un cliente
export const editarCliente = async cliente => {
    
    const { id } = cliente;
    
    try {
        await fetch(`${url}/${id}`, {
            method: 'put',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';

    } catch (error) {
        console.log(error);
    }
}
