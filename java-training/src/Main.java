import sorting_algorythms.BubbleSort;
//import sorting_algorythms.Dog;
//import sorting_algorythms.Dog;
import sorting_algorythms.Dog;
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



        Person person1 = new Person();
        Person person2 = new Person();
        Person person3 = new Person();
        Person person4 = new Person();

        ArrayList<Person> persons = new ArrayList<>();
        persons.add(person1);
        persons.add(person2);
        persons.add(person3);
        persons.add(person4);

        // Bubble Sort
        //Integer
        BubbleSort bubbleSort = new BubbleSort();
        int[] arrayOfNumbers = {9, 5, 6 ,2 , 8, 1, 4, 13, 19};
        int[] sortedInteger = bubbleSort.bubbleSort(arrayOfNumbers);


        //String
        String[] arrayOfNames = {"Mark", "Bubbles", "Anna,", "Dwork"};
        bubbleSort.bubbleSortString(arrayOfNames);

        //Person Objects

        for(int i = 0; i < sortedInteger.length; i++) {
            System.out.println(sortedInteger[i] + " ");
        }


        Palindrome palindrome = new Palindrome();
        palindrome.isPalindrome("otto");

        Person testperson = new Person();

        testperson.setName("John");


       Dog dog = new Dog();

       dog.setName("Doggo");

        System.out.println("Name of the dog: " + dog.name);





    }
}
