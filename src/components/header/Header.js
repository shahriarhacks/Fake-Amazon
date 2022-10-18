import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../routes/context/UserContext';

const Header = () => {
    const {user,logOut}=useContext(AuthContext)
    return (
        <nav className='header'>
            <NavLink to="./" alt="">
                <img src={logo} alt="Brand Logo" />
            </NavLink>
            <div>
                <NavLink className={({ isActive }) =>
                    isActive ? "activeClassName" : undefined} to="/shop">Shop
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "activeClassName" : undefined} to="/orders">Orders
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "activeClassName" : undefined} to="/inventory">Inventory
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "activeClassName" : undefined} to="/about">About
                </NavLink>
              {
                user?.uid ? <button onClick={logOut} className='btn-logout'>Log Out</button>
                : <>
                  <NavLink className={({ isActive }) =>
                    isActive ? "activeClassName" : undefined} to="/login">Login
                </NavLink>
                <NavLink className={({ isActive }) =>
                    isActive ? "activeClassName" : undefined} to="/register">Register
                </NavLink></>
              }
                <span className='text-white'>{user?.email}</span>
            </div>
        </nav>
    );
};

export default Header;