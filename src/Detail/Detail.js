import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Detail.css';

const Detail = ({ detail }) => {
    const { title, image, rating, price, description } = detail;
    return (
        <div>
            <Card className="text-center shadow">
                <Image className='course-image' src={image} alt="" ></Image>

                <Card.Body>
                    <h3>{title}</h3>
                    <Card.Text>
                        {description.slice(0, 200)}
                    </Card.Text>
                    <p>Price: <small className='price'>${price}</small></p>
                </Card.Body>
                <Card.Footer className="text-muted detail-btn">
                    <button className='me-5 show-details-btn'><Link to={`/course/${detail.id}`}>Show Details</Link></button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Detail;