const nav = document.querySelector('.navegacion');


// click
nav.addEventListener('click', () => {
    console.log('haciendo click a nav');
    
});

// mousenter - entrar
nav.addEventListener('mouseenter', () => {
    console.log('Entrando al nav');
    nav.style.backgroundColor = 'blue';
});

// mouseout - saliendo
nav.addEventListener('mouseout', () => {
    console.log('Saliendo del nav');
    nav.style.backgroundColor = 'transparent';
});

// mousedown  - similar al click
nav.addEventListener('mousedown', () => {
    console.log('haciendo click con un mousedown');
    
});

// mouseup - cuando sueltas el mouse
nav.addEventListener('mouseup', () => {
    console.log('Soltando el mouse');
    nav.style.backgroundColor = 'red';
    
});

// dblclick - doble click
nav.addEventListener('dblclick', () => {
    console.log('haciendo doble click');
    nav.style.backgroundColor = 'orange';
    
})

