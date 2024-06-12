import leia from "readline-sync"

var valorProduto = leia.questionFloat("informe o valor do produto");

var umReal = leia.questionInt("qtd moedas R$1 ");
var cinquenta = leia.questionInt("qtd moedas R$0,50 ");
var vinteCinco = leia.questionInt("qtd moedas R$0,25");
var dez = leia.questionInt("qtd moedas R$0,10 ");
var cinco = leia.questionInt("qtd moedas R$0,05");

var total = (umReal * 1) + (cinquenta * 0.50) + (vinteCinco * 0.25) + (dez * 0.10) + (cinco * 0.05)

if(total >= valorProduto){
    console.log("da para comprar o produto!!")
}else {
    console.log("chora boy, nao vai da nao!!")
}