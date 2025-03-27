// Carrossel
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const container = document.querySelector(".carousel-container");

prev.addEventListener("click", () => {
    container.scrollBy({ left: -200, behavior: "smooth" });
});

next.addEventListener("click", () => {
    container.scrollBy({ left: 200, behavior: "smooth" });
});

// Validação do formulário
const form = document.getElementById("form-contato");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const enviar = document.getElementById("enviar");

function validarFormulario() {
    if (nome.value && email.value && mensagem.value) {
        enviar.disabled = false;
    } else {
        enviar.disabled = true;
    }
}

nome.addEventListener("input", validarFormulario);
email.addEventListener("input", validarFormulario);
mensagem.addEventListener("input", validarFormulario);

form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Ainda não fiz integração com serviço de e-mail");
    form.reset();
    validarFormulario();
});
