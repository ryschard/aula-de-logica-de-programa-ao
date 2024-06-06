import leia from "readline-sync"

console.log("INFORME O VALOR DAS 5 CORRIDAS DO MOTORISTA DE APLICATIVO")

var cor1 = leia.questionFloat("DIGITE PRIMEIRO VALOR");
var cor2 = leia.questionFloat("DIGITE SEGUNDO VALOR");
var cor3 = leia.questionFloat("DIGITE O TERCEIRO VALOR");
var cor4 = leia.questionFloat("DIGITE QUARTO VALOR");
var cor5 = leia.questionFloat("DIGITE QUINTO VALOR");

var valorbruto = cor1 + cor2 + cor3 + cor4 + cor5;
var valorLiquido = valorBruto - (valorBruto * 0,25);

console.log("VALOR LIQUIDO: R$" + valorLiquido);