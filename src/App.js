import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import AddBook from "./Components/AddBook";
import UpdateBook from "./Components/UpdateBook";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    const updatedBooks = [...books];
    updatedBooks.push(newBook);
    setBooks(updatedBooks);
  };

  return (
    <Router>
      <div className="container">
        <h1 className="title">Book List</h1>
        <NavBar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/home"
            element={<Home books={books} />}
            addBook={handleAddBook}
          />
          <Route path="/add" element={<AddBook addBook={handleAddBook} />} />
          <Route path="/update/:id" element={<UpdateBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
