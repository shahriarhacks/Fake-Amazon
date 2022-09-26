import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <main className='main-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product}></Product>)
                }
            </div>
            <div className='order-summery'>
                <h2>Order Summery</h2>
            </div>
        </main >
    );
};

export default Shop;