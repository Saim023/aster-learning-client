import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ItemImg1 from '../assets/carousel/C-language.jpg';
import ItemImg2 from '../assets/carousel/java-programing.jpg';
import ItemImg3 from '../assets/carousel/python.jpg';
import './HomeCarousel.css';

const HomeCarousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block item-img"
                        src={ItemImg1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Learn C++ Programing And Build Your Knowledge</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block item-img"
                        src={ItemImg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Explore Java With Us And Extend Your Career</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block item-img"
                        src={ItemImg3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Python Can Makes Your Way Easy</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomeCarousel;