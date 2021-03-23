// Explicit binding

function persona(e1,e2) {
    console.log(`Hola, soy ${this.nombre} y escucho ${e1} y ${e2}`);
}

const informacion = {
    nombre: 'Orlando'
}

const musica = ['House','Rock'];

/*
call() - existe en todas las funciones, incluso en las que se crean
y recibe todo de forma individual
*/
persona.call(informacion, musica[0], musica[1]);

/*
apply() - existe en todas las funciones, incluso en las que se crean
y recibe puede recibir un array
*/
persona.apply(informacion, musica);

/*
bind() - existe en todas las funciones, incluso en las que se crean
y es parecida a call() con la diferencia que se crea una nueva funcion
*/

const nuevaFn = persona.bind(informacion, musica[0], musica[1]);
nuevaFn();
