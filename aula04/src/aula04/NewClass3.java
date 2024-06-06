
package aula04;

import java.util.Scanner;


public class NewClass3 {
    public static void main(String[] args){
        Scanner s = new Scanner(System.in);
        
        System.out.println("INFORME A TEMPERATURA EM ºC: ");
        double celsius = s.nextDouble();
        
        double kelvin = celsius + 273.15;
        
        System.out.println("CELSIUS: " + celsius + "ºC");
        String farenhait = null;
        System.out.println("FARENHAIT: " + farenhait + "ºF");
        System.out.println("KELVIN: " + kelvin + "ºK");
       
    }
    
}
