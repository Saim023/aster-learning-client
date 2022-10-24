import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Raindrop from '../../assets/images/raindrop.mp4';
import './Main.css';

const Main = () => {
    return (
        <div>
            <video className='background' autoPlay loop muted playsInline src={Raindrop}>

            </video>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;