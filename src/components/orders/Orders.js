import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const { initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart)

    const handelRemoveItem = id => {
        const remaining = cart.filter(product=> product.id !==id);
        setCart(remaining)
        removeFromDb(id)
    }
      
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <main className='main-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReviewItem key={product?.id} product={product} handelRemoveItem={handelRemoveItem} />)
                }
                {
                    cart.length === 0 && <h2>There was no item for review please do Shop</h2>
                }
            </div>
            <div className="order-summery">
                <Cart clearCart={clearCart} cart={cart} />
            </div>
        </main>
    );
};

export default Orders;