import React from 'react';
import ItemCount from './ItemCount';


const ItenContainerCounter = () => {

    function onAdd (count){
        console.log ('se han seleccionado prodcutos' )
    }

    return (
        <div>
           <ItemCount stock={8} onAdd= {onAdd}/>
        </div>
    );
}

export default ItenContainerCounter;



