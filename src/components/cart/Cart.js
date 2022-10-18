import React from 'react';
import './Cart.css'

const Cart = ({ cart ,clearCart,children}) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product?.quantity;
        shipping = shipping + product.shipping * product?.quantity;
    }
    const tax = parseFloat((total * 0.05).toFixed(2));
    const totalG = parseFloat((total + shipping + tax).toFixed(2))
    return (
        <div className='cart-item'>
            <h2>Order Summery</h2>
            <p>Selected Items: {quantity}</p>
            <p><small>Total Price: ${total} </small></p>
            <p><small>Total Shipping: ${shipping} </small></p>
            <p><small>Total Tax: ${tax}</small></p>
            <h4>Grand Total: ${totalG} </h4>
            <div className='flex'>
            <button onClick={clearCart} className='clear-cart-btn'>Clear Cart</button>
            {children}
            </div>
        </div>
    );
};

export default Cart;