document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formLogin');
    const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');
    const emailError = document.getElementById('emailError');
    const senhaError = document.getElementById('senhaError');

    // Função de validação de e-mail por regex simples
    function validarEmailFormat(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    form.addEventListener('submit', (event) => {
        let valid = true;

        // Limpa mensagens de erro anteriores
        emailError.textContent = '';
        senhaError.textContent = '';

        // Validação do campo E-mail
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Por favor, informe seu e-mail.';
            valid = false;
        } else if (!validarEmailFormat(emailInput.value.trim())) {
            emailError.textContent = 'Digite um e-mail válido (ex: usuario@dominio.com).';
            valid = false;
        }

        // Validação do campo Senha
        if (senhaInput.value.trim() === '') {
            senhaError.textContent = 'Por favor, digite sua senha.';
            valid = false;
        } else if (senhaInput.value.length < 6) {
            senhaError.textContent = 'A senha deve conter no mínimo 6 caracteres.';
            valid = false;
        }

        // Se houver erros, cancela o envio do formulário
        if (!valid) {
            event.preventDefault();
        } else {
            event.preventDefault(); // Impede o recarregamento da página para demonstração
            alert('Formulário validado e enviado com sucesso!');
        }
    });
});