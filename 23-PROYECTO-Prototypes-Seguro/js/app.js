const formulario = document.querySelector('#cotizar-seguro');

function Seguro(marca,year,tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function() {
    
    let cantidad;
    const base = 2000;

    /*
        1 Americano = 1.15
        2 Asiatico = 1.05
        3 Europeo = 1.35
    */
    switch (this.marca) {
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05
            break;
        case '3':
            cantidad = base * 1.35
            break;
    
        default:
            break;
    }

    // por cada año menos reducir en un 3%

    const diferencia = new Date().getFullYear() - this.year;

    cantidad -= ((diferencia * 3) * cantidad) / 100;

    /*
        si tipo es basico aumentar un 30%
        si es completo aumentar un 50%
    */

    if(this.tipo === 'basico') {
        cantidad *= 1.30;
    } else {
        cantidad *= 1.50;
    }
    
    return cantidad;
    
}

function UI() {}

UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
        min = max - 20;

    const selectYear = document.querySelector('#year');

    for(let i = max; i >= min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        
        selectYear.appendChild(option);
    }
}

UI.prototype.mostrarMensaje = (mensaje,tipo) => {
    const div = document.createElement('div');

    if(tipo === 'error') {
        div.classList.add('error');
    } else if(tipo === 'correcto') {
        div.classList.add('correcto')
    }

    div.classList.add('mensaje','mt-5');
    div.textContent = mensaje;

    const resultadoDiv = document.querySelector('#resultado');
    formulario.insertBefore(div,resultadoDiv);

    setTimeout(() => {
        div.remove();
    }, 3000);
}

UI.prototype.mostrarResultado = (total,seguro) => {

    const {marca, year, tipo} = seguro;

    let nombreMarca;

    switch (marca) {
        case '1':
            nombreMarca = 'Americano'
            break;
        case '2':
            nombreMarca = 'Asiatico'
            break;
    
        case '3':
            nombreMarca = 'Europeo'
            break;
    
        default:
            break;
    }

    const div = document.createElement('div');
    div.classList = 'mt-10';

    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${nombreMarca}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize">${tipo}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$ ${total}</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    }, 3000);
}

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
});

// listeners
eventListeners();
function eventListeners() {
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e) {
    e.preventDefault();

    // leer marca
    const marca = document.querySelector('#marca').value;
    
    // leer año
    const year = document.querySelector('#year').value;
    
    // leer tipo
    const tipo = document.querySelector('input[name="tipo"]:checked');
    
    
    if(marca === '' || year === '' || tipo === null ) {
        ui.mostrarMensaje('Ingresa todos los campos', 'error');
    } else {
        ui.mostrarMensaje('Cotizando...','correcto');

        const resultado = document.querySelector('#resultado div');

        if(resultado != null) {
            resultado.remove();
        }

        const valorTipo = tipo.value;
        // instanciar seguro
        const seguro = new Seguro(marca,year,valorTipo);
        
        // cotizar
        const total = seguro.cotizarSeguro();

        ui.mostrarResultado(total,seguro)
    }
    
    this.reset();
}