
package aula04;

import java.util.Scanner;

public class NewClass {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        
        System.out.println("DIGITE A LARGURA: ");
        double largura = s.nextDouble();
        
        System.out.println("DIGITE A ALTURA: ");
        double altura = s.nextDouble();
        
        double area = altura * largura;
        
        System.out.println("A AREA É: " + area);
    }
    
}
