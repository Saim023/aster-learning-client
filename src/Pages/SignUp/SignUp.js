import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');

    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(name, photoURL, email, password)

        const handleUserUpdateProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
                .then(() => { })
                .catch(error => console.error(error))
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
                setError('')
                handleUserUpdateProfile(name, photoURL)
            })
            .catch(error => {
                console.error(error)
                setError(error.message)
            })

    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className='mt-5 w-25 m-auto'>
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
                    <Form.Control name='email' type="email" placeholder="Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Your Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='me-3' variant="primary" type="submit">
                    Sign Up
                </Button>

                <span>Already have an account? <Link to='/login'>Login Now!</Link></span>
                <div>
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </div>
            </Form>
        </div>
    );
};

export default SignUp;