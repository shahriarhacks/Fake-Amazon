import React from 'react';
import './Product.css'

const Product = (props) => {
    const { title, price, description, category, image, rating } = props.product;
    console.log(title, price, description, category, image, rating.rate, rating.count)
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='productCategory'>
                <h4>Category: {category}</h4>
                <h4>Price: ৳<span>{price}</span></h4>
            </div>
            <h3>{title}</h3>
            <div className='rating'>
                <p><small>Rating: {rating.rate}</small></p>
                <p><small>Rate Count: {rating.count}</small></p>
            </div>
            <p>{description}</p>
            <div className='buy-dis'>
                <a href='./'><button>Buy Now</button></a>
                <a href='./'><button>Details</button></a>
            </div>
        </div>
    );
};

export default Product;