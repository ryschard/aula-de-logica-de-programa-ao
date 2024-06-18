import leia from "readline-sync"

var qtdDoacoes = leia.questionInt("quantos vc pode doar");
switch (qtdDoacoes) {
    case "1":
        console.log("voce doou 10 reais, obrigado pela doacao");
        break
    case "2":
        console.log("voce doou 25 reais, obrigado pela doacao");
        break
    case "3":
        console.log("voce doou 50 reais, obrigado pela doacao");
        break
    case "4":
        var valor = leia.question
    default:
        console.log("obrigado pelo o valor que voce doou");
        break
        
}
