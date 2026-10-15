
function carregar(linha) {
    document.getElementById("nome").value = linha.cells[0].innerHTML;
    document.getElementById("email").value = linha.cells[1].innerHTML;
}

function salvar() {
    alert("Dados carregados: " +
    document.getElementById("nome").value);
}
