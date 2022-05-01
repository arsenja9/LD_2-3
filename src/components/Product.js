import React from "react";
import {Button, Card, Col} from "react-bootstrap";

function Product({product, selectProduct}) {
    return <Col xs={12} sm={6} md={4} lg={3}>
        <Card>
            <Card.Img variant="top" src={product.imgSrc} />
            <Card.Body>
                <Card.Title>{product.brand} {product.model} </Card.Title>
                <Card.Text>
                    Price: <b>{product.price}$</b>
                </Card.Text>
                {product.selected ?
                    <Button variant="danger" onClick={() => selectProduct(product.id, false)}>Remove from Cart</Button> :
                    <Button variant="success" onClick={() => selectProduct(product.id, true)}>Add to Cart</Button>
                }
            </Card.Body>
        </Card>
    </Col>;
}

export default Product;