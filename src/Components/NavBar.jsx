import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function NavBar() {
  const [search, setsearch] = useState("");

  return (
    <nav>
      <a href="/Movies">Home</a>
      <div className="Navbar">
        <input type="search" placeholder="Search the movie" value={search} onChange={(e) => { setsearch(e.target.value) }} />
        <Link to={`/search${search}`}><button id="searchbtn">Search</button></Link>
        <Link to="/addmovie" className='navItems'>Add New Movie</Link>
        {/* <Link to="/favorites" className='navItems'>Favorites </Link> */}
      </div>
    </nav>
  );
}
