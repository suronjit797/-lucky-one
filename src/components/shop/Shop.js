import React, { useEffect, useState } from 'react';
import Card from '../card/Card'
import SelectedItems from '../selectedItems/SelectedItems';



const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addToCartHandler = id => {
        const cartProduct = products.find(product => product._id === id)
        const isInCart = cart.find(item => item._id === id)
        if (cart.length < 4) {
            if (!isInCart) {
                setCart([...cart, cartProduct])
            } else {
                alert('You already add this product in cart')
            }
        }
        else {
            alert('You can select only 4 items')
        }
    }



    return (
        <div className='py-5'>
            <div className="row g-md-5">
                <div className='col-sm-12 col-md-7 col-lg-8'>
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
                                    addToCartHandler={addToCartHandler}
                                />
                            ))
                        }
                    </div>
                    
                </div>
                <div className='col-sm-12, col-md-5 col-lg-4'>
                    <SelectedItems
                        cart={cart}
                    />
                </div>

            </div>
        </div>
    );
};

export default Shop;