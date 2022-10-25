import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Course.css';

const Courses = ({ course }) => {
    const { id, title, image, price } = course;
    return (
        <div>
            <Card className="text-center">
                <Card.Header><h3>{title}</h3></Card.Header>
                <Image className='course-image' src={image} alt="" ></Image>

                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default Courses;