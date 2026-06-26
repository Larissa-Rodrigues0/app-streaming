
document.getElementById('form-login').addEventListener('submit', async function(event) {
    event.preventDefault(); // Impede o envio do formulário para evitar recarregamento da página
    console.log('1. Cheguei no evento de submit do formulário');

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('2. Dados do formulário:', email, password);

    const usuario = await window.api.login(email, password);
    // Chama a função login do preload.js
});