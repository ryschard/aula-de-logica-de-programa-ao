import leia from "readline-sync"

var senha = leia.question("digite a senha de quatro digitos: ")

   if (senha == "1234") {
      console.log("acesso permitido");
   } else {
      console.log("acesso negado");

   }