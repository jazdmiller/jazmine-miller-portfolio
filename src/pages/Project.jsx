import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StarIcon from '/assets/images/star.svg'


function Project() {
  const bgDivRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null)

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
    const image = imgRef.current;

    const handleScroll = throttle(() => {
      const rect = bgDiv.getBoundingClientRect();
      let mm = gsap.matchMedia();

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

        gsap.to(image, {
          width: "50px",
          height: "50px",
        })

        mm.add("(min-width: 390px)", () => {
          gsap.to(bgDiv, {
              fontSize: "4rem"
          })
          gsap.to(image, {
            width: "30px",
          height: "30px",
          })

        })
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
         <span>Shakn<img ref={imgRef} className='mt-3 ' src={StarIcon} /></span>
        </div>
      </section>

      <section>      
        <div className='row intro-row'>
        <div ref={textRef} className='intro-text text-left'>
        Responsive cocktail recipe finder built with Reactjs, axios, HTML, CSS, Bootstrap, and Framer Motion. Deployed with Firebase.
        </div>
        </div>
      </section>

      <section clas>
        <div className='row intro-row my-5'>
          <div className='col-12 col-md-4 px-0  my-3'>
            <div className='role-text'>Role</div>
            <div className='role-subtext'>Design & Development</div>
          </div>
          <div className='col-12 col-md-4 px-0 my-3'>
          <div className='role-text'>Technologies</div>
            <div className='role-subtext'>Reactjs, Bootstrap, Axios,
HTML, CSS, Framer Motion,
Firebase, Javascript</div>
          </div>
          <div className='col-12 col-md-4 px-0  my-3'>
          <div className='role-text'>URL</div>
            <div className='role-subtext'>Design & Development</div>
          </div>
        </div>
      </section>
     
    </div>
  );
}

export default Project;
