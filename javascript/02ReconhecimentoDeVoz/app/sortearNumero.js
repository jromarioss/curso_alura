const menorValor = 0;
const maiorValor = 100;
const numeroSecreto = 42;

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * maiorValor + 1);
}

const elementoMenorValor = document.getElementById('menor-valor');

const elementoMaiorValor = document.getElementById('maior-valor');
