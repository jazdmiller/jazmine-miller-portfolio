import React from 'react'
import StarIcon from "/assets/images/star.svg";

function Contact() {
  return (
    <div className='container contact-container'>
      
      <section className='contact-title'>
        <div className='row'>
          <h1>Contact Me</h1>
          <h2>Feel free to reach out to discuss projects, collaborations, or just to say hello.</h2>
        </div>
      </section>

      <section className='email-row'>
        <div className='row'>
         <p>Email: jazminedmiller@gmail.com</p>
        </div>
        <div className='row'>
        <p>Socials: <a>LinkedIn /</a><a> Github</a></p>
        </div>
      </section>

    </div>
  )
}

export default Contact