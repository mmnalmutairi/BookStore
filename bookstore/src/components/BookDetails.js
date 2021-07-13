import React from 'react';
import { BookWrapper, NameInDetails, BookDetailsStyle, BriefStyle } from './styles';
import DeleteButton from './buttons/DeleteButtons';
import { Redirect, useParams, Link } from "react-router-dom";
import bookStore from "./stores/BookStore";
import { observer } from 'mobx-react';

const BookDetail = () => {
    const bookName = useParams().name;
    const book = bookStore.Books.find((book) => book.name === bookName);

    if (!book) return <Redirect to="/Books" />
    return (
        <BookWrapper>
            <BookDetailsStyle> Books Detail </BookDetailsStyle>
            <div className="style-bg">
                <NameInDetails>{book.name}</NameInDetails>
                <img src={book.image} alt={book.name} />
                <BriefStyle>{book.brief}</BriefStyle>
                <DeleteButton bookId={book.id} />
                <Link to="/Books">Back</Link>
            </div>
        </BookWrapper>
    );

};

export default observer(BookDetail);

