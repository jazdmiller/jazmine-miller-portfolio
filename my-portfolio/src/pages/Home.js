import React from 'react'
import '../assets/home.css'

function Home() {
  return (
    <div>
        <div className='wrapper'>
            <div className='left-section'>
                <div className='content'>
                    <div className='header-wrapper'>
                        <h1 className='header swipe-up'>
                            Jazmine Miller
                        </h1>
                    </div>
                    <div className='description-wrapper'>
                        <p className='description'>
                            Adaptive full-stack software engineer with a passion for designing
                            and producing intuitive front-end experiences.
                        </p>
                    </div>
                    <div className='btn-wrapper'>
                        <button className='btn'>View Work</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home