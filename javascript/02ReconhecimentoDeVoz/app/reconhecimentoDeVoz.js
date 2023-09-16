const elementoChute = document.getElementById("chute");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.addEventListener('result', listener);
// recognition.addEventListener('end', () => 
//  recognition.start()); deixa ligado

function onSpeak() {
  recognition.start();
}

function listener(e) {
  let chute = e.results[0][0].transcript
  exibeChuteNaTela(chute);
  verificaSeChuteValido(chute);
}

function exibeChuteNaTela(chute) {
  elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    <button onclick="location.reload()">Reiniciar</button>
  `
}