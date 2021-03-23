// Funciones que retornan una funcion

const obtenerCliente  = () => () => console.log('Orlando');

const fn = obtenerCliente();

fn();