public class W1D3_A4 {

    public static void main(String[] args) {
        new W1D3_A4().convertName("Martini Bong");
    }

    public static void convertName(String input) {
        String[] splitInput = input.split(" ");
        System.out.println(splitInput[0]);
        System.out.println(splitInput[1]);
        String result = splitInput[0].substring(0,1) + "." + splitInput[1].substring(0,1);
        System.out.println("Hello, " + result +" welcome!");


    }
}
