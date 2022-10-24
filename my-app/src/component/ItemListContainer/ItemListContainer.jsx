
import React from "react"
import { GetArray } from "../Helpers/GetArray"
import { array } from "../../Data/Data"
import { useEffect } from "react"
import { useState } from "react"
import ItemList  from "./ItemList"
import "./StyleItemListContainer.scss"
import { useParams } from "react-router-dom"
/*import Item from "./Item"*/

export const ItemListlContainer= ({greeting}) => {
    
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)
    const {categoryId} = useParams()
     console.log (categoryId)
    
    useEffect (() => {
        GetArray (array)
           .then (res=> {
                categoryId?
                    setProducts (res.filter((Item)=> Item.categoryId === categoryId))
                :
                    setProducts(res)
           })
           .catch (err=> console.log(err))
           .finally (()=> setLoading(false))
    }, [categoryId])
    
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