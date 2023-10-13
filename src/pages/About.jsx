import React from "react";
import Img from "/assets/images/about-photo.svg";

function About() {
  return (
    <div className="container ">
      
      <section className="about-hero-section">
        <div className="hero-wrapper">
          <div className="row">
            <div className="col text-center col-md-7">
              <h1 className="text-hello">Hello,</h1>
              <h2>
                I'm Jazmine. A creative front-end developer, designer, and
                problem-solver.
              </h2>
            </div>
            <div className="col-12 text-center col-md-5">
              <div className="img-container">
                <img src={Img} /> 
              </div>
            </div>
          </div>

          {/* <div className="row img-row ">
            <div className="col-12 col-lg-6"></div>
            <div className="col d-flex">
              <p className="w-75 mt-auto about-hero-text"></p>
            </div>
          </div> */}
        </div>
      </section>

      <section></section>
    </div>
  );
}

export default About;
