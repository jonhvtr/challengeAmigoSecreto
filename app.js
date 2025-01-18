let friendList = [];

// Função para exibir os nomes na tela
function displayTextOnScreen(texto) {
  let field = document.getElementById("listaAmigos");

  field.innerHTML = "";

  friendList.forEach((nome) => {
    const item = document.createElement("li");
    item.textContent = nome;
    field.appendChild(item);
  });
}

// Função para exibir o resultado do sorteio
function showResult(resultado) {
  let fieldResult = document.getElementById("resultado");
  fieldResult.innerHTML = resultado;
}

// Função para exibir os erros do usuário
function showErrorMessage(message, color) {
  let messageError = document.getElementById("message");
  messageError.style.color = color;
  messageError.innerHTML = message;
}

// Função para adicionar os amigos
function addFriend() {
  let captureInput = document.querySelector("input").value;

  if (
    typeof captureInput !== "string" ||
    captureInput.trim === "" ||
    captureInput.length < 3
  ) {
    showErrorMessage("Nome inválido", "red");
    return false;
  } else {
    showErrorMessage("");
    friendList.push(captureInput);
    displayTextOnScreen(friendList);
    clearInput();
  }
}

// Função que faz o sorteio
function drawFriend() {
  let updateList = friendList.length;
  let chosenName = friendList[Math.floor(Math.random() * updateList)];

  if (chosenName === undefined || updateList === 0 || updateList === 1) {
    showErrorMessage("Adicione pelo menos dois nomes", "red");
    return false;
  } else {
    showResult(`${chosenName} foi sorteado(a)`);
  }
}

// Função para reiniciar/limpar o layout/sorteio
function newDraw() {
  let listField = document.getElementById("listaAmigos");
  let resultField = document.getElementById("resultado");
  let messageError = document.getElementById("message");
  messageError.innerHTML = "";
  listField.innerHTML = "";
  resultField.innerHTML = "";
  friendList = [];
  clearInput();
}

// Função para limpar o input
function clearInput() {
  let captureInput = document.querySelector("input");
  captureInput.value = "";
}
