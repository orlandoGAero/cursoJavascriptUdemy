// crear elemento html
const enlace = document.createElement('a');

enlace.textContent = 'Inicio';
enlace.href = '/home';
enlace.target = '_blank';
enlace.classList.add('nueva-clase');
enlace.setAttribute('data-info','inicio');

const nav = document.querySelector('.navegacion');
// agregar elemento al final de nav
// nav.appendChild(enlace);

// agregar en una determinada posicion
nav.insertBefore(enlace,nav.children[0]);

// agregar un nuevo card

// crear parrafos
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'EDC 2021';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// crear div con la clase info
const divInfo = document.createElement('div');
divInfo.classList.add('info');

divInfo.appendChild(parrafo1);
divInfo.appendChild(parrafo2);
divInfo.appendChild(parrafo3);

// crear imagen
const img = document.createElement('img');
img.src = 'img/hacer1.jpg';

// crear card
const card = document.createElement('div');
card.classList.add('card');

card.appendChild(img);
card.appendChild(divInfo);

const divCards = document.querySelector('.hacer .contenedor-cards');
// divCards.appendChild(card);
divCards.insertBefore(card, divCards.children[2])

console.log(card);


