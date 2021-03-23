// new binding
function Auto(modelo,color) {
    this.modelo = modelo;
    this.color = color;
}

const auto = new Auto('Ferrari','Rojo');
console.log(auto);


// window binding
window.color = 'Azul';
function verColor() {
    console.log(color);
}

verColor();