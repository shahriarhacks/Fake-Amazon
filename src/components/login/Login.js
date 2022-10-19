
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import { FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../routes/context/UserContext';
import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)

const Login = () => {
    const [error, setError] = useState('')

    const { loginUser } = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handelLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
        form.reset();
    }

    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setError('')
                const user = result.user
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })

    }

    return (
        <div className='form-container-login'>
            <h2 className='form-title'>Login Here</h2>
            <p className='error'>{error}</p>
            <form onSubmit={handelLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input type="submit" value='Login' className='btn-submit' />
            </form>
            <p>New to Amazon <Link to='/register'>Register</Link> here</p>
            <div>
                <p className='othoba'>
                    or
                </p>
            </div>
            <button onClick={googleLogin} className='btn-google'><FaGoogle />  Continue with Google</button>
        </div>
    );
};

export default Login;