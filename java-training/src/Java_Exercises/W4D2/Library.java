package Java_Exercises.W4D2;

import java.util.ArrayList;

public class Library {

   //Library save books

   static int count = 1;
   String libraryId;
   ArrayList<Book> books;

   public Library() {

      this.libraryId = "Library " + count++;
      this.books = new ArrayList<>();
   }

   // Create method to add book into library

   public void addBook(Book book) {

      this.books.add(book);
      System.out.println("Book: " + book.getTitle() + " with the id " + book.getId() + " has been added to the library " + libraryId);
   }

   // Method to loop through book array and print it

   public void printBooksInLibrary() {

      for (Book element : books) {
         System.out.println(element);
      }
   }

   // Method to remove one book from the library

   public void removeBook(Book book) {
      this.books.remove(book);
   }

   // Method to rent a book from the library

   public void rentBook(LibraryUser user, Book book) {

         removeBook(book);
         user.addBook(book);
         for(Book element : user.getBooksRented()){
            System.out.println(element.getTitle());
         }
      }

   }


