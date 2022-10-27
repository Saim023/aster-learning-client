import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Icon from '../../assets/logo/computer-icon-32-227917.png';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser, FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../../App';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {

            })
            .catch(error => console.error(error))
    }

    const handleTheme = () => {
        toggleTheme()
    }

    return (
        <div className='nav-items'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className='navbar-bg'>
                    <Navbar.Brand href="/"> <img src={Icon} alt="" /> Aster Learning</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to="/">Home</Link>
                            <Link to="/courses">Courses</Link>
                            <Link to="/blogs">Blogs</Link>
                            <Link to="/faq">FAQ</Link>

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
                                            <Button className='ms-3 me-3' variant="light" onClick={handleLogOut}>Logout</Button>
                                        </>
                                        :
                                        <>
                                            <Button className='mr-2' variant="light" href="/login">Login</Button>
                                            <Button variant="light" href="/signup">Sign Up</Button>
                                        </>
                                }
                            </div>
                            <Link eventKey={2} href="#memes">
                                {
                                    theme === "light"
                                        ?
                                        <span onClick={handleTheme}><FaMoon></FaMoon></span>
                                        :
                                        <span onClick={handleTheme}><FaSun></FaSun></span>
                                }
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;