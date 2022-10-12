import React from 'react';

export const ItemDetail= ({title,description,price, picture}) => {
    return (
        <div id= "item-detail">
            <div id ="portada">
                <img src ={picture} alt={title}/>
            </div>
            <div id= "date">
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h3>{price}</h3>
            </div>

        </div>
    )
}
