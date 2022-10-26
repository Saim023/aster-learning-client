import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Detail from '../../Detail/Detail';
import './Course.css';
import ListGroup from 'react-bootstrap/ListGroup';

const Courses = () => {
    const details = useLoaderData();

    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col lg="3">
                        <h3>Course Items</h3>
                        <div className='list-items mt-3'>
                            {
                                details.map(detail => <ListGroup key={detail.id} detail={detail}><ListGroup.Item className='mb-3'><Link to={`/course/${detail.id}`}>{detail.id}. {detail.title}</Link></ListGroup.Item></ListGroup>)
                            }
                        </div>
                    </Col>
                    <Col lg="9">
                        <div className='detail-container'>
                            {
                                details.map(detail => <Detail
                                    key={detail.id}
                                    detail={detail}
                                ></Detail>)
                            }
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;