// import styled from "styled-components";
import { BookWrapper } from './styles';
import DeleteButton from "./buttons/DeleteButtons";
import { Link } from 'react-router-dom';


const BookItem = (props) => {
    return (
        <BookWrapper>
            <Link to={`/Books/${props.book.name}`}>
                <img alt={props.book.name} src={props.book.image} />
            </Link>
            <p>{props.book.name}</p>
            <DeleteButton BookDelete={props.BookDelete} book={props.book.name} />
        </BookWrapper>

    );

};

export default BookItem;


