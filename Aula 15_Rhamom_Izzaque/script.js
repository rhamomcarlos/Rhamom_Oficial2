
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let telefone = document.getElementById("telefone");
let cidade = document.getElementById("cidade");
let nomeDigitado = document.getElementById("nomeDigitado");
let mensagem = document.getElementById("mensagem");

// Capturar o nome em tempo real
nome.addEventListener("input", function() {
    nomeDigitado.textContent = "Nome digitado: " + nome.value;
});

// Função de cadastro e validação
function cadastrar(event) {
    event.preventDefault();

    if (nome.value.trim() === "") {
        alert("Digite seu nome!");
        nome.focus();
        return;
    }

    if (email.value.trim() === "" || !email.validity.valid) {
        alert("Digite um e-mail válido!");
        email.focus();
        return;
    }

    if (telefone.value.trim() === "") {
        alert("Digite seu telefone!");
        telefone.focus();
        return;
    }

    if (cidade.value.trim() === "") {
        alert("Digite sua cidade!");
        cidade.focus();
        return;
    }

    mensagem.textContent =
        "Cadastrado com sucesso, " + nome.value + "!";

    alert("Cadastrado com sucesso, " + nome.value + "!");
}
