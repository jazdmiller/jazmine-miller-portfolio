import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { gsap } from 'gsap';
import StarIcon from "../../public/assets/images/star.svg";
import DarkStarIcon from "../../public/assets/images/star-darkmode.svg";
import { collection, doc, getDoc } from 'firebase/firestore';
import ScrollTrigger  from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { firestore } from '../firebase';


function ProjectDetails({ isDarkMode }) {
  const [isComponentMounted, setIsComponentMounted] = useState(false)

  const { projectId } = useParams()
  const [projectDetails, setProjectDetails] = useState(null)

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
    const fetchProjectDetails = async () => {
      try {
        const projectDocRef = doc(firestore, 'projects', projectId);
        const docSnapshot = await getDoc(projectDocRef);
    
        if (docSnapshot.exists()) {
          setProjectDetails(docSnapshot.data());
        } else {
          console.log('Project not found!');
        }
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    }

    fetchProjectDetails()

    gsap.registerPlugin(ScrollTrigger);

    setIsComponentMounted(true)
  }, [projectId]) 

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  
    // Disable smooth scrolling behavior specifically for this component
    document.body.style.scrollBehavior = 'auto';
  
    // Cleanup function to enable smooth scrolling behavior when component is unmounted
    return () => {
      document.body.style.scrollBehavior = 'smooth';
    };
  }, []);

  useEffect(() => {
    
    const bgDiv = bgDivRef.current;
    const text = textRef.current;
    const image = imgRef.current;
  

    const handleScroll = throttle(() => {
      const bgDiv = bgDivRef.current;
    const text = textRef.current;
    const image = imgRef.current;
      const rect = bgDiv.getBoundingClientRect();
      let mm = gsap.matchMedia();

      if (rect.top < window.innerHeight && rect.bottom > 0 && isComponentMounted) {
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

        gsap.from(text, {
          scrollTrigger: text,
          y: 0,
          opacity: 1,
          duration: .3,
          stagger: 0.2,
          ease: 'power2.out'
        })
        gsap.to(image, {
          width: "50px",
          height: "50px",
        })
        
        gsap.to('.fade-in-section', {
          scrollTrigger: '.fade-in-section',
          y: 0,
          opacity: 1,
          duration: .3,
          stagger: 0.2,
          ease: 'power2.out'
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

  


    const sections = gsap.utils.toArray('.fade-in-section')

    sections.forEach((section, i) => {
      const anim = gsap.fromTo(section, {autoAlpha: 0, y: -50}, {duration: .5, autoAlpha: 1, y: 0} )
      ScrollTrigger.create({
        trigger: section,
        animation: anim,
        toggleActions: "play none none none",
        once: true,
      })
    })

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

    setIsComponentMounted(true);
     window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isComponentMounted]);

  if(!projectDetails) {
    return <div className="loading-container">
    <h1>Loading. . .</h1>
  </div>
  }
  return (
    <div className='container' id='smooth-wrapper'>
      <div id='smooth-content'>
      <section className='outer-div mx-auto my-5'>
        <div ref={bgDivRef} className='inner-div my-md-3 bg-div'>
         <span>{projectDetails.title}<img ref={imgRef} className='mt-3 ' src={isDarkMode ? DarkStarIcon : StarIcon} /></span>
        </div>
      </section>

      <section>      
        <div className='row intro-row'>
        <div ref={textRef} className='intro-text text-left'>
        {projectDetails.meta_description}
        </div>
        </div>
      </section>

      <section className=''>
        <div className='fade-in-section row intro-row '>
          <div className='col-12 col-md-4 px-0  my-3'>
            <div className='role-text'>Github Repo</div>
            <div className='role-subtext'><a target="_blank" href={projectDetails.github_link}>{projectDetails.github_link}</a></div>
          </div>
          <div className='col-12 col-md-4 px-0 my-3'>
          <div className='role-text'>Technologies</div>
            <div className='role-subtext'>{projectDetails.technologies}</div>
          </div>
          <div className='col-12 col-md-4 px-0  my-3'>
          <div className='role-text'>URL</div>
            <div className='role-subtext'><a href={projectDetails.project_link} target='_blank'>{projectDetails.project_link}</a></div>
          </div>
        </div>
      </section>

      <section>
        <div className='fade-in-section row '>
          <div className='col-12 col-md-6 mb-4 mb-md-0'>
            <div className='bg-img bg-desktop' style={{ backgroundImage: `url(${projectDetails.desktop_img})`}}>
            </div>
          </div>
          <div className='col-12 col-md-6'>
          <div className='bg-img bg-mobile' style={{ backgroundImage: `url(${projectDetails.mobile_img})`}}></div>
          </div>
        </div>
      </section>

      <section>

        <div className='row fade-in-section intro-row project-description '>
          <div className='col-12 '>
        {projectDetails.description}
          </div>
        </div>

        <div className='row  intro-row my-5'>
          <div className='col-12 fade-in-section text-center mb-4 title-live-site'>
            Live Site
          </div>
          <div className='col fade-in-section text-center link-live-site py-3'>
          <span className='link-border'><a href={projectDetails.project_link} target='_blank'>{projectDetails.project_link}</a></span>
          </div>
        </div>

        <div className='row intro-row footer justify-content-center my-5' >
          <Link to='/projects'>Back to projects</Link>
        </div>

      </section>

      </div>
    </div>
  );
}

export default ProjectDetails;
