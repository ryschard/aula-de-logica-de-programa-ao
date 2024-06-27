import leia from 'readline-sync'

var numero = leia.questionInt("DIGITE UM NUMERO: ")
var resultado = 1;

while(numero > 0){
    resultado = resultado * numero;
    numero--;
}
console.log("fatorial de "+ numero + " e: " + resultado)