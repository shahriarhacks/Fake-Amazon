import React from 'react';
import './Register.css'
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { useState } from 'react';


const Register = () => {
    const [error, setError] = useState('')
    const handelRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);
        if (password.length < 6) {
            setError('Password Should have 6 characters ')
            return;
        }
        if(/(?=.*[!#$%&? "])/.test(password)){
          setError('Password must need a Special character')
          return;
        }
        if (password !== confirm) {
            setError('Your Password not matched')
            return;
        }
    }
  
return (
    <div className='form-container-register'>
        <h2 className='form-title'>Login Here</h2>
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
        <button className='btn-google'><FaGoogle />  Continue with Google</button>
    </div>
);
}

export default Register;