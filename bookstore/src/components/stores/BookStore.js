import Books from '/Users/engineermaha/Developement/JSFoundations-Git/BookStore/bookstore/src/Books.js';
import { makeAutoObservable } from 'mobx';

class BookStore {

    Books = [];
    isLoading = false;

    BookDelete = (book) => {
        return book.filter((Book) => Book.name !== book);
    };

    constructor() {
        makeAutoObservable(this);
    }
    getBooks = () => {

        this.Books = Books;
    }
}

const bookStore = new BookStore();

bookStore.getBooks();

export default bookStore;