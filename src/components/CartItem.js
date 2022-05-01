import React from "react";
import {ListGroup, Badge} from "react-bootstrap";

function CartItem({product, selectProduct}) {
    return <ListGroup.Item><span>{product.brand} {product.model} ({product.price}$)</span>
        <Badge className={'ml-4'} bg="danger"
               onClick={() => selectProduct(product.id, false)}>Remove</Badge>
    </ListGroup.Item>
}

export default CartItem;