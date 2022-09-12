
import React from "react"
import { GetArray } from "../Helpers/GetArray"
import { array } from "../../Data/Data"
import { useEffect } from "react"


export const ContainerList = ({greeting}) => {
    
    const [products, setProducts] = useState ([])
    
    useEffect (() => {
        GetArray (array)
           .then (res=> setProducts(res))
           .catch (err=> console.log(err))
    }, [])
    
    return ( 
        <div>{JSON.stringify(products)}</div>
    )
    
}