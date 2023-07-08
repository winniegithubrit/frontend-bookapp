import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">SignUp</Link>
        <Link to="/add">addBook</Link>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
       
      </div>
    </div>
  );
}

export default Navbar;
