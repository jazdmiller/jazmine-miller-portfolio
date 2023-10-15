import React from "react";
import Img from "/assets/images/about-photo.svg";

function About() {
  const skills = ["Reactjs", "Javascript", "HTML/CSS", "Bootstrap", "SASS", "Matrial UI", "Git", "Nodejs", "Express", "Firebase", "Figma", "Adobe", ]
  return (
    <div className="container ">
      <section className="about-hero-section">
        <div className="hero-wrapper">
          <div className="row">
            <div className="col text-center text-md-left text-hello col-md-7">
              <h1>Hello,</h1>
              <h2 className="mb-4">
                I'm Jazmine. A front-end developer, creative thinker, and
                advocate for exceptional user experiences.
              </h2>
            </div>
            <div className=" col-12 text-center mb-md-0 col-md-5">
              <div className="img-container">
                <img src={Img} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-text-section my-5 my-md-0">
        <div className="about-text-wrapper">
          <div className="row w-100 w-md-75">
            <div className="col-12">
              {/* <p>
                My passion lies in crafting digital experiences that feel
                seamless and inclusive. There's something thrilling about
                translating abstract ideas into tangible interfaces that users
                can interact with and find joy in. My approach is defined by
                continuous iteration - a process where ideas evolve and designs
                refine until they meet the highest standards of usability and
                aesthetics.
              </p> */}
              <p>
                I've been on this exciting journey for 3+ years and have
                equipped myself with a diverse toolbox that includes React,
                JavaScript, HTML, CSS, and Bootstrap, among various other
                frontend frameworks/libraries. With a background in digital
                marketing, I bring a unique perspective to my work,
                understanding the delicate balance between aesthetics and
                functionality. Moreover, my dedication to continuous learning
                allows me to implement innovative solutions tailored to unique
                needs!
              </p>

              <p>
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

              {skills.map(skill => {
            
               return <p className="col-2 pl-0 text-center skill mr-3">{skill}</p>
              })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
