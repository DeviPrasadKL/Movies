import React from 'react';
import { Link } from "react-router-dom";
import { useState } from 'react';
import home from "../assets/home-2-64.png";
import plus from "../assets/plus-64.png";

export default function NavBar() {
  const [search, setsearch] = useState("");

  return (
    <nav>
      <Link to="/Movies" style={{paddingRight:"1rem"}}><img className="icons" src={home} alt=""/></Link>
      {/* <a href="/Movies" style={{paddingRight:"1rem"}}><img className="icons" src={home} alt=""/></a> */}
      <div className="Navbar">
        <input type="search" placeholder="Search the movie" value={search} onChange={(e) => { setsearch(e.target.value) }} />
        <Link to={`/search${search}`}><button id="searchbtn">Search</button></Link>
        <Link to="/addmovie" className='navItems'><img className="icons" src={plus} alt=""/></Link>
        {/* <Link to="/favorites" className='navItems'>Favorites </Link> */}
      </div>
    </nav>
  );
}
