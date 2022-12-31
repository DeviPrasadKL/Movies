import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {

  return (
    <nav>
      <a href="/">Home</a>
      <div className="Navbar">
        <input type="search" placeholder='Search Movie' name="" className='navItems' />
        <Link to="/addmovie" className='navItems'>Add New Movie</Link>
        <Link to="/favorites" className='navItems'>Favorites </Link>
      </div>
    </nav>
  );
}
