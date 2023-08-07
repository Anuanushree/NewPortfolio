import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ProgressBar from 'react-bootstrap/ProgressBar';
import demo from '../assets/project/demo.jpg'
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
import aws from '../assets/skills/aws.png'

function Skills() {
  return (
    <div className='skills'>
      <div className='skills-container card'>

        <h2 className='skills-heading'>Technical skills</h2>
        {/* <div className='container skills'>

        <div className='row'>
          <div className='col-2 p-3'><img className='img skill-img' src={html} /></div>
          <div className='col-10 p-4'><ProgressBar animated variant="danger" now={98} /></div> </div>
        <div className='row'>
          <div className='col-2 p-3'><img className='img skill-img' src={css} /></div>
          <div className='col-10 p-4'><ProgressBar animated now={80} /></div> </div>
        <div className='row'>
          <div className='col-2 p-3'><img className='img skill-img' src={js} /></div>
          <div className='col-10 p-4'><ProgressBar animated variant="warning" now={90} /></div> </div>
        <div className='row'>
          <div className='col-2 p-3'><img className='img skill-img' src={react} /></div>
          <div className='col-10 p-4'><ProgressBar animated variant="info" now={90} /></div> </div>
        <div className='row'>
          <div className='col-2 p-3'><img className='img skill-img' src={nodejs} /></div>
          <div className='col-10 p-4'><ProgressBar animated variant="success" now={84} /></div> </div>
        <div className='row'>
          <div className='col-2 p-3'><img className='img skill-img' src={mongodb} /></div>
          <div className='col-10 p-4'><ProgressBar animated variant="secondary" now={90} /></div> </div>
      </div> */}

        <div className='card skills-card'>
          <img className='img skill-img' src={html} />
          <img className='img skill-img' src={css} />
          <img className='img skill-img' src={js} />
          <img className='img skill-img' src={react} />
          <img className='img skill-img' src={nodejs} />
          <img className='img skill-img' src={mongodb} />
          <img className='img skill-img' src={mysql} />
        </div>

        <h2 className='skills-heading'>Frame works and tools</h2>
        <div className='card skills-card'>

          <img className='img skill-img' src={bootstrap} />
          <img className='img skill-img' src={expressJs} />
          <img className='img skill-img' src={github} />
          <img className='img skill-img' src={aws} />
        </div>
      </div>
    </div>
  )
}

export default Skills;