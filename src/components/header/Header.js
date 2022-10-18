import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>
            <NavLink to="./" alt="">
                <img src={logo} alt="Brand Logo" />
            </NavLink>
            <div>
                <NavLink className={({ isActive }) =>
                    isActive ? "activeClassName" : undefined} to="/shop">Shop</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "activeClassName" : undefined} to="/orders">Orders</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "activeClassName" : undefined} to="/inventory">Inventory</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "activeClassName" : undefined} to="/about">About</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "activeClassName" : undefined} to="/login">Login</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "activeClassName" : undefined} to="/register">Register</NavLink>
            </div>
        </nav>
    );
};

export default Header;