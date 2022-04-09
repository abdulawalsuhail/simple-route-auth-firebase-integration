import React from 'react';
import useFirebase from '../../Hook/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase()
    return (
        <div>
            <h1>Please Login!!</h1>
            <div style={{ margin: '10px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
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