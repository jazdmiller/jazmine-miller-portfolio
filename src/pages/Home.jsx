import React, { useEffect, useRef } from 'react'
import ArrowIcon from '../../public/assets/images/icons8-arrow-50.png'
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { Link } from 'react-router-dom';

function Home() {

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
           delay: .9
       }
   }
 }


  return (
    <div className='home-page'>

        <div className='home-container mx-auto'>
            <div className='fluid-container home-wrapper ml-4 ml-md-0'>

            <div className='row frontend-row'>
                <div className='col home-text text-left text-lg-right'>
                <motion.div variants={container} animate="visible" initial="hidden" >
                  <AnimatedText text="Frontend" />
                </motion.div>
                </div>
            </div>
            <div className='row dev-row  mb-md-0'>
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
                    <Link to="/projects">Portfolio <span></span></Link>
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