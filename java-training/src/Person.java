public class Person {

    private String givenName;
    private String familyName;

    public String getFullName() {
        return givenName + " " + familyName;
    }

    public Person(String name, String surname) {
        this.givenName = name;
        this.familyName = surname;
    }

    public static void main(String[] args) {
        Person person1 = new Person("simon", "blaha");
        person1.setGivenName("maria");
        person1.setFamilyName("dork");
        System.out.println(person1.getFamilyName());
    }
    // Getter and setter


    public String getGivenName() {
        return givenName;
    }

    public void setGivenName(String givenName) {
        this.givenName = givenName;
    }

    public String getFamilyName() {
        return familyName;
    }

    public void setFamilyName(String familyName) {
        this.familyName = familyName;
    }
}


