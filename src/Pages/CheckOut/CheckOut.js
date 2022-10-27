import React, { useContext } from 'react';

import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const CheckOut = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Card className="mt-5 text-center w-50 m-auto shadow">
                <Image className='course-image' src='#' alt="" ></Image>

                <Card.Body>
                    <h4>{user?.displayName}</h4>
                    <p>{user?.email}</p>
                    <p>Price: <small className='price'>$</small></p>
                </Card.Body>
                <Card.Footer className="text-muted detail-btn">
                    <button className='me-5 show-details-btn'><Link to='/courses'>Go Back To Courses</Link></button>
                    <button className='me-5 show-details-btn'><Link>Download As PDF</Link></button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CheckOut;