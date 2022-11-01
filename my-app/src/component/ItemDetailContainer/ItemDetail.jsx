import React from 'react';
import "./ItemDetailContainer.scss"
import ItenContainerCounter from '../ItemCount/ItemContainerCounter';
export const ItemDetail= ({id,title,description,price, pictureUrl}) => {
    return (
        <div id= "item-detail">
            <div id ="portada">
                <img src ={pictureUrl} alt={title}/>
            </div>
            <div id= "date">
                <h1>id{id}</h1>
                <h1>{title}</h1>
                <h2>{description}</h2>
                <h3>Precio $$$ {price}</h3>
                <ItenContainerCounter/>
            </div>
            
        </div>
    )
}
