import React, { useEffect } from "react";
import Img from "/assets/images/about-photo.svg";
import StarIcon from "/assets/images/star.svg";
import DarkStarIcon from "../../public/assets/images/star-darkmode.svg";
import { gsap } from 'gsap'
import { Link } from "react-router-dom";


function About({ isDarkMode }) {

  useEffect(() => {
    gsap.to('.about-stagger', {
      opacity: 1,
      y: 0,
      duration: .6,
      stagger: .2,
      ease: "power2.inOut"
    })

    gsap.to('.img-fade', {
      opacity: 1,
      duration: .6,
      ease: "power2.inOut"
    })
  }, [])
  const skills = [
    "Reactjs",
    "Javascript",
    "HTML/CSS",
    "Bootstrap",
    "SASS",
    "Matrial UI",
    "Git",
    "axios",
    "Jenkins",
    "JIRA",
    "Nodejs",
    "Express",
    "json",
    "sql",
    "mongodb",
    "Firebase",
    "Figma",
    "Adobe",
    "canva",
    "netlify",
    "scrum",
    "github",
    "gsap",
    "framer motion",

  ];
  return (
    <div className="container ">
      <section className="about-hero-section">
        <div className="hero-wrapper">
          <div className="row">
            <div className="col text-left text-md-left text-hello col-md-7 p-0 px-md-3">
              <h1 className="about-stagger">Hello,</h1>
              <h2 className=" about-stagger mb-4">
                I'm Jazmine. A front-end developer and creative thinker.
              </h2>
            </div>
            <div className=" col-12 img-fade text-left pl-0 text-md-center mb-md-0 col-md-5 my-3 mt-md-0">
              <div className="img-container">
                <img src={Img} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-text-section my-md-0">
        <div className="about-text-wrapper">
          <div className="row w-100 w-md-75">
            <div className="col-12 ">
  
              <p className="about-stagger">
                I've been on this exciting journey for 3+ years and have
                equipped myself with a diverse toolbox that includes React,
                JavaScript, HTML/CSS, and Bootstrap, among various other
                frontend frameworks/libraries. With a background in digital
                marketing, I bring a unique perspective to my work,
                understanding the delicate balance between aesthetics and
                functionality. Moreover, my dedication to continuous learning
                allows me to implement innovative solutions tailored to unique
                needs!
              </p>

              <p className="about-stagger">
                I'm a firm believer in collaboration and am excited at the
                prospect of joining a team dedicated to creativity and bringing
                projects to life. Free to reach out!
              </p>
              {/* <p>
                I'm a firm believer in collaboration and recognize the
                significance of constructive feedback and open communication.
                These elements are what I believe leads to successfully
                navigating challenges and exploring new ideas, ultimately
                allowing us to create digital solutions that leave a lasting
                impact. Moreover, my dedication to continuous learning allows me
                to implement innovative solutions tailored to unique needs.
              </p> */}

              <h2 className="about-skills">Skills</h2>
              <div className="row my-3">
                {skills.map((skill) => {
                  return (
                    <div className="col-4 col-sm-3 col-md-3 col-lg-2 p-0 text-center mr-3">
                      <p className=" skill ">{skill}</p>
                    </div>
                  );
                })}
              </div>

              <div className="my-5 row contact-row">
                <div className="col pl-0">
                  <span>
                    <img src={ isDarkMode ? DarkStarIcon : StarIcon} />
                    <Link to="/contact">Contact Me</Link>
                  </span> <br/>
                  <span>
                    <img src={isDarkMode ? DarkStarIcon : StarIcon} />
                    <Link to="/projects">Portfolio</Link>
                  </span> <br />
                  <span>
                    <img src={isDarkMode ? DarkStarIcon : StarIcon} />
                    <Link to="/projects">Resume</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
