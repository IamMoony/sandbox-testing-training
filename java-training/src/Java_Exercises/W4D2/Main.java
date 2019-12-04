package Java_Exercises.W4D2;

public class Main {

    public static void main(String[] args) {

        // Try process to add book to library

        // Create a book, which will be added to the library array via a function later

        Book book1 = new Book(143, "Book1", "AT1225");
        Book book2 = new Book(145, "Book2", "AT1227");

        // Create library and add books to it later on

        Library library1 = new Library();

        System.out.println(library1.libraryId);

        // Add book to library1

        library1.addBook(book1);
        library1.addBook(book2);

        // Print to see, which books we now have in library1



        // Create user, who can rent a book from the library1

        LibraryUser user1 = new LibraryUser("Simon", "Blaha");

        System.out.println(user1);

        // User1 rents a book from the library1

        library1.rentBook(user1, book1);

        // Print user and check if has a rented book now

        System.out.println(user1);

        // Print library books and check if the book is gone

        library1.printBooksInLibrary();

        // Rent the second book

        library1.rentBook(user1, book2);

        // Test if user received it

        System.out.println(user1);

        library1.printBooksInLibrary();








    }
}
