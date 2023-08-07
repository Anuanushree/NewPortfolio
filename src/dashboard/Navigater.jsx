import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
// import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navigater() {
    const handlefont=(event)=>{
        event.preventDefault();
        
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary" id='nav-bg'>
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="nav" href="about">About</Nav.Link>
                        <Nav.Link className="nav" href="skills">Skills</Nav.Link>
                        <Nav.Link className="nav" href="project">Project</Nav.Link>
                        <Nav.Link className="nav" href="contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Navigater;