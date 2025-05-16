import React from "react";

const Book = ({ book }) => {
  const { bookName, author, tags, category, rating, image } = book;
  return (
    <div>
      <img src={image} className="w-36 h-44" />
      <div>
        <h1 className="text-2xl font-bold">{bookName}</h1>
        <h2 className="text-gray-400">By: {author}</h2>
        <div></div>
      </div>
    </div>
  );
};

export default Book;
