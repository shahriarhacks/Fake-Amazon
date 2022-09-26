import React from 'react';
import Products from '../products/Products';
import './Shop.css'

const Shop = () => {
    return (
        <main className='main-container'>
            <div id="product-container">
                <Products></Products>
            </div>
            <div id="order-summery">
                <h2>Order Summery</h2>
            </div>
        </main>
    );
};

export default Shop;