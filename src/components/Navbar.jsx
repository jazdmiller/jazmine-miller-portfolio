import React, { useState } from "react";
import SunIcon from "../../public/assets/images/icons8-sun.svg";
import MoonIcon from "../../public/assets/images/moon-icon.png";
import DarkMenuIcon from "../../public/assets/images/dark-menu-icon.svg";
import { Link } from "react-router-dom";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

function Navbar({ isDarkMode, toggleDarkMode }) {
  // const [isActive, setIsActive] = useState(false);

  // const toggleMenu = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <nav className="container nav-bg navbar-expand-lg py-3 px-0">
      <div className="row mx-2">
        <div className="col d-lg-none">
        <img
        className="darkmode-icon ml-3"
        src={isDarkMode ? MoonIcon : SunIcon}
        alt={isDarkMode ? "Sun Icon" : "Moon Icon"}
        onClick={toggleDarkMode}
        style={{ cursor: "pointer" }}
      />
        </div>

        <div className="col text-right">
          <button
            className="align-top p-0 navbar-toggler d-lg-none "
            type="button"
            data-toggle="modal"
            data-target="#mobileMenuModal"
            aria-label="Toggle navigation"
          >
            {/* {isActive ? (
          <span className="menu-icon">
            <img src={DarkMenuIcon} alt="Menu Icon" />
          </span>
        ) : ( */}
            <span className="mobile-menu-icon  mr-4">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      <DesktopMenu isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <MobileMenu className="nav-margin" isDarkMode={isDarkMode} />

      {/* <div
        className="collapse navbar-collapse py-3 justify-content-between d-none d-flex">
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

      <div
        className="modal fade"
        id="mobileMenuModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="mobileMenuModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="mobileMenuModalLabel">
                Mobile Menu
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <ul className="nav flex-column">
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
              </ul>
            </div>
          </div>
        </div>
      </div> */}
    </nav>
  );
}

export default Navbar;
