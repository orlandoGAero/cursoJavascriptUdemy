const busqueda = document.querySelector('.busqueda');

// keydown - mientras escribes
busqueda.addEventListener('keydown', () => {
    console.log('escribiendo... keydown');
});
/*
// keyup - dejando de escribir
busqueda.addEventListener('keyup', () => {
    console.log('dejando de escribir... keyup');
});

// blur - al salir del input
busqueda.addEventListener('blur', () => {
    console.log('saliendo del input... blur');
});

// copy - al copiar dentro del input
busqueda.addEventListener('copy', () => {
    console.log('copiando');
});

// paste - al pegar dentro del input
busqueda.addEventListener('paste', () => {
    console.log('pegando');
});

// cut - al cortar dentro del input
busqueda.addEventListener('cut', () => {
    console.log('cortando');
});

*/
// input - todos los eventos excepto blur
busqueda.addEventListener('input', (e) => {
    console.log('estoy escribiendo... input');
    if(e.target.value === '') {
        console.log('escribe algo');
        
    }
});