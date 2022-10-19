import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../routes/context/UserContext';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app)

const Register = () => {
    const [error, setError] = useState('')

    const { createUser } = useContext(AuthContext)

    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        if (password.length < 6) {
            setError('Password Should have 6 characters ')
            return;
        }
        if (!/(?=.*[!#$%&?@*'^~"])/.test(password)) {
            setError('Password must need a Special character')
            return;
        }
        if (password !== confirm) {
            setError('Your Password not matched')
            return;
        }
        createUser(email, password)
            .then(result => {
                setError('')
                const user = result.user;
                console.log(user);
            })
            .catch(error =>{
                const errorMessage= error.message;
                setError(errorMessage)
            })
        form.reset()
    }
    const googleProvider = new GoogleAuthProvider()
    const googleLogin = () => {
        signInWithPopup(auth,googleProvider)
        .then(result=>{
            const user=result.user
            console.log(user);
        })
        .catch(error=>{
            const errorMessage= error.message;
                setError(errorMessage)
        })
    }
    return (
        <div className='form-container-register'>
            <h2 className='form-title'>Register Here</h2>
            <p className='error'>{error}</p>
            <form onSubmit={handelRegister}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input type="submit" value='Register' className='btn-submit' />
            </form>
            <p>Already have an account <Link to='/login'>Login</Link> here</p>
            <div>
                <p className='othoba'>
                    or
                </p>
            </div>
            <button onClick={googleLogin} className='btn-google'><FaGoogle />  Continue with Google</button>
        </div>
    );
}

export default Register;