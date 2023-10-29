import React from "react";
import { Link } from "react-router-dom";
import SunIcon from "../../public/assets/images/icons8-sun.svg";
import MoonIcon from "../../public/assets/images/moon-icon.png";

function DesktopMenu({ isDarkMode, toggleDarkMode }) {
  return (
    <div className="collapse navbar-collapse py-3 justify-content-between d-none d-lg-flex">
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
  );
}

export default DesktopMenu;
