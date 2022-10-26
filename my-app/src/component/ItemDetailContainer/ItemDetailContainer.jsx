import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {array }from "../../Data/Data"
import { GetArray } from '../Helpers/GetArray';
import {ItemDetail} from './ItemDetail';

const ItemDetailContainer = () => {
    
    const [product, SetProduct] = useState ({})
    const [loading, SetLoading] = useState (true)
    const {itemId} = useParams ()
    useEffect(() => {
        GetArray(array)
            .then(res =>{
                const item = res.find ((item) => item.id === Number(itemId))
                SetProduct (item)
            })
            .catch(err => console.log (err))
            .finally (() => SetLoading(false))
    }, [itemId]);

    return (
        <div id ="item-detail-container">
            {
                loading?
                    <div>Cargando...</div>
                :
                    < ItemDetail {...product}/>
            }
        </div>
    );
}

export default ItemDetailContainer;
