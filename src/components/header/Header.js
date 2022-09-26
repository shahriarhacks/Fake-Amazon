import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/review">Review</a>
                <a href="/manage-inventory">Manage Inventory</a>
            </div>
        </nav>
    );
};

export default Header;