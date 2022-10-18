import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import ReviewItem from '../reviewItem/ReviewItem';
import './Orders.css'
import Lottie from "lottie-react"
import empty from '../../assets/aniamtionJSON/empty-box.json'

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
                    cart.length === 0 && <div className='empty-cart'>
                        <div>
                            <h2>No Items for review please do Shop Now <Link to='/shop'>Shop Now</Link></h2>
                        </div>
                      <div className='empty-cart'> 
                       <Lottie animationData={empty} loop={true}/>
                        </div>
                         </div>
                }
            </div>
            <div className="order-summery">
                <Cart clearCart={clearCart} cart={cart} />
            </div>
        </main>
    );
};

export default Orders;