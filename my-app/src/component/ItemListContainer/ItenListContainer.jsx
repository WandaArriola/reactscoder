import React from 'react';
import Counter from '../Counter/Counter';


const ItenListContainer = () => {

    function onAdd (count){
        console.log ('se han seleccionado ${count} prodcutos' )
    }

    return (
        <div>
           <Counter stock={8} onAdd= {onAdd}/>
        </div>
    );
}

export default ItenListContainer;



