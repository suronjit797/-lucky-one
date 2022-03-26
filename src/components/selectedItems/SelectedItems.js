import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './SelectedItems.css'

const SelectedItems = ({ cart, chooseOneHandler, chooseAgainHandler, deleteSingleHandler }) => {
    return (
        <div className='selectedCart py-5 px-4'>
            <h3 className="text-center"> Selected Items </h3>
            {
                cart.map(product => (

                    <div className='d-flex selectedCart-item align-items-center py-3' key={product._id}>
                        <img src={product.picture} className="me-2" alt={product.picture} />
                        <p className="name me-auto mb-0"> {product.name} </p>
                        <p
                            className='selectedCart-remove mb-0'
                            onClick={()=>{deleteSingleHandler(product._id)}}
                        > <FontAwesomeIcon icon={faTrash} /> </p>

                    </div>
                ))
            }

            <div className="mt-4">
                <button
                    className="d-block my-3 btn w-100 btn-outline-success chooseOn"
                    onClick={chooseOneHandler}
                >Choose 1 for me</button>
                <button
                    className="d-block my-3 btn w-100 btn-outline-danger chooseAgain"
                    onClick={chooseAgainHandler}
                >Choose Again</button>
            </div>

        </div>
    );
};


export default SelectedItems;