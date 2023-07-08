import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";
import AddBook from "./Components/AddBook";
import UpdateBook from "./Components/UpdateBook";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
// import LogOut from "./Components/LogOut";

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
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddBook addBook={handleAddBook} />} />
            <Route path="/update/:id" element={<UpdateBook />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Login" element={<Login />} />
            {/* <Route path="/LogOut" element={<LogOut />} /> */}
          </Routes>
        </>
      </div>
    </Router>
  );
}

export default App;
