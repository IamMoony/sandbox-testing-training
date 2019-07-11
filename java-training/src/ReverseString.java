public class ReverseString {

    public String reverseString(String string) {

        String stringToBeReversed = "";

        for(int i = string.length() - 1; i >= 0; i--) {
            stringToBeReversed = stringToBeReversed + string.charAt(i);
        }
        return stringToBeReversed;
    }
}
