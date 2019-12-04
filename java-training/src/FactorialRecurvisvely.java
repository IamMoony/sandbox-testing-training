    public class FactorialRecurvisvely {


    public int factorialRecursively(int value) {

    // return value == 1 ? 1 : factorialRecursively(value-1) * value;
        if(value == 1) {
            return 1;
        }

        int x = factorialRecursively(value-1);
        return x * value;
    }

     public static void main(String[] args) {
        // new FactorialRecurvisvely().factorialRecursively(5);
         System.out.println("The Factorial of: " + new FactorialRecurvisvely().factorialRecursively(5));

        }
    }
