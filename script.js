const form = document.getElementById("form");
const msg = document.getElementById("msg");
const btn = form.querySelector("button");

form.addEventListener("submit", function (e) { //Não entendi muito bem o que é o "e"
    e.preventDefault(); //Impedir que a página carregue

    btn.disabled = true;
    btn.innerText = "Enviando...";

    msg.innerText = "Enviando...";

    const dados = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        //telefone: document.getElementById("telefone").value
    };

    fetch("https://script.google.com/macros/s/AKfycbxfhIxO-Z3zP_MilI76bYSaJedsK6uMWIfyAtYmhymDzhjG3xJ9d2DoV-jI7AmZpz_41w/exec", {
        method: "POST",
        body: JSON.stringify(dados)
    })
    .then(res => res.json())
    .then(data => {
        msg.innerText = "Cadastro realizado!";
        form.reset();
    })
    .catch(err => {
        msg.innerText = "Erro ao cadastrar";
        console.error(err);
    })
    .finally(() => {
        btn.disabled = false;
        btn.innerText = "Cadastrar";
    });
});