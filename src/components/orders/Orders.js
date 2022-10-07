import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)
    return (
        <main className='main-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem key={product?.id} product={product} />)
                }
            </div>
            <div className="order-summery">
                <Cart cart={cart} />
            </div>
        </main>
    );
};

export default Orders;