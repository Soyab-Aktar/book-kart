import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    tags,
    publisher,
    yearOfPublishing,
    category,
  } = book;
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="p-6 border-2 border-gray-600 rounded-md  bg-gray-800">
          <img src={image} className="w-2/5 mx-auto" />
        </div>

        <div className="text-xl text-gray-400 w-3/4">
          <div>
            <h1 className="text-5xl font-bold">{bookName}</h1>
            <p>By: {author}</p>
          </div>

          <p>{category}</p>

          <p>
            <span className="font-bold text-white">Review: </span>
            <p>{review}</p>
          </p>

          <div>
            <p>Tag: </p>
            <div>
              {tags.map((tag, idx) => (
                <button
                  className="font-extrabold text-violet-400 mr-2"
                  key={idx}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div>
              <spam>Number of Pages:</spam>
              <spam>Publisher:</spam>
              <spam>Year of Publishing:</spam>
              <spam>Rating:</spam>
            </div>
            <div>
              <spam>{totalPages}</spam>
              <spam>{publisher}</spam>
              <spam>{yearOfPublishing}</spam>
              <spam>{rating}</spam>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
