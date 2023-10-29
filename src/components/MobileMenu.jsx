import React from "react";
import { Link } from "react-router-dom";

function MobileMenu() {
  return (
    <div className="modal fade" id="mobileMenuModal" tabIndex="-1" role="dialog" aria-labelledby="mobileMenuModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="mobileMenuModalLabel">
              Mobile Menu
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
    </div>
  );
}

export default MobileMenu;
