import React from 'react';
import { BookWrapper } from './styles';
import DeleteButton from './buttons/DeleteButtons';
import { Redirect, useParams } from "react-router-dom";

const BookDetail = (props) => {
    const bookName = useParams().name;
    const book = props.book.find((book) => book.name === bookName);

    if (!book) return <Redirect to="/Books" />
    return (
        <BookWrapper>
            <h1> Books Detail </h1>
            <p>{book.name}</p>
            <img src={book.image} alt={book.name} />
            <p>{book.brief}</p>
            <DeleteButton onClick={() => props.setBooks(null)}>Back</DeleteButton>
        </BookWrapper>
    );

};

export default BookDetail;

