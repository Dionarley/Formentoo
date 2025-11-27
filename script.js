// -------- Preview da Imagem -----------
document.getElementById("foto").addEventListener("change", function() {
    const file = this.files[0];
    const preview = document.getElementById("previewImg");

    if (file) {
        preview.src = URL.createObjectURL(file);
    }
});

// -------- Tema Dark / Light -----------
const toggle = document.getElementById("toggleTheme");
const html = document.documentElement;

// Mantém o tema salvo localmente
if (localStorage.getItem("theme")) {
    html.classList.toggle("dark", localStorage.getItem("theme") === "dark");
}

toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
});

// -------- Validação -----------
document.getElementById("perfilForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const idade = document.getElementById("idade").value;
    const msg = document.getElementById("mensagem");

    msg.classList.remove("text-red-600", "text-green-600");

    if (nome.length < 3) {
        msg.textContent = "O nome deve ter pelo menos 3 caracteres.";
        msg.classList.add("text-red-600");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        msg.textContent = "Email inválido.";
        msg.classList.add("text-red-600");
        return;
    }

    if (idade < 1 || idade > 120) {
        msg.textContent = "Idade deve estar entre 1 e 120.";
        msg.classList.add("text-red-600");
        return;
    }

    msg.textContent = "Perfil salvo com sucesso!";
    msg.classList.add("text-green-600");
});
