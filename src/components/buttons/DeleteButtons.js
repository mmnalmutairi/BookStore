import React from "react";
import { DeleteButtonStyled } from "../styles";
import bookStore from "../../stores/bookStore";
const DeleteButton = (props) => {
  const handleDelete = () => {
    bookStore.bookDelete(props.book);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
