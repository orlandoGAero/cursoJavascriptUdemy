const encabezado = document.querySelector('h1');

encabezado.style.backgroundColor = 'blue';

const card = document.querySelector('.card');
card.classList.add('otra-clase','nueva-clase');
card.classList.remove('card');

card.classList.forEach( clase => console.log(clase) );

