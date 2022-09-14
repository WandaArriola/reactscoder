
import React from "react"
import { GetArray } from "../Helpers/GetArray"
import { array } from "../../Data/Data"
import { useEffect } from "react"
import {ItemList} from "./ItemList"
import "./ItenListContainer.css"


export const ContainerList = ({greeting}) => {
    
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState ([true])
    
    useEffect (() => {
        
        GetArray (array)
           .then (res=> setProducts(res))
           .catch (err=> console.log(err))
           .finally (()=> setLoading(false))
    }, [])
    
    return ( 
        <div id="item-list-container">
            {
                loading?
                <div>Cargando2...</div>
            :
            <ItemList items={products} {...Item}/>

            }
        </div>
    )
    
}