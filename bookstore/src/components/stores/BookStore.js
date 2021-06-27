import Books from "../../Books";
import { makeAutoObservable } from 'mobx';
import slugify from 'react-slugify';

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
        newBook.length = this.Books.length + 1;
        newBook.slug = slugify(newBook.name);
        this.Books.push(newBook);
    };

}

const bookStore = new BookStore();

bookStore.getBooks();

export default bookStore;