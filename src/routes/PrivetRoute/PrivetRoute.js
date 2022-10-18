import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const PrivetRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
   const location=useLocation()
    if(loading){
        return <h2>Loading.....</h2>
    }
    if(user && user?.uid){
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace/>
};

export default PrivetRoute;