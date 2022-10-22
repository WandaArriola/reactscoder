import React from 'react';
import { Link } from 'react-router-dom';
import "./StyleItemListContainer.scss"
const Item = ({id, title, description, price, pictureUrl}) => {
   
  return (
  <div id="item" className="card" style={{width: '18rem'}}>
  <img src={pictureUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text">Precio ${price}</p>
    <p className="card-text">id{id}</p>
    <a href="#" className="btn btn-primary" on onClick={() => console.log ("Producto comprado")}> 
    <Link  id="letra-boton"to={`/item/${id}`}>
    Ver Detalle del Producto
    </Link></a>
  </div>
</div>
  )

  
}

export default Item;
