import { UpdateButtonStyled } from "../styles";
import BookModal from "../modals/BookModal";
import { useState } from 'react';

const UpdateButton = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <div>
            <UpdateButtonStyled onClick={openModal} > Update </UpdateButtonStyled>
            <BookModal isOpen={isOpen} closeModal={closeModal} oldBook={props.book} />
        </div>

    )
};

export default UpdateButton;
