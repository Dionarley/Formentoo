document.getElementById("perfilForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = document.getElementById("idade").value;
    const bio = document.getElementById("bio").value.trim();
    const msg = document.getElementById("mensagem");

    // Validação simples
    if (nome.length < 3) {
        msg.textContent = "O nome deve ter pelo menos 3 caracteres.";
        msg.style.color = "red";
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        msg.textContent = "Email inválido.";
        msg.style.color = "red";
        return;
    }

    if (idade < 1 || idade > 120) {
        msg.textContent = "Idade deve estar entre 1 e 120.";
        msg.style.color = "red";
        return;
    }

    msg.textContent = "Perfil salvo com sucesso!";
    msg.style.color = "green";
});
