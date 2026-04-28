

function caixinha(){
    alert ("Olá mundo");
    let nome = "Alice";
    alert(nome);
    
 }
 function soma(){
    let valor1 = 6;
    let valor2 = 10;
    let resultado = valor1 + valor2;
    alert(valor1+"+"+ valor2);
    alert (resultado);
 }

 function cor(){
    let texto = document.getElementById("divcor")
    texto.style.background = "yellow"
    texto.style.width = "10%"
    texto.style.textAlign = "center"
 }

 function texto(){
    let texto = document.getElementById ("mudar");
    texto.textContent = "alicecampos";
 }

 function aviso(){
    let limpar = document.getElementById ("aviso");
    limpar.textContent = ""
 }

 function funcaobotao()
 {
   let botao = document.getElementById("botaotop");
   botao.textContent = "Você Clicou!";
 }

 function funçao(){
   let par = document.getElementById("paragrafo");
   let cax = document.getElementById("caixa");
   let escrita = par.textContent
   cax.value = escrita;

 }

 function soma2()
 {
   let num1 = document.getElementById("num1").value;
   let num2 = document.getElementById("num2").value;
   let num3 = document.getElementById("num3").value;
   let resultado = Number(num1) + Number(num2) - Number(num3);
   let local = document.getElementById("resultado");
   local.textContent = resultado;
 }

 function fundo()
 {
   document.getElementById ("corbody").style.background = "pink";
 }
 function tamanho()
 {
   let texto = document.getElementById("tamanhotext")
    texto.style.fontSize = "50px"
 }

 function textcolor()
 {
   let texto = document.getElementById("cortext")
    texto.style.color = "blue"
 }

 function alttext()
 {
   let texto = document.getElementById("altext")
    texto.style.color = "yellowgreen"
    texto.style.fontSize = "50px"
    texto.style.backgroundColor = "aliceblue"
    texto.style.borderRadius = "10px"
    texto.style.width = "50%"
    texto.style.textAlign = "center"
 }
 function alterartext()
 {
   let texto = document.getElementById("altext2")
   texto.textContent = "alicecampos"
 }
 function alterartext2()
 {
   let texto = document.getElementById("altext2")
   texto.style.fontSize = "50px"
 }
 function alterartext3()
 {
   let texto = document.getElementById("altext2")
   texto.style.color = "aquamarine"
 }

 function divs2()
 {
   let texto = document.getElementById("div1");
   texto.style.color = "red";
   let texto2 = document.getElementById("div2");
   texto2.style.color = "purple";

 }
 function funçao2(){
   let par = document.getElementById("paragrafo2");
   let cax3 = document.getElementById("caixa3");
   let cax = document.getElementById("caixa2");
   let escrita = par.textContent
   cax3.value = escrita;
   cax.value = escrita;

 }

 function aline()  {
  const alice = document.getElementById("ali");
  lice1.textContent = alice.value;
  lice1.style.color = "purple";
  lice1.style.backgroundColor = "white";
  
}

 function soma3()
 {
   let num1 = document.getElementById("num11").value;
   let num2 = document.getElementById("num22").value;
   let resultado = Number(num1) + Number(num2);
   let local = document.getElementById("resultadoo");
   local.textContent = resultado;
   
 }
function aviso2() {
  document.getElementById("resultadoo").textContent = " "
}
function tudo(){
 const mudar = document.getElementById("corbody");
 mudar.style.color = ("purple");
 mudar.style.background = ("aliceblue");
 mudar.style.fontSize = ("20px");

}