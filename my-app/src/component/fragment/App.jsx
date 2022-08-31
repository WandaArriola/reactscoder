import {React, useState} from 'react';

import NavBar from './NavBar';
import Boton from './boton';

const App = () => {

    const [cont, setCont ] = useState (0)

    function saludar () {
        console.log ("hola mundo")
    }
    
    return (
        <>
            <NavBar/>

            <p>

                contador: {cont}
            </p>

        <button className='"btn btn-secondary' onClick={() => setCont (cont + 1)}>
            +
        </button>
        
        <button className='"btn btn-primary'onClick={() => setCont (cont + 1)} >
            -
        </button>

        </>
    );
}

export default App;
