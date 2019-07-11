public class Factorial {

    public Integer calculateFactorial(int number) {
        int numberToCalculate = number;
        for(int i = 2; i < number; i++) {
            numberToCalculate = numberToCalculate * i;
        }
        return numberToCalculate;
    }
}
