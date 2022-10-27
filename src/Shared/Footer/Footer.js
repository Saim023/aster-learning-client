import React from 'react';
import { FaCopyright } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer'>
            <span><FaCopyright></FaCopyright> Copyright Aster Learning Platform || 2022</span>
        </footer>
    );
};

export default Footer;