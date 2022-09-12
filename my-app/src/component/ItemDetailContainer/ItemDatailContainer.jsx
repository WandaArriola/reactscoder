import React, { useState } from 'react';
import { useEffect } from 'react';
import {array }from "../../Data/Data"
import { GetArray } from '../Helpers/GetArray';
import {ItemDetail} from './ItemDetail';

const ItemDatailContainer = () => {
    
    const [product, SetProduct] = useState ({})
    const [loading, SetLoading] = useState ({})
    
    useEffect(() => {
        GetArray(array)
            .then(res =>{
                const item = res.find ((item) => item.id === 1)
                SetProduct (item)
            })
            .catch(err => console.log (err))
            .finally (() => SetLoading(false))
    }, []);

    return (
        <div id ="item-detail-container">
            {
                loading?
                    <div>Cragando...</div>
                :
                    < ItemDetail {...product}/>
            }
        </div>
    );
}

export default ItemDatailContainer;