import React from "react";
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import '../style.css';
import me from "../assets/anu.jpg";
import Slide from 'react-reveal/Slide';


const About = () => {
  return (
    <div className="about" id="about">
      <Container>
        <Row>
          <div className="col-md-6 sm-12">
            <div className="about-header">
              <Fade left>
                <h2 className="t-color">About Me</h2>
              </Fade>
              <Fade left>
                <h6 className="text-job">Front-end Developer</h6>
              </Fade>
            </div>
            <div className="about-text">
              <Tabs
                defaultActiveKey="about"
                id="uncontrolled-tab-example"
                className="mb-3 about-tab"
              >
                <Tab eventKey="about" title="About" className="about-link">
                  <Slide left>
                    <p className="mt-10">
                      i am a developer front end and back end language and responsive framework.database
                      and best code pratices . my objective is simply to be a best web developer . I can contribute
                      Everything I know and can do in the field of technology.   It not only knowledge,but also ,my passion.
                      <br />
                      <br />
                      i love being able to
                      learn something everyday. i believe that my understanding of problem solving and complex algorithms are also skills
                      that have and will continue to contribute to my overall succcess as a developer

                    </p>
                  </Slide>
                </Tab>
                <Tab
                  eventKey="education"
                  title="Education"
                  className="about-link"
                >
                  <Slide bottom>
                    <div>
                      <h2>BCA. Bachelor of Computer Application</h2>
                      <h4>Queen Mary's College ,chennai</h4>
                      <p>Percentage:74.45%</p>
                      <small>Passing Year: 2022</small>
                    </div>
                  </Slide>
                </Tab>
                <Tab
                  eventKey="certification"
                  title="Course"
                  className="about-link"
                >
                  <Slide bottom>
                    <div>
                      <h2>MERN full stack</h2>
                      <p>Guvi</p>
                      <a href="https://www.guvi.in/certificate?id=XJtE063N6D7295W331&download=true">
                        <h4>View Certification</h4></a>

                    </div>

                  </Slide>
                </Tab>
              </Tabs>
            </div>
          </div>
          <Col xs sm={12} lg md={6} className="my-photo">
            <Fade right>
              <img src={me} alt="my" />
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;