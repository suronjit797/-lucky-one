import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])




    return (
        <div>
            <Container>
                <Row>
                    <Col sm={12} lg={7} md={6}>
                        {products.length}
                    </Col>
                    <Col sm={12} lg={5} md={6}>
                        jsadklfhalsdkf
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Shop;