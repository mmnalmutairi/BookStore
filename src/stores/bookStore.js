import books from "../books";
import { makeAutoObservable } from "mobx";

class BookStore {
  books = [];
  isLoading = false;

  bookDelete = (book) => {
    this.books = books.filter((cv) => cv.name !== book.name);
  };

  constructor() {
    makeAutoObservable(this);
  }
  getBooks = () => {
    this.books = books;
  };
}

const bookStore = new BookStore();
bookStore.getBooks();

export default bookStore;
