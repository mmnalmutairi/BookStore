import React from 'react';
import { useState } from "react";
import { SignupButtonStyled } from "../styles";
import SignupModal from "../modals/SignupModal";

const SignupButton = () => {

    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    return (
        <>
            <SignupButtonStyled onClick={openModal}>Signup</SignupButtonStyled>
            <SignupModal isOpen={isOpen} closeModal={closeModal} />
        </>
    )
}

export default SignupButton;