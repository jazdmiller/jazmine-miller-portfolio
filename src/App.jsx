import React, { useState, useEffect } from 'react'
import './App.scss'
import Navbar from './components/Navbar'
import ScrollTriggerTest from './pages/ProjectDetails';
import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects'
import { gsap } from 'gsap';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom'



function App() {


   // DARK MODE //
   const [isDarkMode, setIsDarkMode] = useState(false)

   const toggleDarkMode = () => {
      setIsDarkMode(!isDarkMode)
      // Toggle the 'dark-mode' class on the body element
      document.body.classList.toggle('dark-mode')
   }
   useEffect(() => {
      // Select elements
      const cursor = document.querySelector(".cursor");
      const bigBall = document.querySelector(".cursor__ball--big");
      const smallBall = document.querySelector(".cursor__ball--small");
  
      // Check if the media query matches
      const mediaQuery = window.matchMedia("(min-width: 768px)");
  
      function onMouseMove(e) {
        if (window.innerWidth >= 768) {
          cursor.style.display = "block";
          const mouseX = e.clientX;
          const mouseY = e.clientY;
  
          gsap.to(bigBall, {
            x: mouseX - bigBall.offsetWidth / 2,
            y: mouseY - bigBall.offsetHeight / 2,
            duration: 0.4, 
            ease: "power1.out"
          });
  
          gsap.to(smallBall, {
            x: mouseX - smallBall.offsetWidth / 2,
            y: mouseY - smallBall.offsetHeight / 2,
            duration: 0.15, 
      ease: "power1.out"
          });
        }
      }
  
      function onMouseHover() {
        if (window.innerWidth >= 768) {
          gsap.to(bigBall, { scale: 4, duration: 0.3 });
        }
      }
  
      function onMouseHoverOut() {
        if (window.innerWidth >= 768) {
          gsap.to(bigBall, { scale: 1, duration: 0.3 });
        }
      }
  
      function togglePageCursor() {
         if (mediaQuery.matches) {
            cursor.style.display = "block";
            document.body.style.cursor = "none";
          } else {
            cursor.style.display = "none";
            document.body.style.cursor = "auto";
          }
      }
  
      // Add event listeners
      document.addEventListener("mousemove", onMouseMove);
      document.querySelectorAll(".hoverable").forEach(el => {
        el.addEventListener("mouseenter", onMouseHover);
        el.addEventListener("mouseleave", onMouseHoverOut);
      });
      mediaQuery.addEventListener('change', togglePageCursor); 
  
      // Call on mount to apply the initial state
      togglePageCursor();
  
  
      return () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.querySelectorAll(".hoverable").forEach(el => {
          el.removeEventListener("mouseenter", onMouseHover);
          el.removeEventListener("mouseleave", onMouseHoverOut);
        });
        mediaQuery.removeEventListener('change', togglePageCursor);
      };
    }, []);

  return (
    <div className={isDarkMode ?'dark-mode' : ''}>

    {/* CUSTOM CURSOR */}
            <div className="cursor">
      <div className="cursor__ball cursor__ball--big">
         <svg height="40" width="40">
            <circle cx="20" cy="20" r="20" strokeWidth="0" fill="#955F3D"></circle>
         </svg>
      </div>

      <div className="cursor__ball cursor__ball--small">
         <svg height="10" width="10">
            <circle cx="5" cy="5" r="5" strokeWidth="0"></circle>
         </svg>
      </div>
   </div>

   
   <Router>
   <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/projects" element={<Projects isDarkMode={isDarkMode}/>} />
         <Route path="/projects/:projectId" element={<ProjectDetails  isDarkMode={isDarkMode}/>} />
         <Route path="/about" element={<About isDarkMode={isDarkMode}/>} />
         <Route path="/contact" element={<Contact />} />
      </Routes>
   </Router>
      
      
   
    </div>
  )
}

export default App
