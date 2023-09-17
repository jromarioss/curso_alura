async function buscaEndereco(cep) {
  let msgError = document.getElementById('erro');
  msgError.innerHTML = '';

  try {
    let consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    let res = await consultaCEP.json();

    if (res.erro) {
      throw Error("Cep não existe...");
    }

    let cidade = document.getElementById('cidade');
    let logradouro = document.getElementById('endereco');
    let estado = document.getElementById('estado');

    cidade.value = res.localidade;
    logradouro.value = res.logradouro;
    estado.value = res.uf;

    console.log(res)
  } catch(err) {
    msgError.innerHTML += `<p>Cep não existe...</p>`;
    console.log(err);
  }
}

let cep = document.getElementById('cep');
cep.addEventListener('focusout', () => {
  buscaEndereco(cep.value)
})