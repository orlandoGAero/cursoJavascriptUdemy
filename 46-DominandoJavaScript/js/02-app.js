// Hoisting

mostrarNombre('Ronaldo');
function mostrarNombre(nombre) {
    console.log(`El nombre es ${nombre}`);
}

const mostrarOtroNombre = nombre => console.log(`El nombre es ${nombre}`);
mostrarOtroNombre('Orlando');