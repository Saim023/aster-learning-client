import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import './Home.css';

const Home = () => {
    const allCourses = useLoaderData();
    console.log(allCourses);

    return (
        <div className='course-details-container'>
            <div className='course-container'>
                {
                    allCourses.map(course => <Courses
                        key={course.id}
                        course={course}
                    ></Courses>)
                }
            </div>

        </div>
    );
};

export default Home;