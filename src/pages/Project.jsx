import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



function Project() {
  const bgDivRef = useRef(null);

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

    const handleScroll = throttle(() => {
      const rect = bgDiv.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        gsap.to(bgDiv, {
          width: '100%',
          height: '100%',
          duration: 1,
          scrub: 2,
         
        });
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);
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
      <div>
        blah blah blah
      </div>
      <div>
        blah blah blah
      </div>
      <div>
        blah blah blah
      </div>
      <div>
        blah blah blah
      </div>
      <div>
        blah blah blah
      </div>
      <div>
        blah blah blah
      </div>
      <div>
        blah blah blah
      </div>
      <div>
        blah blah blah
      </div>
      <div>
        blah blah blah
      </div>
      <div>
        blah blah blah
      </div>
      <div>
        blah blah blah
      </div>
      <div>
        blah blah blah
      </div>
      <div>
        blah blah blah
      </div>
      <div>
        blah blah blah
      </div>
    </div>
  );
}

export default Project;
