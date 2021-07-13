import { useState } from "react";
import { SignupButtonStyled } from "../styles";
import SigninModal from "../modals/SigninModal";

const SigninButton = () => {

    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    return (
        <>
            <SignupButtonStyled onClick={openModal}>Signin</SignupButtonStyled>
            <SigninModal isOpen={isOpen} closeModal={closeModal} />
        </>
    )
}

export default SigninButton;