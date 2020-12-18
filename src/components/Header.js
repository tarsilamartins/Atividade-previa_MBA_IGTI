import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar">
      <img className="logo" src="https://via.placeholder.com/70" alt="" />
      <div className="home">
        <Link to="/">Home</Link>
        <Link to="/userslist">Users List</Link>
      </div>
      <div className="signin">
        <Link to="/signin">SignIn</Link>
        <Link to="/signup">SignUp</Link>
      </div>
    </div>
  );
}

export default Header;
