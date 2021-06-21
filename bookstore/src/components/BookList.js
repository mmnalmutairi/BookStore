import { useState } from "react";
import Books from "../Books";
import Booksitem from "./BookItem";
import SearchBar from "./SearchBar";

const BookList = (props) => {
    const [query, setQuery] = useState(null);
    const [_books, setBooks] = useState(Books);

    const BookDelete = (book) => {
        const updateBooks = _books.filter((Book) => Book.name !== book);
        setBooks(updateBooks);
    };

    const filteredBooks = _books.filter(book => book.name.toLowerCase().includes(query)).map((book) => (
        <Booksitem book={book} setBook={props.setBook} BookDelete={BookDelete} />
    ));
    return (
        <div>
            <SearchBar setQuery={setQuery} />
            <div className="list">{filteredBooks}</div>
        </div>

    );
};

export default BookList;
