public class Dog {

    public String name;
    public int age;
    public int weight;
    public String race;

    public Dog() {

    }

    public void doWoof() {
        System.out.println("Woof!");
    }

    private int getAge() {
        return age;
    }

    private void setAge(int newAge) {
        this.age = newAge;
    }
}
