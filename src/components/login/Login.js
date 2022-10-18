
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className='form-container-login'>
            <h2 className='form-title'>Login Here</h2>
            <form>
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
            <button className='btn-google'><FaGoogle />  Continue with Google</button>
        </div>
    );
};

export default Login;