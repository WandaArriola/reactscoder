import React from 'react';
import "./ItemDetailContainer.scss"
export const ItemDetail= ({title,description,price, pictureUrl}) => {
    return (
        <div id= "item-detail">
            <div id ="portada">
                <img src ={pictureUrl} alt={title}/>
            </div>
            <div id= "date">
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h3>Precio $ {price}</h3>
            </div>

        </div>
    )
}
