// mas iteradores
const ciudades = ['Londres','Paris','México','Madrid'];
const ordenes = new Set([1313234,343242,545,3535]) ;
const persona = new Map();

persona.set('nombre','Orlando');
persona.set('profesión','Desarrollador Web');

console.log('---------------  Entries  ----------------');
// Entries Iterator : lave - valor
for(let entry of ciudades.entries()) {
    console.log(entry);
}

for(let entry of ordenes.entries()) {
    console.log(entry);
}

for(let entry of persona.entries()) {
    console.log(entry);
}

console.log('---------------  Values  ----------------');
for(let value of ciudades.values()) {
    console.log(value);
}

for(let value of ordenes.values()) {
    console.log(value);
}

for(let value of persona.values()) {
    console.log(value);
}

console.log('---------------  Keys  ----------------');
for(let key of ciudades.keys()) {
    console.log(key);
}

for(let key of ordenes.keys()) {
    console.log(key);
}

for(let key of persona.keys()) {
    console.log(key);
}

console.log('---------------  Default  ----------------');
for(let ciudad of ciudades) {
    console.log(ciudad);
}

for(let orden of ordenes) {
    console.log(orden);
}

for(let person of persona) {
    console.log(person);
}

