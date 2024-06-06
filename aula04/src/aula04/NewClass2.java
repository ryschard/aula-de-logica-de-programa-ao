
package aula04;

import java.util.Scanner;


public class NewClass2 {
    public static void main (String[] args){  
        Scanner s = new Scanner(System.in);
        
        System.out.println("DIGITE O TOTAL DE ELEITORES: ");
        
        System.out.println("DIGITE QTD VOTOS NULOS: ");
        
        System.out.println("DIGITE QTD VOTOS BRANCOS: ");
        double brancos = s.nextInt();
        
        System.out.println("DIGITE QTD VOTOS VALIDOS: ");
        double validos = s.nextInt();
        
        double eleitores = 0;
        double brancoPercentual = (brancos / eleitores) * 100;
        double validosPercentual = (validos / eleitores) * 100;
        String nulosPercentual = null;
        
        System.out.println("PORCENTAGEM NULOS: " + nulosPercentual + "%");
        System.out.println("PORCENTAGEM BRANCOS: " + brancoPercentual + "%");
        System.out.println("PORCENTAGEM VALIDOS: " + validosPercentual + "%");
        
    }
    
}
