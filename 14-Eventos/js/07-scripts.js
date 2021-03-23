// prevenir event bubbling con Delegation
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    // console.log('click en card');
    if(e.target.classList.contains('titulo')) {
        console.log('click en titulo');
    }
    if(e.target.classList.contains('info')) {
        console.log('click en info');
    }
    if(e.target.classList.contains('precio')) {
        console.log('click en precio');
    }
    if(e.target.classList.contains('card')) {
        console.log('click en card');
    }
    
    
    
});