import React, { useState } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import ScrollTriggerTest from './pages/Project';
import Home from './pages/Home'
import Project from './pages/Project';
import Projects from './pages/Projects'
import { gsap } from 'gsap';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'


function App() {

   const [isDarkMode, setIsDarkMode] = useState(true)

  let cursor;
  let bigBall;
  let smallBall;
  
  let body;
  let widthMatches = false;
  
  window.addEventListener("load", () => {
     cursor = document.querySelector(".cursor");
     body = document.body;
  
     bigBall = document.querySelector(".cursor__ball--big");
     smallBall = document.querySelector(".cursor__ball--small");
  
     // Listeners
     var x = window.matchMedia("(min-width: 768px)");
     togglePageCursor(x);
     x.addListener(togglePageCursor);
  
     body.addEventListener("mousemove", onMouseMove);
     document.querySelectorAll(".hoverable").forEach((e) => {
        e.addEventListener("mouseenter", onMouseHover);
        e.addEventListener("mouseleave", onMouseHoverOut);
     });
  });
  
  function togglePageCursor(e) {
     if (e.matches) {
        widthMatches = true;
        body.style.cursor = "none";
     } else {
        widthMatches = false;
        body.style.cursor = "";
        cursor.style.display = "none";
     }
  }
  
  // Move the cursor
  function onMouseMove(e) {
     if (widthMatches) {
        cursor.style.display = "block";
        const mouseX = e.pageX - window.pageXOffset;
    const mouseY = e.pageY - window.pageYOffset;
     
  
     gsap.to(bigBall, {
        x: mouseX - 20,
        y: mouseY - 15,
        duration: 0.8,
        ease: "ease-in-out"
     });
  
     gsap.to(smallBall, {
        x: mouseX - 5,
        y: mouseY - 5,
        duration: 0.3
     });
  }
}
  
  // Hover an element
  function onMouseHover() {
     gsap.to(bigBall, {
        scale: 4,
        duration: 0.3
     });
  }
  
  function onMouseHoverOut() {
     gsap.to(bigBall, {
        scale: 1,
        duration: 0.3
     });
  }
  

  return (
    <div className={isDarkMode ?'dark-mode' : ''}>

    {/* CUSTOM CURSOR */}
            <div class="cursor">
      <div class="cursor__ball cursor__ball--big">
         <svg height="40" width="40">
            <circle cx="20" cy="20" r="20" stroke-width="0" fill="#955F3D"></circle>
         </svg>
      </div>

      <div class="cursor__ball cursor__ball--small">
         <svg height="10" width="10">
            <circle cx="5" cy="5" r="5" stroke-width="0"></circle>
         </svg>
      </div>
   </div>

   
   <Router>
   <Navbar isDarkMode={isDarkMode}/>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/projects/:id" element={<Project />} />
         <Route path="/about" element={<About />} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
   </Router>
      
      
   
    </div>
  )
}

export default App
