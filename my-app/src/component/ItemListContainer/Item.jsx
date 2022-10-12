import React from 'react';


const Item = ({title, description, price, picture}) => {
   
  return (
   
    <div className='Cards'>
        <div className="card border-primary mb-3" id="item"style={{ maxWidth: '15rem', margin: '5px' }}>
    <div className="card-header">{title}</div>
    <div className="card-body">
        <p className="card-text">Descripcion: {description}</p>
        <p className="card-text"> Precio $ {price}</p>
        <p className="card-text">  {picture}</p>
    </div>
</div>
    </div>
   

  )

  
}

export default Item;
