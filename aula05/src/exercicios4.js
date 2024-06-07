import leia from "readline-sync"

var quantidade = leia.question("digite a quantidade de maças que tu quer comprar: ");

var preço = 0.30

if (quantidade >= 12){
    console.log("preço = quantidade * 0.25");
} else {
    console.log("preço = quantidade * 0.30");
}
alert("o valor da compra é: R$" + preço.toFixed(2));