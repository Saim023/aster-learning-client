import React from 'react';
import { Outlet } from 'react-router-dom';
import HomeCarousel from '../../Carousel/HomeCarousel';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Main.css';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;