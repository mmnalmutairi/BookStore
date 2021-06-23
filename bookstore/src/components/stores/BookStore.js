import Books from '/Users/engineermaha/Developement/JSFoundations-Git/BookStore/bookstore/src/Books.js';
import { makeAutoObservable } from 'mobx';

class BookStore {

    Books = [];
    isLoading = false;

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