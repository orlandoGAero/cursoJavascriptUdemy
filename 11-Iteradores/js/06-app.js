// forEach y map

const equipos = [
    {nombre:'Manchester United',pais:'Inglaterra'},
    {nombre:'Liverpool',pais:'Inglaterra'},
    {nombre:'Real Madrid',pais:'España'},
    {nombre:'Juventus',pais:'Italia'},
];


const array1 = equipos.forEach( equipo => `${equipo.nombre}`);

const array2 = equipos.map( equipo => `Nombre: ${equipo.nombre}`);

console.log(array1);
console.log(array2);
