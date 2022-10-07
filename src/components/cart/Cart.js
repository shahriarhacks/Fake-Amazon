import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.05).toFixed(2));
    const totalG = parseFloat((total + shipping + tax).toFixed(2))
    return (
        <div className='cart-item'>
            <h2>Order Summery</h2>
            <p>Selected Items: {cart.length}</p>
            <p><small>Total Price: ${total} </small></p>
            <p><small>Total Shipping: ${shipping} </small></p>
            <p><small>Total Tax: ${tax}</small></p>
            <h4>Grand Total: ${totalG} </h4>
        </div>
    );
};

export default Cart;