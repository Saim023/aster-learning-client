import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { providerLogIn } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleLoginWithGoogle = () => {
        providerLogIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Form className='mt-5 w-25 m-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Enter Your Email</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Enter Your Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div>
                <button onClick={handleLoginWithGoogle}>Login With Google</button>
            </div>
        </div>
    );
};

export default Login;