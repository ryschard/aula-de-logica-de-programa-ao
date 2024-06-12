import leia from "readline-sync"

var qtdDoacoes = leia.questionInt("quantos vc pode doar");
switch (qtdDoacoes) {
    case 10:
        console.log("voce doou 10 reais, obrigado pela doacao");
        break
    case 25:
        console.log("voce doou 25 reais, obrigado pela doacao");
        break
    case 50:
        console.log("voce doou 50 reais, obrigado pela doacao");
        break
    default:
        console.log("obrigado pelo o valor que voce doou");
        break
        
}
