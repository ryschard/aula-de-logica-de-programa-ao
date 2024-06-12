import leia from "readline-sync"

var mes = leia.questionInt("digite o mes pra saber quantos dias tem: ");
switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("meses q tem 31 dias");
        break
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("meses que tem 30 dias");
        break
    default:
        console.log("mes q tem 29 ou 28 dias")
        break

}
