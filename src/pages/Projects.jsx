import React, { useEffect, useRef } from "react";
import SkillsIcon from "../../public/assets/images/star.svg";
import DarkSkillsIcon from "../../public/assets/images/star-darkmode.svg";
import { gsap } from "gsap";

function Projects({ isDarkMode }) {
  const projectsRef = useRef(null);

  useEffect(() => {
    // const projects = projectsRef.current.children;

    gsap.to(".project-list", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.inOut",
    });

    gsap.to(".project-fade", {
      opacity: 1,
      duration: 0.6,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <div className="container">
      <div className="container-fluid text-center projects-container mx-md-5">
        <div className="row mr-0">
          <div className="col-12 col-md-6 skills-col d-flex flex-column project-fade ">
            <div className=" row justify-content-start mr-0">
              <span className="skills-label">
                <img
                  className="mr-1"
                  src={isDarkMode ? DarkSkillsIcon : SkillsIcon}
                />
                Projects
              </span>
            </div>
            <div className="row mr-0 pl-2 skill-list ">
              Showcase of some of my projects utilizing technologies such as
              React, Javascript, HTML/CSS, Bootstrap, Firebase, Nodejs, and
              Shopify. You can find more of my work on my <span className="m-0 git-link"><a>github</a></span>!
            </div>

          </div>

          <div className="col col-md-6 mr-auto project-col">
            <div className="project-list">
              <div className="project-title">Shakn</div>
              <div className="project-subtext">Design & Development</div>
            </div>
            <div className="project-list pt-4">
              <div className="project-title">Workit Landing Page</div>
              <div className="col project-subtext">Development</div>
            </div>
            <div className="project-list pt-4">
              <div className="project-title">Shakn</div>
              <div className="project-subtext">Design & Development</div>
            </div>
            <div className=" project-list pt-4">
              <div className="project-title">Shakn</div>
              <div className="project-subtext">Design & Development</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
