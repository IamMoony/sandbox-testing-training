public class FizzBuzz {

    public void fizzBuzzGenerator(int number) {

        String fizz = "Fizz";
        String buzz = "Buzz";
        String fizzBuzz ="FizzBuzz";

        // I wanna check this first
        if(number % 3 == 0 && number  % 5 == 0) {
            System.out.println(fizzBuzz);
        }
        else if(number  % 5 == 0) {
            System.out.println(buzz);
        } else if(number  % 3 == 0)  {
            System.out.println(fizz);
        } else {
            System.out.println(number );
        }

    }
}
