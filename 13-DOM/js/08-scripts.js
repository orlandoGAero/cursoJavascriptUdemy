const navegacion = document.querySelector('nav.navegacion');

// console.log(navegacion.childNodes);
// navegacion.children[3].textContent = 'Login'
// console.log(navegacion.children[3].textContent);

// selecionar primer Elemento
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);

// selecionar ultimo Elemento

const card = document.querySelector('.card');

// console.log(card.children);
// console.log(card.parentElement.parentElement.parentElement);
// console.log(card.parentElement.parentElement.parentElement.nodeName);
// console.log(card.parentElement.parentElement.parentElement.nodeType);

// console.log(card);
// seleccionar el siguiente elemento
// console.log(card.nextElementSibling);

const lastCard = document.querySelector('.card:nth-child(4)');
console.log(lastCard);
// seleccionar el anterior elemento
console.log(lastCard.previousElementSibling);





