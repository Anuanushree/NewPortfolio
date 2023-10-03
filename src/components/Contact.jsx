import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Fade from "react-reveal/Fade";
function Contact() {
    return (
        <div className='contact-body '>
            <h2 className='project-heading mb-3'>Contact</h2>
            <Fade left>
                <div className='container'>
                    <div className='card mx-auto contact bg-primary'>
                        <h2>Address:</h2>
                        <p className='contact-p'>No:16/62 , Perumal Kovil 1st Street ,</p>
                        <p className='contact-p'>Nerkundram,Chennai- 600107 .</p>
                        <p className='contact-p'>Phone-number:9361464185 .</p>

                        <span><a href='https://github.com/Anuanushree' target='_blank'> <i className="fab fa-github fa-4x contact-icon" style={{ color: "#121212" }}></i></a>
                            <a href='mailto:anuabi2408@gmail.com' target='_blank'> <i className="fa fa-envelope fa-4x contact-icon" aria-hidden="true" style={{ color: "#121212" }}></i></a></span>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Contact