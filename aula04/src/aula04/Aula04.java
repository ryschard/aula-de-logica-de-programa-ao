
package aula04;

import java.util.Scanner;

   public class Aula04 {
     public static void main(String[] args) {
         Scanner s = new Scanner(System.in);
         
         System.out.println("DIGITE UM NUMERO: ");
         int valor = s.nextInt();
         
         int antecessor = valor - 1;
         
         System.out.println("O ANTECESSOR É: " + antecessor);
    }
    
}
