const botao = document.getElementById("meuBotao");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    mensagem.textContent = "Consegui programar meu primeiro botão! 🖤✨💻";
});

// Botão de tema
const botaoTema = document.getElementById("alternarTema");

// Recupera o tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "claro") {
    document.body.classList.add("tema-claro");
    botaoTema.textContent = "🌙 Ativar tema escuro";
} else {
    document.body.classList.remove("tema-claro");
    botaoTema.textContent = "☀️ Ativar tema claro";
}

// Salva a escolha ao clicar
botaoTema.addEventListener("click", function() {
    document.body.classList.toggle("tema-claro");

    if (document.body.classList.contains("tema-claro")) {
        localStorage.setItem("tema", "claro");
        botaoTema.textContent = "🌙 Ativar tema escuro";
    } else {
        localStorage.setItem("tema", "escuro");
        botaoTema.textContent = "☀️ Ativar tema claro";
    }
});