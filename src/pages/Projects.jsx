import React, { useEffect, useState } from "react";
import SkillsIcon from "../../public/assets/images/star.svg";
import DarkSkillsIcon from "../../public/assets/images/star-darkmode.svg";
import { gsap } from "gsap";
import { firestore } from '../firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { Link } from "react-router-dom";

function Projects({ isDarkMode }) {
  
  const [projects, setProjects] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(firestore, "projects")
      const projectsQuery = query(projectsCollection, orderBy("order", "asc"))
      const snapshot = await getDocs(projectsQuery)
      const projectData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(projectData)
      setProjects(projectData)
      setIsLoading(false)
    
  }
  fetchProjects()
  }, []);

  useEffect(() => {
    if(!isLoading) {
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
    }
  }, [isLoading])

  return (
    <div className="container">
      {isLoading && <div>Loading...</div>}
      {!isLoading && (

      <div className="container-fluid text-center projects-container mx-md-5">
        <div className="row mr-0">
          <div className="col-12 col-md-6 skills-col d-flex flex-column project-fade ">
            <div className=" row projects-row justify-content-start mr-0">
              <span className="skills-label">
                <img
                  className="mr-1"
                  src={isDarkMode ? DarkSkillsIcon : SkillsIcon}
                />
                Projects
              </span>
            </div>
            <div className="row mr-0 pl-2 skill-list ">
              <p>Showcase of some of my projects utilizing technologies such as
              React, Javascript, HTML/CSS, Bootstrap, Firebase, Nodejs, and
              Shopify. You can find more of my work on my <span className="m-0 git-link"><a href="https://github.com/jazdmiller" target="_blank">github</a></span>.</p>
            </div>

          </div>

          <div className="col col-md-6 mr-auto project-col">
            {projects.map((project) => (
              <div className="project-list pt-4">

              <Link key={project.id} to={`/projects/${project.id}`} >
                
                  <div className="project-title">{project.title}</div>
                  <div className="project-subtext">{project.meta_description}</div>
                
              </Link>
              </div>
            ))}
            
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

export default Projects;
