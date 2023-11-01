import React from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../../public/assets/images/close-icon.svg";
import LightCloseIcon from "../../public/assets/images/light-close-icon.svg";

function MobileMenu({isDarkMode}) {
  return (
    <div className="modal fade" id="mobileMenuModal" tabIndex="-1" role="dialog" aria-labelledby="mobileMenuModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="m-4 text-right">
            <button type="button"   data-dismiss="modal" aria-label="Close">
              <img src={isDarkMode ? CloseIcon : LightCloseIcon} style={{ width: "40px"}}/>
            </button>
          </div>
          <div className="modal-body">
            <ul className="nav flex-column text-center">
              <Link className="nav-item nav-link mt-5" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link mt-4" to="/projects">
                Projects
              </Link>
              <Link className="nav-item nav-link mt-4" to="/about">
                About
              </Link>
              <Link className="nav-item nav-link mt-4" to="/contact">
                Contact
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
