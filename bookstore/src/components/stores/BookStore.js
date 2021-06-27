import Books from "../../Books";
import { makeAutoObservable } from 'mobx';

class BookStore {

    Books = Books;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    deletebook = (bookname) => {
        const updateBooks = this.Books.filter((book) => book.name !== bookname);
        return this.Books = updateBooks;

    };
    getBooks = () => {

        this.Books = Books;
    };

    createbook = (newBook) => {
        this.Books.push(newBook);
    };

}

const bookStore = new BookStore();

bookStore.getBooks();

export default bookStore;