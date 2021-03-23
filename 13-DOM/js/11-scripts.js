const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarPie);

function mostrarOcultarPie() {
    
    if(footer.classList.contains('activo')) {
        this.textContent = 'Idioma y moneda';
        footer.classList.remove('activo');
        this.classList.remove('activo');
    } else {
        this.textContent = 'X Cerrar';
        footer.classList.add('activo');
        this.classList.add('activo');
    }
    
    console.log(footer.classList);
}

