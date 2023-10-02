import React from 'react'
import SunIcon from '../../public/assets/images/icons8-sun.svg'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg py-0'>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse py-2 justify-content-between" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-3">
      <a class="nav-item nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      <a class="nav-item nav-link" href="#">Projects</a>
      <a class="nav-item nav-link" href="#">About</a>
      <a class="nav-item nav-link" href="#">Contact</a>
    </div>
    <img  className='darkmode-icon mr-4' src={SunIcon}/>
  </div>
    </nav>
  )
}

export default Navbar