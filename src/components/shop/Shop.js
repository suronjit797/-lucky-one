import React, { useEffect, useState } from 'react';
import Card from '../card/Card'
import SelectedItems from '../selectedItems/SelectedItems';



const Shop = () => {

    // state
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    // fetch product son
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // addToCartHandler
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
    // chooseOneHandler
    const chooseOneHandler = () => {
        if (cart.length <= 1) {
            alert('please select 2 or more items')
        } else {
            const random = Math.floor(Math.random() * cart.length)
            let chosenOne = cart[random]
            setCart([chosenOne])
        }
    }
    // chooseAgainHandler
    const chooseAgainHandler = () => {
        setCart([])
    }

    // delete single items
    const deleteSingleHandler = id => {
        let remainItems = cart.filter(items => items._id !== id)
        setCart(remainItems)
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
                <div className='col-sm-12, col-md-5 col-lg-4 mt-5'>
                    <SelectedItems
                        cart={cart}
                        chooseOneHandler={chooseOneHandler}
                        chooseAgainHandler={chooseAgainHandler}
                        deleteSingleHandler={deleteSingleHandler}
                    />
                </div>

            </div>
        </div>
    );
};

export default Shop;