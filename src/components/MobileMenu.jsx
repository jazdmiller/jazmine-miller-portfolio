import React, { useEffect, useState,  } from "react";
import { Link } from "react-router-dom";
import CloseIcon from "../../public/assets/images/close-icon.svg";
import LightCloseIcon from "../../public/assets/images/light-close-icon.svg";
import { gsap } from "gsap";

function MobileMenu({isDarkMode}) {


  useEffect(() => {

      gsap.to(".nav-item", {
        opacity: 1,
        y: 0,
        duration: .6,
        stagger: .2,
        ease: "power2.inOut"
      })

  }, [])

  

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
              <Link className="nav-item nav-link mt-5" to="/" data-toggle="modal"
            data-target="#mobileMenuModal">
                Home
              </Link>
              <Link className="nav-item nav-link mt-4" to="/projects" data-toggle="modal"
            data-target="#mobileMenuModal">
                Projects
              </Link>
              <Link className="nav-item nav-link mt-4" to="/about" data-toggle="modal"
            data-target="#mobileMenuModal">
                About
              </Link>
              <Link className="nav-item nav-link mt-4" to="/contact" data-toggle="modal"
            data-target="#mobileMenuModal">
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
