import React from 'react';
import { DeleteButtonStyled } from '../styles';
import bookStore from "../stores/BookStore";


const DeleteButton = (props) => {


    const handleDelete = () => {
        bookStore.deletebook(props.bookId);
    };


    return (
        <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    );
};

export default DeleteButton;