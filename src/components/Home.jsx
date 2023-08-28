import React from 'react';
import '../style.css';
import { Parallax } from "react-parallax";
import banner from "../assets/bg.jpg";
import Fade from "react-reveal/Fade";

function Home() {
    return (
        // < div className=' home-body'>

        //     <div className="container-fluid" id='bg' >

        //         {/* <img alt='profile-pic' className='img-fluid home-img rounded-circle mt-4' src={anu} /> */}
        //         <div className="fadeInUp"><p className='home-p'>Hello.. I am</p><h2 className='font'>P Anushree </h2>
        //             <p className='home-p typing-demo'>FULL STACK DEVELOPER.</p>
        //         </div>
        //         <Fade left>

        //             <a href="https://drive.google.com/file/d/1KxGDHZ802k48IswG6SxuZQUILLN_Qoun/view?usp=sharing">
        //                 <button className="theme-fill-btn"> Download CV </button>
        //             </a>
        //         </Fade>
        //     </div>

        // </div>
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
                            <h4>Front-end Developer</h4>
                        </div>
                    </Fade>
                    <Fade left>
                        <div className='d-flex justify-content-center'>
                            <a href="https://www.canva.com/design/DAFsy5iN8kQ/g4ZF3_oEmqDZu5XysvteTA/view?utm_content=DAFsy5iN8kQ&utm_campaign=celebratory_first_publish&utm_medium=link&utm_source=celebratory_first_publish">
                                <button className="theme-fill-btn "> Download CV </button>
                            </a>
                        </div>
                    </Fade>
                </div>
            </Parallax>
        </div>
    )
}

export default Home;