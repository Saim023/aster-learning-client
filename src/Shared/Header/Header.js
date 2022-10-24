import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Icon from '../../assets/logo/computer-icon-32-227917.png';

const Header = () => {
    return (
        <div>
            <Navbar className='navbar-bg' collapseOnSelect expand="lg" bg="transparent">
                <Container>
                    <Navbar.Brand href="#home"> <img src={Icon} alt="" />Aster Learning</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Courses</Nav.Link>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>
                            <Nav.Link href="#pricing">FAQ</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Login</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Sign Up
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;