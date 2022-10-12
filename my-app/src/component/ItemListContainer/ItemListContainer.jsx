
import React from "react"
import { GetArray } from "../Helpers/GetArray"
import { array } from "../../Data/Data"
import { useEffect } from "react"
import { useState } from "react"
import ItemList  from "./ItemList"
import "./StyleItemListContainer.scss"

export const ItemListlContainer= ({greeting}) => {
    
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)
    
    useEffect (() => {
       /*setLoading (true)*/
        GetArray (array)
           .then (res=> setProducts(res))
           .catch (err=> console.log(err))
           .finally (()=> setLoading(false))
    }, [])
    
    return ( 
        <div id='item-list-container'>
            {
            
            loading?
                     <div>Cargando2...</div>
                :
                   /* <div>{JSON.stringify(products)}</div>*/
                    <ItemList items={products}/>
            }
        </div>
    )
    
}