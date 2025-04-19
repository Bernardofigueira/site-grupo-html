const formulario = document.querySelector('form')
formulario.addEventListener('submit',function(event) {
    event.preventDefault()
    let nome = formulario.nome.value;
    let email = formulario.email.value;
    let assunto = formulario.assunto.value;
    let mensagem = formulario.mensagem.value;

    if (nome.trim() === "" || email.trim() === "" || assunto.trim() === "" || mensagem.trim() === "") {
        alert("Por favor preencha todos os campos solicitados");
    } else {
        alert("Sua mensagem foi recebida, em breve retornaremos pelo seu email");
    }
});
