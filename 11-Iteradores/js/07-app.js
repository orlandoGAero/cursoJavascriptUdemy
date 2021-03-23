// for of - itera sobre arrays
const autos = ['Ferrari','Aston Martin','BMW','Volkswagen'];

const equipos = [
    {nombre:'Manchester United',pais:'Inglaterra'},
    {nombre:'Liverpool',pais:'Inglaterra'},
    {nombre:'Real Madrid',pais:'España'},
    {nombre:'Juventus',pais:'Italia'},
];

for(let auto of autos) {
    console.log(auto);
}

for(let equipo of equipos) {
    console.log(equipo.nombre);
}