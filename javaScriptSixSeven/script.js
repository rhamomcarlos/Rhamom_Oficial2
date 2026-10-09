function mensagem() {
    const msg = document.getElementById('mensagem');

    msg.style.display = 'block';
    msg.className = 'alert alert-info';
    msg.textContent = 'Pra que jogar a Bola Na Mavie POH!!';
}

               
        function limparMensagem() {
        const msg = document.getElementById('mensagem');

          msg.style.display = 'block';
          msg.className = 'alert alert-danger';
          msg.textContent = 'ARROGANTHIII !!';
        }


 function validaCPF() {
    const cpf = document.getElementById('CPF').value;

    console.log(cpf);

    if (cpf.length !== 11) {
        alert('CPF inválido! Deve conter 11 dígitos.');
    } else {
        alert('CPF válido!');
    }
}