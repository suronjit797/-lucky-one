import React, { useEffect, useState } from 'react';
import Card from '../card/Card'



const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])




    return (
        <div className='py-5'>
            <div className="row">
                <div className='col-sm-12 col-md-6 col-lg-7'>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-items-stretch">
                        {
                            products.map(product => (
                                <Card
                                    key={product._id}
                                    id={product._id}
                                    name={product.name}
                                    price={product.price}
                                    picture={product.picture}
                                    company={product.company}
                                />
                            ))
                        }
                    </div>
                    
                </div>
                <div className='col-sm-12, col-md-6 col-lg-5'>
                    jsadklfhalsdkf
                </div>

            </div>
        </div>
    );
};

export default Shop;