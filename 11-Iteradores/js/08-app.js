// for in - itera sobre objetos
const auto = {
    nombre:'Ferrari',
    pais: 'Italia',
    year: 2020
};

for(let carro in auto) {
    console.log(`${auto[carro]}`);
}

for(let [key,value] of Object.entries(auto)) {
    console.log(`${key} : ${value}`);
    
}