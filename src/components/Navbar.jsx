import React, { useState } from "react";
import SunIcon from "../../public/assets/images/icons8-sun.svg";
import MoonIcon from "../../public/assets/images/moon-icon.png";
import DarkMenuIcon from "../../public/assets/images/dark-menu-icon.svg";
import { Link } from "react-router-dom";

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar container bg-blur  navbar-expand-lg py-0 px-0">
      <button
        className={`navbar-toggler ml-auto mt-4 ${isActive ? "collapsed" : ""}`}
        type="button"
        onClick={toggleMenu}
        aria-controls="navbarNavAltMarkup"
        aria-expanded={isActive ? "true" : "false"}
        aria-label="Toggle navigation"
      >
        {isActive ? (
          <span className="menu-icon">
            <img src={DarkMenuIcon} alt="Menu Icon" />
          </span>
        ) : (
          <span className="mobile-menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </span>
        )}
      </button>
      <div
        className={`collapse navbar-collapse py-3 justify-content-between ${
          isActive ? "show" : ""
        }`}
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav ml-3">
          <Link className="nav-item nav-link" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link" to="/projects">
            Projects
          </Link>
          <Link className="nav-item nav-link" to="/about">
            About
          </Link>
          <Link className="nav-item nav-link" to="/contact">
            Contact
          </Link>
        </div>
        <img
          className="darkmode-icon mr-4"
          src={isDarkMode ? MoonIcon : SunIcon}
          alt={isDarkMode ? "Sun Icon" : "Moon Icon"}
          onClick={toggleDarkMode}
          style={{ cursor: "pointer" }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
