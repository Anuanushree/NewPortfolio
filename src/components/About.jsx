import React from 'react'
import anu from '../assets/anu.jpg';
function About() {
  return (

    <div id="about">
      <div className='row about-row'>
        <div className='col-md-6'>
          <div className='card about-card'>
            <img alt='profile-pic' className='img about-img' src={anu} />

          </div>
        </div>
        <div className='col-md-6'>
          <p className='about-para'>i am a developer front end and back end language and responsive framework.database
            and best code pratices . my objective is simply to be a best web developer . I can contribute
            Everything I know and can do in the field of technology.   It not only knowledge,but also ,my passion. i love being able to
            learn something everyday. i believe that my understanding of problem solving and complex algorithms are also skills
            that have and will continue to contribute to my overall succcess as a developer.</p>
        </div>
      </div>

    </div>
  )
}

export default About