import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './SelectedItems.css'

const SelectedItems = ({cart}) => {
    return (
        <div className='selectedCart py-5 px-4'>
            <h3 className="text-center"> Selected Items </h3>
            {
                cart.map(product => (
                    <div className='d-flex align-items-center my-2' key={product._id}>
                        <img src={product.picture} className="me-2" alt={product.picture} />
                        <p className="name me-auto"> {product.name} </p>
                        <p> <FontAwesomeIcon icon={faTrash}/> </p>
                    </div>
                ))
            }
            
        </div>
    );
};


export default SelectedItems;