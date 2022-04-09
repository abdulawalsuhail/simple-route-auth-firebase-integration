import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app)

const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const navigate = useNavigate()
    const loction = useLocation()
    const from = loction?.state?.from?.pathname || "/"

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }

    return (
        <div>
            <h1>Please Login!!</h1>
            <div style={{ margin: '10px' }}>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            <form action="">
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" name="" id="" placeholder='Password' />
                <br />
                <input type="button" value="Login" />
            </form>
        </div>
    );
};

export default Login;