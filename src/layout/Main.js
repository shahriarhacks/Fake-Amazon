import React from 'react';
import './Main.css';
import Header from '../components/header/Header'
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Main;