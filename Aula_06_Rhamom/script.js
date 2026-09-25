// Aula 06: cada função é chamada pelo onclick de um botão no HTML.

// HOME: cria uma data e mostra o horário local no momento do clique.
function mostrarData() {
    const agora = new Date();
    document.getElementById("data").innerHTML = agora.toLocaleString("pt-BR");
}

// INTRODUÇÃO: seleciona o parágrafo pelo id e altera seu conteúdo.
function alterarTexto() {
    const mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "Desafio concluído: a página respondeu ao clique!";
}

// Troca o atributo src e atualiza a descrição acessível da imagem.
function acenderLuz() {
    document.getElementById("luz").src = "luz-acesa.svg";
    document.getElementById("luz").alt = "Indicador aceso";
    document.getElementById("estado-luz").innerHTML = "O indicador está aceso.";
}

function apagarLuz() {
    document.getElementById("luz").src = "luz-apagada.svg";
    document.getElementById("luz").alt = "Indicador apagado";
    document.getElementById("estado-luz").innerHTML = "O indicador está apagado.";
}

// Modifica duas propriedades CSS do elemento.
function destacarTexto() {
    document.getElementById("texto-estilo").style.fontSize = "35px";
    document.getElementById("texto-estilo").style.color = "#a32816";
}

function restaurarEstilo() {
    document.getElementById("texto-estilo").style.fontSize = "";
    document.getElementById("texto-estilo").style.color = "";
}

// display controla se o elemento aparece na página.
function esconderTexto() {
    document.getElementById("texto-visivel").style.display = "none";
}

function mostrarTexto() {
    document.getElementById("texto-visivel").style.display = "block";
}
