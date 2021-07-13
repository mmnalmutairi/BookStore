// import Books from "../Books";
// import BookList from "./BookList";
import React from 'react';
import { Title, Description, Image } from "./styles";


const Home = () => {
    // const BooksList = Books.map((book) => (
    //     <BookList name={book.name} image={book.image} key={book.id} />
    // ));

    return (
        <div>
            <Title>BookStore</Title>
            <Description>Where you can find Books</Description>
            <Image
                alt="Books shop"
                src="https://i.pinimg.com/originals/e7/f5/52/e7f55226e1f9fa93978e677db0b85844.jpg"
                className="shop-image"
            />
        </div>
    )
};

export default Home;