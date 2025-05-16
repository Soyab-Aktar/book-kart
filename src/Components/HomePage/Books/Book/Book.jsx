import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, tags, category, rating, image } = book;
  return (
    <div className="mx-auto">
      <Link to={`/books/${bookId}`}>
        <div className="card w-96 transition duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)] hover:ring hover:ring-violet-400 hover:ring-offset-2 hover:ring-offset-gray-800 bg-gray-900">
          <figure className="py-2 border-2 border-gray-600 mb-1 bg-gray-800">
            <img src={image} className="rounded-xl h-56" />
          </figure>
          <div className="border-2 border-gray-600 p-3 rounded-b-md">
            <div>
              {tags.map((tag, idx) => (
                <button
                  className="font-extrabold text-violet-400 mr-2"
                  key={idx}
                >
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title">{bookName}</h2>
            <p>By: {author}</p>
            <div className="flex justify-between items-center mt-6">
              <p>{category}</p>
              <div className="flex gap-2 items-center">
                <p>{rating}</p>
                <FaRegStar />
              </div>
            </div>
            <button className="btn bg-violet-500 text-black mt-1">
              Check Out
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
