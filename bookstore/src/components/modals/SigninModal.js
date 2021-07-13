import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import { CreateButtonStyled } from '../styles';
import authStore from '../stores/authStore';


const SignupModal = (props) => {

    const [user, setuser] = useState({
        username: "",
        password: "",
    });

    const handleChange = (event) => {
        setuser({ ...user, [event.target.name]: event.target.value });

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        authStore.signin(user);
        props.closeModal();

    };

    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
                contentLabel="Signin Modal"
            >
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1> Signin </h1>
                        <div className="col-6">
                            <label for="exampleFormControlInput1" class="form-label">Username</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter a username" name="username" onChange={handleChange} value={user.username} />
                        </div>

                        <div className="col-6">
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <input required type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter a password " name="password" onChange={handleChange} />
                        </div>
                    </div>
                    <CreateButtonStyled >Signin</CreateButtonStyled>
                </form>
            </Modal>
        </div>
    )

}

export default SignupModal;