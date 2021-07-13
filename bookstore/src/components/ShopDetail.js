import bookStore from "./stores/BookStore";
import BookList from "./BookList";
import { useParams } from "react-router-dom";
import shopStore from "./stores/shopStore";
import { observer } from "mobx-react";

const ShopDetail = () => {

    const { shopSlug } = useParams();
    const shop = shopStore.shops.find((shop) => shop.slug === shopSlug);
    // console.log(shop.books);

    const books = shop.books.map((book) => bookStore.getBookById(book.id));
    // console.log("An OBJECT OR ARRAY", books);

    return (
        <div>
            <BookList books={books} shop={shop} />
        </div>
    )
}

export default observer(ShopDetail);