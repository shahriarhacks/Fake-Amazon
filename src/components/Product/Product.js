import React from 'react';

const Product = (props) => {
    const { title, price, description, category, image, rating } = props.product;
    console.log(title, price, description, category, image, rating.rate, rating.count)
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='productCategory'>
                <h4>{category}</h4>
                <h4>{price}</h4>
            </div>
            <h3>{title}</h3>
            <div className='rating'>
                <p><small>{rating.rate}</small></p>
                <p><small>{rating.count}</small></p>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default Product;