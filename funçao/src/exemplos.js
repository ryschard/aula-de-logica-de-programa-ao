import leia from 'readline-sync';

/*function mostrar() {
    var nome = leia.question("digite o nome: ");
    console.log("ola, " + nome)
}*/

function somar() {
     var num1 = leia.questionInt("digite o numero: ");
     var num2 = leia.questionInt("digite o numero: ");
     var result = num1 + num2;
     console.log("o resultado é: " + result)
}

     function subtrair(num1, num2){
        var result = num1 - num2;
        console.log("o resultado é: " + result)
     }

     function multi(num1, num2){
        var result = num1 * num2;
        return result;
     }


somar();
subtrair(10, 5);
var resultado = multi(5,5);
console.log(resultado)
//mostrar();

