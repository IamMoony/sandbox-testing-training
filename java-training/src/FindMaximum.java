import java.lang.reflect.Array;

public class FindMaximum {

    public Integer findMaximum(int[] list) {

        int largestValue = list[0];

        for(int i = 0; i < list.length; i++) {
            if(i > largestValue) {
                largestValue = i;
            }
        }
        return largestValue;
    }


}
