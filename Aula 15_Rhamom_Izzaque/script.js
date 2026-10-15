
function cadastrar(event) {
    event.preventDefault();

    alert("Cadastrado com sucesso: " +
    document.getElementById("nome").value);
}

document.getElementById("nome").oninput = function() {
    document.getElementById("nomeDigitado").innerHTML =
    document.getElementById("nome").value;
};
