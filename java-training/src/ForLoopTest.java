public class ForLoopTest {

    public static void main(String[] args) {

        new ForLoopTest().printLoop(5);
    }

    public void printLoop(int n) {
        for (int i = 1; i < n; i++) {
            for(int j = 1; j < i; j++) {
                System.out.print(j);
            }

            System.out.println(" ");
        }
    }

}
