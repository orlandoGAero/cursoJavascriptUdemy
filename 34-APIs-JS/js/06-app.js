const microfono = document.querySelector('#microfono');
const salida = document.querySelector('#salida');

microfono.addEventListener('click', ejecutarSpeechApi);

function ejecutarSpeechApi() {
    const SpeechRecognition = webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function() {
        salida.classList.add('mostar');
        salida.textContent = 'Escuchando...';
    }
    
    recognition.onspeechend = function() {
        salida.textContent = 'Se dejo de grabar..';
        recognition.stop();
    }
    
    recognition.onresult = function(e) {
        console.log(e.results[0][0]);
        
        const { confidence,transcript } = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `<p>Grabado: ${transcript}</p>`;
        
        const confianza = document.createElement('p');
        confianza.innerHTML = `<p>Confianza: ${parseInt( confidence * 100 )}%</p>`;

        salida.appendChild(speech);
        salida.appendChild(confianza);
    }
}