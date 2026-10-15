
let campos = document.querySelectorAll("input");
let botao = document.getElementById("habilitar");

botao.addEventListener("click", function() {
    campos.forEach(function(campo) {
        campo.disabled = false;
    });

    campos[0].focus();
});

campos.forEach(function(campo) {
    campo.addEventListener("blur", function() {
        campo.disabled = true;
    });
});
