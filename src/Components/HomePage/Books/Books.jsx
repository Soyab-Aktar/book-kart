import React, { useEffect, useState } from "react";
import Book from "./Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl text-center">Books</h1>
      <h2>Books: {books.length}</h2>
      <div className="grid grid-cols-3">
        {books.map((book) => (
          <Book book={book} key={book.bookId} />
        ))}
      </div>
    </div>
  );
};

export default Books;
