import React from 'react';
import '../style.css';
import { Parallax } from "react-parallax";
import banner from "../assets/background.jpg";
import Fade from "react-reveal/Fade";

function Home() {
    return (

        <div className="header" id="header">
            <Parallax
                className="header bgimg"
                blur={5}
                bgImage={banner}
                bgImageAlt="banner"
                strength={500}
            >
                <div className="banner-content">
                    <Fade top>
                        <div className="fadeInUp">
                            <h5>HELLO</h5>
                            <h2>I am P.Anushree</h2>
                            <h4>Full Stack Developer</h4>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className='d-flex justify-content-center'>
                            <a href="https://drive.google.com/file/d/1l4dovHMEmTwMh4r7mg1zomeDNudOVhpP/view?usp=drivesdk">
                                <button className="theme-fill-btn "> View CV </button>
                            </a>
                        </div>
                    </Fade>
                </div>
            </Parallax>
        </div>
    )
}

export default Home;