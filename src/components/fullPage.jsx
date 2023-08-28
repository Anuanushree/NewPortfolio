import React from 'react';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Nav from '../nav/nav'

function FullPage() {
    return (
        <div className='fullpage' >
            <Nav />
            <Home />
            <About />
            <br /><br /><br/>
            <Skills />
            
            <Project />
            <br /><br /><br />
            <Contact />

        </div>
    )
}

export default FullPage;