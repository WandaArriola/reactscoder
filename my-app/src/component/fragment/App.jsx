import {React, useState} from 'react';
import './App.css';
import Boton from './Boton';
import Form from './Form';
import ItenListContainer from './ItenListContainer';
import NavBar from './NavBar';



function App ()  {
    return (
       
        <div className='App'>
            <NavBar/>
            
            <Form/>
            <Boton/>
            
            <ItenListContainer/>
        </div>
    );
}

export default App;



//etso va arriba delreturn//

/*const [cont, setCont ] = useState (0)

function contador (operacion) {
    if (operacion == "+"){+
        setCont (cont +1)
    } else {
        setCont (cont -1)
    }
    console.log (cont)
}*/




//esto va dentro del return//

/*<NavBar/>

<p>
    contador: {cont}
</p>

<button className='btn btn-secondary' onClick={() => contador("+")}>
DISTE CLICK 
</button>

<button className='btn btn-primary'onClick={() => contador("-")} >
-DISTE CLICK 
</button>  

</>*/