import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

import './Card.css'

const Card = ({ id, name, price, picture, company, addToCartHandler }) => {
    return (

        <div className="col shop_card ">
            <div className="card h-100">
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {name} </h5>
                    <p className='mb-0'>Brand: {company}</p>
                    <p>Price: <span className="text-blue">${price}</span></p>
                </div>

                <button className='btn btn-success py-2' onClick={() =>addToCartHandler(id)}>
                    <span className="me-3">Add to cart</span>
                    <FontAwesomeIcon icon={faCartPlus} />
                </button>
            </div>
        </div>

    );
};

export default Card;