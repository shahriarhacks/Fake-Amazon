import React, { createContext } from 'react';
import {getAuth} from 'firebase/auth'
import app from '../../firebase/firebase.config';

const AuthContext=createContext();
const auth=getAuth(app)

const UserContext = ({children}) => {
    const authInfo={}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;