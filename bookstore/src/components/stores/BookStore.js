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
    deletebook = async (bookId) => {
        try {
            await axios.delete(`http://localhost:8000/books/${bookId}`);
            const updateBooks = this.Books.filter((book) => book.id !== bookId);
            this.Books = updateBooks;
        } catch (error) {
            console.log(error);
        }
    };

    updateBook = async (updatedBook) => {
        try {
            await axios.put(`http://localhost:8000/books/${updatedBook.id}`, updatedBook);
            const book = this.Books.find((book) => book.id === +updatedBook.id);
            book.name = updatedBook.name;
            book.image = updatedBook.image;
            book.brief = updatedBook.brief;

        } catch (error) {
            console.log(error);
        }

    };

    getBooks = () => {

        this.Books = Books;
    };

    createbook = async (newBook) => {

        try {
            const response = await axios.post("http://localhost:8000/books", newBook);
            this.Books.push(response.data);
            console.log(response);
        } catch (error) {
            console.error(error);
        }

    };

    fetchBooks = async () => {
        try {
            const response = await axios.get("http://localhost:8000/books");
            this.Books = (response).data;
            console.log(response.data);
        } catch (error) {
            console.error("fetchMovies:", error)
        }

    }



}

const bookStore = new BookStore();
bookStore.fetchBooks();
bookStore.getBooks();

export default bookStore;