import leia from "readline-sync"

var ultimoNumero = leia.questionInt("digite o ultimo numero da placa do carro: ");
switch (ultimoNumero) {
    case 0:
    case 1:
        console.log("nao pode rodar segunda");
        break;
    case 2:
    case 3:
        console.log("nao pode rodar terca");
        break
    case 4:
    case 5:
        console.log("nao pode rodar quarta");
        break
    case 6:
    case 7:
        console.log("nao pode rodar quinta");
        break
    case 8:
    case 9:
        console.log("nao pode rodar sexta");
        break;
    
}

