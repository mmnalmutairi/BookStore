import React from 'react';
import { BookWrapper, NameInDetails, BookDetailsStyle, BriefStyle } from './styles';
import DeleteButton from './buttons/DeleteButtons';
import { Redirect, useParams } from "react-router-dom";
import bookStore from "./stores/BookStore";
import { observer } from 'mobx-react';

const BookDetail = (props) => {
    const bookName = useParams().name;
    const book = bookStore.Books.find((book) => book.name === bookName);


    // const handleDelete = (bookname) => {
    //     props.deletebook(bookname);
    //     props.setQuery();
    // }

    if (!book) return <Redirect to="/Books" />
    return (
        <BookWrapper>
            <BookDetailsStyle> Books Detail </BookDetailsStyle>
            <div className="style-bg">
                <NameInDetails>{book.name}</NameInDetails>
                <img src={book.image} alt={book.name} />
                <BriefStyle>{book.brief}</BriefStyle>
                <DeleteButton bookname={book.name} />
                {/* <DeleteButton onClick={() => props.BookDelete(props.book)}>Back</DeleteButton> */}
            </div>
        </BookWrapper>
    );

};

export default observer(BookDetail);

