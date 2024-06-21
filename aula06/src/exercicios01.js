import leia, { questionInt } from 'readline-sync';

var numero = leia.questionInt("DIGITE UM NUMERO: ")
for(var inicio = 0; inicio <= numero; inicio++){
    console.log(inicio)
}

