import React from 'react';

const Item = ({title, description, price, pictureUrl}) => {
   
  return (

       
  <div id="item" className="card" style={{width: '18rem'}}>
  <img src={pictureUrl} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text">Precio ${price}</p>
    <a href="#" className="btn btn-primary">Ver mas</a>
  </div>
</div>
  )

  
}

export default Item;
