public class FactorialRecurvisvely {

    public int factorialRecurively(int number) {
        int factorial = number;

        for(int i = 1; i < number; i++) {
            factorial = factorial * i;
        }

        return factorial;
    }
}
