import React from 'react'
import { Grid } from '@mui/material'
import '../assets/nav.css'



function Navbar() {
  return (
    <div>
        <div className='container'>
            <div className='nav-item'>
                <a href="#" className='nav-link'>HOME</a>
            </div>
            <div className='nav-item'>
                <a href="#" className='nav-link'>ABOUT</a>
            </div>
            <div className='nav-item'>
                <a href="#" className='nav-link'>WORK</a>
            </div>
            <div className='nav-line'></div>
            <div className='nav-item contact'>
                <a href="#" className='nav-link'>CONTACT</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar