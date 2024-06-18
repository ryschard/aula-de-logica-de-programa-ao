import leia from "readline-sync"

var idade = leia.questionInt("INFORME sUA IDADE: ");
if(idade < 18){
    var permissao = leia.question("SEUS PAIS PARMITIRAM A VIAGEM: ")
    if(permissao === "SIM"){
    var nome = leia.question("INFORME SEU NOME: ");
    console.log("VOCE PODE VIAJAR TRANQUILO " + nome);
    }else if(permissao === "NAO"){
        console.log("NAO TEM PERMISSAO PARA VIAJAR");
    }else {
        console.log("OPCAO INVALIDA");
    }
}else {
    var nome = leia.question("INFORME SEU NOME: ");
    console.log("VOCE PODE VIAJAR TRANQUILO " + nome);
}