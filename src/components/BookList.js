import { useState } from "react";
import BooksItem from "./BookItem";
import SearchBar from "./SearchBar";
import bookStore from "../stores/bookStore";
import { observer } from "mobx-react";

const BookList = () => {
  const [query, setQuery] = useState("");

  const filteredBooks = bookStore.books.filter((cv) =>
    cv.name.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <div className="list">
        {filteredBooks.map((cv, i) => (
          <BooksItem key={i} book={cv} />
        ))}
      </div>
    </div>
  );
};

export default observer(BookList);
