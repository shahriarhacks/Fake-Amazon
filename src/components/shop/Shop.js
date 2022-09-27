import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handelAddCart = (product) => {
        console.log(product)
    }
    return (
        <main className='main-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} handelAddCart={handelAddCart}></Product>)
                }
            </div>
            <div className='order-summery'>
                <Cart></Cart>
            </div>
        </main >
    );
};

export default Shop;