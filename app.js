let amigos = [];

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Lista de Amigos');
    exibirTextoNaTela('p', 'Adicione seus amigos à lista.');
}

exibirMensagemInicial();

function adicionarAmigo() {
    const input = document.getElementById("amigo");  // Alterado de nomeAmigo para amigo
    const nome = input.value.trim();
    
    if (!nome) {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nome);
    input.value = "";
    atualizarLista();
}

function atualizarLista() {
    document.getElementById("listaAmigos").innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join("");
}

function reiniciarLista() {
    amigos = [];
    atualizarLista();
    exibirMensagemInicial();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Não há amigos na lista para sortear.");
        return;
    }

    // Gerar um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obter o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibir o nome sorteado na tela
    const resultado = document.getElementById("resultado");  // Alterado de resultadoSorteio para resultado
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
