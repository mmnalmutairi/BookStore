import Modal from 'react-modal';
import { useState } from 'react';
import { CreateButtonStyled } from '../styles';
import shopStore from '../stores/shopStore';


const ShopModal = (props) => {


    const [shop, setshop] = useState({
        name: "",
        image: "",
    });

    const handleChange = (event) => {
        setshop({ ...shop, [event.target.name]: event.target.value });

    }

    const handleImage = (event) => {
        setshop({ ...shop, image: event.target.files[0] });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        shopStore.createShop(shop);
        props.closeModal();

    };

    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                onRequestClose={props.closeModal}
                contentLabel="Shop Modal"
            >
                <form onSubmit={handleSubmit}>
                    <div>
                        <h1> Add a Shop </h1>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Shop Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter the shop name" name="name" onChange={handleChange} value={shop.name} />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Image</label>
                            <input required type="file" class="form-control" id="exampleFormControlInput1" placeholder="Import an image" name="image" onChange={handleImage} />
                        </div>
                    </div>
                    <CreateButtonStyled > Create The Shop </CreateButtonStyled>
                </form>
            </Modal>
        </div>
    )

}

export default ShopModal;