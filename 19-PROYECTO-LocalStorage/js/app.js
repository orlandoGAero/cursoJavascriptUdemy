// variables
const form = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// event listeners
eventListeners();
function eventListeners() {
    // submit a form
    form.addEventListener('submit', agregarTweet);

    // mostrar tweets al cargar
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse( localStorage.getItem('tweets') ) || [];

        crearHTML();
    });
}

// funciones
function agregarTweet(e) {
    e.preventDefault();

    const tweet = document.querySelector('#tweet').value.trim();

    if(tweet.length === 0) {
        mostrarError('No puedes agregar un mensaje vacío');
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet
    }
    
    tweets = [...tweets, tweetObj];

    crearHTML();
    
    this.reset();
    
}

function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);

    console.log(tweets);
    crearHTML();
}

function mostrarError(error) {
    const msjError = document.createElement('p');
    msjError.classList.add('error');
    msjError.textContent = error;

    form.parentElement.appendChild(msjError);
    
    setTimeout(() => {
        msjError.remove();
    }, 3500);
}

function crearHTML() {
    const ul = document.createElement('ul');
    
    if(tweets.length) {

        limpiarHTML();
        
        tweets.forEach( tweet => {

            // agregar boton eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }
            
            const li = document.createElement('li');
            li.innerText = tweet.tweet;

            li.appendChild(btnEliminar);

            ul.appendChild(li)

        });

        listaTweets.appendChild(ul);
        
    }

    sincronizarStorage();
}


function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function limpiarHTML() {
    while(listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}