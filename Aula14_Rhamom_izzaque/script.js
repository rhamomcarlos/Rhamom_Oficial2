
function habilitar() {
    document.getElementById("nome").disabled = false;
}

document.getElementById("nome").onblur = function() {
    document.getElementById("nome").disabled = true;
};
