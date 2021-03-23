document.addEventListener('DOMContentLoaded', () => {
    // Habilitar observer
    const observer = new IntersectionObserver( entries => {
        if(entries[0].isIntersecting) {
            console.log('Ya es visible');
        }
    });

    // que elemento observar
    observer.observe(document.querySelector('.premium'));
});