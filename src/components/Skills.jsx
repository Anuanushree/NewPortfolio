import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import js from '../assets/skills/js.svg';
import html from '../assets/skills/html.svg';
import css from '../assets/skills/css.svg';
import react from '../assets/skills/react.svg';
import nodejs from '../assets/skills/nodejs.svg';
import mongodb from '../assets/skills/mongodb.png';
import mysql from '../assets/skills/mysql.png';
import expressJs from '../assets/skills/expressJs.png';
import bootstrap from '../assets/skills/bootstrap.jpeg';
import github from '../assets/skills/github.jpg';
import aws from '../assets/skills/aws.png';
import { Fade } from 'react-reveal';

function Skills() {
  return (
    // <div className='skills'>
    //   <div className='skills-container card'>
    //     <h2 className='project-heading mb-3'>skills</h2>
    //     <h2 className='skills-heading mt-3'>Technical skills</h2>


  
    //       <div className='card skills-card'>
    //         <img className='img skill-img' src={html} />
    //         <img className='img skill-img' src={css} />
    //         <img className='img skill-img' src={js} />
    //         <img className='img skill-img' src={react} />
    //         <img className='img skill-img' src={nodejs} />
    //         <img className='img skill-img' src={mongodb} />
    //         <img className='img skill-img' src={mysql} />
    //       </div>
    
    //     <h2 className='skills-heading'>Frame works and tools</h2>
        
    //       <div className='card skills-card'>

    //         <img className='img skill-img' src={bootstrap} />
    //         <img className='img skill-img' src={expressJs} />
    //         <img className='img skill-img' src={github} />
    //         <img className='img skill-img' src={aws} />
    //       </div>
      
    //   </div>
    // </div>
    <>
    <Fade left>
      <section className="resume-section mt-5 mb-5" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading  text-light m-5">Technical Skills</div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item "><img src={html} height="80" width="80" alt=""/> </li>
            <li className="list-inline-item"><img src={css} height="80" width="80" alt=""/></li>
            <li className="list-inline-item"><img src={react} height="80" width="80" alt=""/></li>
            <li className="list-inline-item"><img src={js} height="80" width="80" alt=""/></li>
            <li className="list-inline-item"><img src={mongodb} height="80" width="80" alt=""/></li>
            <li className="list-inline-item"><img src={nodejs} height="80" width="80" alt=""/></li>
            <li className="list-inline-item"><img src={mysql} height="80" width="80" alt=""/></li>
          </ul>
          <div className="d-lg-flex justify-content-start">
            <div>
              <div className="subheading m-5 text-light">Other Technical skills </div>
              <ul className="mb-2 list-inline dev-icons">
                <li className="list-inline-item"><img src={bootstrap} height="80" width="80" alt="" /></li>
                <li className="list-inline-item"><img src={expressJs} height="80" width="80" alt="" /></li>
                <li className="list-inline-item"><img src={github} height="80" width="80" alt="" /></li>
                <li className="list-inline-item"><img src={aws} height="80" width="80" alt="" /></li>
              
              </ul>
            </div>

          </div>
        </div>
      </section>
      <hr className="m-0" />
      </Fade>
    </>
  )
}

export default Skills;