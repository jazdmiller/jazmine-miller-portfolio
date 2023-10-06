import React from 'react'
import SkillsIcon from '../../public/assets/images/star-icon.svg'

function Projects() {
  return (
    <div className='container-fluid text-center projects-container mx-md-5'>

      <div className='row mr-0'>
        <div className='col-12 col-md-6 skills-col d-flex flex-column pl-md-5'>
          <div className=' row mt-md-auto justify-content-start mr-0'>
            <span className='skills-label'><img className='mr-3' src={SkillsIcon} />Skills</span>
          </div>
          <div className='row mr-0 skill-list '>
            <div className='col'>ReactJs</div>
            <div  className='col'>HTML</div>
            <div  className='col'>CSS</div>
          
          </div>
          <div className='row  text-start mr-0 my-3 skill-list '>
            <div className='col text-start'>ReactJs</div>
            <div className='col'>HTML</div>
            <div className='col'>CSS</div>
            
          </div>
          <div className='row mr-0 mb-5 skill-list '>
            <div className='col'>ReactJs</div>
            <div className='col'>HTML</div>
            <div className='col'>CSS</div>
           
          </div>
        </div>

        <div className='col col-md-6 mr-auto project-col pl-5'>
          <div className='mt-4'>
            <div className='project-title'>Shakn</div>
            <div className='project-subtext'>Design & Development</div>
          </div>
          <div className=' pt-4'>
            <div className='project-title'>Workit Landing Page</div>
            <div className='col project-subtext'>Development</div>
          </div>
          <div  className='pt-4'>
            <div className='project-title'>Shakn</div>
            <div className='project-subtext'>Design & Development</div>
          </div>
          <div  className=' pt-4'>
            <div className='project-title'>Shakn</div>
            <div className='project-subtext'>Design & Development</div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Projects