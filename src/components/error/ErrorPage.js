import React from 'react';
import err from '../../images/error.jpg'
import './Error.css'

const ErrorPage = () => {
    return (
        <div className='error'>
            <h1>Sorry sir I tried.</h1>
            <h3>But I can't found this element you find</h3>
            <img src={err} alt="Hey I am not found" />
        </div>
    );
};

export default ErrorPage;