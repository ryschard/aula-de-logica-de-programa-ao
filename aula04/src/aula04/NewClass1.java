
package aula04;

import java.util.Scanner;

public class NewClass1 {
    public static void main(String[] args){
        Scanner s = new Scanner (System.in);
        
        System.out.println("DIGITE QTD DE ANOS: ");
        int anos = s.nextInt();
        
        System.out.println("DIGITE QTD DE MESES: ");
        int meses = s.nextInt();
        
        System.out.println("DIGITE QTD DE DIAS: ");
        int dias = s.nextInt();
        
        int totalDias = (anos * 365) + (meses * 30) + dias;
        
        System.out.println("VOCÊ VIVEu " + totalDias + "DIAS.");
        
    }
    
}
