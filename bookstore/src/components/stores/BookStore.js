import { makeAutoObservable } from 'mobx';
import instance from "./instance";



// The file name starts with lowercase 
class BookStore {

    // proprty in lowercase

    Books = [];
    isLoading = true;
    constructor() {
        makeAutoObservable(this);
    }

    // use the id here instead of name
    deletebook = async (bookId) => {
        try {
            await instance.delete(`/books/${bookId}`);
            const updateBooks = this.Books.filter((book) => book.id !== +bookId);
            this.Books = updateBooks;
        } catch (error) {
            console.log(error);
        }
    };

    updateBook = async (updatedBook) => {
        try {
            const formData = new FormData();
            for (const key in updatedBook) formData.append(key, updatedBook[key]);
            const response = await instance.put(`/books/${updatedBook.id}`, formData);
            const book = this.Books.find((book) => book.id === response.data.id);
            for (const key in book) book[key] = response.data[key];

        } catch (error) {
            console.log(error);
        }

    };

    createbook = async (newBook, shop) => {

        try {
            const formData = new FormData();
            for (const key in newBook) formData.append(key, newBook[key]);

            const response = await instance.post(`/shops/${shop.id}/books`, formData);
            this.Books.push(response.data);
            shop.books.push({ id: response.data.id });
        } catch (error) {
            console.error(error);
        }

    };


    fetchBooks = async () => {
        try {
            const response = await instance.get("/books");
            this.isLoading = false;
            this.Books = (response).data;
        } catch (error) {
            console.error("fetchMovies:", error)
        }

    };

    getBookById = (bookId) => {
        return this.Books.find((book) => book.id === bookId);
    };



}

const bookStore = new BookStore();
bookStore.fetchBooks();

export default bookStore;