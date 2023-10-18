import React from 'react'
import SunIcon from '../../public/assets/images/icons8-sun.svg'
import MoonIcon from '../../public/assets/images/moon-icon.png'
import { Link } from 'react-router-dom'

function Navbar({ isDarkMode }) {
  return (
    <nav className='navbar container navbar-expand-lg py-0 px-0'>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse py-3 justify-content-between" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-3">
      <Link class="nav-item nav-link" to="/">Home</Link>
      <Link class="nav-item nav-link" to="/projects">Projects</Link>
      <Link class="nav-item nav-link" to="/about">About</Link>
      <Link class="nav-item nav-link" to="/contact">Contact</Link>
    </div>
    <img  className='darkmode-icon mr-4' src={isDarkMode ? MoonIcon : SunIcon }/>
  </div>
    </nav>
  )
}

export default Navbar