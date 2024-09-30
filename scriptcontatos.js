function validarFormulario(event) {
    event.preventDefault();

    const nome = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const mensagem = document.querySelector('textarea[name="message"]').value.trim();


    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos.");
        return false;
    }

    document.getElementById("popup").style.display = "block";
    setTimeout(() => {
        document.getElementById("popup").style.display = "none";
    }, 2000)
    document.getElementById("contact-form").reset();
    return true;
}