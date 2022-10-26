import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import { Image } from 'react-bootstrap';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course)
    return (
        <div>
            <Card className="text-center w-50 m-auto">
                <Card.Body>
                    <Image className='course-image' src={course.image} alt="" ></Image>
                    <Card.Title>{course.title}</Card.Title>
                    <p>Category: <small>{course.category}</small></p>
                    <Card.Text>
                        {course.description}
                    </Card.Text>
                    <p>Price: <small className='text-danger'>${course.price}</small></p>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <Button variant="primary">Purchase Now</Button></Card.Footer>
            </Card>
        </div>
    );
};

export default CourseDetails;