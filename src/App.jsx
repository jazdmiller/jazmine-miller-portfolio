import './App.scss'
import Navbar from './components/Navbar'
import ScrollTriggerTest from './pages/Project';
import Home from './pages/Home'
import Project from './pages/Project';
import Projects from './pages/Projects'
import { gsap } from 'gsap';


function App() {

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
     }
  
     gsap.to(bigBall, {
        x: e.pageX - 20,
        y: e.pageY - 15,
        duration: 0.8,
        ease: "ease-in-out"
     });
  
     gsap.to(smallBall, {
        x: e.pageX - 5,
        y: e.pageY - 5,
        duration: 0.3
     });
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
    <>
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
      <Navbar />
      {/* <Home /> */}
      {/* <Projects /> */}
      <Project />
    </>
  )
}

export default App
