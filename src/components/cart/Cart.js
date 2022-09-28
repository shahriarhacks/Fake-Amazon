import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart-item'>
            <h2>Order Summery</h2>
            <p>Selected Items: {cart.length}</p>
        </div>
    );
};

export default Cart;