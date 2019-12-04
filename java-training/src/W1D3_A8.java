import java.util.Scanner;

public class W1D3_A8 {

    public static void main(String[] args) {
        System.out.println(new W1D3_A8().calcGrade());
    }

    public String calcGrade() {

        Scanner scanner = new Scanner(System.in);

        String[] subjects = {"math", "bio", "sports", "german", "chemisty"};
        String result = "";
        String grade;


        for(String subject : subjects) {

            System.out.println("Enter points for the subject: " + subject);
            int points = scanner.nextInt();
            if(points >= 90) {
                grade = "A";
            } else if(points >= 80) {
                grade = "B";
            } else if(points >= 70) {
                grade = "C";
            } else if(points >= 60) {
                grade = "D";
            } else if(points >= 40) {
                grade = "E";
            } else {
                grade = "F";
            }

           result += subject + ": " + grade + "\n";

        }
        return result;

    }
}
