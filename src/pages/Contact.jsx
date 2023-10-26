import React, { useEffect } from "react";
import StarIcon from "/assets/images/star.svg";
import { gsap } from "gsap";

function Contact() {
  useEffect(() => {
    gsap.to(".contact-fade", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.2,
      ease: "power2.inOut",
    });
  });
  return (
    <div className="container contact-container">
      <section className="contact-title">
        <div className="row">
          <h1 className="contact-fade">Contact Me</h1>
          <h2 className="contact-fade">
            Feel free to reach out to discuss projects, collaborations, or just
            to say hello.
          </h2>
        </div>
      </section>

      <section className="email-row contact-fade">
        <div className="row">
          <p>Email: jazminedmiller@gmail.com</p>
        </div>
        <div className="row">
          <p>
            Socials: <a href="https://www.linkedin.com/in/jazminemiller/" target="_blank">LinkedIn</a><span> / </span>
            <a href="https://github.com/jazdmiller" target="_blank"> Github</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Contact;
