import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Icon from '../../assets/logo/computer-icon-32-227917.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className='navbar-bg'>
                    <Navbar.Brand href="/"> <img src={Icon} alt="" /> Aster Learning</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/courses">Courses</Nav.Link>
                            <Nav.Link href="#pricing">Blog</Nav.Link>
                            <Nav.Link href="#pricing">FAQ</Nav.Link>

                        </Nav>
                        <Nav>
                            <Nav.Link><p>{user?.displayName}</p></Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/signup">Sign Up</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dark Theme
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;