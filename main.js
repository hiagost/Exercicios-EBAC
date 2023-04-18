function validarFormulario() {
    // Obter os valores dos campos A e B
    var campoA = parseInt(document.getElementById("campoA").value);
    var campoB = parseInt(document.getElementById("campoB").value);

    // Verificar se o campo B é maior que o campo A
    if (campoB > campoA) {
        // Formulário é válido
        var mensagemDiv = document.getElementById("mensagem");
        mensagemDiv.classList.remove("mensagem-invalida");
        mensagemDiv.classList.add("mensagem-valida");
        mensagemDiv.style.display = "block";
        mensagemDiv.innerHTML = "Formulário válido!";
        return false;

    } else {
        // Formulário é inválido
        var mensagemDiv = document.getElementById("mensagem");
        mensagemDiv.classList.remove("mensagem-valida");
        mensagemDiv.classList.add("mensagem-invalida");
        mensagemDiv.style.display = "block";
        mensagemDiv.innerHTML = "Campo B deve ser maior que o campo A!";
        return false;
    }
}