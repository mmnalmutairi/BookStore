import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import { CreateButtonStyled } from '../styles';
import bookStore from '../stores/BookStore';


const BookModal = (props) => {


    const [book, setbook] = useState(
        props.oldBook ? props.oldBook : {
            name: "",
            image: "",
            brief: "",
        });

    const handleChange = (event) => {
        setbook({ ...book, [event.target.name]: event.target.value });

    }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.oldBook) bookStore.updateBook(book);
        else bookStore.createbook(book);
        props.closeModal();

    };

    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
                contentLabel="Book Modal"
            >
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1> Add a Book to Store </h1>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Book Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter a book name in here" name="name" onChange={handleChange} value={book.name} />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Image</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Import an image" name="image" onChange={handleChange} value={book.image} />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="brief" onChange={handleChange} value={book.brief} ></textarea>
                        </div>
                    </div>
                    <CreateButtonStyled > {props.oldBook ? "Update" : "Add a Book"} </CreateButtonStyled>
                </form>
            </Modal>
        </div>
    )

}

export default BookModal;