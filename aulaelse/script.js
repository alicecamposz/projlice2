function idade() {
    let num = document.getElementById("id").value;
    if (!num || num <= 0) {
        alert("errado")
    }
    else if (num <= 12) {
        alert("criança");
    } else if (num >= 12 && num <= 17) {
        alert("Adolescente")
    }
    else if (num >= 18 && num <= 59) {
        alert("adulto")

    }
    else if (num >= 60) {
        alert("idoso")
    }
}
function sun() {
    let usuario = document.getElementById("user").value;
    let senha = document.getElementById("senha").value;
    if (usuario === "admin" && senha === "1234") {
        alert("Bem vindo admin!! Login com sucesso!")
    }
    else if (usuario === "professor" && senha === "senac") {
        alert("Bem-vindo, professor!")
    }
    else if (!usuario || !senha) {
        alert("Preencha todos os campos")
    }
    else {
        alert("Usuario ou senha incorretos")
    }
    }

    function calcular() {
        let valor = document.getElementById("pre").value;
        let vip = document.getElementById("desc").value;
        let cupom = document.getElementById("cupom").value;
        let desconto = 0;
        if (valor >= 500 && vip === "sim") {
            alert("Desconto de 20% aplicado!! Valor final: R$" + (valor - valor * 0.20))
        }
    
      else if (valor >= 300 && vip === "não" && cupom === "sim") {
        alert("Desconto de 10% aplicado!! Valor final: R$" + (valor - valor* 0.10))
    }
    else if (valor < 300 && vip === "não") {
        alert("nenhum cupom aplicado")
    }
    else {
        alert("error")

    }
}

function nota1(){
    let nota = document.getElementById("nota").value;
     let freq = document.getElementById("freq").value;
     if ((!nota|| nota <=0) || ((!freq || freq <= 0 ) || ( nota > 100 || freq > 100))){
        alert("VALORES INVALIDOS")
        return;
     }
     if (nota == 0 && freq == 0){
        alert("PREENCHA TODOS OS CAMPOS")
     }
     else if (nota >= 60 && freq >= 75){
        alert("APROVADO")
     }
     else if (nota >= 40 && nota < 60 && freq >= 75){
        alert("RECUPERAÇÃO!")
     }
     else if ( nota < 40 || freq < 75){
        alert("REPROVADO")
     }
}

