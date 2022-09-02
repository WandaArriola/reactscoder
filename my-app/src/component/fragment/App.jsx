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



