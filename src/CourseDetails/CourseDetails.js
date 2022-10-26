import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './CourseDetails.css';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course)
    return (
        <div>
            <Card className="mt-5 text-center w-50 m-auto">
                <Card.Body>
                    <Image className='course-image' src={course.image} alt="" ></Image>
                    <Card.Title>{course.title}</Card.Title>
                    <p>Category: <small>{course.category}</small></p>
                    <Card.Text>
                        Descriptions:  {course.description.slice(0, 300)}
                    </Card.Text>
                    <p>Price: <small className='text-danger'>${course.price}</small></p>
                </Card.Body>
                <Card.Footer className="text-muted course-detail-btn">
                    <button className='me-5 show-details-btn'><Link to='/courses'>Go Back To Courses</Link></button>
                    <button className='me-5 show-details-btn'><Link>Get Premium Access</Link></button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseDetails;