import React from 'react';

import './Card.css'

const Card = ({ id, name, price, picture, company }) => {
    return (

        <div className="col shop_card ">
            <div className="card h-100">
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {name} </h5>
                    <p>Price: <spna className="text-blue">${price}</spna></p>
                </div>

                <button>Add to cart</button>
            </div>
        </div>

    );
};

export default Card;