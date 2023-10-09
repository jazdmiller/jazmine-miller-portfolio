import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



function Project() {
  const bgDivRef = useRef(null);
  const textRef = useRef(null);

  const throttle = (func, limit) => {
    let inThrottle;
    return function () {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const bgDiv = bgDivRef.current;
    const text = textRef.current;

    const handleScroll = throttle(() => {
      const rect = bgDiv.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        gsap.to(bgDiv, {
          width: '100%',
          height: '100%',
          duration: .5,
          onComplete: () => {
            gsap.from(text, {
              y: 0,
              opacity: 1,
              duration: 1,
              stagger: 0.2,
              ease: 'power2.out' 
            });
          },
        });
      }
    }, 200);

    ScrollTrigger.create({
      trigger: bgDiv,
      start: 'top bottom',
      end: 'bottom center',
      onToggle: self => {
        if (self.isActive) {
          window.addEventListener('scroll', handleScroll);
        } else {
          window.removeEventListener('scroll', handleScroll);
        }
      },
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container '>
      
      <section className='outer-div mx-auto my-5'>
        <div ref={bgDivRef} className='inner-div my-3 bg-div'>
          Shakn
        </div>
      </section>

      <section>
        <div ref={textRef} className='intro-text text-left'>
        Responsive cocktail recipe finder built with Reactjs, axios, HTML, CSS, Bootstrap, and Framer Motion. Deployed with Firebase.
        </div>
      </section>
     
    </div>
  );
}

export default Project;
