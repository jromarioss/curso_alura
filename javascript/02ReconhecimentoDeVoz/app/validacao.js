function verificaSeChuteValido(chute) {
  const numero = +chute

  if (Number.isNaN(numero)) {
    elementoChute.innerHTML = `
      <div>Valor inválido, apenas números</div>
      <button onclick="location.reload()">Reiniciar</button>
    `
    return false;
  }

  if (numero > maiorValor || numero < menorValor) {
    elementoChute.innerHTML += `
      <div>O valor precisa estar entre ${menorValor} e ${maiorValor}</div>
    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
      <div>O número secreto é menor</div>
    `
  } else {
    elementoChute.innerHTML += `
      <div>O número secreto é maior</div>
    `
  }

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
      <h2>Parabéns Você acertou!</h2>
      <h3>O número secreto era ${numeroSecreto}</h3>
      <button onclick="location.reload()">Reiniciar</button>
    `
    return;
  }
}

document.body.addEventListener('click', e => {
  if (e.target.id == 'jogar-novamente') {
      window.location.reload()
  }
})