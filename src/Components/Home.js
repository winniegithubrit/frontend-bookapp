import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UpdateBook from "./UpdateBook";

function Home() {
  const [books, setBooks] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    fetch("http://127.0.0.1:5555/books")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching books");
        }
        return response.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => {
        console.error(error);
     
      });
  };

  const handleDeleteBook = (bookId) => {
    fetch(`http://127.0.0.1:5555/books/${bookId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 204) {
          fetchBooks();
        } else {
          throw new Error("Error deleting book");
        }
      })
      .catch((error) => {
        console.error(error);
        // Handle the error (e.g., display an error message)
      });
  };

  const handleUpdateBook = (bookId) => {
    navigate(`/update/${bookId}`);
  };

  return (
    <div>
      <h2>Home</h2>
      <div className="book-list">
        {books.map((book) => (
          <div className="book" key={book.id}>
            <img className="book-cover" src={book.image} alt="Book Cover" />
            <div className="book-details">
              <h2 className="book-title">{book.title}</h2>
              <div className="detail-container">
                <p className="detail">Author: {book.author}</p>
                <p className="detail">Publisher: {book.publisher}</p>
                <p className="detail">Published Date: {book.publisheddate}</p>
                <p className="detail">Due Date: {book.duedate}</p>
                <p className="detail">Description: {book.description}</p>
              </div>
              {isLoggedIn && (
                <>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteBook(book.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="update-button"
                    onClick={() => handleUpdateBook(book.id)}
                  >
                    Update
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {isLoggedIn && <UpdateBook />}
    </div>
  );
}

export default Home;
