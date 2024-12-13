import React from 'react';
import { LINK } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <LINK to="/" className="nav-link">Movies List</LINK>
      <LINK to="/add" className="nav-link">Add Movie</LINK>
      
    </nav>
  );
}

export default Navbar;
