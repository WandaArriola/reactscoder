import {React, useState} from 'react';
import './App.css';
import Boton from './Boton';
import Form from './Form';
import ItenListContainer from './ItenListContainer';
import NavBar from './NavBar';
import PokeContainer from '../PokeContainer';



function App ()  {
    return (
       
        <div className='App'>
            <NavBar/>
            <Form/>
            <Boton/>
            <ItenListContainer/>
            <PokeContainer/>
        </div>
            
    );
}

export default App;



