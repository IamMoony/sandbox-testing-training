package Java_Exercises.W4D2;

public class Book {

    int id;
    String title;
    String uidNumber;


    public Book(int id, String title, String uidNumber) {

        this.id = id;
        this.title = title;
        this.uidNumber = uidNumber;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUidNumber() {
        return uidNumber;
    }

    public void setUidNumber(String uidNumber) {
        this.uidNumber = uidNumber;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", uidNumber='" + uidNumber + '\'' +
                '}';
    }
}
