let produtos = []
let precos = []

function cadastrar() {
    let produto = document.getElementById("produto").value;
    let preco = document.getElementById("preco").value;
    let mensagem = document.getElementById("mensagem");
    if (produto == "" || preco <= 0) {
        mensagem.textContent = "digite algo valido!"
        mensagem.style.color = "green"
        
    }
    else
    {
        produtos.push(produto);
        precos.push(preco);
    }
}

function mostrar() {
    let qnt = document.getElementById("quantidade")
    let lista = document.getElementById("lista")

    for ( let i = 0; i < produtos.length; i++){
        let item = document.createElement("lista");
        item.textContent = produtos [i] + " " + precos[i];
        lista.appendChild (item);
    }

}