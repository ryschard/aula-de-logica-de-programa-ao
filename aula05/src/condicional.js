import leia from "readline-sync"
var codigoErro = leia.questionInt("DIGITE O CODIGO DO ERRO: ");
switch (codigoErro) { 
    case 400:
    case 401:
    case 404:
        console.log("HTTP CODE ERROR APLICAÇAO")
        break;
    case 500:
    case 501:
    case 502:
        console.log("HTTP CODE - ERROR DE SERVIDOR")
        break;
    default:
        console.log("NAO E ERRO")
        break;
}