import { useEffect, useState } from "react";


const PokeContainer = () => {
  
  const [pokemones, setPokemones] = useState ([]);

    useEffect(() => {
       fetch ("https://jsonplaceholder.typicode.com/comments")
       .them ((res) => res.json())
       .them ((response) => console.log (response.results))
       
    }, []);
   
} 


export default PokeContainer;
