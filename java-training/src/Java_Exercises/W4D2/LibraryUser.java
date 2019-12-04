package Java_Exercises.W4D2;

import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.HashMap;

public class LibraryUser {

    static int count = 0;
    int id;
    String name;
    String surname;
    ArrayList<Book> booksRented;


    public LibraryUser(String name, String surname) {

        this.id = count++;
        this.name = name;
        this.surname = surname;
        this.booksRented = new ArrayList<>();

    }

    public LibraryUser() {


    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }


    public ArrayList<Book> getBooksRented() {
        return booksRented;
    }

    public void setBooksRented(ArrayList<Book> booksRented) {
        this.booksRented = booksRented;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public static int getCount() {
        return count;
    }

    public static void setCount(int count) {
        LibraryUser.count = count;
    }
/*

    public void rentBook(Library book) {
        book.removeBook(book);
        booksRented.add(book);
        System.out.println("Library user: " + this.surname + "booked the following book(s): " + "ID: ");
    }
*/
/*
    public void addBook(Book book) {
        booksRented.add(book);
    }
*/

    public void addBook(Book book) {
        this.booksRented.add(book);
    }
    @Override
    public String toString() {
        return "LibraryUser{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", surname='" + surname + '\'' +
                ", booksRented=" + booksRented +
                '}';
    }
}
