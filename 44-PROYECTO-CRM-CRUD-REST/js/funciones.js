export function mostrarAlerta(msj) {
    const existeAlerta = document.querySelector('.alerta');

    if(!existeAlerta) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('bg-red-100','border-red-400','text-red-700','px-4','py-3','rounded','max-w-lg','mx-auto','mt-6','text-center','alerta');
        divMensaje.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${msj}</span>
        `;

        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

export const validar = (obj) => !Object.values(obj).every( input => input.trim() !== '' );
