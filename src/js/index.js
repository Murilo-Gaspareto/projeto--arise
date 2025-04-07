// Seleciona todos os botões de personagem e os elementos de personagens
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

// Inicializa os eventos de clique nos botões
function inicializarEventosDosBotoes() {
    botoes.forEach((botao, indice) => {
        botao.addEventListener("click", () => {
            desmarcarBotaoSelecionado();
            marcarBotaoSelecionado(botao);

            esconderPersonagemSelecionado();
            mostrarPersonagemSelecionado(indice);
        });
    });
}

// Remove a classe 'selecionado' do botão atualmente selecionado, se houver
function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove("selecionado");
    }
}

// Adiciona a classe 'selecionado' ao botão clicado
function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

// Remove a classe 'selecionado' do personagem atualmente exibido, se houver
function esconderPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove("selecionado");
    }
}

// Adiciona a classe 'selecionado' ao personagem correspondente ao botão clicado
function mostrarPersonagemSelecionado(indice) {
    personagens[indice].classList.add("selecionado");
}

// Inicia o script
inicializarEventosDosBotoes();
