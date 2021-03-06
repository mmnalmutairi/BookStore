import { useState } from "react";
import Booksitem from "./BookItem";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";
import { BiBookAddStyled } from "./styles";
import BookModal from "./modals/BookModal";
import bookStore from "./stores/BookStore";
import authStore from "./stores/authStore";


const BookList = ({ shop }) => {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    // lowercase
    const booklist = bookStore.Books.filter((book) => book.name.toLowerCase().includes(query.toLowerCase())).map((book) => (
        <Booksitem book={book} bookname={book.name} key={book.id} />
    ));


    return (
        <div>
            <SearchBar setQuery={setQuery} />
            {authStore.user && <BiBookAddStyled size="2em" onClick={openModal} />}
            <BookModal closeModal={closeModal} isOpen={isOpen} shop={shop} />
            <div className="list">{booklist}</div>
        </div>

    );
};

export default observer(BookList);
