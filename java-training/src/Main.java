import sorting_algorythms.BubbleSort;
import sorting_algorythms.Person;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        ReverseString reverseString = new ReverseString();
        System.out.println(reverseString.reverseString("Hello"));

        Factorial factorial = new Factorial();
        System.out.println(factorial.calculateFactorial(5));

        FizzBuzz fizzBuzz = new FizzBuzz();
        fizzBuzz.fizzBuzzGenerator(15);

        int[] values = {1, 2, 3, 4, 5, 8};
        FindMaximum findMaximum = new FindMaximum();
        System.out.println(findMaximum.findMaximum(values));

        FactorialRecurvisvely factorialRecurvisvely = new FactorialRecurvisvely();
        System.out.println(factorialRecurvisvely.factorialRecurively(5));

        Person person1 = new Person("Gregor", "Warmhud", "1990");
        Person person2 = new Person("Simon", "Garfunkel", "1995");
        Person person3 = new Person("John", "Doe", "1988");
        Person person4 = new Person("Steve", "Wonder", "1977");

        ArrayList<Person> persons = new ArrayList<>();
        persons.add(person1);
        persons.add(person2);
        persons.add(person3);
        persons.add(person4);

        // Bubble Sort
        BubbleSort bubbleSort = new BubbleSort();
        int[] arrayOfNumbers = {9, 5, 6 ,2 , 8, 1, 4, 13, 19};
        int[] sorted = bubbleSort.bubbleSort(arrayOfNumbers);

        for(int i = 0; i < sorted.length; i++) {
            System.out.println(sorted[i] + " ");
        }


        Palindrome palindrome = new Palindrome();
        palindrome.isPalindrome("otto");







    }
}
