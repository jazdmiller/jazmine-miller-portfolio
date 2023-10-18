import React from "react";
import SkillsIcon from "../../public/assets/images/star.svg";

function Projects() {
  return (
    <div className="container">
    <div className="container-fluid text-center projects-container mx-md-5">
      <div className="row mr-0">
        <div className="col-12 col-md-6 skills-col d-flex flex-column ">
          <div className=" row justify-content-start mr-0">
            <span className="skills-label">
              <img className="mr-1" src={SkillsIcon} />
              Projects
            </span>
          </div>
          <div className="row mr-0 pl-2 skill-list ">
            Showcase of my best projects utilizing technologies such as React,
            Javascript, HTML/CSS, Bootstrap, Firebase, Nodejs, and Shopify. You can find more of my work on my github!
          </div>
         
        </div>

        <div className="col col-md-6 mr-auto project-col">
          <div>
            <div className="project-title">Shakn</div>
            <div className="project-subtext">Design & Development</div>
          </div>
          <div className=" pt-4">
            <div className="project-title">Workit Landing Page</div>
            <div className="col project-subtext">Development</div>
          </div>
          <div className="pt-4">
            <div className="project-title">Shakn</div>
            <div className="project-subtext">Design & Development</div>
          </div>
          <div className=" pt-4">
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
