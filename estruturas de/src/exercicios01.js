import leia from "readline-sync"

var lista = [];
var lista2 = [];
//preencher a primeira lista
for(var i = 0;  i < 5; i++){
    //lista[i] = leia.questionInt("informe um numero");
   lista[i] = parseInt(Math.random() * 100)

}
//manipular as lista
for(var i = 0; i < lista.length; i++){
    lista2[i] = lista[i] * 5;
   // lista2.push(lista[i] * 5);
}



console.log(lista[i])