import React from 'react';
import {Card, Button} from "react-bootstrap"

const Item = ({title, description, price, picture}) => {
    return (
        <Card style={{ width: '18rem' }} id="item">
      <Card.Img variant="top" src={picture} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Title> Precio: $ {price}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    );
}

export default Item;s
