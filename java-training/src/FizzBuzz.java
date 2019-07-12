public class FizzBuzz {

    public void fizzBuzzGenerator(int i) {

        String fizz = "Fizz";
        String buzz = "Buzz";
        String fizzBuzz ="FizzBuzz";
        String hello = "hello";
        // int numberToBeMultiplied = i;

        // I wanna check this first
        if(i % 3 == 0 && i  % 5 == 0) {
            System.out.println(fizzBuzz);
        }
        else if(i % 5 == 0) {
            System.out.println(buzz);
        } else if(i % 3 == 0)  {
            System.out.println(fizz);
        } else {
            System.out.println(i);
        }

    }
}
