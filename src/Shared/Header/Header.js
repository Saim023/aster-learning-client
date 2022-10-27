import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Icon from '../../assets/logo/computer-icon-32-227917.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaMoon } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }

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
                            <div>
                                {
                                    user?.uid
                                        ?
                                        <>
                                            <span className='me-2'>Hello, {user?.displayName}</span>
                                            {user?.photoURL
                                                ?
                                                <Image style={{ height: "38px" }} roundedCircle src={user?.photoURL}></Image>
                                                :
                                                <FaUser></FaUser>
                                            }
                                            <Button className='ms-3' variant="light" onClick={handleLogOut}>Logout</Button>
                                        </>
                                        :
                                        <>
                                            <Button className='mr-2' variant="light" href="/login">Login</Button>
                                            <Button variant="light" href="/signup">Sign Up</Button>
                                        </>
                                }
                            </div>
                            <Nav.Link>

                            </Nav.Link>
                            {
                                <Nav.Link eventKey={2} href="#memes">
                                    <span><FaMoon></FaMoon></span>
                                </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;