import React, { useEffect, useRef } from 'react'
import ArrowIcon from '../../public/assets/images/icons8-arrow-50.png'
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';

function Home() {
// //ROTATING TEXT 
// const circleRef = useRef(null)
// const text ="Portfolio"
// const characters = Array.from(text)

// useEffect(() => {
//     const circle = circleRef.current
//     const deltaAngle = 360 / characters.length
//     const distanceFromCenter = 50;

//     characters.forEach((character, index) => {
//         const span = document.createElement('span')
//         span.innerText = character

//         const rotateY = `rotateY(${index * deltaAngle}deg)`
//         const translateZ = `translateZ(${distanceFromCenter}px)`
//         span.style.transform = `${rotateY}${translateZ}`
    
//         circle.appendChild(span)
// })

// //SET THE SIZE OF CIRCLE 




  
// }, [characters])




//Framer Motion text

 const container = {
   hidden: {opacity: 0},
   visible: (i = 1) => ({
       opacity: 1, 
       transition: {staggerChildren: 0.12, delayChildren: 0.04 * i }
   })
}

const containerDev = {
   hidden: {opacity: 0},
   visible: (i = 1) => ({
       opacity: 1, 
       transition: {staggerChildren: 0.12, delayChildren: 0.04 * i, delay: .4  }
   })
}

const subText = {
   hidden: {
       opacity: 0,
       y: -20,
       transition: {
           type: "spring",
           damping: 20,
           stiffness: 100
       }
   },

   visible: {
       opacity: 1,
       y: 0,
       transition: {
           type: "spring",
           damping: 20,
           stiffness: 100,
           delay: .6
       }
   }
 }

 const portText = {
   hidden: {
       opacity: 0,
       y: 0,
       transition: {
           type: "spring",
           damping: 20,
           stiffness: 100
       }
   },

   visible: {
       opacity: 1,
       y: 0,
       transition: {
           type: "spring",
           damping: 20,
           stiffness: 100,
           delay: .7
       }
   }
 }


  return (
    <div className='home-page'>
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
        <div className='home-container mx-auto'>
            <div className='fluid-container home-wrapper'>

            <div className='row frontend-row'>
                <div className='col home-text text-left text-lg-right'>
                <motion.div variants={container} animate="visible" initial="hidden" >
                  <AnimatedText text="Frontend" />
                </motion.div>
                </div>
            </div>
            <div className='row dev-row'>
                <div className='col home-text developer-col'>
                  <motion.div variants={containerDev} animate="visible" initial="hidden">
                     <AnimatedText text="Developer" />
                  </motion.div>
                </div>
                <motion.div variants={subText} initial='hidden' animate='visible' className='col'>
                    <div className='row home-sub-text name-text'>
                    Jazmine Miller
                    </div>
                    <div className='row home-sub-text'>
                    Creative Developer
                    </div>
                    <div className='row home-sub-text'>
                    Problem-Solver
                    </div>
                    
                </motion.div>
            </div>
            <div className='row btn-row'>
                <div className='col btn-col '>
                  <motion.div variants={portText} initial="hidden" animate="visible">
                    <a href="#">Portfolio <span></span></a>
                  </motion.div>
                {/* Portfolio <span className='ml-3 arrow-icon'><img src={ArrowIcon}/></span> */}
                {/* <div class= 'ml-auto'id='circle' ref={circleRef}></div> */}
                </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home