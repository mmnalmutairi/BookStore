import React from 'react';
import { DeleteButtonStyled } from '../styles';

const DeleteButton = (props) => {
    const handleDelete = () => {
        props.BookDelete(props.book);
    };
    return (
        <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    );
};

export default DeleteButton;