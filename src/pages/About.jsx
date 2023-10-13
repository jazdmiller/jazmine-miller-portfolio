import React from "react";
import Img from "/assets/images/about-photo.svg";

function About() {
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
              <p>
                My passion lies in crafting seamless and inclusive user
                experiences. With a background in digital marketing, I bring a
                unique perspective to my work, understanding the delicate
                balance between aesthetics and functionality. My approach is
                defined by continuous iteration - a process where ideas evolve
                and designs refine until they meet the highest standards of
                usability and aesthetics.
              </p>
              <p>
                Equipped with a diverse toolbox that includes React, JavaScript, HTML, CSS,
                and Bootstrap, among various other frontend
                frameworks/libraries, I have spent 3+ years specializing in creating digital
                experiences that are both intuitive and meaningful. 
                </p>
                <p>
                I value
                collaboration and recognize the significance of constructive
                feedback and open communication. These elements are what I believe leads to
                successfully navigating challenges and exploring new ideas together,
                ultimately leading to creating digital solutions that leave a
                lasting impact. Moreover, my dedication to continuous learning allows
                me to implement innovative solutions tailored to unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
