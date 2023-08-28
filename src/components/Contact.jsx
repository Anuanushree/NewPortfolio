import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Fade from "react-reveal/Fade";
function Contact() {
    return (
        <div className='contact-body'>
            <h2 className='project-heading mb-3'>Contact</h2>
            <Fade left>
                <div className='card contact'>
                    <h2>Address:</h2>
                    <p className='contact-p'>No:16/62 , Perumal Kovil 1st Street ,</p>
                    <p className='contact-p'>Nerkundram,Chennai- 600107 .</p>
                    <p className='contact-p'>Phone-number:9361464185 .</p>

                    <span><a href='https://github.com/Anuanushree'> <i class="fab fa-github fa-4x contact-icon" style={{ color: "#121212" }}></i></a>
                        <a href='mailto:anuabi2408@gmail.com'> <i class="fa fa-envelope fa-4x contact-icon" aria-hidden="true" style={{ color: "#121212" }}></i></a></span>
                </div>
            </Fade>
        </div>
    )
}

export default Contact