import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseDetails from '../../CourseDetails/CourseDetails';
import Detail from '../../Detail/Detail';
import './Course.css';

const Courses = () => {
    const details = useLoaderData();

    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col lg="3">
                        <h1>Title Link</h1>
                        {
                            details.map(detail => <ul key={detail.id} detail={detail}><li><Link to={`/course/${detail.id}`}>{detail.title}</Link></li></ul>)
                        }
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