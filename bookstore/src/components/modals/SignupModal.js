import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import { CreateButtonStyled } from '../styles';
import authStore from '../stores/authStore';


const SignupModal = (props) => {

    const [user, setuser] = useState({
        firstname: "",
        lastname: "",
        username: "",
        email: "",
        password: "",

    });

    const handleChange = (event) => {
        setuser({ ...user, [event.target.name]: event.target.value });

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        authStore.signup(user);
        props.closeModal();

    };

    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
                contentLabel="Signup Modal"
            >
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1> Signup </h1>
                        <div className="col-6">
                            <label className="form-label">First name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your firstname" name="firstname" onChange={handleChange} />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Last name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your lastname" name="lastname" onChange={handleChange} />
                        </div>
                        <div className="col-6">
                            <label className="form-label">Username</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter a username" name="username" onChange={handleChange} value={user.username} />
                        </div>

                        <div className="col-6">
                            <label className="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter an email" name="email" onChange={handleChange} />
                        </div>

                        <div className="col-6">
                            <label className="form-label">Password</label>
                            <input required type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter a password " name="password" onChange={handleChange} />
                        </div>
                    </div>
                    <CreateButtonStyled >Signup</CreateButtonStyled>
                </form>
            </Modal>
        </div>
    )

}

export default SignupModal;