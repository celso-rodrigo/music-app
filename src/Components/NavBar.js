import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../Styles/NavBar.css";
import search from "../images/search.svg";
import globe from "../images/globe.svg";
import favoriteFill from "../images/favoriteFill.svg";

function NavBar() {
  const {pathname} = useLocation();
  return(
    <nav className="nav-bar">
      <label htmlFor="search-bar-input" className="search-label">
        <input
          type="text"
          id="search-bar-input"
          name="search-bar-input" 
          className="search-bar"
          placeholder="Search something..."
        />
        <button type="button">
          <img src={search} alt="Search icon" />
        </button>
      </label>
      <div className="navigation-btns">
        <Link to="/albuns" className={pathname === "/albuns" ? "active" : ""}>
          <img src={globe} alt="Global search button" /> 
        </Link>
        <Link to="/favorites" className={pathname === "/favorites" ? "active" : ""}>
          <img src={favoriteFill} alt="Global search button" /> 
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;