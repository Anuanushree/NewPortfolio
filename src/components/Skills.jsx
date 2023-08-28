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
    <div className='skills'>
      <div className='skills-container card'>
        <h2 className='project-heading mb-3'>skills</h2>
        <h2 className='skills-heading mt-3'>Technical skills</h2>
    
       
        <Fade left>
          <div className='card skills-card'>
            <img className='img skill-img' src={html} />
            <img className='img skill-img' src={css} />
            <img className='img skill-img' src={js} />
            <img className='img skill-img' src={react} />
            <img className='img skill-img' src={nodejs} />
            <img className='img skill-img' src={mongodb} />
            <img className='img skill-img' src={mysql} />
          </div>
        </Fade>
        <h2 className='skills-heading'>Frame works and tools</h2>
        <Fade left>
          <div className='card skills-card'>

            <img className='img skill-img' src={bootstrap} />
            <img className='img skill-img' src={expressJs} />
            <img className='img skill-img' src={github} />
            <img className='img skill-img' src={aws} />
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Skills;