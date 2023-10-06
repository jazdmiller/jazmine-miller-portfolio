import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Project() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.set('.title-container', {width: '50%', height: '50%', xPercent: 0, yPercent: 0})
    
        gsap.from('.title-container', {
            width: '50%',
            height: '50%',
            scrollTrigger: {
                trigger: ".hero-container",
                pin: true,
                pinSpacing: false,
                start: "top top",
                end: () => "+=" + document.querySelector('.title-container').offsetHeight,
                // end: "+=150%",
                scrub: 1,
                // markers: true,
                onUpdate: (self) => {
                    if (self.progress === 1) {
                        document.querySelector('.title-container').classList.add('expanded')
                    } else {
                        document.querySelector('.title-container').classList.remove('expanded');
                      }
                }
            }
        })

        gsap.to('.title-container', {
            width: '80%',
      height: '80%',
      scrollTrigger: {
        trigger: ".hero-container",
        start: "top center",
        end: () => "+=" + document.querySelector('.title-container').offsetHeight,
        end: "+=150%",
        scrub: 1,
        markers: true,
      }
        })
    }, [])

 
  return (
    <div className='container-fluid hero-container'>
        <div className='title-container'>
            <span>Shakn</span>
        </div>
    </div>
  )
}

export default Project