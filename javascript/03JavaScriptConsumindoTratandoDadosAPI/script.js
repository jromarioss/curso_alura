async function buscaEndereco(cep) {
  try {
    let consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    let res = await consultaCEP.json();
    if (res.erro) {
      throw Error("Cep não existe...");
    }
    return res;
  } catch(err) {
    console.log(err);
  }
}

let ceps = ['01001000', '01001001'];
let cepsConj = ceps.map(valor => buscaEndereco(valor));
Promise.all(cepsConj).then(res => console.log(res));