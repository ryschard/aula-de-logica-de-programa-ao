import leia from "readline-sync"

var qtd = leia.questionInt("digite a quantidade de macas: \n");

if(qtd < 12) {
    var total = qtd * 0.30;
    console.log("valor total R$" + total.toFixed(2))
}else {
    var total = qtd * 0.25
    console.log("valor total R$"+ total.toFixed(2))
}