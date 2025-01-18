let listaNome = [];

function exibirListaNaTela(texto) {
  let campoLista = document.getElementById("listaAmigos");

  campoLista.innerHTML = "";

  listaNome.forEach((nome, indice) => {
    const item = document.createElement("li");
    item.textContent = `${indice + 1}. ${nome}`;
    campoLista.appendChild(item);
  });
}

function exibirResultado(resultado) {
  let campoResultado = document.getElementById("resultado");
  campoResultado.innerHTML = resultado;
}

function adicionarAmigo() {
  let capturaInput = document.querySelector("input").value;

  if (
    typeof capturaInput !== "string" ||
    capturaInput.trim === "" ||
    capturaInput.length < 3
  ) {
    alert("Nome inválido!");
    throw new Error("Nome inválido!");
  } else {
    listaNome.push(capturaInput);
    exibirListaNaTela(listaNome);
    limpaInput();
  }
}

function sortearAmigo() {
  let listaAtual = listaNome.length;
  let nomeEscolhido = listaNome[Math.floor(Math.random() * listaAtual)];

  if (nomeEscolhido === undefined) {
    exibirResultado("Adicione um nome na lista");
    throw new Error("Adicione um nome na lista");
  } else {
    exibirResultado(nomeEscolhido);
  }
}

function novoSorteio() {
  let campoLista = document.getElementById("listaAmigos");
  let campoResultado = document.getElementById("resultado");
  campoLista.innerHTML = "";
  campoResultado.innerHTML = "";
  listaNome = [];
  limpaInput();
}

function limpaInput() {
  let capturaInput = document.querySelector("input");
  capturaInput.value = "";
}
