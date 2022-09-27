import React from 'react';
import './Product.css'
import brokenImg from '../../images/broken-img.png'

const Product = (props) => {
    const { handelAddCart, product } = props;
    const { name, price, seller, img, ratings } = product;
    return (
        <div className='product'>
            <div className='img-padding'>
                <img src={img ? img : brokenImg} alt="" />
            </div>
            <p><strong>{name}</strong></p>
            <div className='product-info'>
                <p><small>Brand: {seller}</small></p>
                <p><small>Price: ${price}</small></p>
                <p><small>Rating: {ratings}star</small></p>
            </div>
            <button onClick={() => handelAddCart(product)} className="btn-addToCart">Add to Cart</button>
        </div>
    );
};

export default Product;