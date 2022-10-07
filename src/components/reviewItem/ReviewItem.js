import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Review.css'

const ReviewItem = ({ product }) => {
    const { name, price, img, quantity, shipping } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="Products" />
            </div>
            <div className="review-info-container">
                <div className="review-info">
                    <p>{name}</p>
                    <p><small>Price:${price}</small></p>
                    <p><small>Shipping:${shipping}</small></p>
                    <p><small>Quantity:{quantity}</small></p>
                </div>
                <div className="delete-btn">
                    <button className='btn-delete'>
                        <FontAwesomeIcon className='icon' icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;