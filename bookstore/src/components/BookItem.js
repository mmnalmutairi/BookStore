import { BookWrapper, NameInItem } from './styles';
import DeleteButton from "./buttons/DeleteButtons";
import { Link } from 'react-router-dom';


const BookItem = (props) => {

    return (
        <BookWrapper>
            <div className="style-bg">
                <Link to={`/Books/${props.book.name}`}>
                    <img className="book" alt={props.book.name} src={props.book.image} />
                </Link>
                <NameInItem>{props.book.name}</NameInItem>
                <DeleteButton bookname={props.book.name} />
            </div>

        </BookWrapper>

    );

};

export default BookItem;


