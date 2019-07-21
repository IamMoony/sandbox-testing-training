import java.util.Scanner;

public class Palindrome {

    public void isPalindrome(String input) {

        // reverse the given String
        String reverse = new StringBuffer(input).reverse().toString();

        // check whether the string is palindrome or not
        if (input.equals(reverse))
            System.out.println("Yes");

        else
            System.out.println("No");
    }
}


