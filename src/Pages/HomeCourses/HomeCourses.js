import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './HomeCourses.css';

const HomeCourses = ({ course }) => {
    const { id, title, image, price, description, category, rating } = course;
    console.log(course)
    return (
        <div>
            <Card className="text-center shadow">
                <Card.Header><h3>{title}</h3></Card.Header>
                <Image className='course-image' src={image} alt="" ></Image>

                <Card.Body>
                    <Card.Title>Category: {category}</Card.Title>
                    <Card.Text>
                        {description.slice(0, 200)}
                    </Card.Text>
                    <p>Price: <small className='price'>${price}</small></p>
                    <Button variant="primary">Purchase Now</Button>
                </Card.Body>
                <Card.Footer className="text-muted"><small>Ratings: {rating}</small></Card.Footer>
            </Card>
        </div>
    );
};

export default HomeCourses;