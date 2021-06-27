import { useState } from "react";
import Booksitem from "./BookItem";
import SearchBar from "./SearchBar";
import bookStore from "./stores/BookStore";
import { observer } from "mobx-react";
import { BiBookAddStyled } from "./styles";
import BookModal from "./modals/BookModal";

const BookList = () => {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);


    const booklist = bookStore.Books.filter((book) => book.name.toLowerCase().includes(query.toLowerCase())).map((book) => (
        <Booksitem book={book} bookname={book.name} />
    ));


    return (
        <div>
            <SearchBar setQuery={setQuery} />
            <BiBookAddStyled size="2em" onClick={openModal} />
            <BookModal closeModal={closeModal} isOpen={isOpen} />
            <div className="list">{booklist}</div>
        </div>

    );
};

export default observer(BookList);
