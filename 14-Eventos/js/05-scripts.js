window.addEventListener('scroll', () => {
    const scrollY = this.scrollY;
    const hospedaje = document.querySelector('.hospedaje');
    const ubicacion = hospedaje.getBoundingClientRect();
    
    console.log(ubicacion);
    if( ubicacion.top > -300 && ubicacion.top < 450) {
        // console.log('ya esta visible');
        hospedaje.classList.add('isVisibleHospedaje');
    } else {
        hospedaje.classList.remove('isVisibleHospedaje');
        // console.log('no esta visible');
    }
    
});
