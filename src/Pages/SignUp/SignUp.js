import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUp = () => {
    return (
        <div>
            <Form className='mt-5 w-25 m-auto'>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Enter Your Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Your Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="photoURL">
                    <Form.Label>Enter Your Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Your Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;