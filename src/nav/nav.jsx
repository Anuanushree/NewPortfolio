import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/as.png";
import { Link } from "react-scroll";
import "./nav.css";
import { useState, useEffect } from "react";

const Menubar = () => {
    const [navColor, setNavColor] = useState(" ");

    const changeNav = () => {
        if (window.scrollY > 0) {
            setNavColor("dark");
        } else {
            setNavColor("transparent");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeNav);
    }, []);

    // console.log(navColor);

    return (
        <div className="sticky-top">
            <Navbar bg={navColor} expand="lg" className="navigation nav-active">
                <Navbar.Brand>
                    <img
                        src={logo}
                        alt="logo"
                        width="100"
                        height="80"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto nav nav-header">
                        <Link
                            to="/"
                            activeClass="active"
                            className="link-menu"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-95}
                        >
                            Home
                        </Link>
                        <Link
                            to="about"
                            className="link-menu"
                            activeClass="active"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-95}
                        >
                            About
                        </Link>
                        <Link
                            to="skills"
                            className="link-menu"
                            activeClass="active"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-95}
                        >
                            skills
                        </Link>
                        <Link
                            to="project"
                            className="link-menu"
                            activeClass="active"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-95}
                        >
                            project
                        </Link>
                        {/* <Link
                            to="blog"
                            className="link-menu"
                            activeClass="active"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-95}
                        >
                            Blog
                        </Link> */}
                        <Link
                            to="contact"
                            className="link-menu"
                            activeClass="active"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-95}
                        >
                            Contact
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Menubar;