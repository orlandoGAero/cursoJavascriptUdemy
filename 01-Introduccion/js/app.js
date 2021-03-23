const nombre = prompt('¿Cual es tu nombre?');
if(nombre != null)
    document.querySelector('.contenido').innerHTML = `${nombre} Esta aprendiendo javascript moderno`;