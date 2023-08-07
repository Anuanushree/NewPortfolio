import React from 'react';
import '../style.css'

import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Project from './Project';
import projectdata from './projectHook';
function Home() {
    return (
        < div className=' home-body'>
            <div>
            <div className="container-fluid" id='bg' >

                {/* <img alt='profile-pic' className='img-fluid home-img rounded-circle mt-4' src={anu} /> */}
                <div className="body"><p className='home-p'>Hello.. I am</p><h2 className='font'>P Anushree </h2>
                    <p className='home-p'>FULL STACK DEVELOPER</p>
                </div>
            </div>
            
            {/* <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> */}
            {/* <About />
            <Skills />
            <Project projectdata={projectdata} />
            <Contact /> */}
            </div>
        </div>
    )
}

export default Home;