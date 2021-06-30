import Books from "../../Books";
import { makeAutoObservable } from 'mobx';
import slugify from 'react-slugify';
import axios from 'axios';


// The file name starts with lowercase 
class BookStore {

    // proprty in lowercase

    Books = [];
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
    }

    // use the id here instead of name
    deletebook = async (bookName) => {
        try {
            await axios.delete(`http://localhost:8000/Books/${bookName}`);
            const updateBooks = this.Books.filter((book) => book.name !== bookName);
            this.Books = updateBooks;
        } catch (error) {
            console.log(error);
        }
    };

    updateBook = (updatedBook) => {
        const book = this.Books.find((book) => book.id === updatedBook.id);
        book.name = updatedBook.name;
        book.image = updatedBook.image;
        book.brief = updatedBook.brief;

    };

    getBooks = () => {

        this.Books = Books;
    };

    createbook = async (newBook) => {

        try {
            const response = await axios.post("http://localhost:8000/Books", newBook);
            this.Books.push(response.data);
        } catch (error) {
            console.error(error);
        }

    };

    fetchBooks = async () => {
        try {
            const response = axios.get("http://localhost:8000/Books");
            this.Books = (await response).data;
        } catch (error) {
            console.error("fetchMovies:", error)
        }

    }



}

const bookStore = new BookStore();
bookStore.fetchBooks();
bookStore.getBooks();

export default bookStore;