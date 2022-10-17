import { React, useState} from 'react';
import "./StyleCounter.scss"

const ItemCount = ({stock, onAdd}) => {

   const [count, setCount] = useState (0)

   function add(){
    if (count < stock){ 
        setCount (count + 1)
    }
    
   }

   function substract (){ 
    if (count > 0){
        setCount (count - 1)
    }
    
   }
   function reset (){
        setCount (0)
   }
    
    return (
     
        <div>

            <div id='counter-box'>
                <h1 className='h1count'>Contador</h1>
                <p>Stock: {stock}</p>
                <p>Cantidad: {count}</p>


                <div className="button-count">
                    <button className='btn' onClick={substract}> - </button>
                    <button className='btn' onClick={reset}> Reset</button>
                    <button className='btn' onClick={add}> + </button>
                </div>
                <div>
                    <button className='btn' onClick={() => onAdd(count) }>Confirmar</button>
                </div>
            </div>


        </div>

    );
}

export default ItemCount;
