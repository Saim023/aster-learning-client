import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCarousel from '../../Carousel/HomeCarousel';
import HomeCourses from '../HomeCourses/HomeCourses';
import './Home.css';

const Home = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);

    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <div className='course-details-container'>
                <div className='course-container'>
                    {
                        allCourses.map(course => <HomeCourses
                            key={course.id}
                            course={course}
                        ></HomeCourses>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;